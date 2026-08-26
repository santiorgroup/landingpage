"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Reveal, { staggerContainer, staggerItem } from "@/components/Reveal";
import { ICONS } from "@/components/Icons";

export default function NosotrosPage() {
  const { T } = useLanguage();

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
            {T.pgNosotros}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 mb-0 max-w-[24ch] font-serif text-[28px] md:text-[42px] leading-[1.15] text-white text-balance"
          >
            {T.aboutTitle}
          </motion.h1>
        </div>
      </section>

      <section>
        <div className="max-w-page mx-auto px-6 md:px-10 py-14 md:py-20 grid gap-10 items-start grid-cols-1 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="m-0 mb-6 font-sans text-[16px] md:text-[18px] leading-relaxed text-ink-2 text-balance">
                {T.aboutCopy}
              </p>
            </Reveal>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-px bg-line border border-line grid-cols-1 sm:grid-cols-2"
            >
              {T.aboutFacts.map((f) => {
                const Icon = ICONS[f.icon];
                return (
                  <motion.div key={f.title} variants={staggerItem} className="bg-white p-5">
                    {Icon && <Icon className="w-5 h-5 text-gold mb-2.5" />}
                    <h4 className="m-0 mb-1.5 font-sans font-semibold text-[13px] text-navy">
                      {f.title}
                    </h4>
                    <p className="m-0 font-sans text-[12.5px] leading-relaxed text-muted">
                      {f.body}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="ph-img aspect-[4/5] min-h-[240px]"
          >
            <Image
              src={T.imgAbout}
              alt="Liderazgo institucional"
              width={900}
              height={1125}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
