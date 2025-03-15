import { notion, projectDbId } from '@/lib/notionServer';

const rocessProjectItem = (item) => {
	try {
		return {
			id: item.id,
			name: item.properties?.Name?.title[0]?.plain_text || '无标题',
			description: item.properties?.Description?.rich_text[0]?.plain_text || '',
			category: item.properties?.Category?.select?.name || '',
			link: item.properties?.Link?.url || '',
		};
	} catch (error) {
		console.error('数据处理错误:', error);
		return null;
	}
};

//获取项目名称
export async function fetchProjects() {
	try {
		const res = await notion.databases.query({
			database_id: projectDbId,
		});
		const processedProjects = res.results.map(rocessProjectItem).filter(Boolean);
		return processedProjects;
	} catch (err) {
		console.log(err);
		return [];
	}
}
