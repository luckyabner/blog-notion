import RSS from 'rss';
import fetchPosts from '@/lib/data';

export async function GET() {
  const data = await fetchPosts();

  const feed = new RSS({
    title: `Abner's Blog`,
    description: `Abner的个人小站`,
    site_url: 'https://blog.abnerz6.top',
    feed_url: 'https://blog.abnerz6.top/feed.xml',
    language: 'zh-CN',
    image_url: 'https://images.unsplash.com/photo-1730126679136-d02a717b4bdf?q=80&w=2653&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  })

  data.sort((a, b) => {
    const dateA = new Date(a.properties?.date?.date?.start || a.created_time);
    const dateB = new Date(b.properties?.date?.date?.start || b.created_time);
    return dateB - dateA; // 按日期降序排序
  });

  data.forEach((post) => {
    feed.item({
      title: post.properties?.title?.title[0]?.plain_text,
      slug: post.properties?.slug?.rich_text[0]?.plain_text || post.id,
      url: `https://blog.abnerz6.top/post/${post.properties?.slug?.rich_text[0]?.plain_text || post.id}`,
      date: post.properties?.date?.date?.start || post.created_time,
      description: post.properties?.description?.rich_text[0]?.plain_text || '',
    })
  })

  return new Response(feed.xml(), {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}
