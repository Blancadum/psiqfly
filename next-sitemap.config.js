/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://psiqfly.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,

  // Rutas que NO deben indexarse
  exclude: [
    '/dashboard',
    '/dashboard/*',
    '/login',
    '/register',
    '/messages',
    '/messages/*',
    '/cases',
    '/cases/*',
    '/api/*',
  ],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/dashboard',
          '/login',
          '/register',
          '/messages',
          '/cases',
          '/api/',
          '/_next/',
        ],
      },
    ],
  },
};
