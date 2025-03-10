import Image from 'next/image'
import React from 'react'

export default function FriendsList({ friends }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {friends.map((friend) => (
                <a
                    key={friend.id}
                    href={friend.properties.link?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md dark:hover:shadow-lg dark:shadow-gray-900/30 border border-gray-100 dark:border-gray-700 transition-all duration-300 overflow-hidden"
                >
                    {/* Card Content */}
                    <div className="p-6">
                        <div className="flex items-center space-x-4">
                            {/* Avatar */}
                            <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700">
                                <Image
                                    unoptimized
                                    src={
                                        friend.properties.avatar?.rich_text[0]?.plain_text ||
                                        '/default-avatar.jpg'
                                    }
                                    alt={friend.properties.name?.title[0]?.plain_text || '头像'}
                                    width={64}
                                    height={64}
                                    className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>

                            {/* Info */}
                            <div className="flex-1 min-w-0">
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {friend.properties.name?.title[0]?.plain_text}
                                </h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                                    {friend.properties.description?.rich_text[0]?.plain_text}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-blue-600/5 dark:from-blue-500/0 dark:to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
            ))}
        </div>
    )
}
