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
    <header className="max-w-4xl mx-auto px-6 pt-8 pb-5">

      {/* 1. BADGE DE CATEGORÍA + PUBLI */}
      <div className="flex items-center gap-3 mb-2">
        <Link
          href={`/blog/${post.categorySlug}`}
          className="px-3 py-1 rounded-full bg-[#f3ebff] text-[#9333ea] text-xs font-bold tracking-wide hover:bg-[#ede0ff] transition-colors"
        >
          {post.category}
        </Link>
        {post.sponsored && (
          <span className="px-2.5 py-1 rounded-full border border-amber-300 bg-amber-50 text-amber-700 text-[10px] font-black uppercase tracking-widest">
            Publi
          </span>
        )}
      </div>

      {/* 2. BREADCRUMB DINÁMICO */}
      <div className="mb-4">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* 3. TÍTULO CON EMOJI */}
      <div className="relative group">
        <span className="absolute -left-10 top-1 text-3xl hidden lg:block opacity-80 group-hover:scale-110 transition-transform">
          {post.emoji}
        </span>
        <h1 className="text-[1.55rem] md:text-[2rem] font-black text-[#1e293b] leading-[1.15] tracking-[-0.03em]">
          {post.title}
        </h1>
      </div>

      {/* 4. EXCERPT */}
      <p className="mt-4 text-base text-slate-500 leading-relaxed font-medium max-w-3xl">
        {post.excerpt}
      </p>

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