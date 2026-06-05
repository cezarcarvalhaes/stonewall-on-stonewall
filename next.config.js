/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	output: 'export',
	trailingSlash: true,
	images: {
		unoptimized: true,
	},
	webpack: (configuration) => {
		configuration.module.rules.push(
			{
				test: /\.md$/,
				use: 'frontmatter-markdown-loader',
			},
			{
				test: /\.ya?ml$/,
				use: 'yaml-loader',
			},
		);
		return configuration;
	},
};

module.exports = nextConfig;
