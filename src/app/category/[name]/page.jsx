import PostList from '@/components/postList';
import { fetchPostsByCategory } from '@/lib/data';
import React from 'react'
import { FolderIcon } from 'lucide-react';
import { Suspense } from 'react';
import ListSkeleton from '@/components/listSkeleton';
import PageHeader from '@/components/pageHeader';

// 每小时更新一次
export const revalidate = 3600;

async function PostListContainer({ params }) {
  const { name: encodedName } = await params;
  const categoryName = decodeURIComponent(encodedName);
  const posts = await fetchPostsByCategory(categoryName);

  return (
    <>
      {posts.length > 0 ? (
        <PostList posts={posts} page={false} />
      ) : (
        <div className="text-center text-gray-500 py-12">
          该分类下暂无文章
        </div>
      )}
    </>
  );
}
export default async function CategoryPostsPage({ params }) {
  const { name: encodedName } = await params;
  const categoryName = decodeURIComponent(encodedName);
  const posts = await fetchPostsByCategory(categoryName);

  return (
    <main className="container mx-auto px-4 ">
      <PageHeader
        title={categoryName}
        breadcrumbs={[
          {
            label: 'Categories',
            href: '/category'
          },
          {
            label: categoryName
          }
        ]} />

      {/* 文章列表区域 */}
      <div className="max-w-5xl mx-auto">
        {posts.length > 0 ? (
          <PostList posts={posts} page={false} />
        ) : (
          <div className="text-center text-gray-500 py-12">
            该分类下暂无文章
          </div>
        )}
      </div>
    </main>
  );
}