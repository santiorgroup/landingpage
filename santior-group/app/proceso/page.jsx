"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "@/components/Reveal";

export default function ProcesoPage() {
  const { T } = useLanguage();

  return (
    <div>
      <section className="bg-cream border-b border-line">
        <div className="max-w-page mx-auto px-6 md:px-10 py-14 md:py-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono font-medium text-[10px] tracking-[0.22em] text-[#8C7A4E]"
          >
            {T.pgProceso}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 mb-3.5 max-w-[22ch] font-serif text-[28px] md:text-[42px] leading-[1.15] text-navy text-balance"
          >
            {T.procPageTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="m-0 max-w-[54ch] font-sans text-[15px] leading-relaxed text-muted-2"
          >
            {T.procPageSub}
          </motion.p>
        </div>
      </section>

      <section>
        <div className="max-w-page mx-auto px-6 md:px-10 py-4 md:py-6 flex flex-col">
          {T.procRows.map((r, i) => (
            <Reveal key={r.n} delay={i * 0.05}>
              <div className="grid gap-5 grid-cols-1 md:grid-cols-3 py-6 md:py-7 border-t border-line">
                <div>
                  <span className="font-mono font-medium text-[9.5px] tracking-[0.18em] text-gold">
                    {r.n}
                  </span>
                  <h3 className="mt-3 mb-0 font-serif font-semibold text-[20px] leading-tight text-navy">
                    {r.title}
                  </h3>
                </div>
                <p className="m-0 font-sans text-[14px] leading-relaxed text-muted-2">{r.body}</p>
                <div className="flex flex-col gap-2">
                  {r.out.map((o) => (
                    <span
                      key={o}
                      className="font-sans text-[12.5px] leading-snug text-muted border-l-2 border-[#E0DACD] pl-2.5"
                    >
                      {o}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream border-t border-line">
        <div className="max-w-page mx-auto px-6 md:px-10 py-14 md:py-20">
          <Reveal>
            <h2 className="m-0 mb-5.5 font-serif text-[21px] md:text-[26px] leading-tight text-navy">
              {T.stdTitle}
            </h2>
          </Reveal>
          <div className="grid gap-3 md:gap-x-7 md:gap-y-3 grid-cols-1 md:grid-cols-2">
            {T.standards.map((s, i) => (
              <Reveal key={s} delay={i * 0.04} y={10}>
                <div className="flex gap-2.5 items-start">
                  <span className="font-mono font-medium text-[12px] text-gold">/</span>
                  <span className="font-sans text-[13.5px] leading-relaxed text-[#3C4550]">
                    {s}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
