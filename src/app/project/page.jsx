import { fetchProject, fetchRepofromGithub } from '@/lib/data';
import React from 'react';
import { ExternalLink, Star, GitFork, Code } from 'lucide-react';

//缓存时间
export const revalidate = 72000;

export default async function ProjectPage() {
  const projects = await fetchProject();
  
  // 并行获取所有仓库信息
  const repoPromises = projects.map(async (project) => {
    const repoName = project.properties?.name?.title[0]?.plain_text;
    if (!repoName) return null;
    const repoInfo = await fetchRepofromGithub(repoName);
    return {
      ...project,
      github: repoInfo
    };
  });

  const projectsWithRepo = await Promise.all(repoPromises);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">项目</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            个人的一些项目
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsWithRepo.map((project) => {
            if (!project) return null;
            
            const name = project.github.name || project.properties?.name?.title[0]?.plain_text;
            const description = project?.github.description;
            const github = project.github;

            return (
              <div key={project.id} 
                className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden border border-gray-100">
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
                    {name}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {description}
                  </p>
                  
                  {github && !github.error && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-6 text-gray-500">
                        <div className="flex items-center gap-1.5">
                          <Star size={16} />
                          <span className="text-sm">{github.stars}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <GitFork size={16} />
                          <span className="text-sm">{github.forks}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Code size={16} />
                          <span className="text-sm">{github.language}</span>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-100">
                        <a
                          href={github.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-medium"
                        >
                          View on GitHub
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                  )}
                  
                  {github?.error && (
                    <p className="text-red-500 text-sm mt-2">
                      Unable to load repository data
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
