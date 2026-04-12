'use client';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const BODY_COMPONENTS = {
  p: ({ children }) => (
    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3 last:mb-0">{children}</p>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-slate-700 dark:text-slate-300">{children}</strong>
  ),
  ul: ({ children }) => (
    <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-400 mb-3">{children}</ul>
  ),
  li: ({ children }) => <li className="text-sm leading-relaxed">{children}</li>,
};

export const AccordionGroup = ({ items }) => {
  const [open, setOpen] = useState(null);

  return (
    <div className="my-6 space-y-2">
      {items.map((item, i) => {
        const match = item.title.match(/^(\d+)\.\s+(.+)$/);
        const num = match?.[1];
        const label = match?.[2] ?? item.title;
        const isOpen = open === i;

        return (
          <div
            key={i}
            className="rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden"
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center gap-3 px-5 py-4 text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
              aria-expanded={isOpen}
            >
              {num && (
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#634AE6] to-[#E245B6] flex items-center justify-center">
                  <span className="text-white text-[11px] font-black leading-none">{num}</span>
                </span>
              )}
              <span className="flex-1 text-sm font-bold text-slate-800 dark:text-slate-200">{label}</span>
              <span
                className={`text-slate-400 text-xs transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
              >
                ↓
              </span>
            </button>

            {isOpen && (
              <div className="px-5 pb-5 pt-2 border-t border-slate-100 dark:border-slate-700 animate-fade-in">
                <ReactMarkdown components={BODY_COMPONENTS}>{item.body}</ReactMarkdown>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
