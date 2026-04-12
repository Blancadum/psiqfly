import React from 'react';
import Link from 'next/link';

export const PostNavigation = ({ post }) => (
  <nav className="flex items-center gap-3 text-[10px] uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500 font-bold mb-10">
    <Link
      href="/blog"
      className="hover:text-indigo-600 transition-colors flex items-center gap-1.5 group"
    >
      <span className="text-xs group-hover:-translate-x-1 transition-transform">←</span>
      <span>Blog</span>
    </Link>

    <span className="text-slate-300 dark:text-slate-600">|</span>

    <Link
      href={`/blog/${post.categorySlug}`}
      className="hover:text-indigo-600 transition-colors tracking-widest"
    >
      {post.category}
    </Link>

    <span className="text-slate-300 dark:text-slate-600">/</span>

    <span className="text-slate-500 dark:text-slate-400 truncate max-w-[150px] md:max-w-[300px] font-medium normal-case tracking-normal">
      {post.breadcrumb || post.title}
    </span>
  </nav>
);
