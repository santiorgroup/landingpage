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
    const verifyData = await verifyRes.json();

    if (!verifyData.success) {
      return NextResponse.json(
        { success: false, message: "captcha-failed" },
        { status: 400 }
      );
    }

    formData.delete("g-recaptcha-response");
    formData.set("access_key", WEB3FORMS_ACCESS_KEY);

    const web3Res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const web3Data = await web3Res.json();

    return NextResponse.json(web3Data, { status: web3Res.status });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "server-error" },
      { status: 500 }
    );
  }
}
