import Link from 'next/link';
import PropTypes from 'prop-types';

export const RelatedPosts = ({ posts }) => {
  if (!posts?.length) return null;

  return (
    <section className="psi-related-posts">
      <h3 className="psi-related-posts-label">También te puede interesar</h3>
      <div className="psi-related-posts-grid">
        {posts.map(post => (
          <Link
            key={post.slug}
            href={`/blog/${post.categorySlug}${post.subcategorySlug ? '/' + post.subcategorySlug : ''}/${post.slug}`}
            className="psi-related-post-card group"
          >
            <div className="psi-related-post-header">
              <span className="text-2xl">{post.emoji}</span>
              <span className="psi-related-post-category">{post.category}</span>
            </div>
            <p className="psi-related-post-title">{post.title}</p>
            <p className="psi-related-post-excerpt">{post.excerpt}</p>
            <p className="psi-related-post-readtime">{post.readTime}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

RelatedPosts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      categorySlug: PropTypes.string.isRequired,
      subcategorySlug: PropTypes.string,
      emoji: PropTypes.string,
      category: PropTypes.string,
      title: PropTypes.string,
      excerpt: PropTypes.string,
      readTime: PropTypes.string,
    })
  ),
};
