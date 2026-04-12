'use client';
import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { posts } from '@/Data/Contents/posts';
import { BlogLayout } from '@/components/blog/layout/BlogLayout';
import { PostHeader } from '@/components/blog/sections/PostHeader';
import { PostAuthorBox } from '@/components/blog/sections/PostAuthorBox';
import { PostContent } from '@/components/blog/sections/PostContent';
import { CitationBox } from '@/components/blog/sections/CitationBox';
import { PostReferences } from '@/components/blog/sections/PostReferences';

export const BlogPost = () => {
  const { category, slug } = useParams();
  const router = useRouter();

  const post = posts.find(p => p.categorySlug === category && p.slug === slug);

  useEffect(() => {
    if (!post) { router.replace('/404'); }
  }, [post, router]);

  if (!post) return null;

  return (
    <BlogLayout>
      <PostHeader post={post} />
      <PostAuthorBox post={post} />
      <PostContent post={post} />
      <PostReferences references={post.references} />
      <CitationBox post={post} />
      {/* <PostFooter post={post} related={related} /> */}
    </BlogLayout>
  );
};
