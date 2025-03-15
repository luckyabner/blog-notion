import { friendsDbId, notion } from '@/lib/notionServer';

//获取友链
export async function fetchFriends() {
	try {
		const res = await notion.databases.query({
			database_id: friendsDbId,
		});
		return res.results;
	} catch (err) {
		console.log(err);
		return [];
	}
}
