import Link from 'next/link'
import React from 'react'
import { FolderIcon } from 'lucide-react'

export default function CategoryList({ categories }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category, index) => (
        <Link
          key={index}
          href={`/category/${encodeURIComponent(category)}`}
          className="group"
        >
          <div className="flex items-center p-6 bg-white rounded-lg border border-gray-200 
                        transition-all duration-200 hover:shadow-md hover:border-blue-500">
            <FolderIcon className="w-6 h-6 text-gray-400 group-hover:text-blue-500 
                                 transition-colors mr-3" />
            <div>
              <h3 className="font-medium text-gray-900 group-hover:text-blue-600 
                           transition-colors">
                {category}
              </h3>
              {/* 可选: 添加分类描述或文章数量 */}
              <p className="text-sm text-gray-500 mt-1">
                点击查看该分类下的所有文章
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}