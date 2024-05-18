/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: [
    "@repo/ui",
    "@repo/utils"
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/**',
      },
    ],
  }
};
