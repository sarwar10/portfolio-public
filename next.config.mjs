/** @type {import('next').NextConfig} */
const nextConfig = {
  
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
    ],
  },
  allowedDevOrigins: [
    'http://localhost:3000',
    'http://192.168.29.188:3000', // Add your LAN IP and port here
  ],
};

export default nextConfig;
