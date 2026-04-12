export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/dashboard',
          '/login',
          '/register',
          '/api/',
          '/messages',
        ],
      },
    ],
    sitemap: 'https://psiqfly.com/sitemap.xml',
  };
}
