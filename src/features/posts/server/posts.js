import { SITE } from "@/config";
import { dbId, notion } from "@/lib/notionServer";
import { processPostItem } from "@/lib/processPostItem";
import { NotionToMarkdown } from "notion-to-md";

//获取有分页的post列表
export default async function fetchPosts({
  pageSize = SITE.postPerPage,
  startCursor,
} = {}) {
  try {
    const res = await notion.databases.query({
      database_id: dbId,
      filter: {
        property: "status",
        status: {
          equals: "published",
        },
      },
      sorts: [
        {
          property: "date",
          direction: "descending",
        },
      ],
      page_size: pageSize,
      start_cursor: startCursor,
    });
    // 处理数据
    const processedPosts = res.results.map(processPostItem).filter(Boolean);
    return {
      posts: processedPosts,
      hasMore: res.has_more,
      nextCursor: res.next_cursor,
    };
  } catch (error) {
    console.error(error);
    return [];
  }
}

//获取所有post列表
export async function fetchAllPosts() {
  try {
    const res = await notion.databases.query({
      database_id: dbId,
      filter: {
        property: "status",
        status: {
          equals: "published",
        },
      },
      sorts: [
        {
          property: "date",
          direction: "descending",
        },
      ],
    });
    // 处理数据
    const processedPosts = res.results.map(processPostItem).filter(Boolean);

    return processedPosts;
  } catch (error) {
    console.error(error);
    return [];
  }
}

//获取单个post的内容
export async function fetchPostBySlug(slugOrId) {
  try {
    // First try to query by slug
    const response = await notion.databases.query({
      database_id: dbId,
      filter: {
        property: "slug",
        rich_text: {
          equals: slugOrId,
        },
      },
    });

    // If found by slug, return the first result
    if (response.results.length > 0) {
      const post = response.results[0];
      const processedPost = processPostItem(post);
      return processedPost;
    }

    // If not found by slug, try to retrieve directly by ID
    try {
      const post = await notion.pages.retrieve({
        page_id: slugOrId,
      });
      const processedPost = processPostItem(post);
      return processedPost;
    } catch (error) {
      console.error("Failed to fetch by ID:", error);
      return null;
    }
  } catch (error) {
    console.error("Failed to fetch by slug:", error);
    return null;
  }
}
