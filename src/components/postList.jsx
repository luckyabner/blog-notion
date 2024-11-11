import Link from 'next/link';
import React from 'react';
import { CalendarIcon, FolderIcon } from 'lucide-react';
import dayjs from 'dayjs';

export default async function PostList({ data }) {
  // 处理数据
  const processedPosts = data.map(item => {
    try {
      //获取文章状态
      return {
        id: item.id,
        title: item.properties?.title?.title[0]?.plain_text || '无标题',
        description: item.properties?.Description?.rich_text[0]?.plain_text || '',
        date: item.properties?.date?.date?.start || item.created_time,
        category: item.properties?.category?.select?.name || '',
      };
    } catch (error) {
      console.error('数据处理错误:', error);
      return null;
    }
  })
    .filter(Boolean) // 过滤掉无效数据
    .sort((a, b) => {
      // 降序排列，最新的文章在前
      return dayjs(b.date).valueOf() - dayjs(a.date).valueOf();
    });

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {processedPosts.map((post) => (
        <Link
          href={`/post/${post.id}`}
          key={post.id}
          className="block group"
        >
          <article className="h-full p-6 bg-white rounded-lg border border-gray-200 
                          transition-shadow hover:shadow-md">
            {/* 文章标题 */}
            <h2 className="text-xl font-semibold mb-3 
                       group-hover:text-blue-600 transition-colors">
              {post.title}
            </h2>

            {/* 文章描述 */}
            {post.description && (
              <p className="text-gray-600 mb-4 line-clamp-2">
                {post.description}
              </p>
            )}

            {/* 文章元信息 */}
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <CalendarIcon className="w-4 h-4" />
                <time>{dayjs(post.date).format('YYYY-MM-DD')}</time>
              </div>
              {post.category && (
                <div className="flex items-center gap-1">
                  <FolderIcon className="w-4 h-4" />
                  <span>{post.category}</span>
                </div>
              )}
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}