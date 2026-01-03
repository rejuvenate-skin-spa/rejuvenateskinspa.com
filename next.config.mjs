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
        destination: '/chemical-peels/biorepeel-chemical-peels',
        permanent: true,
      },
      {
        source: '/biorepeel-facial-chemical-peel',
        destination: '/chemical-peels/biorepeel-chemical-peels',
        permanent: true,
      },
      {
        source: '/biorepeel-facial-chemical-peel/35-tca-peel',
        destination: '/chemical-peels/biorepeel-facial-peels',
        permanent: true,
      },
      {
        source: '/biorepeel-facial-chemical-peel/50-tca-peel',
        destination: '/chemical-peels/biorepeel-body-peels',
        permanent: true,
      },
      {
        source: '/chemical-peel-treatment/tca-peel',
        destination: '/chemical-peels/tca-peels',
        permanent: true,
      },
      {
        source: '/chemical-peel-treatment/glycolic-acid-peel',
        destination: '/chemical-peels/glycolic-acid-peels',
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
