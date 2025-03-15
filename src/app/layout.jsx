import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { SITE } from '@/config';

export const metadata = {
	metadataBase: new URL(SITE.website),
	title: SITE.title,
	description: SITE.desc,
	keywords: ['博客', '技术', '编程', 'Web开发'],
	authors: SITE.author,
	creator: SITE.author,
	openGraph: {
		title: SITE.title,
		description: SITE.desc,
		type: 'website',
	},
	alternates: {
		canonical: SITE.website,
		types: {
			'application/rss+xml': [{ url: 'feed.xml', title: 'RSS订阅' }],
		},
	},
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="zh-CN"
			className="scroll-smooth"
		>
			<head>
				<Script
					src="https://www.googletagmanager.com/gtag/js?id=G-W0RXYK0PWJ"
					strategy="afterInteractive"
				/>
				<Script
					id="google-analytics"
					strategy="afterInteractive"
				>
					{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W0RXYK0PWJ');
          `}
				</Script>
			</head>
			<body
				className={`font-mono min-h-screen max-w-3xl mx-auto flex flex-col antialiased transition-colors bg-gray-50 dark:bg-gray-800 dark:text-white`}
			>
				<Header />
				<main className="flex-1">{children}</main>
				<SpeedInsights />
				<Analytics />
				<Footer />
			</body>
		</html>
	);
}
