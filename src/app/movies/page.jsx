import getDoubanRecords from '@/lib/douban'
import Image from 'next/image';
import React from 'react'

export const metadata = {
  title: '观影动态 | Abner\'s Blog',
  description: 'Abner 最近观影动态，分享观影心得',
}

export const revalidate = 72000;

export default async function MoviesPage() {
  const res = await getDoubanRecords();
  const movies = res.rss.channel[0].item;
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* 标题区 */}
        <div className="mb-8 border-b-2 border-gray-200 pb-4">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <span className="mr-2">🎬</span>
            Abner 的最近观影动态
          </h1>
          {/* <p className="mt-2 text-gray-500">最近 10 部</p> */}
        </div>

        {/* 时间轴布局 */}
        <div className="flow-root">
          <ul className="-mb-8">
            {movies.map((movie, index) => {
              const recommendation = movie.description[0].includes('推荐:')
                ? movie.description[0].match(/推荐: ([^<]+)/)[1]
                : '无';

              const remark = movie.description[0].includes('备注:')
                ? movie.description[0].match(/备注: ([^<]+)/)[1]
                : '无';

              return (
                <li key={index} className="mb-8">
                  <div className="relative pb-8">
                    {/* 时间线装饰 */}
                    {index !== movies.length - 1 && (
                      <span className="absolute top-4 left-7 -ml-px h-full w-0.5 bg-gray-200" />
                    )}

                    <div className="relative flex items-start space-x-4">
                      {/* 时间点 */}
                      <div className="relative">
                        <span className="bg-blue-500 h-14 w-14 rounded-full flex items-center justify-center text-white font-medium text-sm">
                          {new Date(movie.pubDate[0]).toLocaleDateString('zh-CN', { month: 'numeric', day: 'numeric' })}
                        </span>
                      </div>

                      {/* 电影卡片 */}
                      <div className="min-w-0 flex-1 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                        <div className="flex flex-col sm:flex-row">
                          {/* 电影海报 */}
                          <a
                            href={movie.link[0]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6"
                          >
                            <Image
                              width={128}
                              height={192}
                              src={movie.description[0].match(/src="([^"]+)"/)[1]}
                              alt={movie.title[0]}
                              className="w-32 rounded-lg transform transition duration-200 hover:scale-105"
                            />
                          </a>

                          {/* 电影信息 */}
                          <div className="flex-1">
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">
                              {movie.title[0]}
                              <span className="ml-2 text-sm font-medium">
                                {movie.title[0].startsWith('想看') ? '⏳' : '✔️'}
                              </span>
                            </h2>

                            {/* 推荐标签 */}
                            {recommendation !== '无' && (
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                                ${recommendation === '力荐' ? 'bg-green-100 text-green-800' :
                                  recommendation === '推荐' ? 'bg-blue-100 text-blue-800' :
                                    recommendation === '还行' ? 'bg-yellow-100 text-yellow-800' :
                                      recommendation === '较差' ? 'bg-orange-100 text-orange-800' :
                                        recommendation === '很差' ? 'bg-red-100 text-red-800' :
                                          ''}`}>
                                {recommendation}
                              </span>
                            )}

                            {/* 备注信息 */}
                            {remark !== '无' && (
                              <div className="mt-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                                📝 {remark}
                              </div>
                            )}

                            {/* 元信息 */}
                            <div className="mt-4 text-sm text-gray-500 space-y-1">
                              {/* <p className="flex items-center">
                                <span className="mr-2">👤</span>
                                {movie['dc:creator'][0]}
                              </p> */}
                              <p className="flex items-center">
                                <span className="mr-2">⏰</span>
                                {new Date(movie.pubDate[0]).toLocaleString()}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )

}
