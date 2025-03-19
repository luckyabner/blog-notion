import Link from "next/link";
import React from "react";

export default function CategoryList({ categories }) {
  if (categories.length === 0) {
    return <div className="py-12 text-center">暂无分类</div>;
  }
  return (
    <div className="flex gap-4">
      {categories.map((category, index) => (
        <Link
          key={index}
          href={`/category/${encodeURIComponent(category)}`}
          className="hover:text-hover text-gray-600 dark:text-gray-300"
        >
          <div className="">
            <h3 className="flex items-center gap-1 text-xl font-semibold">
              #{category}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
