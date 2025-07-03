/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // ELIMINADO: 'unoptimized: true' para permitir la optimización de imágenes de Next.js
    // AÑADIDO: Configuración de dominios remotos permitidos para next/image
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
        port: '',
        // CAMBIO CLAVE AQUÍ: Más flexible para URLs de DiceBear con o sin query params
        pathname: '/7.x/**/*.svg',
      },
      // Agrega otros dominios si utilizas imágenes de CDN o de otros servicios externos
      // {
      //   protocol: 'https',
      //   hostname: 'otro-dominio-de-imagenes.com',
      // },
    ],
  },
}

export default nextConfig