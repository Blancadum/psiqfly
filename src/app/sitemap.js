import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BASE_URL = 'https://psiqfly.com';
const POSTS_DIR = path.join(process.cwd(), 'content/posts');

function getAllMdFiles(dir) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) {
      results.push(...getAllMdFiles(path.join(dir, entry.name)));
    } else if (entry.name.endsWith('.md') && !entry.name.startsWith('_')) {
      results.push(path.join(dir, entry.name));
    }
  }
  return results;
}

export default function sitemap() {
  // Páginas estáticas
  const staticPages = [
    { url: BASE_URL, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/blog`, priority: 0.9, changeFrequency: 'daily' },
    { url: `${BASE_URL}/about`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/autora`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/contacto`, priority: 0.5, changeFrequency: 'monthly' },
  ];

  // Posts desde MD
  const files = getAllMdFiles(POSTS_DIR);
  const postPages = files.map(filePath => {
    const content = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(content);

    const { slug, categorySlug, updatedAt, createdAt } = data;
    if (!slug || !categorySlug) return null;

    const lastModified = updatedAt || createdAt || new Date().toISOString();

    return {
      url: `${BASE_URL}/blog/${categorySlug}/${slug}`,
      lastModified: new Date(lastModified).toISOString(),
      priority: 0.8,
      changeFrequency: 'weekly',
    };
  }).filter(Boolean);

  return [...staticPages, ...postPages];
}
