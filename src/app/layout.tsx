import type { Metadata } from 'next';
import { Inter, Noto_Serif_Bengali } from 'next/font/google';
import './globals.css';

const noto_serif = Noto_Serif_Bengali({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'রক্ত দান: জীবনদান',
	description:
		'রক্ত দান শুধু একটি কর্তব্য নয়, এটি একটি জীবনদান। আপনার দেওয়া রক্ত কারো প্রিয়জনের জীবন বাঁচাতে পারে, কারো মুখে ফিরিয়ে দিতে পারে হাসি, কারো জীবনে জ্বালাতে পারে নতুন আশার আলো।',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${noto_serif.className} container mx-auto p-2`}>{children}</body>
		</html>
	);
}
