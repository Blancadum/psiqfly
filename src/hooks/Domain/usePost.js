import { useState, useMemo } from 'react';
import { posts, allTags as ALL_TAGS } from '@/Data/Contents/posts';

export function usePost() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeTag, setActiveTag] = useState(null);

  const categories = useMemo(() => [...new Set(posts.map(p => p.category))], []);
  const allTags = ALL_TAGS;

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      const matchesTag = activeTag ? post.tags.includes(activeTag) : true;
      const matchesQuery = query
        ? post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(query.toLowerCase())
        : true;
      return matchesCategory && matchesTag && matchesQuery;
    });
  }, [query, activeCategory, activeTag]);

  const getPostBySlug = (slug) => posts.find(p => p.slug === slug) ?? null;

  return {
    posts: filteredPosts,
    categories,
    allTags,
    query,
    setQuery,
    activeCategory,
    setActiveCategory,
    activeTag,
    setActiveTag,
    getPostBySlug,
  };
}
