import { getAllPostSlugs, getPostBySlug } from '@/lib/posts';
import { BlogHub } from '@/components/blog/ui/BlogHub';

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

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-16">
      <h1 className="text-3xl font-extrabold text-slate-800 mb-2">Blog</h1>
      <p className="text-slate-500 mb-10">Razonamiento clínico, sesgos cognitivos y formación en psicología.</p>
      <BlogHub posts={posts} />
    </div>
  );
}
