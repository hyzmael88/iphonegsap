// next.config.mjs
import withVideos from 'next-videos';

/** @type {import('next').NextConfig} */
const nextConfig = withVideos({
  reactStrictMode: true,
  webpack(config, options) {
    return config;
  }
});

export default nextConfig;
