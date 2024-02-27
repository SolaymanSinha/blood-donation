import type { Metadata } from 'next';
import { Inter, Noto_Serif_Bengali } from 'next/font/google';
import './globals.css';

const noto_serif = Noto_Serif_Bengali({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${noto_serif.className} container mx-auto`}>{children}</body>
		</html>
	);
}
