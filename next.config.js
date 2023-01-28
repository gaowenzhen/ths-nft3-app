/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    images: {
        domains: ["chainlist.org"],
    },
};
module.exports = nextConfig;


