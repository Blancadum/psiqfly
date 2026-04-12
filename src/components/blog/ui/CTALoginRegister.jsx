import Link from 'next/link';

export const CTALoginRegister = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 my-20">
      {/* ¡EL CAMBIO!: Añadimos .psi-card y paddings p-10 md:p-12 */}
      <div className="psi-card flex flex-col md:flex-row items-center justify-between gap-10 p-10 md:p-12 border-indigo-100/50 bg-white/50 backdrop-blur-sm">
        
        <div className="text-left flex-1">
          <h2 className="psi-title-section mb-2 text-indigo-900 dark:text-white">
            ¿Listo para practicar?
          </h2>
          <p className="psi-excerpt text-base">
            Accede con tu{' '}
            {/* ¡EL CAMBIO!: Aseguramos el texto en negrita y color indigo */}
            <span className="text-indigo-600 font-bold">correo institucional</span>{' '}
            o pide a tu centro que se suscriba.
          </p>
        </div>

        <div className="flex items-center gap-6 shrink-0">
          {/* ¡EL CAMBIO!: Aseguramos padding y sombra en el botón */}
          <Link
            href="/login"
            className="psi-btn-primary text-base px-10 py-3.5 shadow-xl hover:shadow-indigo-200 transition-all"
          >
            Iniciar sesión ›
          </Link>

          <Link
            href="/contacto" 
            className="hidden lg:flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-indigo-600 transition-colors"
          >
            Contactar <span className="text-lg">✉️</span>
          </Link>
        </div>
      </div>
    </section>
  );
};