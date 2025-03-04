import fetchPosts from "@/lib/data";

export default async function sitemap() {
  const { posts } = await fetchPosts();

  const postEntries = posts.map((post) => ({
    url: `https://blog.abnerz6.top/post/${post.slug || post.id}`,
    lastModified: post.date,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [
    {
      url: 'https://blog.abnerz6.top',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://blog.abnerz6.top/category/技术',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://blog.abnerz6.top/category/学习笔记',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://blog.abnerz6.top/category/阅读',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...postEntries,
  ];
}
