import { NotionToMarkdown } from "notion-to-md";
import { dbId, notion } from "./notionServer";


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
export async function fetchPost(pageId) {
  try {
    const res = await notion.pages.retrieve({
      page_id: pageId,
    });
    return res;
  } catch (error) {
    console.error(error);
    return {};
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