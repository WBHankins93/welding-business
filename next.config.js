/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for Vercel deployment
  // Remove this if you want SSR
  // output: 'export',
  
  // Image optimization settings
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  
  // Tailwind CSS is configured via PostCSS (see postcss.config.js)
}

module.exports = nextConfig
