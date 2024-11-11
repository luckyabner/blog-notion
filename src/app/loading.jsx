import React from 'react'

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        {/* 加载动画 */}
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />
        {/* 加载文字 */}
        <p className="text-lg font-medium text-gray-600">
          正在加载...
        </p>
      </div>
    </div>
  )
}