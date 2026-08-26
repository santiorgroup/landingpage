"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "./Reveal";

export default function Footer() {
  const { T } = useLanguage();

  return (
    <footer className="bg-navy-deep text-[#AEB6C0] border-t border-[#22314A]">
      <Reveal className="max-w-page mx-auto px-6 md:px-10 py-14 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/logo-icon-white.png"
              alt=""
              width={184}
              height={184}
              className="h-11 w-auto"
            />
            <div className="flex flex-col gap-1">
              <span className="font-serif font-semibold text-[17px] leading-none tracking-[0.14em] text-white">
                SANTIOR
              </span>
              <span className="font-mono font-medium text-[9px] leading-none tracking-[0.26em] text-[#AEB6C0]">
                GROUP LLC
              </span>
            </div>
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
            {T.fServicios}
          </h4>
          <div className="flex flex-col gap-2.5">
            {T.services.map((s) => (
              <Link
                key={s.key}
                href={s.key}
                className="font-sans text-[12.5px] text-[#AEB6C0] hover:text-white transition-colors"
              >
                {s.title}
              </Link>
            ))}
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
            {T.fContacto}
          </h4>
          <div className="flex flex-col gap-2.5 font-sans text-[12.5px] leading-relaxed">
            <a href="mailto:contacto@santiorgroup.com" className="hover:text-white transition-colors">
              contacto@santiorgroup.com
            </a>
            <a href="tel:2018972072" className="hover:text-white transition-colors">
              +1 (201) 897-2072
            </a>
            <span className="whitespace-pre-line">{T.fHoursBody}</span>
          </div>
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
