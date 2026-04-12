import { transporter } from '@/lib/mailer';

export async function POST(request) {
  const { name, email, subject, message } = await request.json();

  if (!name || !email || !message) {
    return Response.json({ error: 'Faltan campos obligatorios.' }, { status: 400 });
  }

  try {
    await transporter.sendMail({
      from: `"PsiQFly Web" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: subject ? `Contacto: ${subject}` : `Contacto de ${name}`,
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${subject || '—'}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error('SMTP error:', err);
    return Response.json({ error: 'Error al enviar el mensaje.' }, { status: 500 });
  }
}
