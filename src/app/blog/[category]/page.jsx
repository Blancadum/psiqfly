import { notFound } from 'next/navigation';
import { posts } from '@/Data/Contents/posts';
import { getPostBySlug } from '@/lib/posts';
import { BlogLayout } from '@/components/blog/layout/BlogLayout';
import { PostHeader } from '@/components/blog/sections/PostHeader';
import { PostAuthorBox } from '@/components/blog/sections/PostAuthorBox';
import { PostContent } from '@/components/blog/sections/PostContent';
import { PostContentMD } from '@/components/blog/sections/PostContentMD';
import { PostReferences } from '@/components/blog/sections/PostReferences';
import { RelatedPosts } from '@/components/blog/sections/RelatedPosts';
import { CitationBox } from '@/components/blog/sections/CitationBox';
import { TableOfContents } from '@/components/blog/ui/TableOfContents';
import { NewsletterSection } from '@/components/Layout/NewsletterSection';

const slugify = (text) =>
  text.toLowerCase().normalize('NFD').replaceAll(/[\u0300-\u036f]/g, '').replaceAll(/[^a-z0-9]+/g, '-').replaceAll(/(^-|-$)/g, '');

function getRelatedPosts(currentSlug, categorySlug, tags = []) {
  return posts
    .filter(p => p.slug !== currentSlug)
    .map(p => ({
      ...p,
      score:
        (p.categorySlug === categorySlug ? 2 : 0) +
        (p.tags?.filter(t => tags.includes(t)).length || 0),
    }))
    .filter(p => p.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}

export async function generateMetadata({ params }) {
  const { category } = await params;

  // Busca el archivo Markdown que se llame igual que la categoría (ej. "trastornos-mentales")
  const mdPost = getPostBySlug(category);
  if (mdPost) {
    const { frontmatter } = mdPost;
    return {
      title: `${frontmatter.title} | PsiQFly`,
      description: frontmatter.excerpt,
    };
  }

  return { title: `Categoría ${category} | PsiQFly` };
}

export default async function CategoryLandingPage({ params }) {
  const { category } = await params;

  // Carga tu landing de categoría desde el Markdown
  const mdPost = getPostBySlug(category);
  
  if (!mdPost) {
    notFound(); // Si no hay Markdown para esta categoría, da error 404
  }

  const { frontmatter, body, faqs } = mdPost;

  // Construir la tabla de contenidos (TOC)
  const h2Regex = /^## (.+)$/gm;
  const tocSections = [];
  let match;
  while ((match = h2Regex.exec(body)) !== null) {
    tocSections.push({ id: slugify(match[1]), label: match[1] });
  }
  if (faqs?.length > 0) {
    tocSections.push({ id: 'preguntas-frecuentes', label: 'Preguntas frecuentes' });
  }

  const post = { ...frontmatter };
  const relatedPosts = getRelatedPosts(category, frontmatter.categorySlug, frontmatter.tags);

  return (
    <>
      {tocSections.length > 0 && <TableOfContents sections={tocSections} />}
      <BlogLayout>
        <PostHeader post={post} />
        <PostAuthorBox post={post} />
        <PostContentMD frontmatter={frontmatter} body={body} faqs={faqs} />
        <PostReferences
          references={frontmatter.references}
          recommendedBibliography={frontmatter.recommendedBibliography}
        />
        <RelatedPosts posts={relatedPosts} />
        <CitationBox post={post} />
        <div className="max-w-4xl mx-auto px-6 pb-16">
          <NewsletterSection />
        </div>
      </BlogLayout>
    </>
  );
}