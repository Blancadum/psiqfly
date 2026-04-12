'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import banner from '@/assets/images/affiliates/panamericana-descuento.jpg';
import logoCopy from '@/assets/images/affiliates/image copy.png';

const URL = 'https://www.medicapanamericana.com/es/?ref=psiqfly';

export const PanamericanaFloat = () => {
  const [closed, setClosed] = useState(false);

  if (closed) return null;

  return (
    <div className="fixed top-28 right-5 z-50 flex flex-col items-end gap-1">
      <button
        onClick={() => setClosed(true)}
        className="self-end w-5 h-5 rounded-full bg-slate-600/70 hover:bg-slate-800 text-white text-[10px] font-bold flex items-center justify-center transition-colors"
        aria-label="Cerrar"
      >
        ✕
      </button>
      <Link
        href={URL}
        target="_blank"
        rel="noopener noreferrer sponsored"
        aria-label="10% de descuento en Editorial Médica Panamericana"
        className="block w-32 shadow-2xl [perspective:600px] group"
      >
        <div className="relative w-full [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateY(180deg)]"
          style={{ aspectRatio: '1/1' }}>
          {/* Anverso */}
          <div className="absolute inset-0 [backface-visibility:hidden]">
            <Image src={banner} alt="10% descuento Panamericana" fill className="object-cover" />
          </div>
          {/* Reverso */}
          <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white flex items-center justify-center p-2">
            <Image src={logoCopy} alt="Editorial Médica Panamericana" fill className="object-contain p-2" />
          </div>
        </div>
      </Link>
    </div>
  );
};
