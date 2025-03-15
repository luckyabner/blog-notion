'use client'; // Error boundaries must be Client Components

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error, reset }) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error('Error caught by error boundary:', error);

		// 这里可以添加错误上报服务，比如Sentry
		// reportError(error);
	}, [error]);

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
			<div className="max-w-md w-full space-y-6 p-8 bg-white rounded-lg shadow-md">
				<div className="text-center">
					{/* 错误图标 */}
					<div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4">
						<svg
							className="h-10 w-10 text-red-500"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
							/>
						</svg>
					</div>

					<h2 className="text-2xl font-bold text-gray-900 mb-2">啊哦，出错了！</h2>
					<p className="text-gray-600 mb-6">很抱歉，我们在处理您的请求时遇到了问题。</p>

					{process.env.NODE_ENV === 'development' && (
						<div className="mt-4 p-4 bg-gray-100 rounded-md text-left overflow-auto">
							<p className="text-sm font-medium text-gray-900">错误信息：{error.message}</p>
							<pre className="mt-2 text-xs text-gray-600 whitespace-pre-wrap break-words">
								{error.stack}
							</pre>
						</div>
					)}

					<div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
						<button
							onClick={() => reset()}
							className="w-full sm:w-auto inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
						>
							重试
						</button>

						<Link
							href="/"
							className="w-full sm:w-auto inline-flex justify-center items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
						>
							返回首页
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
