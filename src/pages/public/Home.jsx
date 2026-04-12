"use client";
import React from "react";
import Link from "next/link";
import { useScroll } from "@/hooks/UI/useScroll";
import { HomeLayout } from "@/components/Layout/Home/HomeLayout";
import { HeroLogo } from "@/components/Layout/Home/HeroLogo";
import { HeroHome } from "@/components/Layout/Home/HeroHome";
import { FeaturesGrid } from "@/components/Layout/FeaturesGrid";
import { CTALoginRegister } from "@/components/blog/ui/CTALoginRegister";
import { NewsletterSection } from "@/components/Layout/NewsletterSection";

const AboutCTA = () => (
  <div className="max-w-3xl mx-auto px-6 pb-4 text-center">
    <p className="text-slate-500 dark:text-slate-400 text-base mb-4">
      ¿Quieres entender de dónde viene PsiQFly, quién lo ha creado y por qué?
    </p>
    {/* 2. CORRECCIÓN: En Next.js se usa 'href', no 'to' */}
    <Link href="/about" className="psi-btn-secondary inline-flex items-center gap-2">
      Conoce el proyecto <span className="text-[#634AE6]">→</span>
    </Link>
  </div>
);

// 3. RECOMENDACIÓN: Usa 'export default' para la página principal
export default function Home() {
  const scrolled = useScroll(60);

  return (
    <HomeLayout scrolled={scrolled}>
      <HeroLogo scrolled={scrolled} />
      <HeroHome />
      <FeaturesGrid />
      <AboutCTA />
      <CTALoginRegister />
      <div className="max-w-3xl mx-auto px-6 pb-16">
        <NewsletterSection />
      </div>
    </HomeLayout>
  );
}