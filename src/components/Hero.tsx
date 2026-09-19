import { Mail, Linkedin, GraduationCap, Compass, FileDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { openOrDownloadCV } from '../utils/cvDownloader';

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 bg-[#040919] text-white overflow-hidden border-b border-blue-950"
    >
      {/* Subtle Network Circuit Background Grids & Ambient Blue Glows */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tech-dots" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#38bdf8" />
              <path d="M 2 2 L 20 20 M 20 20 L 40 20" stroke="#1e3a8a" strokeWidth="0.5" fill="none" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tech-dots)" />
        </svg>
      </div>

      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Introductions & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Greeting */}
            <div className="text-cyan-400 font-bold text-sm sm:text-base tracking-wide mb-2 animate-pulse">
              Hello, I'm
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-2 font-['Outfit',sans-serif]">
              {PERSONAL_INFO.name}
            </h1>

            {/* Professional Title */}
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-sky-400 mb-5">
              ERP & MIS | IT | Data Analysis Professional
            </div>

            {/* Summary Bio - Text Justified as requested */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mb-8 font-normal text-justify">
              I am an Assistant Officer (ERP & MIS) with hands-on experience in ERP operations, MIS reporting, data analysis and business process support. I enjoy working with technology, solving problems and creating efficient solutions for better business performance.
            </p>

            {/* Call to Action Buttons with Smooth Animations */}
            <div className="flex flex-wrap items-center gap-3.5">
              {/* Download CV Button */}
              <button
                id="hero-download-cv-btn"
                onClick={openOrDownloadCV}
                className="smooth-btn inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-sm shadow-lg shadow-emerald-900/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-emerald-400/30"
                title="Download or Print Md. Kamrul Islam Official CV"
              >
                <FileDown className="w-4 h-4 animate-bounce" />
                <span>Download CV</span>
              </button>

              <button
                id="hero-view-work-btn"
                onClick={() => handleScrollTo('projects')}
                className="smooth-btn inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <Compass className="w-4 h-4" />
                <span>View My Work</span>
              </button>

              <button
                id="hero-contact-btn"
                onClick={() => handleScrollTo('contact')}
                className="smooth-btn inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 text-white font-semibold text-sm shadow-xs hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </button>

              <a
                id="hero-linkedin-btn"
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="smooth-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-sky-500 text-white font-semibold text-sm shadow-xs hover:-translate-y-1 transition-all duration-300"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4 text-sky-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Frame & Portrait matching image.png with smooth hover effect */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-full max-w-[420px] aspect-[4/4.5] flex items-center justify-center group">
              {/* Cursive Handwriting Slogan in Top Right */}
              <div className="absolute -top-3 sm:top-2 right-2 sm:right-6 z-20 select-none pointer-events-none transform -rotate-12 text-right group-hover:scale-105 transition-transform duration-300">
                <div className="font-['Caveat',cursive] text-2xl sm:text-3xl font-bold text-sky-300 drop-shadow-[0_2px_10px_rgba(56,189,248,0.5)] leading-tight">
                  Better Skills
                </div>
                <div className="font-['Caveat',cursive] text-2xl sm:text-3xl font-bold text-sky-300 drop-shadow-[0_2px_10px_rgba(56,189,248,0.5)] leading-tight">
                  Brighter
                </div>
                <div className="font-['Caveat',cursive] text-2xl sm:text-3xl font-bold text-sky-300 drop-shadow-[0_2px_10px_rgba(56,189,248,0.5)] leading-tight">
                  Future
                </div>
              </div>

              {/* Background Tech Hexagon / Diamond polygon glow */}
              <div className="absolute inset-4 rounded-[40px] bg-gradient-to-br from-blue-600/30 via-sky-500/20 to-transparent border border-cyan-400/30 blur-xs -z-10 group-hover:scale-105 transition-transform duration-500" />

              {/* Portrait Container with Smooth Hover Zoom */}
              <div className="smooth-card relative w-full h-full rounded-[36px] overflow-hidden border-2 border-blue-500/40 group-hover:border-cyan-400/80 bg-gradient-to-b from-slate-900 via-blue-950 to-[#040919] shadow-2xl shadow-blue-900/50 flex items-center justify-center transition-all duration-500">
                <img
                  src="/src/assets/images/profile_avatar_1789805801134.jpg"
                  alt="MD. Kamrul Islam - Assistant Officer (ERP & MIS)"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />

                {/* Lower subtle dark gradient overlay */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#040919] via-[#040919]/60 to-transparent" />
              </div>

              {/* Floating "ERP & MIS" Blue Pill Badge with smooth lift */}
              <div className="smooth-btn absolute bottom-6 right-2 sm:right-4 z-20 flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600/95 hover:bg-blue-500 border border-blue-400/40 text-white shadow-xl shadow-blue-950/80 backdrop-blur-md transition-all duration-300 hover:scale-105">
                <div className="p-1 rounded-lg bg-white/20">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
                <span className="text-xs sm:text-sm font-extrabold tracking-wide">
                  ERP & MIS
                </span>
              </div>

              {/* Dot grid decoration in lower right */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-30 pointer-events-none -z-10 group-hover:opacity-60 transition-opacity duration-300">
                <div className="grid grid-cols-5 gap-1.5">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
