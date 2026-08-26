import { NextResponse } from "next/server";

// Set this in Vercel: Project Settings → Environment Variables.
// Never expose the Web3Forms access key or the reCAPTCHA secret key to the browser.
const WEB3FORMS_ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY || "TU_ACCESS_KEY_AQUI";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const token = formData.get("g-recaptcha-response");

    if (!token) {
      return NextResponse.json(
        { success: false, message: "missing-captcha" },
        { status: 400 }
      );
    }

    const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY || "",
        response: token,
      }),
    });
    const verifyData = await verifyRes.json().catch(() => null);

    if (!verifyData) {
      console.error("recaptcha-verify: non-JSON response", verifyRes.status);
      return NextResponse.json(
        { success: false, message: "captcha-verify-bad-response" },
        { status: 502 }
      );
    }
    if (!verifyData.success) {
      console.error("recaptcha-verify failed:", verifyData["error-codes"]);
      return NextResponse.json(
        { success: false, message: "captcha-failed", errors: verifyData["error-codes"] },
        { status: 400 }
      );
    }

    formData.delete("g-recaptcha-response");

    const payload = { access_key: WEB3FORMS_ACCESS_KEY };
    for (const [key, value] of formData.entries()) {
      payload[key] = value;
    }

    const web3Res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });
    const web3Text = await web3Res.text();
    let web3Data = null;
    try {
      web3Data = JSON.parse(web3Text);
    } catch {
      console.error("web3forms: non-JSON response", web3Res.status, web3Text.slice(0, 300));
    }

    if (!web3Data) {
      return NextResponse.json(
        { success: false, message: "web3forms-bad-response" },
        { status: 502 }
      );
    }
    if (!web3Data.success) {
      console.error("web3forms failed:", web3Res.status, web3Data.message);
    }

    return NextResponse.json(web3Data, { status: web3Res.status });
  } catch (err) {
    console.error("contact route exception:", err);
    return NextResponse.json(
      { success: false, message: "server-error" },
      { status: 500 }
    );
  }
}
