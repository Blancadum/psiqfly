'use client';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { FAQAccordion } from '@/components/blog/ui/FAQAccordion';
import { PanamericanaBanner as PanamericanaBannerBooks } from '@/components/blog/ui/PanamericanaBanner';
import { PanamericanaBanner } from '@/components/ads/PanamericanaBanner';
import { PanamericanaBannerInline } from '@/components/ads/PanamericanaBannerInline';
import { InlineCardGrid } from '@/components/blog/ui/InlineCardGrid';
import { NoteBox } from '@/components/blog/ui/NoteBox';
import { AccordionGroup } from '@/components/blog/ui/AccordionGroup';
import { DSMAccordion } from '@/components/blog/ui/DSMAccordion';
import { DSMCriteria } from '@/components/blog/ui/DSMCriteria';
import { DSMCriteriaCompact } from '@/components/blog/ui/DSMCriteriaCompact';
import { DSMCriteriaExact } from '@/components/blog/ui/DSMCriteriaExact';
import { DSMCriteriaCollapsible } from '@/components/blog/ui/DSMCriteriaCollapsible';
import { DSMCriteriaVisual } from '@/components/blog/ui/DSMCriteriaVisual';
import { NeurobiologyBox } from '@/components/blog/ui/NeurobiologyBox';
import { AssessmentScales } from '@/components/blog/ui/AssessmentScales';
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

// Split an H2 section into H3 subsections (each with heading + content)
function splitByH3(sectionContent) {
  const parts = sectionContent.split(/(?=^### )/m);
  return parts.map(part => {
    const match = part.match(/^### (.+)/m);
    return { heading: match?.[1]?.trim() ?? null, content: part.trim() };
  });
}

// Extract H4 items from an H3 block (for DSM accordion at H4 level)
function extractH4Items(h3Content) {
  const parts = h3Content.split(/(?=^#### )/m);
  const intro = parts[0].replace(/^### .+\n?/, '').trim();
  const items = parts.slice(1).map(block => {
    const lines = block.split('\n');
    const title = lines[0].replace(/^#### /, '').trim();
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
    <h2 id={slugify(String(children))} className="psi-article-h2 mt-10 scroll-mt-20">
      {children}
    </h2>
  ),
  h3: ({ children }) => {
    const text = String(children);
    const match = text.match(/^(\d+)\.\s+(.+)$/);
    if (match) {
      return (
        <h3 id={slugify(match[2])} className="psi-article-h3-numbered">
          <span className="psi-article-h3-num-badge">
            <span className="text-white text-[11px] font-black leading-none">{match[1]}</span>
          </span>
          <span className="psi-article-h3-label">{match[2]}</span>
        </h3>
      );
    }
    return (
      <h3 id={slugify(text)} className="psi-article-h3">
        {children}
      </h3>
    );
  },
  p: ({ children }) => (
    <p className="psi-article-p mb-4">{children}</p>
  ),
  strong: ({ children }) => (
    <strong className="psi-article-strong">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="italic">{children}</em>
  ),
  ul: ({ children }) => (
    <ul className="psi-article-ul">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="psi-article-ol">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="psi-article-li">{children}</li>
  ),
  blockquote: ({ children }) => (
    <blockquote className="psi-article-blockquote">{children}</blockquote>
  ),
  a: ({ href, children }) => (
    <a href={href} className="psi-article-a" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ),
  hr: () => <hr className="psi-article-hr" />,
  table: ({ children }) => (
    <div className="psi-table-wrapper">
      <table className="psi-table">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="psi-table-thead">{children}</thead>,
  tbody: ({ children }) => <tbody>{children}</tbody>,
  tr: ({ children }) => <tr className="psi-table-tr">{children}</tr>,
  th: ({ children }) => <th className="psi-table-th">{children}</th>,
  td: ({ children }) => <td className="psi-table-td">{children}</td>,
  h4: ({ children }) => (
    <h4 className="psi-article-h4">{children}</h4>
  ),
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

  // Build a map: H2 heading → DSM criteria
  const dsmCriteriaMap = {};
  if (frontmatter.dsmCriteria) {
    for (const dc of frontmatter.dsmCriteria) {
      if (dc.afterH2) { dsmCriteriaMap[dc.afterH2] = dc.criteria; }
    }
  }

  // Build a map: H2 heading → DSM criteria compact
  const dsmCriteriaCompactMap = {};
  if (frontmatter.dsmCriteriaCompact) {
    for (const dcc of frontmatter.dsmCriteriaCompact) {
      if (dcc.afterH2) { dsmCriteriaCompactMap[dcc.afterH2] = dcc.criteria; }
    }
  }

  // Build a map: H2 heading → DSM criteria exact
  const dsmCriteriaExactMap = {};
  if (frontmatter.dsmCriteriaExact) {
    for (const dce of frontmatter.dsmCriteriaExact) {
      if (dce.afterH2) { dsmCriteriaExactMap[dce.afterH2] = dce.criteria; }
    }
  }

  // Build a map: H2 heading → DSM criteria collapsible
  const dsmCriteriaCollapsibleMap = {};
  if (frontmatter.dsmCriteriaCollapsible) {
    for (const dcc of frontmatter.dsmCriteriaCollapsible) {
      if (dcc.afterH2) { dsmCriteriaCollapsibleMap[dcc.afterH2] = dcc.criteria; }
    }
  }

  // Build a map: H2 heading → DSM criteria visual
  const dsmCriteriaVisualMap = {};
  if (frontmatter.dsmCriteriaVisual) {
    for (const dcv of frontmatter.dsmCriteriaVisual) {
      if (dcv.afterH2) { dsmCriteriaVisualMap[dcv.afterH2] = dcv.criteria; }
    }
  }

  // Build a map: H2 heading → neurobiology items
  const neurobiologyMap = {};
  if (frontmatter.neurobiologyItems) {
    for (const nb of frontmatter.neurobiologyItems) {
      if (nb.afterH2) { neurobiologyMap[nb.afterH2] = nb.items; }
    }
  }

  // Set of H2 headings whose H3s should render as accordion
  const accordionSectionsSet = new Set(frontmatter.accordionSections ?? []);
  // Set of H2 headings whose H3s should render as DSM-colored accordion
  const dsmAccordionSectionsSet = new Set(frontmatter.dsmAccordionSections ?? []);
  // Set of H3 headings whose H4s should render as DSM-colored accordion (within any H2)
  const dsmAccordionSubsectionsSet = new Set(frontmatter.dsmAccordionSubsections ?? []);
  // Set of H3 headings whose H4s should render as generic accordion with dots (within any H2)
  const accordionSubsectionsSet = new Set(frontmatter.accordionSubsections ?? []);

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
          const isDsmAccordion = section.heading && dsmAccordionSectionsSet.has(section.heading);

          const h3Subsections = splitByH3(section.content);
          const hasDsmSubsections = (dsmAccordionSubsectionsSet.size > 0 || accordionSubsectionsSet.size > 0) &&
            h3Subsections.some(h3 => h3.heading && (
              dsmAccordionSubsectionsSet.has(h3.heading) || accordionSubsectionsSet.has(h3.heading)
            ));

          const { intro, items } = (isAccordion || isDsmAccordion)
            ? extractH3Items(section.content)
            : { intro: section.content, items: [] };

          return (
            <React.Fragment key={i}>
              {hasDsmSubsections ? (
                h3Subsections.map((h3, j) => {
                  if (h3.heading && dsmAccordionSubsectionsSet.has(h3.heading)) {
                    const { intro: h3intro, items: h4items } = extractH4Items(h3.content);
                    return (
                      <React.Fragment key={j}>
                        <ReactMarkdown components={MD_COMPONENTS} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{`### ${h3.heading}`}</ReactMarkdown>
                        {h3intro && <ReactMarkdown components={MD_COMPONENTS} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{h3intro}</ReactMarkdown>}
                        {h4items.length > 0 && <DSMAccordion items={h4items} />}
                      </React.Fragment>
                    );
                  }
                  if (h3.heading && accordionSubsectionsSet.has(h3.heading)) {
                    const { intro: h3intro, items: h4items } = extractH4Items(h3.content);
                    return (
                      <React.Fragment key={j}>
                        <ReactMarkdown components={MD_COMPONENTS} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{`### ${h3.heading}`}</ReactMarkdown>
                        {h3intro && <ReactMarkdown components={MD_COMPONENTS} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{h3intro}</ReactMarkdown>}
                        {h4items.length > 0 && <AccordionGroup items={h4items} />}
                      </React.Fragment>
                    );
                  }
                  return (
                    <ReactMarkdown 
                      key={j} 
                      components={MD_COMPONENTS} 
                      remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}
                    >
                      {h3.content}
                    </ReactMarkdown>
                  );
                })
              ) : (
                <>
                  <ReactMarkdown components={MD_COMPONENTS} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{intro}</ReactMarkdown>
                  {isAccordion && items.length > 0 && <AccordionGroup items={items} />}
                  {isDsmAccordion && items.length > 0 && <DSMAccordion items={items} />}
                </>
              )}
              {/* Los bloques de componentes personalizados (NoteBox, etc.) no necesitan rehypeRaw porque son JSX directo */}
              {section.heading && noteBoxesMap[section.heading] && (
                <NoteBox
                  emoji={noteBoxesMap[section.heading].emoji}
                  content={noteBoxesMap[section.heading].content}
                />
              )}
              {section.heading && dsmCriteriaCompactMap[section.heading] && (
                <DSMCriteriaCompact criteria={dsmCriteriaCompactMap[section.heading]} />
              )}
              {section.heading && dsmCriteriaExactMap[section.heading] && (
                <DSMCriteriaExact criteria={dsmCriteriaExactMap[section.heading]} />
              )}
              {section.heading && dsmCriteriaCollapsibleMap[section.heading] && (
                <DSMCriteriaCollapsible criteria={dsmCriteriaCollapsibleMap[section.heading]} />
              )}
              {section.heading && dsmCriteriaMap[section.heading] && (
                <DSMCriteria criteria={dsmCriteriaMap[section.heading]} />
              )}
              {section.heading && dsmCriteriaVisualMap[section.heading] && (
                <DSMCriteriaVisual criteria={dsmCriteriaVisualMap[section.heading]} />
              )}
              {section.heading && neurobiologyMap[section.heading] && (
                <NeurobiologyBox items={neurobiologyMap[section.heading]} />
              )}
              {section.heading && cardGridsMap[section.heading] && (
                <InlineCardGrid cards={cardGridsMap[section.heading]} />
              )}
              {i === 0 && <PanamericanaBannerInline />}
            </React.Fragment>
          );
        })}
      </article>

      {frontmatter.assessmentTools?.length > 0 && (
        <AssessmentScales scales={frontmatter.assessmentTools} />
      )}

      {faqs?.length > 0 && (
        <section id="preguntas-frecuentes" className="mt-12">
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