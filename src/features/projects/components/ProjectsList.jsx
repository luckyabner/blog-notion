import FallbackImage from "@/components/FallbackImage";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectsList({ projects }) {
  if (!projects || projects.length === 0) {
    return (
      <div className="py-16 text-center text-gray-500 dark:text-gray-400">
        暂无项目数据
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-6">
      {projects.map((project) => (
        <Link
          title={project.name}
          href={project.link}
          key={project.id}
          className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md sm:flex-row dark:border-gray-700 dark:bg-gray-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-md bg-gray-100 dark:bg-gray-700">
            <FallbackImage
              fallbackSrc="/default-project.ico"
              src={project.icon}
              alt={project.name}
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <div className="flex min-w-0 flex-grow flex-col">
            <h3 className="mb-1 truncate text-xl font-semibold">
              {project.name}
            </h3>
            <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
              {project.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
