import { fetchMdContent, fetchPost } from '@/lib/data'
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
      {/* 页面标题 */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">关于</h1>
        <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
      </div>

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