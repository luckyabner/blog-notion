import { fetchMdContent } from '@/lib/data';
import { marked } from 'marked';
import { JSDOM } from 'jsdom'
import createDOMPurify from 'dompurify'
import React from 'react'

//缓存时间为一小时
export const revalidate = 3600;

export default async function ProjectPage() {
  const projectPageId = process.env.NOTION_PROJECT_ID
  const md = await fetchMdContent(projectPageId)
  const htmlContent = marked(md);
  const window = new JSDOM('').window;
  const DOMPurify = createDOMPurify(window);
  const cleanHtmlContent = DOMPurify.sanitize(htmlContent);
  return (
    <div>
      <main className="container mx-auto px-4 py-12">
        {/* 内容区域 */}
        <div className="max-w-3xl mx-auto">
          <article className="prose prose-lg mx-auto 
                            prose-headings:font-bold prose-headings:text-gray-900
                            prose-p:text-gray-700 prose-p:leading-relaxed
                            prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                            prose-img:rounded-lg prose-img:shadow-lg"
            dangerouslySetInnerHTML={{ __html: cleanHtmlContent }}
          />
        </div>
      </main>
    </div>
  )
}
