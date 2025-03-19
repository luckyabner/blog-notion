import fetchDoubanRecords from "@/features/movies/server/movies";
import MoviesRecord from "@/features/movies/components/MoviesRecord";
import ListSkeleton from "@/components/ListSkeleton";
import React from "react";
import { Suspense } from "react";

export const metadata = {
  title: "观影动态 | Abner's Blog",
  description: "Abner 最近观影动态，分享观影心得",
};

export const revalidate = 86400;

async function MoviesContainer() {
  const res = await fetchDoubanRecords();
  const movies = res.rss.channel[0].item;
  return <MoviesRecord movies={movies} />;
}
export default function MoviesPage() {
  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* 标题区 */}
        <div className="border-borderpb-4 mb-8 border-b-2">
          <h1 className="flex items-center text-3xl font-bold">
            <span className="mr-2">🎬</span>
            Abner 的最近观影动态
          </h1>
        </div>

        <Suspense fallback={<ListSkeleton />}>
          <MoviesContainer />
        </Suspense>
      </div>
    </div>
  );
}
