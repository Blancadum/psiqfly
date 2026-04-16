import Link from 'next/link';

const URL = 'https://www.medicapanamericana.com/es/?ref=psiqfly';

export const PanamericanaBannerInline = () => (
  <Link
    href={URL}
    target="_blank"
    rel="noopener noreferrer sponsored"
    className="psi-pana-inline-banner group"
  >
    <div className="psi-pana-inline-content">
      <span className="text-2xl shrink-0">📚</span>
      <div className="min-w-0">
        <p className="psi-pana-inline-label">Oferta exclusiva · Editorial Médica Panamericana</p>
        <p className="psi-pana-inline-text">
          10% de descuento · código <span className="psi-pana-inline-code">PSIQFLY</span>
        </p>
      </div>
    </div>
    <span className="psi-pana-inline-arrow">Ver →</span>
  </Link>
);
