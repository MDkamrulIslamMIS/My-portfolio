import { Settings, Users, ShieldCheck, Target, FileDown } from 'lucide-react';
import { openOrDownloadCV } from '../utils/cvDownloader';

export default function About() {
  const qualities = [
    { icon: <Settings className="w-5 h-5 text-cyan-400" />, label: 'Problem Solver' },
    { icon: <Users className="w-5 h-5 text-cyan-400" />, label: 'Team Player' },
    { icon: <ShieldCheck className="w-5 h-5 text-cyan-400" />, label: 'Quick Learner' },
    { icon: <Target className="w-5 h-5 text-cyan-400" />, label: 'Result Oriented' },
  ];

  return (
    <section
      id="about"
      className="smooth-card rounded-2xl bg-white text-slate-900 p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300"
    >
      {/* Eyebrow and Heading with Download CV action */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
            ABOUT ME
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-['Outfit',sans-serif]">
            Who I Am
          </h2>
        </div>

        <button
          onClick={openOrDownloadCV}
          className="smooth-btn inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white border border-emerald-300 hover:border-emerald-600 text-xs font-bold transition-all duration-300 cursor-pointer shadow-2xs"
          title="Download or Print Md. Kamrul Islam Official CV"
        >
          <FileDown className="w-3.5 h-3.5" />
          <span>Download CV</span>
        </button>
      </div>

      {/* Main Content Grid: Narrative on Left, Workspace Photo on Right */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center mb-6">
        <div className="md:col-span-7">
          <p className="text-sm text-slate-600 leading-relaxed font-normal text-left">
            I am a dedicated and results-driven professional with experience in ERP operations, MIS reporting, data analysis and business process support. I am always eager to learn new technologies and improve my skills to contribute meaningfully to any organization.
          </p>
        </div>

        <div className="md:col-span-5">
          <div className="rounded-xl overflow-hidden shadow-xs border border-slate-200 group">
            <img
              src="/src/assets/images/workspace_desk_1789805812153.jpg"
              alt="MD. Kamrul Islam Professional Workspace"
              className="w-full h-36 sm:h-40 object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* 4 Professional Qualities Badges with smooth hover animations */}
      <div className="pt-4 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
        {qualities.map((item) => (
          <div
            key={item.label}
            className="smooth-btn flex flex-col items-center justify-center p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 hover:border-blue-400 hover:bg-blue-50/50 hover:-translate-y-1 transition-all duration-300 cursor-default group"
          >
            <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 group-hover:bg-blue-600 flex items-center justify-center mb-2 shadow-2xs transition-all duration-300 group-hover:scale-110">
              <span className="text-blue-600 group-hover:text-white transition-colors">
                {item.icon}
              </span>
            </div>
            <span className="text-xs font-bold text-slate-700 group-hover:text-blue-600 transition-colors">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
