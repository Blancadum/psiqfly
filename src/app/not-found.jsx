import Link from 'next/link';
import { getAllPostsMetadata } from '@/lib/posts';
import { NotFoundSearch } from '@/components/Layout/NotFoundSearch';

export default function NotFound() {
  const posts = getAllPostsMetadata();

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-20">

      <div className="text-6xl mb-4 select-none">🧭</div>
      <h1 className="text-3xl md:text-4xl font-black text-[#1e293b] tracking-tight mb-2 text-center">
        Página no encontrada
      </h1>
      <p className="text-slate-500 text-base mb-10 text-center max-w-md">
        Esta URL no existe o fue eliminada. Usa el buscador para encontrar lo que necesitas.
      </p>

      <NotFoundSearch posts={posts} />

      <div className="flex flex-wrap gap-3 justify-center">
        <Link
          href="/blog"
          className="px-5 py-2.5 rounded-xl bg-[#9333ea] text-white text-sm font-semibold hover:bg-[#7e22ce] transition-colors"
        >
          Ir al Blog
        </Link>
        <Link
          href="/"
          className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-600 text-sm font-semibold hover:bg-slate-200 transition-colors"
        >
          Inicio
        </Link>
      </div>

    </div>
  );
}
