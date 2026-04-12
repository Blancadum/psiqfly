import { transporter } from '@/lib/mailer';

export async function POST(request) {
  const { nombre, email } = await request.json();

  if (!email || !nombre) {
    return Response.json({ error: 'Faltan campos obligatorios.' }, { status: 400 });
  }

  try {
    // Notificación interna
    await transporter.sendMail({
      from: `"PsiQFly Web" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `Nueva suscripción: ${nombre}`,
      html: `<p><strong>${nombre}</strong> (${email}) se ha suscrito a la newsletter.</p>`,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error('SMTP error:', err);
    return Response.json({ error: 'Error al enviar el email.' }, { status: 500 });
  }
}
