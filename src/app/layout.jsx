import Header from "@/components/header/header";
import "./globals.css";
import Footer from "@/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { OpenPanelComponent } from "@openpanel/nextjs";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={`${inter.className} min-h-screen flex flex-col antialiased bg-white text-gray-900 selection:bg-blue-600/10 selection:text-blue-600`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <OpenPanelComponent
          clientId="780a8a43-9efb-4bf4-aa2b-645145330bf8"
          trackScreenViews={true}
        />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
