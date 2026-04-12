import Link from 'next/link';

const URL = 'https://www.medicapanamericana.com/es/?ref=psiqfly';

export const PanamericanaBannerInline = () => (
  <Link
    href={URL}
    target="_blank"
    rel="noopener noreferrer sponsored"
    className="group flex items-center justify-between gap-4 w-full rounded-2xl border border-indigo-100 px-5 py-4 hover:shadow-md transition-all my-6"
    style={{ background: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 40%, #fdf4ff 100%)' }}
  >
    <div className="flex items-center gap-3 min-w-0">
      <span className="text-2xl shrink-0">📚</span>
      <div className="min-w-0">
        <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: '#634AE6' }}>
          Oferta exclusiva · Editorial Médica Panamericana
        </p>
        <p className="text-sm font-bold text-slate-800 leading-snug">
          10% de descuento · código <span style={{ color: '#E245B6' }} className="font-black">PSIQFLY</span>
        </p>
      </div>
    </div>
    <span className="shrink-0 text-xs font-black group-hover:translate-x-0.5 transition-transform whitespace-nowrap" style={{ color: '#634AE6' }}>
      Ver →
    </span>
  </Link>
);
