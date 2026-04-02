/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow Google profile photo URLs for reviews
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
      },
    ],
  },
  compress: true,
};

module.exports = nextConfig;
