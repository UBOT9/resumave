/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  experimental: {
    forceSwcTransforms: false,
  },
  webpack: (config, { dev, isServer }) => {
    // Force disable native SWC loading
    if (dev && !isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@next/swc-linux-x64-gnu': false,
        '@next/swc-linux-x64-musl': false,
      };
    }
    return config;
  },
};

export default nextConfig;