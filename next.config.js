const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // Turbopack configuration for Next.js 16
  turbopack: {},
  // Note: Security headers need to be configured at the hosting level for static exports
  // Headers configuration commented out due to static export limitation
  // async headers() {
  //   return [
  //     {
  //       source: '/(.*)',
  //       headers: [
  //         {
  //           key: 'X-Frame-Options',
  //           value: 'DENY'
  //         },
  //         {
  //           key: 'X-Content-Type-Options',
  //           value: 'nosniff'
  //         },
  //         {
  //           key: 'Referrer-Policy',
  //           value: 'origin-when-cross-origin'
  //         },
  //         {
  //           key: 'Permissions-Policy',
  //           value: 'camera=(), microphone=(), geolocation=()'
  //         },
  //         {
  //           key: 'Content-Security-Policy',
  //           value: [
  //             "default-src 'self'",
  //             "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
  //             "style-src 'self' 'unsafe-inline'",
  //             "img-src 'self' data: https:",
  //             "font-src 'self'",
  //             "connect-src 'self'",
  //             "frame-src 'none'"
  //           ].join('; ')
  //         }
  //       ]
  //     }
  //   ]
  // }
}

module.exports = withMDX(nextConfig)