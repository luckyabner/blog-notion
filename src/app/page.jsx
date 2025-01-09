import PostList from "@/components/postList";
import { Button } from "@/components/ui/button";
import fetchData from "@/lib/data";
import { ArrowRight, BookOpen, Code, Coffee } from "lucide-react";
import Link from "next/link";

// 每小时更新一次
export const revalidate = 3600;

// 生成首页元数据
export const metadata = {
  title: "Abner's Blog - 技术探索与生活感悟",
  description: "分享程序开发、技术探索、学习笔记和生活感悟的个人博客。探讨编程技术，分享开发经验和最佳实践。",
  keywords: ['程序开发', '技术博客', '学习笔记', '编程技术', '生活感悟'],
  openGraph: {
    title: "Abner's Blog - 技术探索与生活感悟",
    description: "分享程序开发、技术探索、学习笔记和生活感悟的个人博客。探讨编程技术，分享开发经验和最佳实践。",
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Abner's Blog",
      }
    ],
  }
};

export default async function Home() {
  const data = await fetchData();
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:20px_20px]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient">
              欢迎来到我的博客
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
              在这里，我分享技术见解、编程心得和生活感悟
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 group" asChild>
                <a href="#posts">
                  浏览文章
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Link className="p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors" href={"/category/技术"}>
              <Code className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">技术探索</h3>
              <p className="text-gray-600">深入探讨编程技术，分享开发经验和最佳实践</p>
            </Link>
            <Link className="p-6 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors" href={"/category/学习笔记"}>
              <BookOpen className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">学习笔记</h3>
              <p className="text-gray-600">记录学习历程，整理知识体系</p>
            </Link>
            <Link className="p-6 rounded-xl bg-green-50 hover:bg-green-100 transition-colors" href={"/category/阅读"}>
              <Coffee className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">生活感悟</h3>
              <p className="text-gray-600">分享生活点滴，记录成长历程</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Posts Section */}
      <section id="posts" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              最新文章
            </h2>
            <p className="text-gray-600">
              探索最新的技术文章和思考
            </p>
          </div>
          <PostList data={data} />
        </div>
      </section>

      {/* Newsletter Section */}
      {/* <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            保持联系
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            通过RSS订阅获取最新文章和动态，不错过任何更新
          </p>
          <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900" asChild>
            <a href="/rss">RSS订阅</a>
          </Button>
        </div>
      </section> */}
    </main>
  );
}