import Header from "@/components/header/header";
import "./globals.css";
import Footer from "@/components/footer";

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
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen flex flex-col font-mono">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
