import React from 'react';
import Link from 'next/link'; 
import Image from 'next/image';
import bannerFooter from '@/assets/images/affiliates/banner-footer.png';
import logoPanel from '@/assets/images/affiliates/image.png';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      {/* Cuerpo del footer */}
      <footer className="psi-footer-body border-t border-purple-200 transition-colors">
        <div className="mx-auto max-w-7xl px-8 py-4 pb-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <Link
              href="https://www.medicapanamericana.com/es/?ref=psiqfly"
              target="_blank"
              rel="noopener noreferrer sponsored"
              aria-label="10% de descuento en Editorial Médica Panamericana"
              className="block w-48 [perspective:600px] group"
            >
              <div className="relative w-full [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateY(180deg)]"
                style={{ aspectRatio: '220/80' }}>
                {/* Anverso */}
                <div className="absolute inset-0 [backface-visibility:hidden]">
                  <Image src={bannerFooter} alt="10% descuento Panamericana" fill className="object-contain" />
                </div>
                {/* Reverso */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white flex items-center justify-center p-2">
                  <Image src={logoPanel} alt="Editorial Médica Panamericana" fill className="object-contain p-1" />
                </div>
              </div>
            </Link>

            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold">
              {/* CAMBIO CLAVE: Cambiar 'to' por 'href' */}
              <Link href="/legal"      className="psi-footer-link">Aviso legal</Link>
              <Link href="/privacidad" className="psi-footer-link">Privacidad</Link>
              <Link href="/cookies"    className="psi-footer-link">Cookies</Link>
              <Link href="/autora"     className="psi-footer-link">Autora</Link>
              <Link href="/contacto"   className="psi-footer-link">Contacto</Link>
            </nav>

          </div>
        </div>
      </footer>

      {/* Barra de copyright */}
      <div className="psi-footer-copyright fixed bottom-0 left-0 right-0 z-40 text-center py-2">
        <p className="text-[11px] text-indigo-600 font-medium">
          Recurso didáctico para el entrenamiento del razonamiento clínico y debiasing.
        </p>
        <p className="text-[11px] text-indigo-700 uppercase tracking-widest font-bold">
          © {year} PsiQFly® · Blanca De Uña Martín (ISEP, 2026)
        </p>
      </div>
    </>
  );
};