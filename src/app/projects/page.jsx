import React from "react";
import { fetchProjects } from "@/features/projects/server/projects";
import PageHeader from "@/components/PageHeader";
import ProjectsList from "@/features/projects/components/ProjectsList";
import { Suspense } from "react";
import ListSkeleton from "@/components/ListSkeleton";

//缓存时间
export const revalidate = 86400;

async function ProjectsContainer() {
  const projects = await fetchProjects();
  return <ProjectsList projects={projects} />;
}
export default function ProjectPage() {
  return (
    <main className="min-h-screen px-4">
      <PageHeader
        title={"Projects"}
        description={"These are my projects and toys."}
      />

      <div className="mx-auto px-4 pb-16">
        <Suspense fallback={<ListSkeleton />}>
          <ProjectsContainer />
        </Suspense>
      </div>
    </main>
  );
}
