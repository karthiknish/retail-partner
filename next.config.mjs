/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'theretailfactory.co.uk',
            },
        ],
    },
};

export default nextConfig;
