import { fetchMdContent } from '@/lib/data'
import React from 'react'
import { marked } from 'marked'
import createDOMPurify from 'dompurify'
import { JSDOM } from 'jsdom'

// 每小时更新一次
export const revalidate = 3600;

export default async function AboutPage() {
  const aboutPageId = process.env.NOTION_ABOUTPAGE_ID
  const aboutPost = await fetchMdContent(aboutPageId)
  const htmlContent = marked(aboutPost);
  const window = new JSDOM('').window;
  const DOMPurify = createDOMPurify(window);
  const cleanHtmlContent = DOMPurify.sanitize(htmlContent);

  return (
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
  )
}