"use client";
import { useState, useEffect, useMemo } from 'react'; // Usamos useMemo por eficiencia
import PropTypes from 'prop-types';
import { Quote, X, Copy, Check } from 'lucide-react';

// --- CONSTANTES (Fuera del componente para no re-crearlas) ---
const MONTHS = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
const MONTHS_ABBR = ['ene.','feb.','mar.','abr.','may.','jun.','jul.','ago.','sep.','oct.','nov.','dic.'];

const parseDate = (iso) => {
  const d = new Date(iso);
  return { day: d.getDate(), month: d.getMonth(), year: d.getFullYear() };
};

const buildCitations = (post, url) => {
  if (!post || !url) return null;
  const pub = parseDate(post.createdAt);
  const upd = parseDate(post.updatedAt);
  const today = new Date();
  const acc = { day: today.getDate(), month: today.getMonth(), year: today.getFullYear() };

  return {
    apa: `De Uña Martín, B. (${pub.year}, ${pub.day} de ${MONTHS[pub.month]}). ${post.title}. PsiQFly. ${url}\n[Actualizado el ${upd.day} de ${MONTHS[upd.month]} de ${upd.year}]`,
    vancouver: `De Uña Martín B. ${post.title} [Internet]. Madrid: PsiQFly; ${pub.year} [actualizado ${upd.day} ${MONTHS_ABBR[upd.month]} ${upd.year}; citado ${acc.day} ${MONTHS_ABBR[acc.month]} ${acc.year}]. Disponible en: ${url}`,
    mla: `De Uña Martín, Blanca. "${post.title}." PsiQFly, ${pub.day} ${MONTHS_ABBR[pub.month]} ${pub.year}, ${url.replace(/^https?:\/\//, '')}. Consultado el ${acc.day} ${MONTHS_ABBR[acc.month]} ${acc.year}.`,
    harvard: `De Uña Martín, B. (${pub.year}) '${post.title}', PsiQFly, ${pub.day} de ${MONTHS[pub.month]}. Disponible en: ${url} (Accedido: ${acc.day} de ${MONTHS[acc.month]} de ${acc.year}).`,
  };
};

const FORMATS = [
  { id: 'apa',       label: 'APA 7ª',    scope: 'Psicología · Ciencias sociales · Educación', badge: 'Recomendado' },
  { id: 'vancouver', label: 'Vancouver', scope: 'Medicina · Nutrición · Salud' },
  { id: 'mla',       label: 'MLA 9ª',    scope: 'Humanidades · Literatura' },
  { id: 'harvard',   label: 'Harvard',   scope: 'Economía · Ciencias de la salud (UK)' },
];

export const CitationBox = ({ post }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('apa');
  const [copied, setCopied] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  // useMemo es como un "caché": solo recalcula la cita si el post o el estado montado cambian
  const citations = useMemo(() => {
    if (!isMounted || typeof globalThis.window === 'undefined') return null;
    const url = `${globalThis.window.location.origin}/blog/${post.categorySlug}/${post.slug}`;
    return buildCitations(post, url);
  }, [post, isMounted]);

  const handleCopy = () => {
    if (!citations) return;
    navigator.clipboard.writeText(citations[active]).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // No renderizamos el modal si no estamos en el cliente
  if (!isMounted) return null;

  return (
    <div className="my-8">
      <button onClick={() => setOpen(true)} className="psi-citation-trigger">
        <Quote size={13} className="mr-2" />
        Citar este artículo
      </button>

      {open && (
        <div 
          className="psi-citation-overlay" 
          onClick={() => setOpen(false)}
        >
          <div 
            className="psi-citation-modal" 
            onClick={e => e.stopPropagation()} 
            role="dialog"
          >
            <div className="psi-citation-modal-header">
              <span className="psi-citation-modal-title">Generador de Citas Académicas</span>
              <button onClick={() => setOpen(false)} className="psi-citation-close">
                <X size={18} />
              </button>
            </div>

            <div className="psi-citation-tabs">
              {FORMATS.map(f => (
                <button
                  key={f.id}
                  onClick={() => { setActive(f.id); setCopied(false); }}
                  className={`psi-citation-tab ${active === f.id ? 'psi-citation-tab--active' : ''}`}
                >
                  {f.label}
                  {f.badge && <span className="psi-citation-badge ml-1">{f.badge}</span>}
                </button>
              ))}
            </div>

            <p className="psi-citation-scope">
              Ámbito: {FORMATS.find(f => f.id === active).scope}
            </p>

            <div className="psi-citation-text-wrapper">
              <div className="psi-citation-text">
                {citations ? citations[active] : 'Generando citación académica...'}
              </div>
              <button 
                onClick={handleCopy} 
                className="psi-citation-copy-btn" 
                disabled={!citations}
              >
                {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                <span className="ml-1">{copied ? 'Copiado' : 'Copiar'}</span>
              </button>
            </div>

            <p className="psi-citation-note">
              Tip: Revisa que el título de la fuente <strong>(PsiQFly)</strong> aparezca en cursiva en tu documento final según la normativa APA/MLA.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

CitationBox.propTypes = {
  post: PropTypes.shape({
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    categorySlug: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
};