import React from 'react';
import { SKILLS_DATA } from '@/Data/Cv/Skills';

export const TechStack = () => (
  <div className="flex flex-wrap gap-4">
    {SKILLS_DATA.map((group) => (
      <div
        key={group.category}
        className="rounded-2xl border border-slate-100 dark:border-slate-700
                   bg-white dark:bg-slate-800 shadow-sm p-4 flex flex-col gap-3 flex-shrink-0"
      >
        <p className="psi-overline text-[10px]">{group.category}</p>
        <div className="flex flex-col gap-2">
          {group.items.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-2.5 group"
            >
              {skill.emoji ? (
                <span className="w-5 h-5 flex items-center justify-center text-base flex-shrink-0">{skill.emoji}</span>
              ) : (
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-5 h-5 object-contain flex-shrink-0 group-hover:scale-125 transition-transform duration-200"
                  loading="lazy"
                />
              )}
              <span className="text-sm text-slate-700 dark:text-slate-300 font-medium leading-tight">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);
