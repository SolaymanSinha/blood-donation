/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'www.nzblood.co.nz',
			},
		],
	},
};

export default nextConfig;
