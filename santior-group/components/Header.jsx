"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { IconMenu, IconClose } from "./Icons";

export default function Header() {
  const { T, lang, toggleLang } = useLanguage();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (key) => (key === "/" ? pathname === "/" : pathname.startsWith(key));

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-line">
      <div className="max-w-page mx-auto px-6 md:px-10 h-[84px] flex items-center justify-between gap-8">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo-icon.png"
            alt=""
            width={384}
            height={384}
            priority
            className="h-10 md:h-11 w-auto"
          />
          <div className="flex flex-col gap-1">
            <span className="font-serif font-semibold text-[19px] md:text-[21px] leading-none tracking-[0.14em] text-navy">
              SANTIOR
            </span>
            <span className="font-mono font-medium text-[9.5px] md:text-[10px] leading-none tracking-[0.28em] text-faint">
              GROUP LLC
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleLang}
            className="btn font-sans font-medium text-[13px] text-muted hover:text-navy transition-colors"
          >
            {lang === "en" ? "ES" : "EN"}
          </button>
          <span className="w-px h-5 bg-line" />
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menú"
            className="btn w-[46px] h-[46px] bg-navy text-white flex items-center justify-center hover:bg-navy-light transition-colors"
          >
            <motion.span
              animate={{ rotate: menuOpen ? 90 : 0 }}
              transition={{ duration: 0.25 }}
              className="inline-flex"
            >
              {menuOpen ? <IconClose className="w-5 h-5" /> : <IconMenu className="w-5 h-5" />}
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
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-line overflow-hidden bg-white"
          >
            <div className="max-w-page mx-auto px-6 md:px-10 py-2 flex flex-col md:flex-row md:flex-wrap md:items-center md:gap-1">
              {T.nav.map((item, i) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.03 * i, duration: 0.3 }}
                  className="md:flex-none"
                >
                  <Link
                    href={item.key}
                    onClick={() => setMenuOpen(false)}
                    className="block font-sans font-medium text-[15px] md:text-[13px] py-4 md:py-3 md:px-4 border-b md:border-b-0 border-[#F1EDE4]"
                    style={{ color: isActive(item.key) ? "#14243D" : "#5C6169" }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/contacto"
                onClick={() => setMenuOpen(false)}
                className="btn bg-navy text-white text-center font-sans font-semibold text-[13px] px-5 py-3.5 my-3.5 md:ml-3"
              >
                {T.ctaShort}
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
