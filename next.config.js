/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	webpack: (config, { isServer }) => {
		config.resolve.fallback = { fs: false };
		config.resolve.modules.push(__dirname);
		return config;
	},
	swcMinify: true,
};

module.exports = nextConfig;
