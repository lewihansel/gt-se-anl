/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        ANIM_SERVICE: process.env.ANIM_SERVICE,
    },
};

const withPWA = require('next-pwa')({
    dest: 'public',
    disable: process.env.ENVIRONMENT !== 'production', // only on prod
});

module.exports = withPWA(nextConfig);
