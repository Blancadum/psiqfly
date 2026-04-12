import ReactMarkdown from 'react-markdown';

const MD = {
  p: ({ children }) => <span>{children}</span>,
  a: ({ href, children }) => (
    <a href={href} className="text-indigo-500 hover:underline break-all" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ),
  em: ({ children }) => <em className="italic">{children}</em>,
  strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
};

const SectionLabel = ({ children }) => (
  <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3">
    {children}
  </h3>
);

export const PostReferences = ({ references, recommendedBibliography }) => {
  const hasRefs = references?.length > 0;
  const hasRec = recommendedBibliography?.length > 0;

  if (!hasRefs && !hasRec) return null;

  return (
    <section className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 space-y-8">
      {hasRefs && (
        <div>
          <SectionLabel>Referencias bibliográficas</SectionLabel>
          <ol className="space-y-2">
            {references.map((ref, i) => (
              <li key={i} className="flex gap-3 text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                <span className="flex-shrink-0 text-slate-300 dark:text-slate-600 font-mono text-xs pt-0.5">
                  [{i + 1}]
                </span>
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
              <li key={i} className="flex gap-3 text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                <span className="flex-shrink-0 text-slate-300 dark:text-slate-600 font-mono text-xs pt-0.5">—</span>
                <ReactMarkdown components={MD}>{ref}</ReactMarkdown>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};
