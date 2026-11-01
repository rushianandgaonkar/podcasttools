/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Ensure trailing slashes or clean URLs match canonical policy (no trailing slash)
  trailingSlash: false,
};

module.exports = nextConfig;
