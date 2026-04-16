import PropTypes from 'prop-types';
import Link from 'next/link';
import { Breadcrumb } from '@/components/blog/ui/Breadcrumb';

export const PostHeader = ({ post }) => {
  // 1. Construimos los items base del breadcrumb
  const breadcrumbItems = [
    { label: 'Blog', to: '/blog' },
    { label: post.category, to: `/blog/${post.categorySlug}` },
  ];

  // 2. Inyectamos la subcategoría solo si existe en los metadatos
  if (post.subcategory && post.subcategorySlug) {
    breadcrumbItems.push({ 
      label: post.subcategory, 
      to: `/blog/${post.categorySlug}/${post.subcategorySlug}` 
    });
  }

  // 3. Añadimos el nivel final (el post actual)
  breadcrumbItems.push({ label: post.breadcrumb || post.title });

  return (
    <header className="psi-post-header">

      {/* 1. BADGE DE CATEGORÍA + PUBLI */}
      <div className="psi-post-header-meta">
        <Link href={`/blog/${post.categorySlug}`} className="psi-post-category-badge">
          {post.category}
        </Link>
        {post.sponsored && (
          <span className="psi-post-sponsored-badge">Publi</span>
        )}
      </div>

      {/* 2. BREADCRUMB DINÁMICO */}
      <div className="mb-4">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* 3. TÍTULO CON EMOJI */}
      <div className="psi-post-title-wrap group">
        <span className="psi-post-emoji">{post.emoji}</span>
        <h1 className="psi-post-title">{post.title}</h1>
      </div>

      {/* 4. EXCERPT */}
      <p className="psi-post-excerpt">{post.excerpt}</p>

    </header>
  );
};

PostHeader.propTypes = {
  post: PropTypes.shape({
    category: PropTypes.string.isRequired,
    categorySlug: PropTypes.string.isRequired,
    subcategory: PropTypes.string, // Opcional
    subcategorySlug: PropTypes.string, // Opcional
    breadcrumb: PropTypes.string.isRequired,
    emoji: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
  }).isRequired,
};