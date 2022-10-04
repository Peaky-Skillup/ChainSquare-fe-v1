/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	webpack: (config, { isServer }) => {
		config.resolve.fallback = { fs: false };
		config.resolve.modules.push(__dirname);
		config.plugins.push(new Dotenv({ silent: true }));
		return config;
	},
	swcMinify: true,
};

module.exports = nextConfig;
