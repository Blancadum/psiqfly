'use client';
import { useState } from 'react';

export const KeyPointsBox = ({ points }) => {
  const [open, setOpen] = useState(false);

  if (!points?.length) return null;

  return (
    <div className="psi-keypoints-box">
      <div className="psi-keypoints-accent" />
      <div className="psi-keypoints-body">
        <button
          onClick={() => setOpen(o => !o)}
          className="w-full flex items-center justify-between gap-2 cursor-pointer"
          aria-expanded={open}
        >
          <div className="flex items-center gap-2">
            <span className="text-base">🧠</span>
            <p className="psi-label-indigo">En este artículo aprenderás</p>
          </div>
          <svg
            className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {open && (
          <ol className="space-y-1 mt-3">
            {points.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="psi-circle-num--small">
                  <span className="text-white text-[10px] font-black">{i + 1}</span>
                </span>
                <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{point}</span>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
};
