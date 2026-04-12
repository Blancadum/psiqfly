import { notFound } from 'next/navigation';
import { posts } from '@/Data/Contents/posts';
import { getPostBySlug } from '@/lib/posts';
import { BlogLayout } from '@/components/blog/layout/BlogLayout';
import { PostHeader } from '@/components/blog/sections/PostHeader';
import { PostAuthorBox } from '@/components/blog/sections/PostAuthorBox';
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
  const { slug } = await params;
  const mdPost = getPostBySlug(slug);
  if (!mdPost) return { title: 'Post no encontrado | PsiQFly' };
  const { frontmatter } = mdPost;
  return {
    title: `${frontmatter.title} | PsiQFly`,
    description: frontmatter.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const mdPost = getPostBySlug(slug);

  if (!mdPost) notFound();

  const { frontmatter, body, faqs } = mdPost;

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
  const relatedPosts = getRelatedPosts(slug, frontmatter.categorySlug, frontmatter.tags);

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
