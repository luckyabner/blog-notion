import PostList from '@/components/postList'
import fetchPosts from '@/lib/data';
import { ChevronsRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default async function PostsPage({ searchParams }) {
  const { posts, hasMore, nextCursor } = await fetchPosts({
    startCursor: (await searchParams).start
  });
  return (
    <main>
      <section className='mb-4'>
        <div className='flex items-center gap-1 text-gray-600 text-lg'>
          <Link href='/' className='hover:text-gray-900'>Home</Link>
          <ChevronsRight className='size-5' />
          <span>Posts</span>
        </div>
        <h1 className='text-3xl font-bold'>Posts</h1>
        <p>All the articles I&apos;ve posted.</p>
      </section>
      <PostList
        data={posts}
        hasMore={hasMore}
        nextCursor={nextCursor}
      />
    </main>
  )
}
