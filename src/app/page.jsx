import SocialIcons from "@/components/SocialIcons";
import { SITE } from "@/config";
import Link from "next/link";
import { Suspense } from "react";
import ListSkeleton from "@/components/ListSkeleton";
import fetchPosts from "@/features/posts/server/posts";
import PostList from "@/features/posts/components/PostList";

// 每小时更新一次
export const revalidate = 3600;

// 生成首页元数据
export const metadata = {
  title: SITE.title,
  description: SITE.desc,
  keywords: ["程序开发", "技术博客", "学习笔记", "编程技术", "生活感悟"],
  openGraph: {
    title: SITE.title,
    description: SITE.desc,
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: SITE.title,
      },
    ],
  },
};

async function PostListContainer() {
  const { posts } = await fetchPosts();
  return <PostList posts={posts.slice(0, 5)} page={false} />;
}
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative mt-8 border-b border-border p-6">
        <div className="text-6xl font-bold">Welcome👋🏻</div>
        <div className="mt-6 text-lg">
          This is my blog, where I share my thoughts and experiences in the
          world of technology.
        </div>
        <div className="mt-4 flex gap-2 text-lg">
          Social Links:
          <SocialIcons />
        </div>
      </section>
      {/* Posts Section */}
      <section id="posts" className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Recent Posts
            </h2>
          </div>
          <Suspense fallback={<ListSkeleton />}>
            <PostListContainer />
          </Suspense>
        </div>
      </section>
      <Link
        href={"/posts"}
        className="hover:text-hover mb-4 flex justify-center text-lg"
      >
        All Posts →
      </Link>
    </main>
  );
}
