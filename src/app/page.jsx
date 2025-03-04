import PostList from "@/components/postList";
import SocialIcons from "@/components/socialIcons";
import { SITE } from "@/config";
import fetchPosts, { fetchAllPosts } from "@/lib/data";
import Link from "next/link";

// 每小时更新一次
export const revalidate = 3600;

// 生成首页元数据
export const metadata = {
  title: SITE.title,
  description: SITE.desc,
  keywords: ['程序开发', '技术博客', '学习笔记', '编程技术', '生活感悟'],
  openGraph: {
    title: SITE.title,
    description: SITE.desc,
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: SITE.title,
      }
    ],
  }
};

export default async function Home() {
  const data = await fetchAllPosts();
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative mt-8 p-6 border-b border-gary-200">
        <div className="text-6xl font-bold">
          Welcome👋🏻
        </div>
        <div className="text-gray-700 text-lg mt-6">
          This is my blog, where I share my thoughts and experiences in the
          world of technology.
        </div>
        <div className="flex gap-2 mt-4 text-lg text-gray-700">
          Social Links:
          <SocialIcons />
        </div>
      </section>


      {/* Posts Section */}
      <section id="posts" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Recent Posts
            </h2>
          </div>
          <PostList data={data.slice(0, 5)} />
        </div>
      </section>

      <Link
        href={'/posts'}
        className="flex justify-center text-lg mb-4 hover:text-sky-700">
        All Posts →
      </Link>
    </main>
  );
}