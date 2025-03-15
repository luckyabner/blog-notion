import ListSkeleton from '@/components/ListSkeleton';
import PageHeader from '@/components/PageHeader';
import CategoryList from '@/features/categories/components/CategoryList';
import { fetchCategories } from '@/features/categories/server/categories';
import React from 'react';
import { Suspense } from 'react';

// 每小时更新一次
export const revalidate = 86400;

async function CategoriesListContaier() {
	const categories = await fetchCategories();

	return <CategoryList categories={categories} />;
}

export default function CategoryPage() {
	return (
		<main className="container px-4 ">
			<PageHeader
				title="Categories"
				description="All the categories used in posts."
			/>

			{/* 分类列表区域 */}
			<div className="max-w-4xl mx-auto py-2">
				<Suspense fallback={<ListSkeleton />}>
					<CategoriesListContaier />
				</Suspense>
			</div>
		</main>
	);
}
