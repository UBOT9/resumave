/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  experimental: {
    forceSwcTransforms: false,
  },
  // Completely disable SWC
  compiler: {
    // Disable all SWC features
    removeConsole: false,
    reactRemoveProperties: false,
    styledComponents: false,
  },
};

export default nextConfig;