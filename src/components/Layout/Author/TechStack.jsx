import React from 'react';
import { SKILLS_DATA } from '@/Data/Cv/Skills';

export const TechStack = () => (
  <div className="psi-techstack">
    {SKILLS_DATA.map((group) => (
      <div key={group.category} className="psi-techstack-card">
        <p className="psi-overline text-[10px]">{group.category}</p>
        <div className="flex flex-col gap-2">
          {group.items.map((skill) => (
            <div key={skill.name} className="psi-techstack-skill group">
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
              <span className="psi-techstack-skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);
