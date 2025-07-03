/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // CAMBIO CRÍTICO: Eliminar 'unoptimized: true' para permitir la optimización de imágenes de Next.js
    // unoptimized: true, // ¡COMENTA O ELIMINA ESTA LÍNEA!

    // AÑADIDO: Configuración de dominios remotos permitidos para next/image
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.dicebear.com', // Dominio para los avatares de testimonios
        port: '',
        pathname: '/7.x/**', // Patrón de path para los avatares
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