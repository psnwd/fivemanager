await import("./src/env.mjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		serverActions: true,
	},
};

module.exports = nextConfig;
