import dayjs from 'dayjs'
import { FolderIcon } from 'lucide-react'
import { CalendarIcon } from 'lucide-react'
import React from 'react'

export default function PostProperties({ post }) {

  return (
    <article>
      {/* 文章标题 */}
      <header>
        <h1 className="text-2xl font-bold text-sky-700 mb-2">
          {post.title}
        </h1>
        {/* 文章元信息 */}
        <div className="flex items-center gap-6 text-gray-600 mb-6">
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-5 h-5" />
            <time dateTime={dayjs(post.date).format('YYYY-MM-DD')}>{dayjs(post.date).format('YYYY-MM-DD')}</time>
          </div>
          {post.category && (
            <div className="flex items-center gap-2">
              <FolderIcon className="w-5 h-5" />
              <span>{post.category}</span>
            </div>
          )}
        </div>
      </header>
    </article>
  )
}
