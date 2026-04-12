import React from 'react';
import { HomeLayout } from '@/components/Layout/Home/HomeLayout';
import { AuthorBio } from '@/components/Layout/Author/AutorBio';
import { CardGrid } from '@/components/ui/CardGrid';
import { EducationItem } from '@/components/Layout/Author/Education';
import { Interests } from '@/components/Layout/Author/Interests';
import { Publication } from '@/components/Layout/Author/Publication';
import { AuthorHero } from '@/components/Layout/Author/AuthorHero';
// 👇 IMPORTANTE: Asegúrate de importar los DOS arrays desde tu archivo de datos
import { CredentialsCarousel } from '@/components/ui/CredentialsCarousel';
import { TableOfContents } from '@/components/blog/ui/TableOfContents';
import { EDUCATION_DATA} from '@/Data/Cv/Education'; 
import { IT_EDUCATION_DATA } from '@/Data/Cv/ItEducation';
import { languages as IDIOMAS_DATA } from '@/Data/Cv/Lang';
import { TechStack } from '@/components/Layout/Author/TechStack';

const SECTIONS = [
  { id: 'presentacion', label: 'Presentación' },
  { id: 'bio',          label: 'Sobre mí' },
  { id: 'cardinales',   label: 'Mis puntos cardinales' },
  { id: 'techstack',    label: 'Stack tecnológico' },
  { id: 'formacion-it', label: 'Formación tecnológica' },
  { id: 'formacion',    label: 'Formación académica' },
  { id: 'idiomas',      label: 'Idiomas' },
  { id: 'intereses',    label: 'Intereses' },
  { id: 'publicacion',  label: 'Publicación académica' },
  { id: 'titulos',      label: 'Mis títulos' },
];

export const AboutMe = () => (
  <HomeLayout>
    <TableOfContents sections={SECTIONS} />

    <div className="psi-author-container">
      <section id="presentacion"><AuthorHero /></section>
      <section id="bio"><AuthorBio /></section>

      <section id="cardinales">
        <CardGrid title={<>Mis puntos <span className="psi-gradient-text">cardinales</span></>} />
      </section>

      <section id="techstack">
        <h2 className="psi-section-title">
          Mi <span className="psi-gradient-text">stack tecnológico</span>
        </h2>
        <TechStack />
      </section>

      {/* SECCIÓN 1: Formación tecnológica (Nuevo ID y título) */}
      <section id="formacion-it">
        <h2 className="psi-section-title">
          Mi formación más <span className="psi-gradient-text">Tech</span>
        </h2>
        {IT_EDUCATION_DATA.map((item) => (
          <EducationItem key={item.id || crypto.randomUUID()} item={item} />
        ))}
      </section>

      {/* SECCIÓN 2: Formación universitaria */}
      <section id="formacion">
        <h2 className="psi-section-title">
          Mi formación <span className="psi-gradient-text">Universitaria</span>
        </h2>
        {EDUCATION_DATA.map((item) => (
          <EducationItem key={item.id || crypto.randomUUID()} item={item} />
        ))}
      </section>

      {/* SECCIÓN 3: IDIOMAS*/}
      <section id="idiomas">
        <h2 className="psi-section-title">
          Certificados de <span className="psi-gradient-text">idiomas</span>
        </h2>
        {IDIOMAS_DATA.map((item) => (
          <EducationItem key={item.id || crypto.randomUUID()} item={item} />
        ))}
      </section>

      <section id="intereses"><Interests /></section>
      <section id="publicacion"><Publication /></section>

    </div>

    <section id="titulos">
      <CredentialsCarousel />
    </section>

  </HomeLayout>
);