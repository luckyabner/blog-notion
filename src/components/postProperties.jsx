import { FolderIcon } from 'lucide-react'
import { CalendarIcon } from 'lucide-react'
import dayjs from 'dayjs';
import React from 'react'

export default function PostProperties({ properties }) {
  //整理properties
  const title = properties?.properties?.title?.title[0]?.plain_text;
  const category = properties?.properties?.category?.select?.name;
  const date = properties?.properties?.date?.date?.start || dayjs(properties?.created_time).format('YYYY-MM-DD');

  return (
    <>
      {/* 文章标题 */}
      <h1 className="text-4xl font-bold text-center mb-8">
        {title}
      </h1>
      {/* 文章元信息 */}
      <div className="flex items-center justify-center gap-6 text-gray-600 mb-12">
        <div className="flex items-center gap-2">
          <CalendarIcon className="w-5 h-5" />
          <time dateTime={date}>{date}</time>
        </div>
        {category && (
          <div className="flex items-center gap-2">
            <FolderIcon className="w-5 h-5" />
            <span>{category}</span>
          </div>
        )}
      </div>
    </>
  )
}
