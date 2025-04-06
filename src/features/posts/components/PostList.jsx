"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CalendarIcon } from "lucide-react";
import dayjs from "dayjs";
import ListSkeleton from "@/components/ListSkeleton";
import InfiniteScroll from "react-infinite-scroll-component";
import { useCallback } from "react";

// 提取文章渲染组件，避免代码重复
const PostItem = ({ post }) => (
  <div className="mb-4">
    <Link
      href={`/post/${post.slug}`}
      className="text-lg font-semibold text-sky-700 hover:underline dark:text-sky-400"
    >
      {post.title}
    </Link>
    <p className="flex items-center gap-2 font-thin text-muted-foreground">
      <CalendarIcon className="size-5" />
      {dayjs(post.date).format("YYYY-MM-DD")}
    </p>
    <p className="line-clamp-1">{post.description}</p>
  </div>
);

export default function PostList({
  initialPosts,
  initialHasMore,
  initialNextCursor,
}) {
  const [posts, setPosts] = useState(initialPosts || []);
  const [hasMore, setHasMore] = useState(initialHasMore || false);
  const [nextCursor, setNextCursor] = useState(initialNextCursor || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 获取更多文章
  const fetchMorePosts = useCallback(async () => {
    if (!hasMore || loading) return;

    setLoading(true);
    try {
      const response = await fetch(`/api/posts?start=${nextCursor}`);
      if (!response.ok) {
        throw new Error(`请求失败: ${response.status}`);
      }

      const data = await response.json();

      if (data && Array.isArray(data.posts)) {
        setPosts((prevPosts) => [...prevPosts, ...data.posts]);
        setHasMore(data.hasMore);
        setNextCursor(data.nextCursor);

        // 更新URL但不刷新页面
        const url = new URL(window.location);
        url.searchParams.set("start", data.nextCursor);
        window.history.replaceState({}, "", url);
      }
    } catch (error) {
      console.error("加载更多文章失败:", error);
      setError("加载失败，请重试");
    } finally {
      setLoading(false);
    }
  }, [hasMore, loading, nextCursor]);

  // 重试加载
  const handleRetry = () => {
    setError(null);
    fetchMorePosts();
  };

  if (posts.length === 0) {
    return <div className="py-8 text-center">暂无文章</div>;
  }

  // 如果没有更多内容可加载（首页场景），则不使用InfiniteScroll
  if (!initialHasMore && !hasMore) {
    return (
      <div>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    );
  }

  return (
    <>
      <InfiniteScroll
        dataLength={posts.length}
        next={fetchMorePosts}
        hasMore={hasMore}
        loader={<ListSkeleton />}
        endMessage={
          <p className="my-8 text-center text-sm text-muted-foreground">
            — 已经到底了 —
          </p>
        }
      >
        <div>
          {posts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      </InfiniteScroll>

      {/* 错误提示 */}
      {error && (
        <div className="my-4 rounded-md border border-red-200 bg-red-50 p-4 dark:border-red-800/40 dark:bg-red-900/20">
          <p className="mb-2 text-red-700 dark:text-red-400">{error}</p>
          <button
            onClick={handleRetry}
            className="rounded-md bg-red-100 px-3 py-1 text-sm text-red-700 transition-colors hover:bg-red-200 dark:bg-red-800/40 dark:text-red-300 dark:hover:bg-red-800/60"
          >
            重试
          </button>
        </div>
      )}
    </>
  );
}
