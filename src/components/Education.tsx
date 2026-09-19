import { GraduationCap, CheckCircle2 } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

const CERTIFICATES_DATA = [
  { title: 'Computer Training', period: '2016 – 2019' },
  { title: 'Graphic Design', period: '2019 – 2025' },
  { title: 'Networking & Cisco', period: 'Lab Sessions' },
];

export default function Education() {
  const edu = EDUCATION_DATA[0];

  return (
    <section
      id="education"
      className="smooth-card rounded-2xl bg-white text-slate-900 p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300"
    >
      {/* Eyebrow and Heading */}
      <div className="mb-5">
        <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
          EDUCATION
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-['Outfit',sans-serif]">
          Academic Background
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
        {/* Left Side: University Information */}
        <div className="sm:col-span-7 flex items-start gap-4 group">
          <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0 shadow-xs group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug">
              {edu.institution}
            </h3>
            <div className="text-xs sm:text-sm font-semibold text-blue-600 mt-0.5">
              {edu.degree}
            </div>
            <div className="text-xs text-slate-500 mt-1 font-medium">
              Session: {edu.period} | CGPA: <span className="font-bold text-slate-800 underline decoration-blue-500">{edu.grade}</span>
            </div>
          </div>
        </div>

        {/* Right Side: Certificates & Training */}
        <div className="sm:col-span-5 bg-slate-50 p-4 rounded-xl border border-slate-200/80 shadow-2xs">
          <h4 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2.5">
            Certificates & Training
          </h4>
          <ul className="space-y-2 text-xs text-slate-700 font-medium">
            {CERTIFICATES_DATA.map((cert) => (
              <li
                key={cert.title}
                className="smooth-btn flex items-center gap-2 p-1 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-all duration-200"
              >
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{cert.title} ({cert.period})</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
