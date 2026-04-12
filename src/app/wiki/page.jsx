import Link from 'next/link';
import { getAllPostSlugs, getPostBySlug } from '@/lib/posts';

export const metadata = {
  title: 'Wiki de sesgos cognitivos | PsiQFly',
  description: 'Enciclopedia de sesgos diagnósticos y estrategias de debiasing para psicólogos clínicos.',
};

export default function WikiPage() {
  const slugs = getAllPostSlugs();
  const posts = slugs
    .map(slug => {
      const data = getPostBySlug(slug);
      if (!data) return null;
      return { slug, ...data.frontmatter };
    })
    .filter(Boolean)
    .filter(p => p.categorySlug === 'sesgos-cognitivos' || p.category?.toLowerCase().includes('sesgo'));

  return (
    <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
      <h1 className="text-3xl font-extrabold text-slate-800 mb-2">Wiki de sesgos cognitivos</h1>
      <p className="text-slate-500 mb-10">Enciclopedia de sesgos diagnósticos y estrategias de debiasing.</p>

      {posts.length > 0 ? (
        <div className="grid gap-4">
          {posts.map(post => (
            <Link
              key={post.slug}
              href={`/blog/${post.categorySlug}/${post.slug}`}
              className="block p-5 rounded-xl border border-slate-100 bg-white hover:border-indigo-200 hover:shadow-sm transition-all"
            >
              <p className="text-lg font-bold text-slate-800">{post.emoji} {post.title}</p>
              <p className="text-sm text-slate-500 mt-1">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-slate-400 text-center py-16">Próximamente — contenido en preparación.</p>
      )}
    </div>
  );
}
