import PostList from "@/components/postList";
import { Button } from "@/components/ui/button";
import fetchData from "@/lib/data";

// 每小时更新一次
export const revalidate = 3600;

export default async function Home() {
  const data = await fetchData();
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              欢迎来到我的博客
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              分享编程、技术和生活的点点滴滴
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700" asChild>
              <a href="#posts">浏览文章</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Posts Section */}
      <section id="posts" className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            最新文章
          </h2>
          <PostList data={data} />
        </div>
      </section>

      {/* Newsletter Section (可选) */}
      {/* <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">
            订阅更新
          </h3>
          <p className="text-gray-600 mb-8">
            获取最新文章和动态
          </p>
          <div className="flex items-center justify-center gap-4">
            <a href="/rss" className="text-blue-600 hover:text-blue-700">
              RSS订阅
            </a>
          </div>
        </div>
      </section> */}
    </main>
  );
}