import { Briefcase, Palette, Monitor } from 'lucide-react';
import { WORK_EXPERIENCE } from '../data/portfolioData';
import { WorkExperience } from '../types';

export default function Experience() {
  const getRoleIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Briefcase className="w-4 h-4 text-white" />;
      case 1:
        return <Palette className="w-4 h-4 text-white" />;
      case 2:
      default:
        return <Monitor className="w-4 h-4 text-white" />;
    }
  };

  return (
    <section
      id="experience"
      className="smooth-card rounded-2xl bg-white text-slate-900 p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="mb-6">
        <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
          WORK EXPERIENCE
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-['Outfit',sans-serif]">
          My Work Journey
        </h2>
      </div>

      {/* Connected Timeline with smooth mouse hover interactions */}
      <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-3 sm:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-blue-200">
        {WORK_EXPERIENCE.map((exp: WorkExperience, index: number) => (
          <div
            key={exp.id}
            className="smooth-card relative group p-3.5 -ml-2 rounded-xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/80 hover:border-blue-400 hover:shadow-md transition-all duration-300"
          >
            {/* Timeline Node Icon with smooth scale */}
            <div className="absolute -left-6 sm:-left-8 top-3.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-600 border-2 border-white group-hover:scale-110 flex items-center justify-center shadow-md transition-all duration-300">
              {getRoleIcon(index)}
            </div>

            {/* Content */}
            <div className="pt-0.5">
              <h3 className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                {exp.role}
              </h3>
              <div className="text-xs font-semibold text-blue-600 mb-2">
                {exp.company} <span className="text-slate-400">|</span> {exp.period}
              </div>

              {/* Responsibilities Bullets - Left aligned */}
              <ul className="space-y-1.5 text-xs text-slate-600 leading-relaxed font-normal">
                {exp.responsibilities.slice(0, 5).map((resp: string, i: number) => (
                  <li key={i} className="flex items-start gap-1.5 text-left">
                    <span className="text-blue-600 mt-0.5 shrink-0 font-bold">•</span>
                    <span className="text-left">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
