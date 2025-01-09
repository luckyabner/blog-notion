import { NotionToMarkdown } from "notion-to-md";
import { dbId, friendsDbId, notion, projectDbId } from "./notionServer";
import axios from 'axios';

//获取post列表
export default async function fetchPosts() {
  try {
    const res = await notion.databases.query({
      database_id: dbId,
      //过滤掉未发布的文章
      filter: {
        property: 'status',
        status: {
          equals: 'published'
        }
      }
    });
    return res.results;
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
      return response.results[0];
    }

    // If not found by slug, try to retrieve directly by ID
    try {
      const pageResponse = await notion.pages.retrieve({
        page_id: slugOrId
      });
      return pageResponse;
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
export async function fetchPage(pageId){
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
  try{
    const res = await notion.databases.query({
      database_id: friendsDbId,
    });
    return res.results;
  }catch(err){
    console.log(err);
    return [];
  }
}

//获取项目名称
export async function fetchProject() {
  try{
    const res = await notion.databases.query({
      database_id: projectDbId,
    });
    return res.results;
  }catch(err){
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