import Header from "@/components/header/header";
import "./globals.css";
import Footer from "@/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script";

export const metadata = {
  title: `Abner's blog`,
  description: '分享编程技术和个人思考的博客',
  keywords: ['博客', '技术', '编程', 'Web开发'],
  authors: [{ name: 'Abner' }],
  creator: 'Abner',
  openGraph: {
    title: 'Abner的个人博客',
    description: '分享编程技术和个人思考的博客',
    type: 'website',
  },
  alternates: {
    canonical: 'https://blog.abnerz6.top',
    types: {
      'application/rss+xml': [{ url: 'feed.xml', title: 'RSS订阅' }]
    }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-W0RXYK0PWJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W0RXYK0PWJ');
          `}
        </Script>
      </head>
      <body className={`font-mono min-h-screen max-w-3xl mx-auto flex flex-col antialiased bg-stone-50 text-gray-900 `}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <SpeedInsights />
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
