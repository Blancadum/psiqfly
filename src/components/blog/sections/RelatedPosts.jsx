import Link from 'next/link';

export const RelatedPosts = ({ posts }) => {
  if (!posts?.length) return null;

  return (
    <section className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800">
      <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
        También te puede interesar
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map(post => (
          <Link
            key={post.slug}
            href={`/blog/${post.categorySlug}/${post.slug}`}
            className="group block bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 rounded-xl p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{post.emoji}</span>
              <span className="text-xs text-indigo-500 font-semibold uppercase tracking-wide">
                {post.category}
              </span>
            </div>
            <p className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {post.title}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
              {post.excerpt}
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-3">{post.readTime}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};
