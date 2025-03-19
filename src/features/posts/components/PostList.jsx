"use client";
import Link from "next/link";
import React from "react";
import { CalendarIcon } from "lucide-react";
import dayjs from "dayjs";
import { ArrowLeft } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
import ListSkeleton from "@/components/ListSkeleton";

export default function PostList({ posts, hasMore, nextCursor, page = true }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  const handleNextPage = (e) => {
    if (!hasMore) {
      e.preventDefault();
      return;
    }

    setIsLoading(true);
    router.push(`${pathname}?start=${nextCursor}`);
  };

  useEffect(() => {
    setIsLoading(false);
  }, [searchParams]);

  if (isLoading) {
    return <ListSkeleton />;
  }

  if (posts.length === 0) {
    return <div>暂无文章</div>;
  }

  return (
    <>
      <div>
        {posts.map((post) => (
          <div key={post.id} className="mb-4">
            <Link
              href={`/post/${post.slug}`}
              className="text-lg font-semibold text-sky-700 hover:underline dark:text-sky-400"
            >
              {post.title}
            </Link>
            <p className="flex items-center gap-2 font-thin text-muted-foreground">
              {" "}
              <CalendarIcon className="size-5" />{" "}
              {dayjs(post.date).format("YYYY-MM-DD")}
            </p>
            <p className="line-clamp-1">{post.description} </p>
          </div>
        ))}
      </div>
      {page && (
        <div className="my-8 mt-8 flex justify-center gap-24">
          <Link
            href={"#"}
            className={`flex items-center ${
              !searchParams.get("start") && "cursor-default text-muted"
            }`}
            aria-disabled={!searchParams.get("start")}
            onClick={(e) => {
              if (!searchParams.get("start")) {
                e.preventDefault();
                return;
              }
              router.back();
            }}
          >
            <ArrowLeft />
            Prev
          </Link>
          <Link
            href={hasMore ? `?start=${nextCursor}` : "#"}
            className={`flex items-center ${!hasMore && "cursor-default text-muted"}`}
            aria-disabled={!hasMore}
            onClick={handleNextPage} // 禁用无效点击
          >
            Next
            <ArrowRight />
          </Link>
        </div>
      )}
    </>
  );
}
