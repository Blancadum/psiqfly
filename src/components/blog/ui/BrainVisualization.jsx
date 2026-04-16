'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';

export const BrainVisualization = ({ areas, disorder = 'Trastorno' }) => {
  const [hoveredArea, setHoveredArea] = useState(null);

  return (
    <div className="psi-brain-visualization-wrapper">
      <div className="psi-brain-container">
        {/* SVG Brain */}
        <svg
          viewBox="0 0 400 500"
          className="psi-brain-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Brain outline - lateral view */}
          <g className="psi-brain-outline">
            {/* Frontal lobe */}
            <path
              d="M 80 80 Q 120 60 160 60 Q 200 50 220 80 L 220 200 Q 200 190 180 190 Q 140 185 100 200 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            {/* Parietal lobe */}
            <path
              d="M 220 80 Q 260 60 300 70 L 310 200 Q 280 195 220 200 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            {/* Temporal lobe */}
            <path
              d="M 100 200 Q 120 250 140 280 L 280 280 Q 290 250 310 200 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            {/* Occipital lobe */}
            <path
              d="M 310 200 L 310 280 Q 300 320 280 340 Q 260 350 240 340 L 240 280 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            {/* Brain stem */}
            <circle cx="200" cy="380" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
          </g>

          {/* Interactive areas */}
          {areas.map((area) => (
            <g
              key={area.id}
              onMouseEnter={() => setHoveredArea(area.id)}
              onMouseLeave={() => setHoveredArea(null)}
              className="psi-brain-area"
            >
              {/* Circle area */}
              <circle
                cx={area.x}
                cy={area.y}
                r={area.radius || 25}
                fill={hoveredArea === area.id ? area.color : 'rgba(255,255,255,0.3)'}
                stroke={area.color}
                strokeWidth={hoveredArea === area.id ? 3 : 2}
                className={`transition-all duration-200 cursor-pointer ${
                  hoveredArea === area.id ? 'opacity-100' : 'opacity-70'
                }`}
              />
              {/* Label on hover */}
              {hoveredArea === area.id && (
                <text
                  x={area.x}
                  y={area.y}
                  textAnchor="middle"
                  dy="0.3em"
                  className="psi-brain-label"
                  fill="white"
                  fontSize="11"
                  fontWeight="bold"
                >
                  {area.name}
                </text>
              )}
            </g>
          ))}
        </svg>

        {/* Info Panel */}
        <div className="psi-brain-info-panel">
          {hoveredArea ? (
            <div className="psi-brain-info-content animate-fade-in">
              {(() => {
                const area = areas.find((a) => a.id === hoveredArea);
                return (
                  <>
                    <div
                      className="psi-brain-info-header"
                      style={{ borderLeftColor: area.color }}
                    >
                      <h4 className="psi-brain-info-title">{area.name}</h4>
                      <p className="psi-brain-info-affection">{area.affection}</p>
                    </div>
                    <p className="psi-brain-info-description">{area.description}</p>
                    {area.symptoms && (
                      <div className="psi-brain-info-symptoms">
                        <p className="font-semibold text-sm mb-2">Manifestaciones en {disorder}:</p>
                        <ul className="space-y-1">
                          {area.symptoms.map((symptom, idx) => (
                            <li key={idx} className="text-sm flex items-start gap-2">
                              <span className="text-lg">▪</span>
                              <span>{symptom}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                );
              })()}
            </div>
          ) : (
            <div className="psi-brain-info-empty">
              <p className="text-slate-500 dark:text-slate-400 text-center">
                <span className="text-2xl block mb-2">🧠</span>
                Pasa el ratón sobre las áreas del cerebro para ver cómo se afectan en {disorder}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

BrainVisualization.propTypes = {
  areas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      radius: PropTypes.number,
      color: PropTypes.string.isRequired,
      affection: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      symptoms: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
  disorder: PropTypes.string,
};
