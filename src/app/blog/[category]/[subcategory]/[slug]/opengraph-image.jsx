import { ImageResponse } from 'next/og';
import { getPostBySlug } from '@/lib/posts';

export const runtime = 'nodejs';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OgImage({ params }) {
  const { slug } = await params;
  const mdPost = getPostBySlug(slug);
  const title = mdPost?.frontmatter?.title ?? 'PsiQFly';
  const emoji = mdPost?.frontmatter?.emoji ?? '🧠';
  const category = mdPost?.frontmatter?.category ?? 'Psicología Clínica';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '72px 80px',
          background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #4c1d95 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Category pill */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(255,255,255,0.12)',
            borderRadius: '999px',
            padding: '6px 18px',
            marginBottom: '28px',
          }}
        >
          <span style={{ color: '#c4b5fd', fontSize: '15px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            {category}
          </span>
        </div>

        {/* Emoji */}
        <div style={{ fontSize: '80px', marginBottom: '24px', lineHeight: 1 }}>
          {emoji}
        </div>

        {/* Title */}
        <div
          style={{
            color: '#ffffff',
            fontSize: title.length > 50 ? '42px' : '52px',
            fontWeight: 800,
            lineHeight: 1.2,
            maxWidth: '900px',
            marginBottom: '40px',
          }}
        >
          {title}
        </div>

        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: 'auto' }}>
          <div
            style={{
              background: 'linear-gradient(135deg, #634AE6, #E245B6)',
              borderRadius: '8px',
              padding: '6px 14px',
              color: '#fff',
              fontSize: '18px',
              fontWeight: 900,
              letterSpacing: '-0.02em',
            }}
          >
            PsiQFly®
          </div>
          <span style={{ color: '#a5b4fc', fontSize: '16px' }}>psiqfly.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
