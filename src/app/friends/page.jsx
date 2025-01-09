import { fetchFriends } from '@/lib/data'
import Image from 'next/image'
import { Users } from 'lucide-react'

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

        {/* Add Friend Section */}
        <div className="mt-16 text-center">
          <div className="inline-block p-6 rounded-lg bg-white shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">添加友链</h3>
            <p className="text-gray-600 mb-4">
              如果您想要添加友链，请确保您的网站：
            </p>
            <ul className="text-left text-gray-600 space-y-2 mb-4">
              <li>• 网站内容积极向上，符合法律法规</li>
              <li>• 站点稳定，加载速度正常</li>
              <li>• 网站有实质性的原创内容</li>
            </ul>
            <p className="text-gray-600">
              满足以上条件，欢迎通过
              <a 
                href="mailto:tiankong089@gmail.com" 
                className="text-blue-600 hover:text-blue-700 font-medium mx-1"
              >
                邮件
              </a>
              联系我添加友链
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
