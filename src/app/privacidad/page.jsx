export const metadata = {
  title: 'Política de privacidad | PsiQFly',
};

export default function PrivacidadPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-24 pb-16 prose prose-slate">
      <h1>Política de privacidad</h1>
      <p>En cumplimiento del Reglamento (UE) 2016/679 (RGPD), te informamos de cómo tratamos tus datos.</p>
      <h2>Responsable del tratamiento</h2>
      <p>Blanca De Uña Martín · blancadum@gmail.com</p>
      <h2>Datos que recogemos</h2>
      <ul>
        <li><strong>Formulario de contacto:</strong> nombre, email y mensaje. Finalidad: responder tu consulta.</li>
        <li><strong>Newsletter:</strong> nombre y email. Finalidad: envío de contenido formativo. Puedes darte de baja en cualquier momento.</li>
        <li><strong>Google Analytics:</strong> datos de navegación anónimos para mejorar el servicio.</li>
      </ul>
      <h2>Tus derechos</h2>
      <p>Puedes ejercer tus derechos de acceso, rectificación, supresión y portabilidad escribiendo a blancadum@gmail.com.</p>
    </div>
  );
}
