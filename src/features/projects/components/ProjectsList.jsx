import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ProjectsList({ projects }) {
	if (!projects || projects.length === 0) {
		return <div className="text-center py-16 text-gray-500 dark:text-gray-400">暂无项目数据</div>;
	}

	return (
		<div className="w-full grid gap-6 sm:grid-cols-1 md:grid-cols-2">
			{projects.map((project) => (
				<Link
					title={project.name}
					href={project.link}
					key={project.id}
					className="group flex flex-col sm:flex-row items-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className="relative w-16 h-16 shrink-0 mb-4 sm:mb-0 sm:mr-5 overflow-hidden rounded-md bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
						<Image
							src={`${project.link}/favicon.ico`}
							alt={project.name}
							width={48}
							height={48}
							className="object-contain"
						/>
					</div>
					<div className="flex flex-col text-center sm:text-left">
						<h3 className="text-xl font-semibold mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
							{project.name}
						</h3>
						<p className="text-gray-600 dark:text-gray-400 text-sm">{project.description}</p>
					</div>
				</Link>
			))}
		</div>
	);
}
