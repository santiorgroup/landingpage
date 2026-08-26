"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "./Reveal";

export default function Footer() {
  const { T } = useLanguage();

  return (
    <footer className="bg-navy-deep text-[#AEB6C0] border-t border-[#22314A]">
      <Reveal className="max-w-page mx-auto px-6 md:px-10 py-14 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex flex-col gap-1 mb-4">
            <span className="font-serif font-semibold text-[17px] leading-none tracking-[0.16em] text-white">
              SANTIOR
            </span>
            <span className="font-mono font-medium text-[8.5px] leading-none tracking-[0.26em] text-[#8792A0]">
              GROUP LLC
            </span>
          </div>
          <p className="font-sans text-[12.5px] leading-relaxed">
            35 Sanford St, Piso 1
            <br />
            Clifton, NJ 07011
            <br />
            201-897-2072
          </p>
        </div>

        <div>
          <h4 className="font-mono font-medium text-[9.5px] tracking-[0.18em] text-gold-light mb-3.5">
            {T.fNav}
          </h4>
          <div className="flex flex-col gap-2.5">
            {T.nav.map((item) => (
              <Link
                key={item.key}
                href={item.key}
                className="font-sans text-[12.5px] text-[#AEB6C0] hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-mono font-medium text-[9.5px] tracking-[0.18em] text-gold-light mb-3.5">
            {T.fLegalCol}
          </h4>
          <div className="flex flex-col gap-2.5">
            {T.legalLinks.map((l) => (
              <Link
                key={l}
                href="/legal"
                className="font-sans text-[12.5px] text-[#AEB6C0] hover:text-white transition-colors"
              >
                {l}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-mono font-medium text-[9.5px] tracking-[0.18em] text-gold-light mb-3.5">
            {T.fHours}
          </h4>
          <p className="font-sans text-[12.5px] leading-relaxed whitespace-pre-line">
            {T.fHoursBody}
          </p>
        </div>
      </Reveal>

      <div className="border-t border-[#22314A]">
        <div className="max-w-page mx-auto px-6 md:px-10 py-5 flex flex-wrap gap-3 justify-between font-sans text-[11.5px] text-[#7E8896]">
          <span>© 2026 SANTIOR GROUP LLC. {T.rights}</span>
          <span>Business Consulting &amp; Corporate Event Management</span>
        </div>
      </div>
    </footer>
  );
}
