import Link from 'next/link';
import { getAllPostSlugs, getPostBySlug } from '@/lib/posts';

export const metadata = {
  title: 'Blog | PsiQFly',
  description: 'Artículos sobre razonamiento clínico, sesgos cognitivos y formación en psicología.',
};

export default function BlogPage() {
  const slugs = getAllPostSlugs();
  const posts = slugs
    .map(slug => {
      const data = getPostBySlug(slug);
      if (!data) return null;
      return { slug, ...data.frontmatter };
    })
    .filter(Boolean)
    .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));

  const categories = [...new Set(posts.map(p => p.category).filter(Boolean))];

  return (
    <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
      <h1 className="text-3xl font-extrabold text-slate-800 mb-2">Blog</h1>
      <p className="text-slate-500 mb-10">Razonamiento clínico, sesgos cognitivos y formación en psicología.</p>

      {categories.map(cat => {
        const catPosts = posts.filter(p => p.category === cat);
        return (
          <section key={cat} className="mb-12">
            <h2 className="text-lg font-bold text-indigo-600 uppercase tracking-widest mb-4">{cat}</h2>
            <div className="grid gap-4">
              {catPosts.map(post => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.categorySlug}/${post.slug}`}
                  className="block p-5 rounded-xl border border-slate-100 bg-white hover:border-indigo-200 hover:shadow-sm transition-all"
                >
                  <p className="text-lg font-bold text-slate-800">{post.emoji} {post.title}</p>
                  <p className="text-sm text-slate-500 mt-1 line-clamp-2">{post.excerpt}</p>
                  <p className="text-xs text-slate-400 mt-2">{post.readTime} · {post.date}</p>
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      {posts.length === 0 && (
        <p className="text-slate-400 text-center py-16">Próximamente — contenido en preparación.</p>
      )}
    </div>
  );
}
