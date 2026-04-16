import React from 'react';
import Link from 'next/link';

export const PostNavigation = ({ post }) => (
  <nav className="psi-post-nav">
    <Link href="/blog" className="psi-post-nav-link group">
      <span className="psi-post-nav-link-arrow">←</span>
      <span>Blog</span>
    </Link>

    <span className="psi-post-nav-sep">|</span>

    <Link href={`/blog/${post.categorySlug}`} className="psi-post-nav-link group">
      {post.category}
    </Link>

    <span className="psi-post-nav-sep">/</span>

    <span className="psi-post-nav-current">
      {post.breadcrumb || post.title}
    </span>
  </nav>
);
