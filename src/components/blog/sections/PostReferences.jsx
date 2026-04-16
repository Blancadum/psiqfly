import ReactMarkdown from 'react-markdown';

const MD = {
  p: ({ children }) => <span>{children}</span>,
  a: ({ href, children }) => (
    <a href={href} className="psi-ref-link" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ),
  em: ({ children }) => <em className="italic">{children}</em>,
  strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
};

const SectionLabel = ({ children }) => (
  <h3 className="psi-post-section-label">{children}</h3>
);

export const PostReferences = ({ references, recommendedBibliography }) => {
  const hasRefs = references?.length > 0;
  const hasRec = recommendedBibliography?.length > 0;

  if (!hasRefs && !hasRec) return null;

  return (
    <section className="psi-post-references">
      {hasRefs && (
        <div>
          <SectionLabel>Referencias bibliográficas</SectionLabel>
          <ol className="space-y-2">
            {references.map((ref, i) => (
              <li key={i} className="psi-ref-item">
                <span className="psi-ref-num">[{i + 1}]</span>
                <ReactMarkdown components={MD}>{ref}</ReactMarkdown>
              </li>
            ))}
          </ol>
        </div>
      )}

      {hasRec && (
        <div>
          <SectionLabel>Bibliografía recomendada</SectionLabel>
          <ul className="space-y-2">
            {recommendedBibliography.map((ref, i) => (
              <li key={i} className="psi-ref-item">
                <span className="psi-ref-num">—</span>
                <ReactMarkdown components={MD}>{ref}</ReactMarkdown>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};
