import FallbackImage from "@/components/FallbackImage";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectsList({ projects }) {
  if (!projects || projects.length === 0) {
    return <div className="py-16 text-center">暂无项目数据</div>;
  }

  return (
    <div className="flex w-full flex-col gap-6">
      {projects.map((project) => (
        <Link
          title={project.name}
          href={project.link}
          key={project.id}
          className="group relative flex items-center gap-4 overflow-hidden rounded-lg border border-border bg-card p-4 shadow-sm transition-all duration-300 hover:shadow-md sm:flex-row"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-md bg-muted">
            <FallbackImage
              fallbackSrc="/default-project.ico"
              src={project.icon}
              alt={project.name}
              width={48}
              height={48}
              className="rounded-md object-contain transition-transform duration-200 group-hover:rotate-12"
            />
          </div>
          <div className="flex min-w-0 flex-grow flex-col">
            <h3 className="mb-1 truncate text-xl font-semibold">
              {project.name}
            </h3>
            <p className="line-clamp-2 text-sm text-muted-foreground">
              {project.description}
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-blue-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-blue-500/0 dark:to-blue-500/10" />
        </Link>
      ))}
    </div>
  );
}
