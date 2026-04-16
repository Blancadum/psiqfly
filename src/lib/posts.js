import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

function findPostFile(dir, slug) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) {
      const found = findPostFile(path.join(dir, entry.name), slug);
      if (found) return found;
    } else if (entry.name === `${slug}.md` && !entry.name.startsWith('_')) {
      return path.join(dir, entry.name);
    }
  }
  return null;
}

export function getPostBySlug(slug) {
  try {
    const fullPath = findPostFile(postsDirectory, slug);
    if (!fullPath) return null;

    const raw = fs.readFileSync(fullPath, 'utf8');
    const fileContents = raw.replace(/\x00/g, '');
    const { data, content } = matter(fileContents);

    const faqRegex = /<!--\s*faqs\s*-->([\s\S]*?)<!--\s*\/faqs\s*-->/i;
    const match = content.match(faqRegex);

    let faqs = [];
    let cleanBody = content;

    if (match) {
      const rawFaqs = match[1].trim();
      cleanBody = content.replace(faqRegex, '').trim();

      const sections = rawFaqs.split(/(?=^### )/gm).filter(s => s.trim().startsWith('###'));
      faqs = sections.map(s => {
        const lines = s.trim().split('\n');
        const question = lines[0].replace(/^###\s*/, '').trim();
        const answer = lines.slice(1).join('\n').trim();
        return { question, answer };
      });
    }

    return {
      frontmatter: data,
      body: cleanBody,
      faqs: faqs.length > 0 ? faqs : null,
    };
  } catch (e) {
    console.error('Error cargando post:', e);
    return null;
  }
}

export function getAllPostsMetadata() {
  const slugs = getAllPostSlugs();
  return slugs
    .map(slug => {
      try {
        const result = getPostBySlug(slug);
        if (!result) return null;
        return { slug, ...result.frontmatter };
      } catch {
        return null;
      }
    })
    .filter(Boolean);
}

export function getAllPostSlugs() {
  const slugs = [];
  function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        walk(path.join(dir, entry.name));
      } else if (entry.name.endsWith('.md') && !entry.name.startsWith('_')) {
        slugs.push(entry.name.replace(/\.md$/, ''));
      }
    }
  }
  walk(postsDirectory);
  return slugs;
}
