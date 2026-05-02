/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Дозволяємо AVIF для твого файлу kino.avif
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Вимикаємо trailing slash, це часто допомагає при помилках 403 на Vercel
  trailingSlash: false,
};

export default nextConfig;