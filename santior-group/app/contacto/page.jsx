"use client";

import { useState, useRef } from "react";
import Script from "next/script";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "@/components/Reveal";

// Public site key — safe to expose in the browser. Set in Vercel env vars as
// NEXT_PUBLIC_RECAPTCHA_SITE_KEY (the matching secret key stays server-side,
// in app/api/contact/route.js).
const RECAPTCHA_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "TU_SITE_KEY_AQUI";

export default function ContactoPage() {
  const { T } = useLanguage();
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error | captcha
  const recaptchaLoaded = useRef(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const token =
      typeof window !== "undefined" &&
      window.grecaptcha &&
      window.grecaptcha.getResponse();

    if (!token) {
      setStatus("captcha");
      return;
    }

    setStatus("sending");
    const formData = new FormData(e.target);
    formData.set("subject", "Nuevo mensaje de contacto - Santior Group");
    formData.set("g-recaptcha-response", token);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (res.status === 200 && data.success) {
        setStatus("sent");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      if (window.grecaptcha) window.grecaptcha.reset();
    }
  }

  return (
    <div>
      <section className="bg-navy">
        <div className="max-w-page mx-auto px-6 md:px-10 py-14 md:py-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono font-medium text-[10px] tracking-[0.22em] text-gold-light"
          >
            {T.pgContacto}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 mb-0 max-w-[24ch] font-serif text-[28px] md:text-[42px] leading-[1.15] text-white text-balance"
          >
            {T.contactTitle}
          </motion.h1>
        </div>
      </section>

      <section>
        <div className="max-w-page mx-auto px-6 md:px-10 py-14 md:py-20 grid gap-11 items-start grid-cols-1 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-5.5">
            <div className="flex flex-col gap-3.5">
              {T.contactRows.map((c) => (
                <div
                  key={c.k}
                  className="grid grid-cols-[104px_1fr] gap-3.5 pb-3.5 border-b border-[#EDE8DE]"
                >
                  <span className="font-mono font-medium text-[9.5px] tracking-[0.14em] text-faint pt-0.5">
                    {c.k}
                  </span>
                  <span className="font-sans text-[14px] leading-relaxed text-ink">{c.v}</span>
                </div>
              ))}
            </div>

            <div className="w-full max-w-[600px] my-5">
              <p className="mb-2.5 font-sans text-[13px] text-muted">
                35 Sanford St, Piso 1, Clifton, NJ 07011
              </p>
              <iframe
                title="Ubicación Santior Group LLC"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.847585094246!2d-74.15340152342085!3d40.87522597136979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2feb5f82c0b45%3A0x6b86fb04c1aa5719!2s35%20Sanford%20St%2C%20Clifton%2C%20NJ%2007011!5e0!3m2!1ses!2s!4v1700000000000!5m2!1ses!2s"
                width="100%"
                height="350"
                style={{ border: 0, borderRadius: 8 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Script src="https://www.google.com/recaptcha/api.js" strategy="afterInteractive" />
            <form
              onSubmit={handleSubmit}
              className="border border-line p-7 flex flex-col gap-4"
            >
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

              <h2 className="m-0 font-serif font-semibold text-[20px] leading-tight text-navy">
                {T.formTitle}
              </h2>

              {T.formFields.map((f) => (
                <label key={f.name} className="flex flex-col gap-1.5">
                  <span className="font-sans font-medium text-[11px] tracking-[0.06em] uppercase text-muted">
                    {f.label}
                  </span>
                  <input
                    type={f.type}
                    name={f.name}
                    placeholder={f.ph}
                    required
                    className="font-sans text-[14px] text-ink px-3 py-3.5 min-h-[48px] border border-[#DAD4C7] bg-cream-2 outline-none transition-colors focus:border-navy"
                  />
                </label>
              ))}

              <label className="flex flex-col gap-1.5">
                <span className="font-sans font-medium text-[11px] tracking-[0.06em] uppercase text-muted">
                  {T.fServicio}
                </span>
                <select
                  name="service"
                  className="font-sans text-[14px] text-ink px-3 py-3.5 min-h-[48px] border border-[#DAD4C7] bg-cream-2 outline-none transition-colors focus:border-navy"
                >
                  {T.serviceOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="font-sans font-medium text-[11px] tracking-[0.06em] uppercase text-muted">
                  {T.fMensaje}
                </span>
                <textarea
                  name="message"
                  rows={4}
                  placeholder={T.fMensajePh}
                  required
                  className="font-sans text-[14px] leading-relaxed text-ink p-3 border border-[#DAD4C7] bg-cream-2 outline-none resize-y transition-colors focus:border-navy"
                />
              </label>

              <label className="flex gap-2.5 items-start cursor-pointer">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  className="w-[18px] h-[18px] mt-0.5 accent-navy flex-none"
                />
                <span className="font-sans text-[12.5px] leading-relaxed text-muted">
                  {T.fConsent}
                </span>
              </label>

              <div className="g-recaptcha" data-sitekey={RECAPTCHA_SITE_KEY} />

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={status !== "sending" ? { y: -2 } : {}}
                whileTap={status !== "sending" ? { scale: 0.98 } : {}}
                className="btn bg-navy text-white font-sans font-semibold text-[13px] px-5 py-4 min-h-[52px] disabled:opacity-70"
              >
                {status === "sending" ? T.fSending : T.fSend}
              </motion.button>

              <AnimatePresence mode="wait">
                {status === "sent" && (
                  <motion.p
                    key="sent"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="m-0 font-sans text-[12.5px] leading-relaxed text-[#8C7A4E]"
                  >
                    {T.fSent}
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    key="error"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="m-0 font-sans text-[12.5px] leading-relaxed text-red-600"
                  >
                    {T.fError}
                  </motion.p>
                )}
                {status === "captcha" && (
                  <motion.p
                    key="captcha"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="m-0 font-sans text-[12.5px] leading-relaxed text-red-600"
                  >
                    {T.fCaptchaError}
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
