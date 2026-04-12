import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

// Esto le dice a Node dónde están tus archivos .md
const postsDirectory = path.join(process.cwd(), 'content/posts');

export function getPostData(slug) {
  // Construye la ruta: content/posts/anclaje.md
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // matter separa los guiones --- del texto de abajo
  const { data, content } = matter(fileContents);

  return {
    slug,
    ...data,
    content,
  };
}