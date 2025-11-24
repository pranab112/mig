import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/_next/',
        '/admin/',
        '/.well-known/',
      ],
    },
    sitemap: 'https://mindisgear.com/sitemap.xml',
    host: 'https://mindisgear.com',
  }
}