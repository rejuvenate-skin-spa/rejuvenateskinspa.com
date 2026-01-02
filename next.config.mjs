/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/about-us/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/plasma-skin-tightening',
        destination: '/plexr-plasma-skin-tightening',
        permanent: true,
      },
      {
        source: '/biorepeel-treatment',
        destination: '/biorepeel-facial-chemical-peel',
        permanent: true,
      },      
      {
        source: '/about-us/portfolio',
        destination: '/portfolio',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
