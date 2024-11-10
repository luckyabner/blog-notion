import { NotionToMarkdown } from "notion-to-md";
import { dbId, notion } from "./notionServer";


export default async function fetchPosts() {
  try {
    const res = await notion.databases.query({
      database_id: dbId,
    });
    return res.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}

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

export async function fetchBlocks(pageId) {
  const blocks = [];
  let cursor;
  while (true) {
    const { results, next_cursor } = await notion.blocks.children.list({
      block_id: pageId,
      start_cursor: cursor,
    });
    results.forEach(block => {
      blocks[block.id] = block;
    });
    if (!next_cursor) {
      break;
    }
    cursor = next_cursor;
  }
  return blocks;
}

export async function fetchMd(pageId) {
  const n2m = new NotionToMarkdown({
    notionClient: notion,
  })
  const mdblocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdblocks);
  return mdString.parent;
}