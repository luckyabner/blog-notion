'use client'
import Link from 'next/link';
import React from 'react';
import { CalendarIcon, FolderIcon } from 'lucide-react';
import dayjs from 'dayjs';

export default function PostList({ data, hasMore, nextCursor, }) {

  return (
    <>
      <div>
        {data.map((post) => (
          <div key={post.id} className='mb-4 '>
            <Link href={`/post/${post.slug}`} className='text-lg text-sky-700 font-semibold hover:underline'>
              {post.title}
            </Link>
            <p className='flex items-center gap-2 font-thin text-gray-500'> <CalendarIcon className='size-5' /> {dayjs(post.date).format('YYYY-MM-DD')}</p>
            <p className=''>{post.description}. </p>
          </div>
        ))}
      </div>
      <div className='mt-8 flex gap-4 justify-between'>
        <Link
          href={'#'}
          onClick={(e) => {
            e.preventDefault();
            window.history.back();
          }}
        >
          上一页
        </Link>
        <Link
          href={`?start=${nextCursor}`}
          className={`px-4 py-2 ${hasMore ? 'bg-blue-500 text-white' : 'bg-gray-300'} rounded`}
          aria-disabled={!hasMore}
        >
          下一页
        </Link>
      </div>
    </>
  );
}