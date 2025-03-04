import React from 'react'
import { marked } from 'marked'
import createDOMPurify from 'dompurify'
import { JSDOM } from 'jsdom'
import PostProperties from './postProperties';


export default function PostDetail({ post, mdContent = '' }) {
  //将md解析为html
  const htmlContent = marked(mdContent);
  const window = new JSDOM('').window;
  const DOMPurify = createDOMPurify(window);
  const cleanHtmlContent = DOMPurify.sanitize(htmlContent);

  return (
    <article className="container mx-auto mt-2 max-w-4xl">
      <PostProperties post={post} />

      {/* 文章内容 */}
      <section className="prose-lg mx-auto 
                      prose-headings:font-bold prose-headings:text-gray-900
                      prose-p:leading-relaxed
                      prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                        prose-code:px-1 
                      prose-pre:bg-gray-900 prose-pre:text-gray-100
                      prose-img:rounded-lg prose-img:shadow-lg"
        dangerouslySetInnerHTML={{ __html: cleanHtmlContent }}
      />
    </article>
  )
}
