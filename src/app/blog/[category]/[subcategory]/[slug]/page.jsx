import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPostsMetadata } from '@/lib/posts';
import { BlogLayout } from '@/components/blog/layout/BlogLayout';
import { PostHeader } from '@/components/blog/sections/PostHeader';
import { PostAuthorBox } from '@/components/blog/sections/PostAuthorBox';
import { PostContentMD } from '@/components/blog/sections/PostContentMD';
import { PostReferences } from '@/components/blog/sections/PostReferences';
import { RelatedPosts } from '@/components/blog/sections/RelatedPosts';
import { CitationBox } from '@/components/blog/sections/CitationBox';
import { TableOfContents } from '@/components/blog/ui/TableOfContents';
import { TikTokLoader } from '@/components/blog/ui/TikTokLoader';
import { JsonLd } from '@/components/blog/ui/JsonLd';
import { NewsletterSection } from '@/components/Layout/NewsletterSection';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://psiqfly.com';

const slugify = (text) =>
  text.toLowerCase().normalize('NFD').replaceAll(/[\u0300-\u036f]/g, '').replaceAll(/[^a-z0-9]+/g, '-').replaceAll(/(^-|-$)/g, '');

function getRelatedPosts(currentSlug, categorySlug, tags = []) {
  return getAllPostsMetadata()
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
  const { category, subcategory, slug } = await params;
  const mdPost = getPostBySlug(slug);
  if (!mdPost) return { title: 'Post no encontrado | PsiQFly' };
  const { frontmatter } = mdPost;
  const url = `${SITE_URL}/blog/${category}/${subcategory}/${slug}`;
  return {
    title: `${frontmatter.title} | PsiQFly`,
    description: frontmatter.excerpt,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.excerpt,
      url,
      siteName: 'PsiQFly',
      locale: 'es_ES',
      type: 'article',
      publishedTime: frontmatter.createdAt,
      modifiedTime: frontmatter.updatedAt,
      tags: frontmatter.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title,
      description: frontmatter.excerpt,
    },
    alternates: { canonical: url },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const mdPost = getPostBySlug(slug);

  if (!mdPost) {
    notFound();
    return null;
  }

  const { frontmatter, body, faqs } = mdPost;

  const h2h3Regex = /^(##|###) (.+)$/gm;
  const tocSections = [];
  let match;
  while ((match = h2h3Regex.exec(body)) !== null) {
    const level = match[1] === '##' ? 2 : 3;
    const label = match[2];
    tocSections.push({
      id: slugify(label),
      label,
      level,
    });
  }
  if (faqs?.length > 0) {
    tocSections.push({ id: 'preguntas-frecuentes', label: 'Preguntas frecuentes', level: 2 });
  }

  const post = { ...frontmatter };
  const relatedPosts = getRelatedPosts(slug, frontmatter.categorySlug, frontmatter.tags);
  const { category, subcategory } = await params;
  const postUrl = `${SITE_URL}/blog/${category}/${subcategory}/${slug}`;

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: frontmatter.title,
    description: frontmatter.excerpt,
    url: postUrl,
    datePublished: frontmatter.createdAt,
    dateModified: frontmatter.updatedAt ?? frontmatter.createdAt,
    inLanguage: 'es',
    publisher: {
      '@type': 'Organization',
      name: 'PsiQFly',
      url: SITE_URL,
    },
    about: {
      '@type': 'MedicalCondition',
      name: frontmatter.title,
    },
    audience: {
      '@type': 'MedicalAudience',
      audienceType: 'Clinician',
    },
  };

  return (
    <>
      <JsonLd data={jsonLdData} />
      <TikTokLoader slug={slug} />
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
