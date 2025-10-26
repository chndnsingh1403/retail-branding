// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
    // Disable image optimization temporarily to avoid SSL issues
    unoptimized: process.env.NODE_ENV === 'development',
  },
  experimental: {
    // Disable SSL verification for external images in development
    ...(process.env.NODE_ENV === 'development' && {
      serverActions: {
        allowedOrigins: ['images.unsplash.com']
      }
    })
  }
};

export default nextConfig;
