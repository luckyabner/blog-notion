import fetchDoubanRecords from '@/features/movies/server/movies';
import MoviesRecord from '@/features/movies/components/MoviesRecord';
import ListSkeleton from '@/components/ListSkeleton';
import React from 'react';
import { Suspense } from 'react';

export const metadata = {
	title: "观影动态 | Abner's Blog",
	description: 'Abner 最近观影动态，分享观影心得',
};

export const revalidate = 86400;

async function MoviesContainer() {
	const res = await fetchDoubanRecords();
	const movies = res.rss.channel[0].item;
	return <MoviesRecord movies={movies} />;
}
export default function MoviesPage() {
	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
			<div className="max-w-3xl mx-auto">
				{/* 标题区 */}
				<div className="mb-8 border-b-2 border-gray-200 dark:border-gray-700 pb-4">
					<h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center">
						<span className="mr-2">🎬</span>
						Abner 的最近观影动态
					</h1>
				</div>

				<Suspense fallback={<ListSkeleton />}>
					<MoviesContainer />
				</Suspense>
			</div>
		</div>
	);
}
