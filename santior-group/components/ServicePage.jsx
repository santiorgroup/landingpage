"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Reveal, { staggerContainer, staggerItem } from "./Reveal";

export default function ServicePage({ svc }) {
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
            {svc.kicker}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 mb-3.5 max-w-[22ch] font-serif text-[28px] md:text-[42px] leading-[1.15] text-navy text-balance"
          >
            {svc.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="m-0 max-w-[54ch] font-sans text-[15px] leading-relaxed text-muted-2"
          >
            {svc.sub}
          </motion.p>
        </div>
      </section>

      <section>
        <div className="max-w-page mx-auto px-6 md:px-10 py-14 md:py-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-px bg-line border border-line grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          >
            {svc.blocks.map((c) => (
              <motion.div key={c.n} variants={staggerItem} className="bg-white p-6">
                <span className="font-mono font-medium text-[9.5px] tracking-[0.18em] text-gold">
                  {c.n}
                </span>
                <h3 className="mt-3.5 mb-2 font-serif font-semibold text-[17px] leading-tight text-navy">
                  {c.title}
                </h3>
                <p className="m-0 font-sans text-[13px] leading-relaxed text-muted">{c.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-cream border-t border-line">
        <div className="max-w-page mx-auto px-6 md:px-10 py-14 md:py-20">
          <Reveal>
            <h2 className="m-0 mb-6 font-serif text-[24px] md:text-[34px] leading-tight text-navy">
              {svc.galTitle}
            </h2>
          </Reveal>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
            {svc.gallery.map((g, i) => (
              <Reveal key={g.caption} delay={i * 0.08}>
                <div className="ph-img aspect-[3/2]">
                  <Image
                    src={g.img}
                    alt={g.caption}
                    width={700}
                    height={467}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-2.5 mb-0 font-sans text-[12.5px] leading-snug text-muted">
                  {g.caption}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy">
        <Reveal className="max-w-page mx-auto px-6 md:px-10 py-14 md:py-16 flex flex-wrap gap-6 items-center justify-between">
          <h3 className="m-0 max-w-[32ch] font-serif text-[22px] md:text-[26px] leading-snug text-white">
            {svc.ctaLine}
          </h3>
          <Link
            href="/contacto"
            className="btn bg-gold text-navy font-sans font-semibold text-[13px] px-6 py-4 transition-transform hover:-translate-y-0.5 hover:bg-gold-light"
          >
            {svc.cta}
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
