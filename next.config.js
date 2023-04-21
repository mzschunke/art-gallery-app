/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,

  },

  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example-apis.vercel.app',
        port: '',
        pathname: '/assets/art/**',
      },
    ],
  },
}


/*
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example-apis.vercel.app',
        port: '',
        pathname: '/assets/art/**',
      },
    ],
  },
  */


