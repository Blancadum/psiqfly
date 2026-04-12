import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <div className="psi-legal-section">
    <h2 className="psi-legal-section-title">{title}</h2>
    <div className="psi-legal-section-body">{children}</div>
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const BulletList = ({ items }) => (
  <ul className="psi-legal-list">
    {items.map(item => (
      <li key={item} className="psi-legal-list-item">
        <span className="psi-legal-bullet">•</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

BulletList.propTypes = { items: PropTypes.arrayOf(PropTypes.string).isRequired };

const LegalLayout = ({ badge, title, updated, children }) => (
  <div className="psi-legal-layout">
    <div className="max-w-3xl mx-auto px-8 py-14">
      <span className="psi-legal-badge">{badge}</span>
      <h1 className="psi-legal-h1">{title}</h1>
      <p className="psi-legal-updated">Última actualización: {updated}</p>

      <div className="psi-legal-card">{children}</div>

      <nav className="psi-legal-nav">
        <Link href="/legal" className="psi-legal-link">Aviso legal</Link>
        <span className="text-slate-300">·</span>
        <Link href="/privacidad" className="psi-legal-link">Privacidad</Link>
        <span className="text-slate-300">·</span>
        <Link href="/cookies" className="psi-legal-link">Cookies</Link>
        <span className="text-slate-300">·</span>
        <Link href="/" className="text-sm text-slate-400 hover:text-[#634AE6] font-medium">← Volver al inicio</Link>
      </nav>
    </div>
  </div>
);

LegalLayout.propTypes = {
  badge: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  updated: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export const AvisoLegal = () => (
  <LegalLayout badge="Legal" title="Aviso legal" updated="abril 2026">
    <Section title="1. Identificación del titular">
      <p>
        En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
        Información y de Comercio Electrónico (LSSI-CE), se informa que el presente sitio web,{' '}
        <strong className="psi-legal-strong">PsiQFly</strong>, es un proyecto de carácter
        académico desarrollado como Trabajo de Fin de Máster por{' '}
        <strong className="psi-legal-strong">Blanca De Uña Martín</strong>,
        en el marco del programa de formación del ISEP (2026).
      </p>
      <p>Contacto: <a href="mailto:contacto@psiqfly.com" className="psi-legal-a">contacto@psiqfly.com</a></p>
    </Section>

    <Section title="2. Objeto y finalidad">
      <p>
        PsiQFly es una aplicación web progresiva (PWA) con fines exclusivamente docentes e investigadores,
        orientada al entrenamiento del razonamiento diagnóstico clínico y la reducción de sesgos cognitivos
        en psicólogos en formación. No tiene carácter comercial.
      </p>
    </Section>

    <Section title="3. Marca registrada">
      <p>
        <strong className="psi-legal-strong">PsiQFly®</strong> es una marca registrada
        en la Oficina Española de Patentes y Marcas (OEPM) con número de solicitud{' '}
        <strong className="psi-legal-strong">M4323373</strong>.
        Queda prohibido el uso del nombre, logotipo o cualquier signo distintivo asociado a PsiQFly
        sin autorización expresa y por escrito de su titular.
      </p>
      <p>
        Puedes consultar el expediente en el{' '}
        <a
          href="https://www.tmdn.org/tmview/#/tmview/results?page=1&pageSize=30&criteria=C&applicationNumber=M4323373&offices=ES&lang=es"
          target="_blank"
          rel="noopener noreferrer"
          className="psi-legal-a"
        >
          registro oficial de marcas (TMDN)
        </a>.
      </p>
    </Section>

    <Section title="4. Propiedad intelectual">
      <p>
        Todos los contenidos de este sitio web —incluyendo textos, diseño, logotipos, casos clínicos simulados
        y material didáctico— son propiedad de su autora o están sujetos a licencias de uso legítimo.
        Queda prohibida su reproducción, distribución o transformación sin autorización expresa.
      </p>
    </Section>

    <Section title="5. Responsabilidad">
      <p>
        Los casos clínicos disponibles en PsiQFly son <strong className="psi-legal-strong">ficticios</strong> y
        tienen propósito exclusivamente formativo. No constituyen diagnóstico clínico real ni sustituyen
        la supervisión profesional. La autora no se responsabiliza del uso indebido de los contenidos.
      </p>
    </Section>

    <Section title="6. Legislación aplicable">
      <p>
        Este aviso legal se rige por la legislación española. Cualquier controversia se someterá a los
        juzgados y tribunales competentes conforme a la normativa vigente.
      </p>
    </Section>
  </LegalLayout>
);

export const Privacidad = () => (
  <LegalLayout badge="Privacidad" title="Política de privacidad" updated="abril 2026">
    <Section title="1. Responsable del tratamiento">
      <p>
        <strong className="psi-legal-strong">Blanca De Uña Martín</strong> — Proyecto TFM PsiQFly, ISEP 2026.<br />
        Contacto: <a href="mailto:blancadum@gmail.com" className="psi-legal-a">blancadum@gmail.com</a>
      </p>
    </Section>

    <Section title="2. Datos que recogemos">
      <p>Al registrarte en PsiQFly, recogemos los siguientes datos:</p>
      <BulletList items={[
        'Nombre completo',
        'Dirección de email institucional',
        'Contraseña (almacenada de forma cifrada)',
        'Datos de uso de la plataforma (casos realizados, respuestas, progreso)',
      ]} />
      <p className="mt-3">
        No recogemos datos de salud reales. Los casos clínicos son ficticios y no implican el
        tratamiento de información sanitaria personal.
      </p>
    </Section>

    <Section title="3. Finalidad y base legal">
      <p>Los datos se tratan con las siguientes finalidades:</p>
      <BulletList items={[
        'Gestión del acceso a la plataforma (base legal: ejecución de contrato)',
        'Seguimiento del progreso formativo y generación de feedback (base legal: interés legítimo docente)',
        'Mejora de la plataforma mediante análisis de uso agregado y anonimizado (base legal: interés legítimo)',
      ]} />
    </Section>

    <Section title="4. Conservación de datos">
      <p>
        Los datos se conservarán durante el tiempo necesario para la prestación del servicio y,
        en todo caso, durante el periodo de vigencia académica del proyecto (hasta diciembre de 2026).
        Transcurrido ese plazo, los datos serán eliminados o anonimizados.
      </p>
    </Section>

    <Section title="5. Tus derechos">
      <p>
        Puedes ejercer en cualquier momento tus derechos de <strong className="psi-legal-strong">acceso, rectificación,
        supresión, portabilidad y oposición</strong> escribiendo a{' '}
        <a href="mailto:contacto@psiqfly.com" className="psi-legal-a">contacto@psiqfly.com</a>.
        También tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD).
      </p>
    </Section>

    <Section title="6. Transferencias internacionales">
      <p>No se realizan transferencias de datos fuera del Espacio Económico Europeo.</p>
    </Section>
  </LegalLayout>
);

const COOKIES_TABLE = [
  { name: 'user',  type: 'Técnica',     purpose: 'Mantener la sesión del usuario autenticado', duration: 'Sesión' },
  { name: 'theme', type: 'Preferencia', purpose: 'Recordar el modo claro/oscuro elegido',      duration: 'Persistente' },
];

export const Cookies = () => (
  <LegalLayout badge="Cookies" title="Política de cookies" updated="abril 2026">
    <Section title="¿Qué son las cookies?">
      <p>
        Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo
        cuando los visitas. Permiten recordar información sobre tu sesión y preferencias.
      </p>
    </Section>

    <Section title="Cookies que utilizamos">
      <div className="overflow-x-auto mt-2">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="bg-indigo-50 dark:bg-slate-700">
              <th className="text-left p-3 font-bold text-slate-700 dark:text-slate-300 rounded-tl-xl">Nombre</th>
              <th className="text-left p-3 font-bold text-slate-700 dark:text-slate-300">Tipo</th>
              <th className="text-left p-3 font-bold text-slate-700 dark:text-slate-300">Finalidad</th>
              <th className="text-left p-3 font-bold text-slate-700 dark:text-slate-300 rounded-tr-xl">Duración</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
            {COOKIES_TABLE.map(row => (
              <tr key={row.name} className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                <td className="p-3 font-mono text-[#634AE6]">{row.name}</td>
                <td className="p-3 text-slate-600 dark:text-slate-400">{row.type}</td>
                <td className="p-3 text-slate-600 dark:text-slate-400">{row.purpose}</td>
                <td className="p-3 text-slate-600 dark:text-slate-400">{row.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4">
        PsiQFly <strong className="psi-legal-strong">no utiliza cookies de publicidad ni de terceros</strong>.
        No compartimos información de navegación con ninguna plataforma externa.
      </p>
    </Section>

    <Section title="Cookies de análisis">
      <p>
        Actualmente no utilizamos herramientas de analítica de terceros (como Google Analytics).
        Si en el futuro se incorporan, esta política se actualizará y se solicitará tu consentimiento.
      </p>
    </Section>

    <Section title="Cómo gestionar las cookies">
      <p>
        Puedes configurar tu navegador para bloquear o eliminar cookies en cualquier momento.
        Ten en cuenta que deshabilitar las cookies técnicas puede afectar al funcionamiento de la plataforma
        (por ejemplo, no podrás mantener tu sesión iniciada).
      </p>
      <BulletList items={[
        'Chrome: Configuración → Privacidad y seguridad → Cookies',
        'Firefox: Preferencias → Privacidad y seguridad',
        'Safari: Preferencias → Privacidad',
        'Edge: Configuración → Cookies y permisos del sitio',
      ]} />
    </Section>
  </LegalLayout>
);
