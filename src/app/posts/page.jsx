import PageHeader from "@/components/PageHeader";
import React from "react";
import { Suspense } from "react";
import ListSkeleton from "@/components/ListSkeleton";
import fetchPosts from "@/features/posts/server/posts";
import PostList from "@/features/posts/components/PostList";

export const revalidate = 86400;
async function PostListContainer({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const { posts, hasMore, nextCursor } = await fetchPosts({
    startCursor: resolvedSearchParams?.start,
  });

  return <PostList posts={posts} hasMore={hasMore} nextCursor={nextCursor} />;
}

export default async function PostsPage({ searchParams }) {
  return (
    <main className="px-4">
      <PageHeader title="Posts" description="All the articles I've posted." />
      <Suspense fallback={<ListSkeleton />}>
        <PostListContainer searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
