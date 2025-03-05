import PageHeader from '@/components/pageHeader';
import PostList from '@/components/postList'
import fetchPosts from '@/lib/data';
import React from 'react'
import { Suspense } from 'react';
import ListSkeleton from '@/components/listSkeleton';

async function PostListContainer({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const { posts, hasMore, nextCursor } = await fetchPosts({
    startCursor: resolvedSearchParams?.start
  });

  return (
    <PostList
      posts={posts}
      hasMore={hasMore}
      nextCursor={nextCursor}
    />
  );
}

export default function PostsPage({ searchParams }) {
  return (
    <main className='px-4'>
      <PageHeader
        title='Posts'
        description='All the articles I&apos;ve posted.'
      />
      <Suspense fallback={<ListSkeleton />}>
        <PostListContainer searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
