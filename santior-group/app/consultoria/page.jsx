"use client";

import { useLanguage } from "@/context/LanguageContext";
import ServicePage from "@/components/ServicePage";

export default function ConsultoriaPage() {
  const { T } = useLanguage();
  return <ServicePage svc={T.svc.consultoria} />;
}
