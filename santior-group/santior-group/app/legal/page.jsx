"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function LegalPage() {
  const { T } = useLanguage();
  const [openDoc, setOpenDoc] = useState(null);

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
            {T.pgLegal}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 mb-3.5 max-w-[22ch] font-serif text-[28px] md:text-[42px] leading-[1.15] text-navy text-balance"
          >
            {T.legalTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="m-0 max-w-[54ch] font-sans text-[15px] leading-relaxed text-muted-2"
          >
            {T.legalSub}
          </motion.p>
        </div>
      </section>

      <section>
        <div className="max-w-page mx-auto px-6 md:px-10 py-6 flex flex-col">
          {T.legalDocs.map((d, i) => {
            const open = openDoc === i;
            return (
              <div key={d.n} className="border-t border-line">
                <button
                  onClick={() => setOpenDoc(open ? null : i)}
                  className="btn text-left bg-transparent w-full py-5.5 flex gap-4 items-baseline justify-between"
                >
                  <span className="flex gap-3.5 items-baseline">
                    <span className="font-mono font-medium text-[9.5px] tracking-[0.18em] text-gold">
                      {d.n}
                    </span>
                    <span className="font-serif font-semibold text-[17px] md:text-[19px] leading-tight text-navy">
                      {d.title}
                    </span>
                  </span>
                  <motion.span
                    animate={{ rotate: open ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="font-sans text-[16px] text-faint"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="m-0 mb-5.5 max-w-[70ch] font-sans text-[14px] leading-relaxed text-muted-2">
                        {d.body}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
