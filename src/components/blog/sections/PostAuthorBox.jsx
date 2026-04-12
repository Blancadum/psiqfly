import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import avatar from '@/assets/images/perfil/blanca.webp';

const formatDate = (iso) => {
  const d = new Date(iso);
  return d.toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })
    + ' · '
    + d.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
};

const formatDateShort = (iso) => {
  const d = new Date(iso);
  return d.toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' });
};

export const PostAuthorBox = ({ post }) => (
  <div className="psi-post-author-box">
    <div className="psi-post-author-left">
      <Image src={avatar} alt="Blanca de Uña Martín" className="psi-post-author-avatar" />
      <div>
        <Link href="/autora" className="psi-post-author-name hover:text-indigo-600 transition-colors">Blanca de Uña Martín</Link>
        <p className="psi-post-author-role">Psicóloga Clínica · PsiQFly</p>
        <p className="psi-post-author-role">Desarrollo Web Fullstack · Didáctica · Psicología</p>
      </div>
    </div>
    <div className="psi-post-author-dates">
      <span className="psi-post-author-date-row">
        <span className="psi-post-author-date-label">Publicado</span>
        <span>{formatDate(post.createdAt)}</span>
      </span>
      <span className="psi-post-author-date-row">
        <span className="psi-post-author-date-label">Actualizado</span>
        <span>{formatDateShort(post.updatedAt)}</span>
      </span>
      <span className="psi-post-author-readtime">⏱ {post.readTime} lectura</span>
    </div>
  </div>
);

PostAuthorBox.propTypes = {
  post: PropTypes.shape({
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
    readTime: PropTypes.string.isRequired,
  }).isRequired,
};
