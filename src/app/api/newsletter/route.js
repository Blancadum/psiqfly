import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { nombre, email } = await request.json();

  if (!email || !nombre) {
    return Response.json({ error: 'Faltan campos obligatorios.' }, { status: 400 });
  }

  try {
    // Email de confirmación al suscriptor
    await resend.emails.send({
      from: 'PsiQFly <onboarding@resend.dev>',
      to: email,
      subject: '¡Ya estás suscrita a PsiQFly! 🧠',
      html: `
        <div style="font-family: sans-serif; max-width: 520px; margin: 0 auto; padding: 32px; color: #1e293b;">
          <h1 style="font-size: 24px; font-weight: 900; margin-bottom: 8px;">Hola, ${nombre} 👋</h1>
          <p style="color: #64748b; line-height: 1.6;">
            Ya eres parte de <strong>PsiQFly</strong>. A partir de ahora recibirás artículos sobre
            razonamiento diagnóstico, sesgos cognitivos y psicopatología clínica — recursos pensados
            para psicólogos que empiezan.
          </p>
          <p style="color: #64748b; line-height: 1.6; margin-top: 16px;">
            Mientras tanto, puedes explorar el blog:
          </p>
          <a href="https://psiqfly.com/blog"
            style="display: inline-block; margin-top: 16px; padding: 12px 24px; background: #9333ea; color: white; border-radius: 10px; text-decoration: none; font-weight: 700;">
            Ir al Blog →
          </a>
          <p style="margin-top: 32px; font-size: 12px; color: #94a3b8;">
            Puedes darte de baja en cualquier momento respondiendo a este email.
          </p>
        </div>
      `,
    });

    // Notificación interna a Blanca
    await resend.emails.send({
      from: 'PsiQFly <onboarding@resend.dev>',
      to: process.env.NEWSLETTER_TO,
      subject: `Nueva suscripción: ${nombre}`,
      html: `<p><strong>${nombre}</strong> (${email}) se ha suscrito a la newsletter.</p>`,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error('Resend error:', err);
    return Response.json({ error: 'Error al enviar el email.' }, { status: 500 });
  }
}
