import { fetchMdContent, fetchPost, fetchPostBySlug } from '@/lib/data'
import React from 'react'
import PostDetail from '@/components/postDetail'

// 缓存时间为一天
export const revalidate = 86400;

// 生成动态元数据
export async function generateMetadata({ params }) {
  const { slug } = params;
  const properties = await fetchPostBySlug(slug);
  
  const title = properties.properties?.title?.title[0]?.plain_text || '无标题';
  const description = properties.properties?.Description?.rich_text[0]?.plain_text || '';
  const category = properties.properties?.category?.select?.name || '';
  
  return {
    title: `${title} | Abner's Blog`,
    description,
    keywords: ['博客', category, ...title.split(' ')],
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: properties.properties?.date?.date?.start || properties.created_time,
      authors: ['Abner'],
      tags: [category],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    }
  }
}

export default async function PostPage({ params }) {
  const { slug } = await params;

  const properties = await fetchPostBySlug(slug);
  const mdContent = await fetchMdContent(properties.id);

  return (
    <div>
      <PostDetail properties={properties} mdContent={mdContent} />
    </div>
  )
}
