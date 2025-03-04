'use client'
import Link from 'next/link';
import React from 'react';
import { CalendarIcon, FolderIcon } from 'lucide-react';
import dayjs from 'dayjs';
import { ArrowLeft } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

export default function PostList({ posts, hasMore, nextCursor, page = true }) {

  return (
    <>
      <div>
        {posts.map((post) => (
          <div key={post.id} className='mb-4 '>
            <Link href={`/post/${post.slug}`} className='text-lg text-sky-700 font-semibold hover:underline'>
              {post.title}
            </Link>
            <p className='flex items-center gap-2 font-thin text-gray-500'> <CalendarIcon className='size-5' /> {dayjs(post.date).format('YYYY-MM-DD')}</p>
            <p className=''>{post.description}. </p>
          </div>
        ))}
      </div>
      {page && (
        <div className='mt-8 flex justify-center gap-24 my-8'>
          <Link
            href={'#'}
            className='flex items-center'
            onClick={(e) => {
              e.preventDefault();
              window.history.back();
            }}
          >
            <ArrowLeft />
            Prev
          </Link>
          <Link
            href={hasMore ? `?start=${nextCursor}` : '#'}
            className={`flex items-center ${!hasMore && 'text-gray-500 cursor-default'}`}
            aria-disabled={!hasMore}
          >
            Next
            <ArrowRight />
          </Link>
        </div>
      )}
    </>
  );
}