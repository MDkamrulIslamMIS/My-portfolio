import { useState } from 'react';
import { ExternalLink, Eye, ArrowRight, Sparkles, Clock, CheckCircle } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section
      id="projects"
      className="smooth-card rounded-2xl bg-white text-slate-900 p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300"
    >
      {/* Header with Title and "View All Projects ->" */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FEATURED PROJECTS & INITIATIVES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-['Outfit',sans-serif]">
            My Recent Projects
          </h2>
        </div>

        <button
          onClick={() => setSelectedProject(PROJECTS_DATA[0])}
          className="smooth-btn text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer group px-2.5 py-1.5 rounded-lg bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-all duration-200"
        >
          <span>View All Details</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>

      {/* Projects Grid with Smooth Mouse Hover Animations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PROJECTS_DATA.map((project) => (
          <div
            key={project.id}
            className="smooth-card rounded-xl border border-slate-200 hover:border-blue-500 overflow-hidden bg-white shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            {/* Project Image with smooth scale and status tag */}
            <div className="relative w-full h-36 sm:h-40 bg-slate-100 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/projects/ai_tools_hub.jpg';
                }}
              />
              <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-300 pointer-events-none" />

              {/* Status Badge */}
              <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                {project.status === 'in-progress' ? (
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500 text-slate-950 backdrop-blur-md flex items-center gap-1 shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-ping" />
                    <span>In Progress</span>
                  </span>
                ) : project.status === 'live' ? (
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500 text-white backdrop-blur-md flex items-center gap-1 shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span>Live</span>
                  </span>
                ) : (
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-100 text-blue-700 border border-blue-200 backdrop-blur-md flex items-center gap-1 shadow-xs">
                    <CheckCircle className="w-3 h-3 text-blue-600" />
                    <span>Solution</span>
                  </span>
                )}
              </div>
            </div>

            {/* Card Content */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-base text-slate-900 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2 min-h-[2.75rem] text-left">
                  {project.title}
                </h3>
                <div className="text-xs text-blue-600 font-semibold mt-1 truncate text-left">
                  {project.category}
                </div>
                <p className="text-xs text-slate-600 line-clamp-2 mt-2 leading-relaxed text-left">
                  {project.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="smooth-btn flex-1 py-1.5 px-3 rounded-lg bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-blue-50 text-slate-700 hover:text-blue-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-blue-600" />
                  <span>View Details</span>
                </button>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="smooth-btn py-1.5 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center justify-center gap-1 shadow-xs hover:shadow-md transition-all shrink-0"
                  >
                    <span>Visit</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
