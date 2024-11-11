import PostList from '@/components/postList';
import { fetchPostsByCategory } from '@/lib/data';
import React from 'react'
import { FolderIcon } from 'lucide-react';

export default async function CategoryPostsPage({ params }) {
  const { name: encodedName } = await params;
  const categoryName = decodeURIComponent(encodedName);
  const posts = await fetchPostsByCategory(categoryName);

  return (
    <main className="container mx-auto px-4 py-12">
      {/* 分类标题区域 */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <FolderIcon className="w-8 h-8 text-blue-500" />
          <h1 className="text-3xl font-bold">{categoryName}</h1>
        </div>
      </div>

      {/* 文章列表区域 */}
      <div className="max-w-5xl mx-auto">
        {posts.length > 0 ? (
          <PostList data={posts} />
        ) : (
          <div className="text-center text-gray-500 py-12">
            该分类下暂无文章
          </div>
        )}
      </div>
    </main>
  );
}