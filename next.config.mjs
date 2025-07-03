// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Mantenemos esta configuración para permitir las URLs de DiceBear
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.dicebear.com', // ¡Este dominio es CRÍTICO para DiceBear!
        port: '',
        pathname: '/7.x/**',
      },
      // Si tienes otras imágenes remotas (CDN, etc.), agrégalas aquí
    ],
  },
}

export default nextConfig