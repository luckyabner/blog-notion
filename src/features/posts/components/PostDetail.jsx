import React from 'react';
import PostProperties from './PostProperties';

export default function PostDetail({ post, content = '' }) {
	return (
		<article className="container mx-auto mt-2 max-w-4xl">
			<PostProperties post={post} />

			{/* 文章内容 */}
			<section
				className="prose-lg mx-auto 
                      prose-headings:font-bold prose-headings:text-gray-900
                      prose-p:leading-relaxed
                      prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                        prose-code:px-1 
                      prose-pre:bg-gray-900 prose-pre:text-gray-100
                      prose-img:rounded-lg prose-img:shadow-lg"
				dangerouslySetInnerHTML={{ __html: content }}
			/>
		</article>
	);
}
