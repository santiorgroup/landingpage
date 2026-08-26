"use client";

import { useLanguage } from "@/context/LanguageContext";
import ServicePage from "@/components/ServicePage";

export default function EventosPage() {
  const { T } = useLanguage();
  return <ServicePage svc={T.svc.eventos} />;
}
