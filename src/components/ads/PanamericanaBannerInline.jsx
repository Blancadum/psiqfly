import Link from 'next/link';

const URL = 'https://www.medicapanamericana.com/es/?ref=psiqfly';

export const PanamericanaBannerInline = () => (
  <Link
    href={URL}
    target="_blank"
    rel="noopener noreferrer sponsored"
    className="group flex items-center justify-between gap-3 w-full rounded-xl border border-red-100 bg-gradient-to-r from-red-50 via-white to-white px-3 py-2 hover:border-red-200 hover:shadow-md transition-all my-6"
  >
    <div className="flex items-center gap-2 min-w-0">
      <span className="text-base shrink-0">📚</span>
      <div className="min-w-0">
        <p className="text-[9px] font-black uppercase tracking-widest text-red-400 mb-0.5">
          Oferta exclusiva · Editorial Médica Panamericana
        </p>
        <p className="text-xs font-bold text-slate-800 leading-snug">
          10% de descuento · código <span className="text-red-400">PSIQFLY</span>
        </p>
      </div>
    </div>
    <span className="shrink-0 text-[10px] font-bold text-red-400 group-hover:translate-x-0.5 transition-transform whitespace-nowrap">
      Ver →
    </span>
  </Link>
);
