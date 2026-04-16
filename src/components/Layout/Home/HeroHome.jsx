import React from 'react';
import { LeftSideHome } from './LeftSideHome';
import { RightSideHome } from './RightSideHome';

export const HeroHome = () => {
  return (
    <section className="psi-hero-home">

      <div className="psi-hero-home-grid">
        {/* LADO IZQUIERDO: Ocupa 7 de 12 columnas (60% aprox) */}
        <LeftSideHome />
        {/* LADO DERECHO: Ocupa 5 de 12 columnas (40% aprox) */}
        <RightSideHome />
      </div>
    </section>
  );
};