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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
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
        className="relative w-full bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden"
        style={{ maxWidth: isPdf ? '860px' : '768px' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100 dark:border-slate-700">
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">{title}</p>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all"
          >
            ✕
          </button>
        </div>

        {/* Contenido */}
        <div className="p-4">
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
