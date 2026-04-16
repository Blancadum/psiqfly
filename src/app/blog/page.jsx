import { getAllPostSlugs, getPostBySlug } from '@/lib/posts';
import { BlogHub } from '@/components/blog/ui/BlogHub';

export const metadata = {
  title: 'Blog | PsiQFly',
  description: 'Artículos sobre razonamiento clínico, sesgos cognitivos y formación en psicología.',
};

const CATEGORY_META = {
  'trastornos-mentales': { emoji: '🧠', label: 'Trastornos Mentales' },
  'sesgos-cognitivos':   { emoji: '🧩', label: 'Sesgos Cognitivos' },
  'autocuidado':         { emoji: '🌿', label: 'Autocuidado' },
  'simulacion-clinica':  { emoji: '🔬', label: 'Simulación Clínica' },
  'colaboraciones':      { emoji: '🤝', label: 'Colaboraciones' },
};

export default function BlogPage() {
  const slugs = getAllPostSlugs();
  const allPosts = slugs
    .map(slug => {
      const data = getPostBySlug(slug);
      if (!data) return null;
      return { slug, ...data.frontmatter };
    })
    .filter(Boolean);

  // Excluir páginas de landing del grid principal
  const posts = allPosts
    .filter(p => !p.isLanding)
    .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));

  // Construir categorías para el dropdown (solo las que tienen posts)
  const categorySlugs = [...new Set(allPosts.map(p => p.categorySlug).filter(Boolean))];
  const categories = categorySlugs
    .filter(slug => CATEGORY_META[slug])
    .map(slug => ({
      href: `/blog/${slug}`,
      emoji: CATEGORY_META[slug].emoji,
      label: CATEGORY_META[slug].label,
    }));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-16">
      <h1 className="text-3xl font-extrabold text-slate-800 mb-2">Blog</h1>
      <p className="text-slate-500 mb-10">Razonamiento clínico, sesgos cognitivos y formación en psicología.</p>
      <BlogHub posts={posts} categories={categories} />
    </div>
  );
}
