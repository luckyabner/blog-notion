import { fetchAllPosts } from '@/features/posts/server/posts';
import RSS from 'rss';

export async function GET() {
	const posts = await fetchAllPosts();

	const feed = new RSS({
		title: `Abner's Blog`,
		description: `Abner的个人小站`,
		site_url: 'https://blog.abnerz6.top',
		feed_url: 'https://blog.abnerz6.top/feed.xml',
		language: 'zh-CN',
		image_url:
			'https://images.unsplash.com/photo-1730126679136-d02a717b4bdf?q=80&w=2653&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	});

	posts.forEach((post) => {
		feed.item({
			title: post.title,
			slug: post.slug,
			url: `https://blog.abnerz6.top/post/${post.slug}`,
			date: post.date,
			description: post.description,
		});
	});

	return new Response(feed.xml(), {
		headers: {
			'Content-Type': 'application/xml',
		},
	});
}
