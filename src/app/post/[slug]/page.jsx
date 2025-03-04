import { fetchMdContent, fetchPostBySlug } from '@/lib/data'
import React from 'react'
import PostDetail from '@/components/postDetail'
import Link from 'next/link';
import { GoBackButton } from '@/components/goBackButton';

// 缓存时间为一天
export const revalidate = 86400;

// 生成动态元数据
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);

  return {
    title: `${post.title} | Abner's Blog`,
    description: post.description,
    keywords: ['博客', post.category, ...post.title.split(' ')],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: ['Abner'],
      tags: [post.category],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    }
  }
}

export default async function PostPage({ params }) {
  const { slug } = await params;

  const post = await fetchPostBySlug(slug);
  const mdContent = await fetchMdContent(post.id);

  return (
    <main>
      <GoBackButton />
      <PostDetail post={post} mdContent={mdContent} />
    </main>
  )
}
