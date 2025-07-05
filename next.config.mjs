/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: false,
    experimental: {
        forceSwcTransforms: false,
    },
    webpack: config => {
        config.resolve.alias.canvas = false;
        return config;
    },
};

export default nextConfig;
