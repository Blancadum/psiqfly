import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPostsMetadata } from '@/lib/posts';
import { BlogLayout } from '@/components/blog/layout/BlogLayout';
import { PostHeader } from '@/components/blog/sections/PostHeader';
import { PostAuthorBox } from '@/components/blog/sections/PostAuthorBox';
import { PostContentMD } from '@/components/blog/sections/PostContentMD';
import { PostReferences } from '@/components/blog/sections/PostReferences';
import { RelatedPosts } from '@/components/blog/sections/RelatedPosts';
import { CitationBox } from '@/components/blog/sections/CitationBox';
import { SubcategoryPostGrid } from '@/components/blog/sections/SubcategoryPostGrid';
import { TableOfContents } from '@/components/blog/ui/TableOfContents';
import { NavDropdown } from '@/components/blog/ui/NavDropdown';
import { NewsletterSection } from '@/components/Layout/NewsletterSection';

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
  const { subcategory } = await params;
  const mdPost = getPostBySlug(subcategory);
  if (mdPost) {
    const { frontmatter } = mdPost;
    return {
      title: `${frontmatter.title} | PsiQFly`,
      description: frontmatter.excerpt,
    };
  }
  const label = subcategory.replaceAll('-', ' ');
  return { title: `${label} | PsiQFly` };
}

export default async function SubCategoryLandingPage({ params }) {
  const { category, subcategory } = await params;

  const mdPost = getPostBySlug(subcategory);

  // Child posts: same subcategorySlug, excluding the landing itself
  const childPosts = getAllPostsMetadata()
    .filter(p => p.subcategorySlug === subcategory && p.slug !== subcategory)
    .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));

  if (!mdPost && childPosts.length === 0) notFound();

  if (!mdPost) {
    // No landing MD — show a simple heading + child posts grid
    const label = subcategory
      .split('-')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
    return (
      <BlogLayout>
        <div className="max-w-4xl mx-auto px-6 pt-10">
          <h1 className="text-3xl font-extrabold text-slate-800 dark:text-slate-100 mb-2">{label}</h1>
          <p className="text-slate-500 dark:text-slate-400 mb-8">Trastornos mentales · {label}</p>
        </div>
        <SubcategoryPostGrid posts={childPosts} />
        <div className="max-w-4xl mx-auto px-6 pb-16">
          <NewsletterSection />
        </div>
      </BlogLayout>
    );
  }

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
  const relatedPosts = getRelatedPosts(subcategory, frontmatter.categorySlug, frontmatter.tags);

  // Dropdown de trastornos individuales
  const dropdownItems = childPosts.map(p => ({
    href: `/blog/${p.categorySlug}${p.subcategorySlug ? '/' + p.subcategorySlug : ''}/${p.slug}`,
    emoji: p.emoji,
    label: p.title,
  }));

  return (
    <>
      {tocSections.length > 0 && <TableOfContents sections={tocSections} />}
      <BlogLayout>
        <PostHeader post={post} />
        <PostAuthorBox post={post} />
        {dropdownItems.length > 0 && (
          <div className="max-w-4xl mx-auto px-6 mb-6">
            <NavDropdown label="Trastornos en esta categoría" items={dropdownItems} />
          </div>
        )}
        <PostContentMD frontmatter={frontmatter} body={body} faqs={faqs} />
        {childPosts.length > 0 && <SubcategoryPostGrid posts={childPosts} />}
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
