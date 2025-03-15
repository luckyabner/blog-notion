import React from 'react';
import { fetchProjects } from '@/features/projects/server/projects';
import PageHeader from '@/components/PageHeader';
import ProjectsList from '@/features/projects/components/ProjectsList';

//缓存时间
export const revalidate = 86400;

export default async function ProjectPage() {
	const projects = await fetchProjects();

	return (
		<main className='className="min-h-screen px-4"'>
			<PageHeader
				title={'Projects'}
				description={'These are my projects and toys.'}
			/>

			<div className="mx-auto px-4 pb-16">
				<ProjectsList projects={projects} />
			</div>
		</main>
	);
}
