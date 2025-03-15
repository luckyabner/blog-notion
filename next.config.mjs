/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: '/rss',
				destination: '/feed.xml',
			},
			{
				source: '/rss.xml',
				destination: '/feed.xml',
			},
			{
				source: '/feed',
				destination: '/rss.xml',
			},
		];
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '*.doubanio.com',
				port: '',
				pathname: '/**',
				search: '',
			},
			{
				protocol: 'https',
				hostname: '*.luckyabner.top',
				port: '',
				pathname: '/**',
				search: '',
			},
		],
	},
};

export default nextConfig;
