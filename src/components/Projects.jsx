import React, { useState } from 'react';
import { 
  FolderGit2, 
  FileSpreadsheet, 
  Code2, 
  ArrowUpRight, 
  Eye, 
  Info,
  CheckCircle2
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'excel') return project.category.includes('Excel');
    if (filter === 'c') return project.category.includes('C');
    return true;
  });

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-wide uppercase">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Practical Work Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Excel &amp; Programming <span className="gradient-text">Practice Projects</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Hands-on spreadsheet models and introductory C programming exercises completed during my foundational studies.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              All Projects ({projectsData.length})
            </button>
            <button
              onClick={() => setFilter('excel')}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                filter === 'excel'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              Excel Sheets (4)
            </button>
            <button
              onClick={() => setFilter('c')}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                filter === 'c'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              C Programming (1)
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => {
            const isExcel = project.category.includes('Excel');

            return (
              <div
                key={project.id}
                className="glass-card rounded-3xl border border-slate-800 hover:border-indigo-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10 group"
              >
                <div>
                  {/* Top Meta Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-800 text-indigo-400 group-hover:scale-105 transition-transform">
                      {isExcel ? (
                        <FileSpreadsheet className="w-5 h-5 text-emerald-400" />
                      ) : (
                        <Code2 className="w-5 h-5 text-blue-400" />
                      )}
                    </div>

                    {/* Distinct Practice Project Badge */}
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      {project.badge}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>

                  {/* Tools / Formulas tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tools.slice(0, 3).map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 3 && (
                      <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono text-slate-500">
                        +{project.tools.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-400">
                    {project.category}
                  </span>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white transition-all duration-200"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for detailed breakdown */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}
