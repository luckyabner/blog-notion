export function processPostItem(item) {
	try {
		return {
			id: item.id,
			slug: item.properties?.slug?.rich_text[0]?.plain_text || item.id,
			title: item.properties?.title?.title[0]?.plain_text || '无标题',
			description: item.properties?.description?.rich_text[0]?.plain_text || '',
			date: item.properties?.date?.date?.start || item.created_time,
			category: item.properties?.category?.select?.name || '',
		};
	} catch (error) {
		console.error('数据处理错误:', error);
		return null;
	}
}
