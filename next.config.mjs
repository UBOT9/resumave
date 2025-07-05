/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.alias.canvas = false;
        return config;
    },
    experimental: {
        esmExternals: 'loose',
    },
};

export default nextConfig;