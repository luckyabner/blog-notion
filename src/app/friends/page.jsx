import { fetchFriends } from '@/lib/data'
import Image from 'next/image'
import { Users } from 'lucide-react'
import { Code } from 'lucide-react'

export const metadata = {
  title: '友情链接 | Abner\'s Blog',
  description: '友情链接页面，展示志同道合的朋友们的博客',
}

export const revalidate = 72000;

export default async function FriendsPage() {
  const friends = await fetchFriends()

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="py-16 text-center">
        <Users className="mx-auto h-16 w-16 text-blue-500 mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">友情链接</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4">
          与志同道合的朋友们分享知识，建立联系。欢迎交换友链！
        </p>
      </div>

      {/* Friends Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {friends.map((friend) => (
            <a
              key={friend.id}
              href={friend.properties.link?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              {/* Card Content */}
              <div className="p-6">
                <div className="flex items-center space-x-4">
                  {/* Avatar */}
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-100">
                    <Image
                      unoptimized
                      src={friend.properties.avatar?.rich_text[0]?.plain_text || '/default-avatar.jpg'}
                      alt={friend.properties.name?.title[0]?.plain_text || '头像'}
                      width={64}
                      height={64}
                      className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg font-semibold text-gray-900 truncate group-hover:text-blue-600 transition-colors">
                      {friend.properties.name?.title[0]?.plain_text}
                    </h2>
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {friend.properties.description?.rich_text[0]?.plain_text}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          ))}
        </div>

        {/* 添加友链和我的网站信息 */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* 添加友链 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">添加友链</h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-600">
                如果您想要添加友链，请确保您的网站：
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                  网站内容积极向上，符合法律法规
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                  站点稳定，加载速度正常
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                  网站有实质性的原创内容
                </li>
              </ul>
              <div className="pt-4">
                <a 
                  href="mailto:tiankong089@gmail.com" 
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  发送邮件申请
                </a>
              </div>
            </div>
          </div>

          {/* 我的网站信息 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Code className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">我的网站信息</h3>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg font-mono text-sm">
                <div className="grid gap-3">
                  <div className="grid grid-cols-[80px,1fr] gap-2">
                    <span className="text-gray-500">name:</span>
                    <span className="text-blue-600">Abner`s Blog</span>
                  </div>
                  <div className="grid grid-cols-[80px,1fr] gap-2">
                    <span className="text-gray-500">link:</span>
                    <a href="https://abner.top" target="_blank" rel="noopener noreferrer" 
                      className="text-blue-600 hover:text-blue-700 truncate">
                      https://blog.abnerz6.top
                    </a>
                  </div>
                  <div className="grid grid-cols-[80px,1fr] gap-2">
                    <span className="text-gray-500">avatar:</span>
                    <span className="text-blue-600 break-all">
                      https://abnerblog-1317606226.cos.ap-nanjing.myqcloud.com/202406291900870.jpg
                    </span>
                  </div>
                  <div className="grid grid-cols-[80px,1fr] gap-2">
                    <span className="text-gray-500">desc:</span>
                    <span className="text-blue-600">日拱一卒，功不唐捐</span>
                  </div>
                </div>
              </div>
              <div className="pt-2 text-sm text-gray-500">
                复制以上信息进行友链配置
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
