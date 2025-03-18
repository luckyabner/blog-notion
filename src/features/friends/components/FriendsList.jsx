import FallbackImage from "@/components/FallbackImage";
import Image from "next/image";
import React from "react";

export default function FriendsList({ friends }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {friends.map((friend) => (
        <a
          key={friend.id}
          href={friend.properties.link?.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:shadow-gray-900/30 dark:hover:shadow-lg"
        >
          {/* Card Content */}
          <div className="p-6">
            <div className="flex items-center space-x-4">
              {/* Avatar */}
              <div className="relative h-16 w-16 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
                <FallbackImage
                  unoptimized
                  src={friend.properties.avatar?.rich_text[0]?.plain_text}
                  alt={friend.properties.name?.title[0]?.plain_text || "头像"}
                  width={64}
                  height={64}
                  className="transform object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Info */}
              <div className="min-w-0 flex-1">
                <h2 className="truncate text-lg font-semibold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-gray-100 dark:group-hover:text-blue-400">
                  {friend.properties.name?.title[0]?.plain_text}
                </h2>
                <p className="line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
                  {friend.properties.description?.rich_text[0]?.plain_text}
                </p>
              </div>
            </div>
          </div>

          {/* Hover Effect Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-blue-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-blue-500/0 dark:to-blue-500/10" />
        </a>
      ))}
    </div>
  );
}
