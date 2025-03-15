import { dbId, notion } from '@/lib/notionServer';
import { processPostItem } from '@/lib/processPostItem';

//获取分类列表
export async function fetchCategories() {
	try {
		const response = await notion.databases.query({
			database_id: dbId,
			filter: {
				property: 'status',
				status: {
					equals: 'published',
				},
			},
		});

		// 提取所有分类并去重
		const categories = [
			...new Set(
				response.results.map((page) => page.properties?.category?.select?.name).filter(Boolean) // 过滤掉 null/undefined
			),
		];

		return categories;
	} catch (error) {
		console.error(error);
		return [];
	}
}

//获取指定分类文章
export async function fetchPostsByCategory(category) {
	try {
		const res = await notion.databases.query({
			database_id: dbId,
			filter: {
				and: [
					{
						property: 'category',
						select: {
							equals: category,
						},
					},
					{
						property: 'status',
						status: {
							equals: 'published',
						},
					},
				],
			},
		});

		const processedPosts = res.results.map(processPostItem).filter(Boolean);

		return processedPosts;
	} catch (error) {
		console.error(error);
		return [];
	}
}
