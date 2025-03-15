import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ProjectsList({ projects }) {
	if (!projects || projects.length === 0) {
		return <div className="text-center py-16 text-gray-500 dark:text-gray-400">暂无项目数据</div>;
	}

	return (
		<div className="w-full flex flex-col gap-6">
			{projects.map((project) => (
				<Link
					title={project.name}
					href={project.link}
					key={project.id}
					className="flex gap-4 sm:flex-row items-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className="relative w-16 h-16 flex-shrink-0 rounded-md bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
						<Image
							src={`${project.link}/favicon.ico`}
							alt={project.name}
							width={48}
							height={48}
							className="object-contain"
						/>
					</div>
					<div className="flex flex-col flex-grow min-w-0">
						<h3 className="text-xl font-semibold mb-1 truncate">{project.name}</h3>
						<p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
							{project.description}
						</p>
					</div>
				</Link>
			))}
		</div>
	);
}
