import { X, ExternalLink, Github, CheckCircle2, Tag, Clock } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      id="project-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white border border-slate-200 text-slate-900 rounded-3xl shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-project-modal-btn"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors focus:outline-hidden cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Image */}
        <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden mb-6 border border-slate-200 bg-slate-100">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback if custom path isn't loaded
              (e.currentTarget as HTMLImageElement).src = '/projects/ai_tools_hub.jpg';
            }}
          />
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <div className="px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md text-white text-xs font-semibold">
              {project.category}
            </div>
            {project.status === 'in-progress' && (
              <div className="px-3 py-1 rounded-full bg-amber-500 backdrop-blur-md text-slate-950 text-xs font-extrabold flex items-center gap-1.5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping" />
                <span>In Progress</span>
              </div>
            )}
          </div>
        </div>

        {/* Project Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-['Outfit',sans-serif]">
            {project.title}
          </h3>
          {project.statusLabel && (
            <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${
              project.status === 'in-progress'
                ? 'bg-amber-50 text-amber-700 border-amber-300'
                : 'bg-blue-50 text-blue-700 border-blue-200'
            }`}>
              {project.statusLabel}
            </span>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 border border-slate-200 text-slate-700"
            >
              <Tag className="w-3 h-3 text-blue-600" />
              {tag}
            </span>
          ))}
        </div>

        {/* In Progress Notice */}
        {project.status === 'in-progress' && (
          <div className="mb-5 p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs flex items-start gap-2.5">
            <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-amber-900">Under Active Development (কাজ চলতেছে):</span> This project is currently being actively designed and developed by Md. Kamrul Islam. More features and live preview link will be added soon!
            </div>
          </div>
        )}

        {/* Full Details */}
        <div className="space-y-4 mb-6 text-sm text-slate-600 leading-relaxed">
          <p>{project.fullDetails || project.description}</p>

          {project.highlights && project.highlights.length > 0 && (
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="font-bold text-xs uppercase tracking-wider text-blue-600 mb-3">
                Key Highlights & Deliverables
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-slate-200">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors"
            >
              <span>Visit Live Platform</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs sm:text-sm font-semibold transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Source / Channel</span>
            </a>
          )}
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
