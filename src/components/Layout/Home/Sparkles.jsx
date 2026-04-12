"use client";
import { useRef, useEffect } from 'react';

const COLORS = [
  '#634AE6', '#E245B6', '#818CF8', '#F472B6',
  '#FBBF24', '#60A5FA', '#A78BFA', '#FB7185',
  '#34D399', '#F9A8D4', '#C4B5FD', '#FDE68A',
];

const drawDiamond = (ctx, x, y, size, rotation) => {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.beginPath();
  ctx.moveTo(0, -size);
  ctx.lineTo(size * 0.5, 0);
  ctx.lineTo(0, size);
  ctx.lineTo(-size * 0.5, 0);
  ctx.closePath();
  ctx.restore();
};

const drawStar4 = (ctx, x, y, size, rotation) => {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.beginPath();
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    const r = i % 2 === 0 ? size : size * 0.38;
    i === 0
      ? ctx.moveTo(Math.cos(angle) * r, Math.sin(angle) * r)
      : ctx.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
  }
  ctx.closePath();
  ctx.restore();
};

// Uso: <Sparkles /> dentro de un div con position: relative
export const Sparkles = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const rafRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const parent = canvas.parentElement;

    const resize = () => {
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(parent);

    const spawn = (count) => {
      for (let i = 0; i < count; i++) {
        const shapeValue = Math.random();
        let shapeType = 'circle';
        if (shapeValue < 0.4) {
          shapeType = 'diamond';
        } else if (shapeValue < 0.75) {
          shapeType = 'star';
        }
        
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 5 + 2,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          vx: (Math.random() - 0.5) * 3,
          vy: -(Math.random() * 2.5 + 0.5),
          alpha: 1,
          decay: Math.random() * 0.018 + 0.009,
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.18,
          shape: shapeType,
        });
      }
    };

    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = Math.abs(currentY - lastScrollY.current);
      if (delta > 3) {
        spawn(Math.min(Math.floor(delta / 2), 16));
        lastScrollY.current = currentY;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current = particles.current.filter(p => p.alpha > 0.02);

      for (const p of particles.current) {
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;

        if (p.shape === 'diamond') {
          drawDiamond(ctx, p.x, p.y, p.size, p.rotation);
          ctx.fill();
        } else if (p.shape === 'star') {
          drawStar4(ctx, p.x, p.y, p.size, p.rotation);
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.55, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();

        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.06;
        p.vx *= 0.99;
        p.alpha -= p.decay;
        p.rotation += p.rotSpeed;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      ro.disconnect();
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="psi-sparkles-canvas" />
  );
};
