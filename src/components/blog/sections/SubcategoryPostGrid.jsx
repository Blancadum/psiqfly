import Link from 'next/link';
import PropTypes from 'prop-types';

export const SubcategoryPostGrid = ({ posts }) => {
  if (!posts?.length) return null;

  return (
    <section className="max-w-4xl mx-auto px-6 mt-12 mb-8">
      <h2 className="psi-article-h2 mb-6">Artículos en esta categoría</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map(post => (
          <Link
            key={post.slug}
            href={`/blog/${post.categorySlug}${post.subcategorySlug ? '/' + post.subcategorySlug : ''}/${post.slug}`}
            className="psi-hub-post-card group flex flex-col"
          >
            {post.emoji && <span className="text-2xl mb-3">{post.emoji}</span>}
            <p className="psi-hub-post-title">{post.title}</p>
            <p className="psi-hub-post-excerpt">{post.excerpt}</p>
            {post.readTime && (
              <span className="psi-hub-post-readtime mt-auto pt-3">{post.readTime}</span>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
};

SubcategoryPostGrid.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      categorySlug: PropTypes.string,
      subcategorySlug: PropTypes.string,
      emoji: PropTypes.string,
      title: PropTypes.string.isRequired,
      excerpt: PropTypes.string,
      readTime: PropTypes.string,
    })
  ),
};
