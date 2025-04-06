import React from "react";
import PageHeader from "@/components/PageHeader";
import { fetchPostsByCategory } from "@/features/categories/server/categories";
import PostList from "@/features/posts/components/PostList";

// 每小时更新一次
export const revalidate = 86400;

export default async function CategoryPostsPage({ params }) {
  const { name: encodedName } = await params;
  const categoryName = decodeURIComponent(encodedName);
  const posts = await fetchPostsByCategory(categoryName);

  return (
    <main className="container mx-auto px-4">
      <PageHeader
        title={categoryName}
        breadcrumbs={[
          {
            label: "Categories",
            href: "/category",
          },
          {
            label: categoryName,
          },
        ]}
      />

      {/* 文章列表区域 */}
      <div className="mx-auto max-w-5xl">
        <PostList
          initialPosts={posts}
          initialHasMore={false}
          initialNextCursor={null}
        />
      </div>
    </main>
  );
}
