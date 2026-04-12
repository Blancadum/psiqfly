# PsiQFly®

**Plataforma de entrenamiento en razonamiento clínico para psicólogos noveles.**

Recurso didáctico interactivo que entrena el razonamiento diagnóstico, la mitigación de sesgos cognitivos y el autocuidado profesional en psicólogos en formación. Desarrollado como Trabajo Fin de Máster en el ISEP (2026).

---

## Tecnologías

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS**
- **NextAuth.js** — autenticación con Google OAuth
- **Resend** — newsletter y emails transaccionales
- **gray-matter + react-markdown** — contenido en Markdown
- **Google Analytics 4**

## Estructura de contenidos

El blog sigue una arquitectura de tres niveles:

```
/blog/[categoría]/[subcategoría]/[post]
```

Los posts se escriben en Markdown (`content/posts/`) con frontmatter YAML que controla el renderizado de componentes (grids, notas, FAQs, acordeones).

## Variables de entorno

Crea un archivo `.env.local` en la raíz con:

```
AUTH_SECRET=
AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=
RESEND_API_KEY=
NEWSLETTER_TO=
NEXT_PUBLIC_API_URL=
```

## Desarrollo local

```bash
npm install
npm run dev
```

## Autora

**Blanca De Uña Martín**
Psicóloga · Máster en Psicología Clínica y de la Salud (ISEP, 2026)
TFM publicado: [PsiQFly en ISEP](https://www.isep.es/tesina/psiqfly-recurso-didactico-pwa-razonamiento-diagnostico-mitigacion-sesgos-autocuidado-psicologos-noveles/)

---

© 2026 PsiQFly® · Todos los derechos reservados
