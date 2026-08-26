"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const { T, lang, toggleLang } = useLanguage();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (key) => (key === "/" ? pathname === "/" : pathname.startsWith(key));

  return (
    <>
      {/* Top strip — hidden on mobile */}
      <div className="hidden md:block bg-navy text-[#C9CED6]">
        <div className="max-w-page mx-auto px-10 h-[38px] flex items-center justify-between gap-6 text-[11.5px] font-sans tracking-wide">
          <span>35 Sanford St, Piso 1, Clifton, NJ 07011</span>
          <div className="flex items-center gap-5">
            <a href="tel:2018972072" className="text-white hover:text-gold-light transition-colors">
              201-897-2072
            </a>
            <button
              onClick={toggleLang}
              className="btn border border-white/30 text-white font-mono text-[10.5px] tracking-[0.12em] px-2.5 py-1.5 transition-colors hover:border-white/70"
            >
              {lang === "en" ? "ES" : "EN"}
            </button>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-line">
        <div className="max-w-page mx-auto px-6 md:px-10 h-[78px] flex items-center justify-between gap-8">
          <Link href="/" className="flex flex-col gap-1 group">
            <span className="font-serif font-semibold text-[19px] leading-none tracking-[0.16em] text-navy">
              SANTIOR
            </span>
            <span className="font-mono font-medium text-[8.5px] leading-none tracking-[0.26em] text-faint">
              GROUP LLC
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {T.nav.map((item) => (
              <Link
                key={item.key}
                href={item.key}
                className="relative font-sans font-medium text-[12.5px] pb-1 text-muted transition-colors hover:text-navy"
                style={{ color: isActive(item.key) ? "#14243D" : undefined }}
              >
                {item.label}
                {isActive(item.key) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 right-0 -bottom-[1px] h-[1px] bg-gold"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="btn bg-navy text-white font-sans font-semibold text-[12.5px] px-5 py-3.5 transition-transform hover:-translate-y-0.5 hover:bg-navy-light"
            >
              {T.ctaShort}
            </Link>
          </nav>

          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleLang}
              className="btn min-w-[44px] h-[44px] border border-line text-navy font-mono text-[10.5px] tracking-wide"
            >
              {lang === "en" ? "ES" : "EN"}
            </button>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menú"
              className="btn w-[44px] h-[44px] bg-navy text-white text-[15px] relative"
            >
              <motion.span
                animate={{ rotate: menuOpen ? 90 : 0, opacity: 1 }}
                transition={{ duration: 0.25 }}
                className="inline-block"
              >
                {menuOpen ? "\u2715" : "\u2630"}
              </motion.span>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden border-t border-line overflow-hidden flex flex-col px-4"
            >
              {T.nav.map((item, i) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.3 }}
                >
                  <Link
                    href={item.key}
                    onClick={() => setMenuOpen(false)}
                    className="block font-sans font-medium text-[15px] py-4 border-b border-[#F1EDE4]"
                    style={{ color: isActive(item.key) ? "#14243D" : "#5C6169" }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/contacto"
                onClick={() => setMenuOpen(false)}
                className="btn bg-navy text-white text-center font-sans font-semibold text-[14px] px-4 py-4 my-3.5"
              >
                {T.ctaShort}
              </Link>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
