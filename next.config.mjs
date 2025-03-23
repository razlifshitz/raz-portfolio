/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'v0.blob.com'],
  },
  // Disable the problematic build trace collection
  experimental: {
    // Disable the feature causing the stack overflow
    outputFileTracingRoot: null,
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

