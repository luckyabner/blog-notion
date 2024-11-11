import CategoryList from '@/components/categoryList';
import { fetchCategories } from '@/lib/data'
import React from 'react'

// 每小时更新一次
export const revalidate = 3600;

export default async function CategoryPage() {
  const categories = await fetchCategories();

  return (
    <main className="container mx-auto px-4 py-12">
      {/* 页面标题区域 */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">文章分类</h1>
      </div>

      {/* 分类列表区域 */}
      <div className="max-w-4xl mx-auto">
        <CategoryList categories={categories} />
      </div>

      {/* 如果没有分类时显示 */}
      {categories.length === 0 && (
        <div className="text-center text-gray-500 py-12">
          暂无分类
        </div>
      )}
    </main>
  )
}