import React from "react";
import { aboutPageId } from "@/lib/notionServer";
import PageHeader from "@/components/PageHeader";
import { Suspense } from "react";
import ListSkeleton from "@/components/ListSkeleton";
import { fetchMdContent, fetchMdContent2Html } from "@/lib/data";
import Markdown from "react-markdown";

// 每小时更新一次
export const revalidate = 86400;

async function AboutContainer() {
  const aboutContent = await fetchMdContent(aboutPageId);
  return (
    <div className="mx-auto max-w-3xl">
      <article className="prose mx-auto prose-headings:font-bold prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg prose-img:shadow-lg">
        <Markdown>{aboutContent}</Markdown>
      </article>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4">
      <PageHeader title={"About"} />
      {/* 内容区域 */}
      <Suspense fallback={<ListSkeleton />}>
        <AboutContainer />
      </Suspense>
    </main>
  );
}
