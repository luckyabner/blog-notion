import Link from 'next/link'
import React from 'react'

export default function CategoryList({ categories }) {
    if (categories.length === 0) {
        return <div className="text-center text-gray-500 py-12">暂无分类</div>
    }
    return (
        <div className="flex gap-4">
            {categories.map((category, index) => (
                <Link
                    key={index}
                    href={`/category/${encodeURIComponent(category)}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-sky-700"
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
