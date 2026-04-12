export const metadata = {
  title: 'Política de cookies | PsiQFly',
};

export default function CookiesPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-24 pb-16 prose prose-slate">
      <h1>Política de cookies</h1>
      <p>Esta web utiliza cookies propias y de terceros para mejorar la experiencia de usuario y analizar el tráfico.</p>
      <h2>Tipos de cookies</h2>
      <ul>
        <li><strong>Cookies técnicas:</strong> necesarias para el funcionamiento de la web (sesión, preferencias).</li>
        <li><strong>Cookies analíticas:</strong> Google Analytics 4, con datos anonimizados. Puedes desactivarlas desde la configuración de tu navegador.</li>
        <li><strong>Cookies de afiliación:</strong> enlace a Editorial Médica Panamericana. No recogemos datos personales de esas visitas.</li>
      </ul>
      <h2>Cómo desactivarlas</h2>
      <p>Puedes configurar tu navegador para rechazar o eliminar cookies en cualquier momento. Ten en cuenta que algunas funciones de la web pueden dejar de estar disponibles.</p>
    </div>
  );
}
