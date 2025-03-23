/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'v0.blob.com'],
  },
  experimental: {
    outputFileTracingExcludes: {
      '*': [
        'node_modules/**',
        '.git/**',
        '.next/**',
      ],
    },
  }
}

export default nextConfig

