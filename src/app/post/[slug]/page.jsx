import React from "react";
import PostDetail from "@/features/posts/components/PostDetail";
import { Suspense } from "react";
import { GoBackButton } from "@/components/GoBackButton";
import ListSkeleton from "@/components/ListSkeleton";
import { fetchPostBySlug } from "@/features/posts/server/posts";
import { fetchMdContent, fetchMdContent2Html } from "@/lib/data";

// 缓存时间为一天
// export const revalidate = 86400;

// 生成动态元数据
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);

  return {
    title: `${post.title} | Abner's Blog`,
    description: post.description,
    keywords: ["博客", post.category, ...post.title.split(" ")],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["Abner"],
      tags: [post.category],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

async function PostDetailContainer({ params }) {
  const { slug } = await params;

  const post = await fetchPostBySlug(slug);
  const mdContent = await fetchMdContent(post.id);
  return <PostDetail post={post} content={mdContent} />;
}

export default function PostPage({ params }) {
  return (
    <main className="px-6">
      <GoBackButton />
      <Suspense fallback={<ListSkeleton />}>
        <PostDetailContainer params={params} />
      </Suspense>
    </main>
  );
}
