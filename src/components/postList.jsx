import fetchPosts from '@/lib/data';
import Link from 'next/link';
import React from 'react'

export default async function PostList() {
  const data = await fetchPosts();
  console.log(data);
  return (
    <div>
      {data.map((item) => (
        <div key={item.id} className="p-4 bg-gray-100 rounded-md">
          <Link className="text-xl font-semibold" href={`post/${item.id}`}>{item.properties.title.title[0].plain_text}</Link>
          {/* <p>{item.properties.Description.rich_text[0].plain_text}</p> */}
        </div>
      ))}
    </div>
  )
}
