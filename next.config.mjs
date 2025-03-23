/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'v0.blob.com'],
  },
  // Completely empty experimental section
  experimental: {},
  // Add output configuration to static export
  output: 'export',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'v0.blob.com'],
  },
  // Disable source maps in production
  productionBrowserSourceMaps: false,
}

export default nextConfig