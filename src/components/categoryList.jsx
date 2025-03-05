import Link from 'next/link'
import React from 'react'

export default function CategoryList({ categories }) {
  return (
    <div className="flex gap-4">
      {categories.map((category, index) => (
        <Link
          key={index}
          href={`/category/${encodeURIComponent(category)}`}
          className="text-gray-600 hover:text-sky-700"
        >
          <div className="">
            <h3 className="text-xl font-semibold flex items-center gap-1">
              #{category}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  )
}