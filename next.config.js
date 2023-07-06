// next.config.js
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    // Remove the invalid 'images' property from the 'experimental' field
  },
  // Use the 'output: export' option as suggested by the error message
  output: 'export',
};

module.exports = nextConfig;
