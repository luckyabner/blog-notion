import { NotionToMarkdown } from "notion-to-md";
import { dbId, friendsDbId, notion, projectDbId } from "./notionServer";
import axios from 'axios';
import { SITE } from "@/config";

//获取有分页的post列表
export default async function fetchPosts({ pageSize = SITE.postPerPage, startCursor } = {}) {
  try {
    const res = await notion.databases.query({
      database_id: dbId,
      filter: {
        property: 'status',
        status: {
          equals: 'published'
        }
      },
      sorts: [
        {
          property: 'date',
          direction: 'descending'
        }
      ],
      page_size: pageSize,
      start_cursor: startCursor
    });
    // 处理数据
    const processedPosts = res.results.map(item => {
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
    })
      .filter(Boolean)


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
        property: 'status',
        status: {
          equals: 'published'
        }
      },
      sorts: [
        {
          property: 'date',
          direction: 'descending'
        }
      ],
    });
    // 处理数据
    const processedPosts = res.results.map(item => {
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
    })
      .filter(Boolean)

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
        property: 'slug',
        rich_text: {
          equals: slugOrId
        }
      }
    });

    // If found by slug, return the first result
    if (response.results.length > 0) {
      const post = response.results[0];
      const processedPost = {
        id: post.id,
        title: post.properties?.title?.title[0]?.plain_text || '无标题',
        description: post.properties?.description?.rich_text[0]?.plain_text || '',
        category: post.properties?.category?.select?.name || '',
        description: post?.properties?.description?.rich_text[0]?.plain_text,
        date: post.properties?.date?.date?.start || post.created_time,
      }
      return processedPost;
    }

    // If not found by slug, try to retrieve directly by ID
    try {
      const post = await notion.pages.retrieve({
        page_id: slugOrId
      });
      const processedPost = {
        id: post.id,
        title: post.properties?.title?.title[0]?.plain_text || '无标题',
        description: post.properties?.description?.rich_text[0]?.plain_text || '',
        category: post.properties?.category?.select?.name || '',
        description: post?.properties?.description?.rich_text[0]?.plain_text,
        date: post.properties?.date?.date?.start || post.created_time,
      }
      return processedPost;
    } catch (error) {
      console.error('Failed to fetch by ID:', error);
      return null;
    }
  } catch (error) {
    console.error('Failed to fetch by slug:', error);
    return null;
  }
}

//获取页面内容
export async function fetchPage(pageId) {
  try {
    const response = await notion.pages.retrieve({
      page_id: pageId
    });
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}


//获取post的内容并解析为markdown格式
export async function fetchMdContent(pageId) {
  const n2m = new NotionToMarkdown({
    notionClient: notion,
  })
  const mdblocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdblocks);
  return mdString.parent;
}

//获取分类列表
export async function fetchCategories() {
  try {
    const response = await notion.databases.query({
      database_id: dbId,
      filter: {
        property: 'status',
        status: {
          equals: 'published'
        }
      },
    });

    // 提取所有分类并去重
    const categories = [...new Set(
      response.results
        .map(page => page.properties?.category?.select?.name)
        .filter(Boolean) // 过滤掉 null/undefined
    )];

    return categories;
  } catch (error) {
    console.error(error);
    return [];
  }
}

//获取指定分类文章
export async function fetchPostsByCategory(category) {
  try {
    const response = await notion.databases.query({
      database_id: dbId,
      filter: {
        and: [
          {
            property: 'category',
            select: {
              equals: category
            }
          },
          {
            property: 'status',
            status: {
              equals: 'published'
            }
          }
        ]
      }
    });

    return response.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}

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

//获取项目名称
export async function fetchProject() {
  try {
    const res = await notion.databases.query({
      database_id: projectDbId,
    });
    return res.results;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export async function fetchRepofromGithub(name) {
  const url = `https://api.github.com/repos/${name}`;

  try {
    const { data } = await axios.get(url, {
      headers: {
        'Accept': 'application/json',
      }
    });

    return {
      name: data.name,
      description: data.description || '',
      stars: data.stargazers_count || 0,
      forks: data.forks_count || 0,
      url: data.html_url,
      language: data.language || 'Unknown',
      topics: data.topics || [],
      updatedAt: data.updated_at,
    };
  } catch (error) {
    console.error('Detailed fetch error:', {
      error: error.message,
      response: error.response?.data,
      name: name
    });

    return {
      error: true,
      message: `Failed to fetch repository data: ${error.message}`,
      name,
    };
  }
}