import { SITE } from "@/config";
import { fetchAllPosts } from "@/features/posts/server/posts";

export default async function sitemap() {
  const posts = await fetchAllPosts();

  const postEntries = posts.map((post) => ({
    url: `${SITE.website}/${post.slug || post.id}`,
    lastModified: post.date,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    {
      url: `${SITE.website}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${SITE.website}/category/技术`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE.website}/category/学习笔记`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE.website}/category/阅读`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...postEntries,
  ];
}
