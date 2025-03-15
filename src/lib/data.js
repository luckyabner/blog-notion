import { NotionToMarkdown } from 'notion-to-md';
import { notion } from './notionServer';
import { marked } from 'marked';
import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

//获取页面内容并解析为markdown格式
export async function fetchMdContent2Html(pageId) {
	const n2m = new NotionToMarkdown({
		notionClient: notion,
	});
	const mdblocks = await n2m.pageToMarkdown(pageId);
	const mdString = n2m.toMarkdownString(mdblocks);
	return createDOMPurify(new JSDOM('').window).sanitize(marked(mdString.parent));
}
