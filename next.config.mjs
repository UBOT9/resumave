/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        forceSwcTransforms: false,
    },
    swcMinify: false,
    compiler: {
        removeConsole: false,
    },
};

export default nextConfig;