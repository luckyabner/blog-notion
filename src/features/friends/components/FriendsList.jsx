import FallbackImage from "@/components/FallbackImage";
import Link from "next/link";
import React from "react";

export default function FriendsList({ friends }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {friends.map((friend) => (
        <Link
          key={friend.id}
          href={friend.properties.link?.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-md dark:shadow-gray-900/30 dark:hover:shadow-lg"
        >
          {/* Card Content */}
          <div className="p-6">
            <div className="flex items-center space-x-4">
              {/* Avatar */}
              <div className="relative h-16 w-16 overflow-hidden rounded-full">
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
                <h2 className="group-hover:text-hover truncate text-lg font-semibold text-card-foreground transition-colors">
                  {friend.properties.name?.title[0]?.plain_text}
                </h2>
                <p className="line-clamp-2 text-sm text-muted-foreground">
                  {friend.properties.description?.rich_text[0]?.plain_text}
                </p>
              </div>
            </div>
          </div>

          {/* Hover Effect Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-blue-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-blue-500/0 dark:to-blue-500/10" />
        </Link>
      ))}
    </div>
  );
}
