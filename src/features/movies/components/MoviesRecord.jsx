import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MoviesRecord({ movies }) {
  return (
    <div className="flow-root">
      <ul className="-mb-8">
        {movies.map((movie, index) => {
          const recommendation = movie.description[0].includes("推荐:")
            ? movie.description[0].match(/推荐: ([^<]+)/)[1]
            : "无";

          const remark = movie.description[0].includes("备注:")
            ? movie.description[0].match(/备注: ([^<]+)/)[1]
            : "无";

          return (
            <li key={index} className="mb-8">
              <div className="relative pb-8">
                {/* 时间线装饰 */}
                {index !== movies.length - 1 && (
                  <span className="absolute left-7 top-4 -ml-px h-full w-0.5 bg-muted-foreground" />
                )}

                <div className="relative flex items-start space-x-4">
                  {/* 时间点 */}
                  <div className="relative">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent p-2 text-sm font-medium">
                      {new Date(movie.pubDate[0]).toLocaleDateString("zh-CN", {
                        month: "numeric",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  {/* 电影卡片 */}
                  <div className="min-w-0 flex-1 rounded-lg border-border bg-card p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
                    <div className="flex flex-col space-x-4 p-4 sm:flex-row">
                      {/* 电影海报 */}
                      <Link
                        href={movie.link[0]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-6"
                      >
                        <Image
                          width={128}
                          height={192}
                          src={movie.description[0].match(/src="([^"]+)"/)[1]}
                          alt={movie.title[0]}
                          className="w-32 transform rounded-lg transition duration-200 hover:scale-105"
                        />
                      </Link>

                      {/* 电影信息 */}
                      <div className="flex-1">
                        <h2 className="mb-2 text-xl font-semibold">
                          {movie.title[0]}
                          <span className="ml-2 text-sm font-medium">
                            {movie.title[0].startsWith("想看") ? "⏳" : "✔️"}
                          </span>
                        </h2>

                        {/* 推荐标签 */}
                        {recommendation !== "无" && (
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              recommendation === "力荐"
                                ? "text-green-800 dark:text-green-300"
                                : recommendation === "推荐"
                                  ? "text-blue-800 dark:text-blue-300"
                                  : recommendation === "还行"
                                    ? "text-yellow-800 dark:text-yellow-300"
                                    : recommendation === "较差"
                                      ? "text-orange-800 dark:text-orange-300"
                                      : recommendation === "很差"
                                        ? "text-red-800 dark:text-red-300"
                                        : ""
                            }`}
                          >
                            {recommendation}
                          </span>
                        )}

                        {/* 备注信息 */}
                        {remark !== "无" && (
                          <div className="mt-2 rounded-lg p-3 text-sm">
                            📝 {remark}
                          </div>
                        )}

                        {/* 元信息 */}
                        <div className="mt-4 space-y-1 text-sm text-muted-foreground">
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
          );
        })}
      </ul>
    </div>
  );
}
