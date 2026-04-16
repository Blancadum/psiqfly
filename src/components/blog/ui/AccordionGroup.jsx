'use client';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const BODY_COMPONENTS = {
  p:      ({ children }) => <p className="psi-accordion-md-p">{children}</p>,
  strong: ({ children }) => <strong className="psi-accordion-md-strong">{children}</strong>,
  ul:     ({ children }) => <ul className="psi-accordion-md-ul">{children}</ul>,
  ol:     ({ children }) => <ol className="list-decimal pl-5 space-y-1.5 text-slate-600 dark:text-slate-400 mb-3">{children}</ol>,
  li:     ({ children }) => <li className="text-sm leading-relaxed">{children}</li>,
  h4:     ({ children }) => <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-4 mb-1">{children}</h4>,
  table:  ({ children }) => <div className="psi-table-wrapper"><table className="psi-table">{children}</table></div>,
  thead:  ({ children }) => <thead className="psi-table-thead">{children}</thead>,
  tbody:  ({ children }) => <tbody>{children}</tbody>,
  tr:     ({ children }) => <tr className="psi-table-tr">{children}</tr>,
  th:     ({ children }) => <th className="psi-table-th">{children}</th>,
  td:     ({ children }) => <td className="psi-table-td">{children}</td>,
};

export const AccordionGroup = ({ items }) => {
  const [open, setOpen] = useState(null);

  return (
    <div className="psi-accordion-group">
      {items.map((item, i) => {
        const match = item.title.match(/^(\d+)\.\s+(.+)$/);
        const num = match?.[1];
        const label = match?.[2] ?? item.title;
        const isOpen = open === i;

        return (
          <div key={i} className="psi-accordion-item">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="psi-accordion-btn"
              aria-expanded={isOpen}
            >
              {num ? (
                <span className="psi-circle-num--small">
                  <span className="text-white text-[11px] font-black leading-none">{num}</span>
                </span>
              ) : (
                <span className="w-2.5 h-2.5 rounded-full bg-violet-500 dark:bg-violet-400 flex-shrink-0" />
              )}
              <span className="psi-accordion-label">{label}</span>
              <span className={`psi-accordion-chevron ${isOpen ? 'rotate-180' : ''}`}>↓</span>
            </button>

            {isOpen && (
              <div className="psi-accordion-panel">
                <ReactMarkdown components={BODY_COMPONENTS} remarkPlugins={[remarkGfm]}>{item.body}</ReactMarkdown>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
