import { NotionToMarkdown } from "notion-to-md";
import { notion } from "./notionServer";

//获取页面内容并解析为markdown格式
export async function fetchMdContent(pageId) {
  const n2m = new NotionToMarkdown({
    notionClient: notion,
  });
  const mdblocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdblocks);
  const mdContent = mdString.parent;
  return mdContent;
}
