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
  
  // Tailwind CSS is already configured via @tailwindcss/vite
  // Next.js will use PostCSS automatically
}

module.exports = nextConfig
