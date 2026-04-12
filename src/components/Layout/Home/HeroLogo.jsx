import logoHero from '@/assets/images/logo/psiqfly_whiteT.webp';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Sparkles } from './Sparkles';

export const HeroLogo = ({ scrolled }) => {
  return (
    <div className={`psi-hero-logo relative flex justify-center pt-4 pb-0 overflow-hidden select-none ${scrolled ? 'psi-hero-logo--hidden' : ''}`}>
      <Sparkles />
      <Link href="/" className="relative z-10">
        <Image
          src={logoHero} 
          alt="PsiQFly" 
          className="psi-hero-logo-img w-auto transition-transform duration-300 hover:scale-105"
        />
      </Link>
    </div>
  );
};

HeroLogo.propTypes = {
  scrolled: PropTypes.bool,
};