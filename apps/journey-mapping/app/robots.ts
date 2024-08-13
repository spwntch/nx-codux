import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/thank-you',
        '/_next/',
        '/api/',
        '/auth/',
        '/_error',
        '/404',
        '/500',
        '/sitemap.xml',
        '/robots.txt',
      ],
    },
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`,
  };
}
