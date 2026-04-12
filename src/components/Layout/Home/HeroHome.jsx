import React from 'react';
import { LeftSideHome } from './LeftSideHome';
import { RightSideHome } from './RightSideHome';

export const HeroHome = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-4 md:py-8">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start lg:items-center">
        {/* LADO IZQUIERDO: Ocupa 7 de 12 columnas (60% aprox) */}
        <LeftSideHome />
        {/* LADO DERECHO: Ocupa 5 de 12 columnas (40% aprox) */}
        <RightSideHome />
      </div>
    </section>
  );
};