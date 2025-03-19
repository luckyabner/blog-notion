"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Error caught by error boundary:", error);

    // 这里可以添加错误上报服务，比如Sentry
    // reportError(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md space-y-6 rounded-lg border-border bg-card p-8 shadow-md">
        <div className="text-center">
          {/* 错误图标 */}
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-destructive">
            <svg
              className="h-10 w-10 text-destructive-foreground"
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

          <h2 className="mb-2 text-2xl font-bold">啊哦，出错了！</h2>
          <p className="mb-6">很抱歉，我们在处理您的请求时遇到了问题。</p>

          {process.env.NODE_ENV === "development" && (
            <div className="mt-4 overflow-auto rounded-md bg-muted p-4 text-left">
              <p className="text-sm font-medium text-muted-foreground">
                错误信息：{error.message}
              </p>
              <pre className="mt-2 whitespace-pre-wrap break-words text-xs text-muted-foreground">
                {error.stack}
              </pre>
            </div>
          )}

          <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
            <button
              onClick={() => reset()}
              className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-destructive px-4 py-2 text-sm font-medium text-destructive-foreground shadow-sm transition-colors duration-200 focus:outline-none focus:ring sm:w-auto"
            >
              重试
            </button>

            <Link
              href="/"
              className="inline-flex w-full items-center justify-center rounded-md border-border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground shadow-sm transition-colors duration-200 focus:ring sm:w-auto"
            >
              返回首页
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
