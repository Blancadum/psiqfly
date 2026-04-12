import React from 'react';
import PropTypes from 'prop-types';

export const BlogSearchHub = ({ categories, activeCategory, onSearch, onCategoryChange }) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 space-y-5">

      {/* Barra de Búsqueda */}
      <div className="relative w-full">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
        <input
          type="text"
          placeholder="Busca por sesgo, ansiedad, DSM-5-TR..."
          className="psi-input pl-11 h-11 text-sm shadow-sm"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      {/* Pills de Categorías */}
      <div className="flex flex-wrap justify-center gap-2">
        <button
          onClick={() => onCategoryChange('All')}
          className={`px-4 py-1.5 rounded-full text-base font-bold transition-all ${
            activeCategory === 'All'
              ? 'bg-indigo-600 text-white shadow-md scale-105'
              : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'
          }`}
        >
          Todas
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`px-4 py-1.5 rounded-full text-base font-bold transition-all ${
              activeCategory === cat
                ? 'bg-indigo-600 text-white shadow-md scale-105'
                : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

    </div>
  );
};

BlogSearchHub.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeCategory: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
};
