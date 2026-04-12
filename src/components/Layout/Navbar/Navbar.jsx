import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/logo/psiqfly_whiteT.webp';

export const Navbar = () => {
  return (
    <nav className="psi-nav-glass">
      <div className="psi-nav-container">

        <Link href="/" className="psi-nav-logo-link">
          <Image src={logo} alt="PsiQFly" className="h-10 w-auto" width={120} height={40} />
        </Link>

        <div className="psi-nav-menu">
          <Link href="/about" className="psi-nav-link">Sobre PsiQFly</Link>
          <Link href="/blog" className="psi-nav-link">Blog</Link>
          <Link href="/autora" className="psi-nav-link">Autora</Link>
          <Link href="/contacto" className="psi-nav-link">Contacto</Link>
          <Link
            href="/blog"
            aria-label="Buscar"
            className="text-[#4c1d95] hover:text-[#634AE6] transition-colors ml-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="22" y2="22" />
            </svg>
          </Link>
          <Link href="/login" className="psi-btn-primary text-xs ml-4">Acceso</Link>
        </div>

      </div>
    </nav>
  );
};
