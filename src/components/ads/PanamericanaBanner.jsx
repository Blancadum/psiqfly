import Link from 'next/link';
import Image from 'next/image';
import banner from '@/assets/images/affiliates/desc-panamericana-med.webp';

const URL = 'https://www.medicapanamericana.com/es/?ref=psiqfly';

export const PanamericanaBanner = () => (
  <Link
    href={URL}
    target="_blank"
    rel="noopener noreferrer sponsored"
    className="block w-2/3 mx-auto hover:opacity-95 hover:shadow-lg transition-all"
    aria-label="10% de descuento en Editorial Médica Panamericana"
  >
    <Image
      src={banner}
      alt="10% de descuento en libros · Editorial Médica Panamericana · Código PSIQFLY"
      width={1200}
      height={630}
      className="w-full h-auto"
      priority
    />
  </Link>
);
