import { postBienestar } from './bienestar';
import { postFormacion } from './formacion';

export const posts = [
  postBienestar,
  postFormacion,
];

export const allTags = [...new Set(posts.flatMap(p => p.tags ?? []))].sort((a, b) =>
  a.localeCompare(b)
);
