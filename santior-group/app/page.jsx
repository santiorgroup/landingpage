"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Reveal, { staggerContainer, staggerItem } from "@/components/Reveal";
import { ICONS, IconArrowRight, IconMessage } from "@/components/Icons";

export default function InicioPage() {
  const { T } = useLanguage();

  return (
    <div>
      {/* HERO */}
      <section className="relative bg-navy overflow-hidden">
        <div className="max-w-page mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="px-6 md:px-10 py-14 md:py-20 lg:py-24 flex flex-col justify-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="flex items-center gap-2.5 mb-5"
            >
              <span className="w-8 h-px bg-gold" />
              <span className="font-mono font-medium text-[10px] tracking-[0.2em] text-gold-light">
                {T.kicker}
              </span>
            </motion.div>
            <h1 className="m-0 mb-5 font-serif text-[30px] md:text-[44px] leading-[1.15] tracking-tight text-white text-balance">
              {T.heroLead}{" "}
              <span className="italic text-gold-light">{T.heroAccent}</span>
            </h1>
            <p className="m-0 mb-8 max-w-[46ch] font-sans text-[15px] md:text-[16px] leading-relaxed text-[#C9CED6] text-balance">
              {T.heroSub}
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                href="/contacto"
                className="btn bg-gold text-navy font-sans font-semibold text-[13px] px-6 py-4 inline-flex items-center gap-2 transition-transform hover:-translate-y-0.5 hover:bg-gold-light"
              >
                {T.heroCta} <IconArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="flex flex-wrap gap-x-8 gap-y-4"
            >
              {T.heroStats.map((s) => {
                const Icon = ICONS[s.icon];
                return (
                  <motion.div key={s.label} variants={staggerItem} className="flex items-center gap-2.5">
                    {Icon && <Icon className="w-5 h-5 text-gold-light" />}
                    <span className="font-sans text-[12.5px] text-[#C9CED6]">{s.label}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-h-[280px] lg:min-h-full"
          >
            <Image
              src={T.imgHero}
              alt="Sala de juntas ejecutiva"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-navy lg:via-navy/10 lg:to-transparent" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:absolute lg:bottom-10 lg:right-10 mx-6 md:mx-10 lg:mx-0 -mt-8 lg:mt-0 mb-8 lg:mb-0 max-w-[380px] bg-white shadow-xl p-5 flex items-center gap-4"
        >
          <span className="w-11 h-11 flex-none rounded-full bg-gold/15 flex items-center justify-center text-gold">
            <IconMessage className="w-5 h-5" />
          </span>
          <p className="m-0 font-sans text-[14px] leading-snug text-ink">
            {T.badgeLead} <span className="italic text-gold font-medium">{T.badgeAccent}</span>
          </p>
        </motion.div>
      </section>

      {/* WHAT WE DO */}
      <section>
        <div className="max-w-page mx-auto px-6 md:px-10 py-16 md:py-20">
          <Reveal className="text-center max-w-[60ch] mx-auto mb-10">
            <h2 className="m-0 mb-3 font-serif text-[26px] md:text-[34px] leading-tight text-navy">
              {T.whatWeDoTitle}
            </h2>
            <p className="m-0 font-sans text-[15px] leading-relaxed text-muted">
              {T.whatWeDoSub}
            </p>
          </Reveal>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          >
            {T.whatWeDo.map((w) => {
              const Icon = ICONS[w.icon];
              return (
                <motion.div
                  key={w.title}
                  variants={staggerItem}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="border border-line p-6 text-center flex flex-col items-center"
                >
                  <span className="w-14 h-14 rounded-full bg-cream flex items-center justify-center text-navy mb-4">
                    {Icon && <Icon className="w-6 h-6" />}
                  </span>
                  <h3 className="m-0 mb-2 font-sans font-semibold text-[15px] text-navy">
                    {w.title}
                  </h3>
                  <p className="m-0 font-sans text-[13px] leading-relaxed text-muted">{w.body}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-cream border-y border-line">
        <div className="max-w-page mx-auto px-6 md:px-10 py-16 md:py-20">
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
                  className="border border-line bg-white flex flex-col h-full"
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
      <section>
        <div className="max-w-page mx-auto px-6 md:px-10 py-16 md:py-20">
          <Reveal className="text-center max-w-[50ch] mx-auto mb-4">
            <h2 className="m-0 font-serif text-[24px] md:text-[34px] leading-tight text-navy">
              {T.procTitle}
            </h2>
            <span className="inline-block w-10 h-px bg-gold mt-4" />
          </Reveal>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative mt-10 grid gap-8 grid-cols-2 md:grid-cols-5"
          >
            <span className="hidden md:block absolute top-7 left-[10%] right-[10%] border-t border-dashed border-gold/50" />
            {T.steps.map((st) => {
              const Icon = ICONS[st.icon];
              return (
                <motion.div key={st.n} variants={staggerItem} className="relative flex flex-col items-center text-center">
                  <span className="relative z-10 w-14 h-14 rounded-full bg-white border border-line shadow-sm flex items-center justify-center text-navy mb-4">
                    {Icon && <Icon className="w-6 h-6" />}
                  </span>
                  <span className="font-mono font-medium text-[9.5px] tracking-[0.18em] text-gold">
                    {st.n}
                  </span>
                  <h4 className="mt-2 mb-1.5 font-sans font-semibold text-[14px] text-navy">
                    {st.title}
                  </h4>
                  <p className="m-0 font-sans text-[12px] leading-relaxed text-muted">{st.body}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-cream border-y border-line">
        <Reveal className="max-w-page mx-auto px-6 md:px-10 py-14 md:py-16 text-center">
          <h2 className="m-0 mb-2 font-serif text-[22px] md:text-[28px] leading-snug text-navy max-w-[36ch] mx-auto">
            {T.trustTitle}
          </h2>
          <p className="m-0 font-sans text-[13.5px] text-muted">{T.trustNote}</p>
        </Reveal>
      </section>

      {/* FINAL CTA */}
      <section className="bg-navy">
        <Reveal className="max-w-page mx-auto px-6 md:px-10 py-14 md:py-16 flex flex-wrap gap-6 items-center justify-between">
          <div className="flex items-center gap-4 max-w-[34ch]">
            <span className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center text-gold-light flex-none">
              <IconMessage className="w-5 h-5" />
            </span>
            <h3 className="m-0 font-serif text-[20px] md:text-[24px] leading-snug text-white">
              {T.ctaBannerNote}
            </h3>
          </div>
          <Link
            href="/contacto"
            className="btn bg-gold text-navy font-sans font-semibold text-[13px] px-6 py-4 inline-flex items-center gap-2 transition-transform hover:-translate-y-0.5 hover:bg-gold-light"
          >
            {T.heroCta} <IconArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
