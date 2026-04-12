import Image from 'next/image';
import PropTypes from 'prop-types';
import logo from '@/assets/images/logo/psiqfly_whiteT.webp';

export const PsiqflyLogo = ({ className = 'h-14 w-auto object-contain opacity-90' }) => (
  <Image src={logo} alt="PsiQFly" className={className} width={160} height={56} />
);

PsiqflyLogo.propTypes = {
  className: PropTypes.string,
};
