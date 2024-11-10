import { fetchMd, fetchPost } from '@/lib/data'
import React from 'react'
import { marked } from 'marked'
import createDOMPurify from 'dompurify'
import { JSDOM } from 'jsdom'

export default async function PostPage({ params }) {
  const { slug } = await params;
  const md = await fetchMd(slug);
  const htmlContent = marked(md);

  const window = new JSDOM('').window;
  const DOMPurify = createDOMPurify(window);

  const cleanHtmlContent = DOMPurify.sanitize(htmlContent);

  // console.log(data);
  // console.log(blocks);
  return (
    <div>
      <h1>Post Page</h1>
      <div dangerouslySetInnerHTML={{ __html: cleanHtmlContent }} />
    </div>
  )
}
