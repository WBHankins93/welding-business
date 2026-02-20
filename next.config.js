/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for Vercel deployment
  // Remove this if you want SSR
  // output: 'export',
  
  // Image optimization settings
  images: {
    // If using static export, set unoptimized to true
    // unoptimized: true,
  },
  
  // Tailwind CSS is already configured via @tailwindcss/vite
  // Next.js will use PostCSS automatically
}

module.exports = nextConfig
