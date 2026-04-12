'use client';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { FAQAccordion } from '@/components/blog/ui/FAQAccordion';
import { PanamericanaBanner as PanamericanaBannerBooks } from '@/components/blog/ui/PanamericanaBanner';
import { PanamericanaBanner } from '@/components/ads/PanamericanaBanner';
import { PanamericanaBannerInline } from '@/components/ads/PanamericanaBannerInline';
import { InlineCardGrid } from '@/components/blog/ui/InlineCardGrid';
import { NoteBox } from '@/components/blog/ui/NoteBox';
import { AccordionGroup } from '@/components/blog/ui/AccordionGroup';
import PropTypes from 'prop-types';

// Split a section's content into intro (before first H3) + H3 accordion items
function extractH3Items(sectionContent) {
  const parts = sectionContent.split(/(?=^### )/m);
  const intro = parts[0];
  const items = parts.slice(1).map(block => {
    const lines = block.split('\n');
    const title = lines[0].replace(/^### /, '').trim();
    const body = lines.slice(1).join('\n').trim();
    return { title, body };
  });
  return { intro, items };
}

const slugify = (text) =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replaceAll(/[\u0300-\u036f]/g, '')
    .replaceAll(/[^a-z0-9]+/g, '-')
    .replaceAll(/(^-|-$)/g, '');

const MD_COMPONENTS = {
  h2: ({ children }) => (
    <h2 id={slugify(String(children))} className="psi-article-h2 mt-10 mb-4 scroll-mt-20">
      {children}
    </h2>
  ),
  h3: ({ children }) => {
    const text = String(children);
    const match = text.match(/^(\d+)\.\s+(.+)$/);
    if (match) {
      return (
        <h3 className="flex items-start gap-3 mt-8 mb-3">
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#634AE6] to-[#E245B6] flex items-center justify-center mt-0.5">
            <span className="text-white text-[11px] font-black leading-none">{match[1]}</span>
          </span>
          <span className="text-base font-bold text-slate-800 dark:text-slate-200 leading-snug">{match[2]}</span>
        </h3>
      );
    }
    return (
      <h3 className="text-base font-bold text-slate-800 dark:text-slate-200 mt-6 mb-2">
        {children}
      </h3>
    );
  },
  p: ({ children }) => (
    <p className="psi-article-p mb-4">{children}</p>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-slate-800 dark:text-slate-200">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="italic">{children}</em>
  ),
  ul: ({ children }) => (
    <ul className="list-disc pl-6 space-y-1 text-slate-600 dark:text-slate-400 mb-4">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-6 space-y-1 text-slate-600 dark:text-slate-400 mb-4">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="text-base leading-relaxed">{children}</li>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-indigo-300 dark:border-indigo-600 pl-5 pt-3 pb-1 my-6 text-slate-600 dark:text-slate-400 italic bg-indigo-50/40 dark:bg-indigo-900/10 rounded-r-lg [&>p]:mb-2 [&>p:last-child]:mb-0">
      {children}
    </blockquote>
  ),
  a: ({ href, children }) => (
    <a href={href} className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ),
  hr: () => <hr className="border-slate-200 dark:border-slate-700 my-8" />,
};

// Split body into sections at each ## heading, preserving the heading in each chunk
function splitByH2(body) {
  return body
    .split(/(?=^## )/m)
    .filter(Boolean)
    .map(part => {
      const match = part.match(/^## (.+)/m);
      return { heading: match?.[1]?.trim() ?? null, content: part.trim() };
    });
}

export const PostContentMD = ({ frontmatter, body, faqs }) => {
  const sections = splitByH2(body);

  // Build a map: H2 heading → cards array + detect afterKeyPoints grid
  const cardGridsMap = {};
  let topCards = null;
  if (frontmatter.cardGrids) {
    for (const cg of frontmatter.cardGrids) {
      if (cg.afterKeyPoints) { topCards = cg.cards; }
      else if (cg.afterH2) { cardGridsMap[cg.afterH2] = cg.cards; }
    }
  }

  // Build a map: H2 heading → note box
  const noteBoxesMap = {};
  if (frontmatter.noteBoxes) {
    for (const nb of frontmatter.noteBoxes) {
      noteBoxesMap[nb.afterH2] = nb;
    }
  }

  // Set of H2 headings whose H3s should render as accordion
  const accordionSectionsSet = new Set(frontmatter.accordionSections ?? []);

  return (
    <>
      {topCards && (
        <>
          <InlineCardGrid cards={topCards} />
          <PanamericanaBanner />
        </>
      )}
      {!topCards && <PanamericanaBanner />}

      <article className="psi-article-container mt-10">
        {sections.map((section, i) => {
          const isAccordion = section.heading && accordionSectionsSet.has(section.heading);
          const { intro, items } = isAccordion
            ? extractH3Items(section.content)
            : { intro: section.content, items: [] };

          return (
            <React.Fragment key={i}>
              <ReactMarkdown components={MD_COMPONENTS}>{intro}</ReactMarkdown>
              {isAccordion && items.length > 0 && <AccordionGroup items={items} />}
              {section.heading && cardGridsMap[section.heading] && (
                <InlineCardGrid cards={cardGridsMap[section.heading]} />
              )}
              {section.heading && noteBoxesMap[section.heading] && (
                <NoteBox
                  emoji={noteBoxesMap[section.heading].emoji}
                  content={noteBoxesMap[section.heading].content}
                />
              )}
              {i === 0 && <PanamericanaBannerInline />}
            </React.Fragment>
          );
        })}
      </article>

      {faqs?.length > 0 && (
        <section id="preguntas-frecuentes" className="mt-12">
          {/* Usamos el componente que ya mapeamos correctamente.
            Asegúrate de que el nombre del componente importado coincida 
            con el que tiene la lógica de faq.question -> q 
          */}
          <FAQAccordion 
            title="Preguntas frecuentes" 
            items={faqs.map(faq => ({
              q: faq.question,
              a: faq.answer
            }))} 
          />
        </section>
      )}

      <PanamericanaBannerBooks books={frontmatter.books} />
    </>
  );
};

PostContentMD.propTypes = {
  frontmatter: PropTypes.object.isRequired,
  body: PropTypes.string.isRequired,
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ),
};
