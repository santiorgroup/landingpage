"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Reveal, { staggerContainer, staggerItem } from "@/components/Reveal";

export default function InicioPage() {
  const { T } = useLanguage();

  return (
    <div>
      {/* HERO */}
      <section className="bg-cream border-b border-line overflow-hidden">
        <div className="max-w-page mx-auto px-6 md:px-10 py-14 md:py-20 grid gap-10 items-center grid-cols-1 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="flex items-center gap-2.5 mb-5"
            >
              <span className="w-8 h-px bg-gold" />
              <span className="font-mono font-medium text-[10px] tracking-[0.2em] text-[#8C7A4E]">
                {T.kicker}
              </span>
            </motion.div>
            <h1 className="m-0 mb-4 font-serif text-[30px] md:text-[46px] leading-[1.12] tracking-tight text-navy text-balance">
              {T.heroTitle}
            </h1>
            <p className="m-0 mb-7 max-w-[46ch] font-sans text-[15px] md:text-[16px] leading-relaxed text-muted-2 text-balance">
              {T.heroSub}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contacto"
                className="btn bg-navy text-white font-sans font-semibold text-[13px] px-6 py-4 transition-transform hover:-translate-y-0.5 hover:bg-navy-light"
              >
                {T.heroCta}
              </Link>
              <Link
                href="/eventos"
                className="btn bg-transparent border border-[#C9C3B6] text-navy font-sans font-semibold text-[13px] px-6 py-4 transition-colors hover:border-navy"
              >
                {T.heroCta2}
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="ph-img aspect-[4/3] min-h-[210px]"
          >
            <Image
              src={T.imgHero}
              alt="Equipo en sesión estratégica"
              width={1200}
              height={900}
              priority
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* QUESTIONS */}
      <section className="border-b border-line">
        <div className="max-w-page mx-auto px-6 md:px-10 py-14 md:py-20">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-px bg-line border border-line grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          >
            {T.questions.map((q) => (
              <motion.div
                key={q.n}
                variants={staggerItem}
                className="bg-white p-6 transition-colors hover:bg-cream-2"
              >
                <span className="font-mono font-medium text-[9.5px] tracking-[0.18em] text-gold">
                  {q.n}
                </span>
                <h3 className="mt-3 mb-2 font-serif font-semibold text-[17px] leading-tight text-navy">
                  {q.q}
                </h3>
                <p className="m-0 font-sans text-[13px] leading-relaxed text-muted">{q.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section>
        <div className="max-w-page mx-auto px-6 md:px-10 py-14 md:py-20">
          <Reveal>
            <h2 className="m-0 mb-2.5 font-serif text-[24px] md:text-[34px] leading-tight text-navy">
              {T.servTitle}
            </h2>
            <p className="m-0 mb-8 max-w-[58ch] font-sans text-[15px] leading-relaxed text-muted">
              {T.servSub}
            </p>
          </Reveal>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            {T.services.map((s, i) => (
              <Reveal key={s.key} delay={i * 0.1}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="border border-line flex flex-col h-full"
                >
                  <div className="ph-img aspect-video">
                    <Image
                      src={s.photo}
                      alt={s.title}
                      width={900}
                      height={506}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col gap-4 flex-1">
                    <h3 className="m-0 font-serif font-semibold text-[20px] leading-tight text-navy">
                      {s.title}
                    </h3>
                    <div className="flex flex-col gap-2">
                      {s.items.map((it) => (
                        <div key={it} className="flex gap-2.5 items-start">
                          <span className="w-1 h-1 mt-2 bg-gold flex-none" />
                          <span className="font-sans text-[13.5px] leading-snug text-muted-2">
                            {it}
                          </span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={s.key}
                      className="mt-auto font-sans font-semibold text-[12.5px] border-b border-gold pb-1.5 self-start"
                    >
                      {s.cta}
                    </Link>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="bg-cream border-t border-line">
        <div className="max-w-page mx-auto px-6 md:px-10 py-14 md:py-20">
          <Reveal>
            <h2 className="m-0 mb-7 font-serif text-[24px] md:text-[34px] leading-tight text-navy">
              {T.procTitle}
            </h2>
          </Reveal>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-6 grid-cols-2 md:grid-cols-5"
          >
            {T.steps.map((st) => (
              <motion.div key={st.n} variants={staggerItem} className="border-t border-navy pt-4">
                <span className="font-mono font-medium text-[9.5px] tracking-[0.18em] text-faint">
                  {st.n}
                </span>
                <h4 className="mt-2.5 mb-1.5 font-sans font-semibold text-[15px] text-navy">
                  {st.title}
                </h4>
                <p className="m-0 font-sans text-[12.5px] leading-relaxed text-muted">{st.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-navy">
        <Reveal className="max-w-page mx-auto px-6 md:px-10 py-14 md:py-16 flex flex-wrap gap-6 items-center justify-between">
          <h3 className="m-0 max-w-[32ch] font-serif text-[22px] md:text-[26px] leading-snug text-white">
            {T.finalCta}
          </h3>
          <Link
            href="/contacto"
            className="btn bg-gold text-navy font-sans font-semibold text-[13px] px-6 py-4 transition-transform hover:-translate-y-0.5 hover:bg-gold-light"
          >
            {T.heroCta}
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
