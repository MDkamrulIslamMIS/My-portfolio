import {
  MessageCircle,
  Mail,
  Linkedin,
  Github,
  Youtube,
  Globe,
  ChevronUp,
  FileDown
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { openOrDownloadCV } from '../utils/cvDownloader';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#040817] border-t border-blue-900/60 py-6">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Brand Monogram & Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-extrabold text-base shadow-md">
              KI
            </div>
            <div className="text-left">
              <div className="font-extrabold text-sm sm:text-base text-white tracking-tight">
                {PERSONAL_INFO.name}
              </div>
              <div className="text-xs text-slate-400">
                ERP & MIS | IT | Data Analysis Professional
              </div>
            </div>
          </div>

          {/* Center: Social Circular Icons with smooth hover animations */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={openOrDownloadCV}
              className="smooth-btn px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-600 hover:text-white flex items-center gap-1.5 text-xs font-bold transition-all duration-300 cursor-pointer shadow-xs hover:-translate-y-0.5"
              title="Download CV"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>CV</span>
            </button>

            <a
              href={`https://wa.me/8801810811417`}
              target="_blank"
              rel="noopener noreferrer"
              className="smooth-btn w-8 h-8 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/30"
              title="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="smooth-btn w-8 h-8 rounded-full bg-blue-500/15 border border-blue-500/40 text-cyan-400 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="smooth-btn w-8 h-8 rounded-full bg-sky-500/15 border border-sky-500/40 text-sky-400 hover:bg-sky-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/30"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="smooth-btn w-8 h-8 rounded-full bg-slate-900 border border-slate-700 text-slate-400 hover:bg-slate-700 hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="smooth-btn w-8 h-8 rounded-full bg-rose-500/15 border border-rose-500/40 text-rose-400 hover:bg-rose-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-rose-500/30"
              title="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="smooth-btn w-8 h-8 rounded-full bg-cyan-500/15 border border-cyan-500/40 text-cyan-400 hover:bg-cyan-600 hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/30"
              title="All Tech Academy"
            >
              <Globe className="w-4 h-4" />
            </a>
          </div>

          {/* Right: Copyright & Back To Top */}
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <span>© 2026 Md. Kamrul Islam. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="smooth-btn w-8 h-8 rounded-lg bg-[#080e21] border border-blue-900/60 hover:border-cyan-400 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer hover:-translate-y-0.5"
              title="Back to Top"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
