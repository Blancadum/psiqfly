'use client';
import React from 'react';
import PropTypes from 'prop-types';
import { BookCluster } from '@/components/blog/ui/BookCluster';
import { KeyPointsBox } from '@/components/blog/ui/KeyPointsBox';
import { FAQAccordion } from '@/components/blog/ui/FAQAccordion';
import { PanamericanaBanner } from '@/components/blog/ui/PanamericanaBanner';

const slugify = (text) =>
  text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export const PostContent = ({ post }) => {
  // 1. Verificación de seguridad
  if (!post?.content) return null;

  return (
    <>
      {/* Puntos clave al inicio */}
      {post.keyPoints && <KeyPointsBox points={post.keyPoints} />}

      <article className="psi-article-container mt-10">
        
        {/* 2. RENDERIZADO DINÁMICO DEL CONTENIDO */}
        <div className="psi-article-body space-y-10">
          {Array.isArray(post.content) ? (
            // Iteramos sobre cada sección del post
            post.content.map((section, index) => {
              if (section.type === 'faqs') {
                return <FAQAccordion key={index} title={section.title} items={section.items} />;
              }
              const id = section.heading ? slugify(section.heading) : undefined;
              return (
                <section key={index} id={id} className="psi-article-section">
                  {section.heading && (
                    <h2 className="psi-article-h2 mb-4">{section.heading}</h2>
                  )}
                  {section.paragraphs?.map((p, pIndex) => (
                    <p key={pIndex} className="psi-article-p mb-4">{p}</p>
                  ))}
                </section>
              );
            })
          ) : (
            // Fallback: Si por algún motivo recibimos un string plano
            <p className="psi-article-p">{post.content}</p>
          )}
        </div>

        {/* 3. BLOQUES ESPECIALES AL FINAL */}
        {post.books && (
          <div className="mt-16">
            <BookCluster books={post.books} />
          </div>
        )}
        
        {post.faqs && (
          <div className="mt-16">
            <h2 className="psi-article-h2 mb-6">Preguntas Frecuentes</h2>
            <FAQAccordion items={post.faqs} />
          </div>
        )}

        <PanamericanaBanner books={post.books} />
      </article>
    </>
  );
};

// 4. ACTUALIZACIÓN DE PROPTYPES
// Marcamos 'content' como string o array para evitar warnings
PostContent.propTypes = {
  post: PropTypes.shape({
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
    keyPoints: PropTypes.arrayOf(PropTypes.string),
    books: PropTypes.array,
    faqs: PropTypes.array,
  }).isRequired,
};