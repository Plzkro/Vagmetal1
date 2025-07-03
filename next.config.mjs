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
        hostname: 'api.dicebear.com',
        port: '',
        // CAMBIO CRÍTICO AQUÍ: Esto permite cualquier cosa después de /7.x/ y antes de un query string
        // Esto cubre tanto /7.x/adventurer/svg como /7.x/fun-emoji/svg
        pathname: '/7.x/**/*.svg', 
      },
      // Si tienes otras imágenes remotas (CDN, etc.), agrégalas aquí
    ],
  },
}

export default nextConfig