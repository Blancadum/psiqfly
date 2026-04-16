'use client';
import { useEffect } from 'react';

export function TikTokLoader({ slug }) {
  useEffect(() => {
    const existing = document.getElementById('tiktok-script');
    if (existing) existing.remove();

    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    script.id = 'tiktok-script';
    document.body.appendChild(script);
  }, [slug]);

  return null;
}
