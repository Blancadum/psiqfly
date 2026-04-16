"use client";
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

export const CertificateModal = ({ src, title, onClose }) => {
  const srcStr = typeof src === 'string' ? src : src?.src ?? '';
  const isPdf = srcStr.toLowerCase().endsWith('.pdf');

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return createPortal(
    <div
      className="psi-modal-overlay"
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClose();
        }
      }}
      role="button"
      tabIndex={0}
    >
      <div
        className="psi-modal-content"
        style={{ maxWidth: isPdf ? '860px' : '768px' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="psi-modal-header">
          <p className="psi-modal-title">{title}</p>
          <button onClick={onClose} className="psi-modal-close-btn">
            ✕
          </button>
        </div>

        {/* Contenido */}
        <div className="psi-modal-body">
          {isPdf ? (
            <iframe
              src={srcStr}
              title={title}
              className="w-full rounded-lg border-0"
              style={{ height: '75vh' }}
            />
          ) : (
            <img
              src={srcStr}
              alt={title}
              className="w-full rounded-lg object-contain max-h-[75vh]"
            />
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};
