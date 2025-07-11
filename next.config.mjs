/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        swcLoader: '@next/swc-wasm-nodejs',
    },
};

export default nextConfig;