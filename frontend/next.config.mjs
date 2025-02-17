/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.themealdb.com'], // Add your API's image domain here
  },
  experimental: {
    appDir: true, // Enable app directory for client components
  },
};

export default nextConfig;

  