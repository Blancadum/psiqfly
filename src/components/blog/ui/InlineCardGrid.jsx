import Link from 'next/link';

export const InlineCardGrid = ({ cards }) => {
  if (!cards?.length) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
      {cards.map((card, i) => (
        <div
          key={i}
          className="group flex flex-col bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700 rounded-xl p-5 transition-colors duration-200 hover:border-indigo-200 dark:hover:border-indigo-800"
        >
          {card.emoji && (
            <span className="text-2xl mb-2">{card.emoji}</span>
          )}
          <p className="text-base font-bold text-slate-800 dark:text-slate-100 mb-2">
            {card.title}
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1">
            {card.description}
          </p>

          {card.slug ? (
            <Link
              href={`/blog/${card.categorySlug}/${card.slug}`}
              rel="nofollow"
              className="mt-4 inline-flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-200"
            >
              <span className="group-hover:translate-x-0.5 transition-transform duration-200">Explorar</span>
              <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200">→</span>
            </Link>
          ) : (
            <span className="mt-4 inline-flex items-center text-xs text-slate-300 dark:text-slate-600 select-none">
              Próximamente
            </span>
          )}
        </div>
      ))}
    </div>
  );
};
