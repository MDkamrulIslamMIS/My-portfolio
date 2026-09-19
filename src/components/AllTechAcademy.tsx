import { Globe, Youtube, GraduationCap, Laptop } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function AllTechAcademy() {
  const topics = [
    'AI Tools',
    'Programming',
    'Freelancing',
    'Microsoft Skills',
    'Video Editing'
  ];

  return (
    <section
      id="alltech"
      className="smooth-card rounded-2xl bg-white text-slate-900 p-5 sm:p-6 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
    >
      {/* Background subtle glow */}
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-100/50 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-200/50 transition-colors duration-500" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center relative z-10">
        {/* Left: Graphic Thumbnail / Logo Box */}
        <div className="md:col-span-3 flex justify-center">
          <div className="smooth-card w-full max-w-[140px] aspect-video sm:aspect-square rounded-xl bg-blue-50 border border-blue-200 p-3 flex flex-col items-center justify-center text-center shadow-xs hover:-translate-y-1 hover:border-blue-400 transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white mb-2 shadow-xs group-hover:scale-110 transition-transform duration-300">
              <Laptop className="w-5 h-5 text-white" />
            </div>
            <span className="text-[11px] font-bold text-slate-900 leading-tight">
              All Tech Academy
            </span>
            <span className="text-[9px] text-blue-600 font-semibold mt-0.5">BD Edition</span>
          </div>
        </div>

        {/* Center: Info, Topics, Buttons */}
        <div className="md:col-span-6 flex flex-col items-start">
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight font-['Outfit',sans-serif] group-hover:text-blue-600 transition-colors">
            All Tech Academy BD
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-blue-600 mb-3">
            Free Technology Learning Platform
          </p>

          {/* Topics tags row with smooth hover */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {topics.map((t) => (
              <span
                key={t}
                className="smooth-btn px-2.5 py-0.5 rounded-md bg-slate-100 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-[10px] font-medium text-slate-700 hover:text-blue-700 transition-all duration-200 cursor-default"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Action buttons matching screenshot with smooth hover */}
          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href={PERSONAL_INFO.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="smooth-btn inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-sm hover:-translate-y-1 transition-all duration-200 cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Visit Website</span>
            </a>

            <a
              href={PERSONAL_INFO.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="smooth-btn inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs shadow-sm hover:-translate-y-1 transition-all duration-200 cursor-pointer"
            >
              <Youtube className="w-3.5 h-3.5" />
              <span>YouTube Channel</span>
            </a>
          </div>
        </div>

        {/* Right: Badge Card with smooth hover */}
        <div className="md:col-span-3 flex justify-center">
          <div className="smooth-card w-full rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 border border-blue-500/30 p-4 text-center shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="w-10 h-10 mx-auto rounded-full bg-white/20 flex items-center justify-center text-white mb-2 shadow-inner">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div className="font-extrabold text-xs text-white">
              All Tech Academy
            </div>
            <div className="text-[10px] text-blue-100 mt-1 font-medium italic">
              Learn | Grow | Build Your Future
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
