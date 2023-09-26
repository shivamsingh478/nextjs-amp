/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.helperplace.com"],
    },
    publicRuntimeConfig: {
        AMPStylesPath: '/output.css',
    },
};

module.exports = nextConfig;
