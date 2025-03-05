import CategoryList from '@/components/categoryList';
import ListSkeleton from '@/components/listSkeleton';
import PageHeader from '@/components/pageHeader';
import { fetchCategories } from '@/lib/data'
import React from 'react'
import { Suspense } from 'react';

// 每小时更新一次
export const revalidate = 3600;

async function CategoriesListContaier() {
  const categories = await fetchCategories();

  {/* 如果没有分类时显示 */ }
  {
    categories.length === 0 && (
      <div className="text-center text-gray-500 py-12">
        暂无分类
      </div>
    )
  }

  return (
    <CategoryList categories={categories} />
  );
}

export default function CategoryPage() {

  return (
    <main className="container px-4 ">
      <PageHeader
        title="Categories"
        description='All the categories used in posts.'
      />

      {/* 分类列表区域 */}
      <div className="max-w-4xl mx-auto py-2">
        <Suspense fallback={<ListSkeleton />}>
          <CategoriesListContaier />
        </Suspense>
      </div>


    </main>
  )
}