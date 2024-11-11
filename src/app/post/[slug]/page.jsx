import { fetchMdContent, fetchPost } from '@/lib/data'
import React from 'react'
import PostDetail from '@/components/postDetail'

export default async function PostPage({ params }) {
  const { slug } = await params;
  const mdContent = await fetchMdContent(slug);
  const properties = await fetchPost(slug);

  return (
    <div>
      <PostDetail properties={properties} mdContent={mdContent} />
    </div>
  )
}
