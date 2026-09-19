import {
  FileSpreadsheet,
  Database,
  Network,
  Monitor,
  Code2,
  Headphones,
  Video,
  Plus,
  Layers
} from 'lucide-react';

export default function Skills() {
  const skillsList = [
    {
      name: 'Microsoft Excel',
      icon: (
        <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
          <FileSpreadsheet className="w-5 h-5" />
        </div>
      )
    },
    {
      name: 'ERP & MIS',
      icon: (
        <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
          <Database className="w-5 h-5" />
        </div>
      )
    },
    {
      name: 'Networking',
      icon: (
        <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center text-white font-bold text-sm shadow-sm">
          <Network className="w-5 h-5" />
        </div>
      )
    },
    {
      name: 'Windows & Linux',
      icon: (
        <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white font-bold text-sm shadow-sm">
          <Monitor className="w-5 h-5" />
        </div>
      )
    },
    {
      name: 'Photoshop',
      icon: (
        <div className="w-8 h-8 rounded-lg bg-[#001e36] border border-sky-500/50 flex items-center justify-center text-sky-400 font-extrabold text-xs shadow-sm">
          Ps
        </div>
      )
    },
    {
      name: 'PowerPoint',
      icon: (
        <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center text-white font-extrabold text-xs shadow-sm">
          P
        </div>
      )
    },
    {
      name: 'Programming',
      icon: (
        <div className="w-8 h-8 rounded-lg bg-cyan-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
          <Code2 className="w-5 h-5" />
        </div>
      )
    },
    {
      name: 'Figma / VS Code',
      icon: (
        <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
          <Layers className="w-5 h-5" />
        </div>
      )
    },
    {
      name: 'Audacity',
      icon: (
        <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
          <Headphones className="w-5 h-5" />
        </div>
      )
    },
    {
      name: 'Video Editing',
      icon: (
        <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
          <Video className="w-5 h-5" />
        </div>
      )
    },
    {
      name: 'Others',
      icon: (
        <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
          <Plus className="w-5 h-5" />
        </div>
      )
    }
  ];

  return (
    <section
      id="skills"
      className="smooth-card rounded-2xl bg-white text-slate-900 p-6 sm:p-7 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="mb-5">
        <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
          TECHNICAL SKILLS
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-['Outfit',sans-serif]">
          My Core Skills
        </h2>
      </div>

      {/* Grid of skill cards with smooth mouse hover animations */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {skillsList.map((skill) => (
          <div
            key={skill.name}
            className="smooth-btn flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-400 hover:bg-blue-50/50 hover:-translate-y-1.5 hover:shadow-md transition-all duration-300 text-center group cursor-default"
          >
            <div className="mb-2 group-hover:scale-115 transition-transform duration-300 ease-out">
              {skill.icon}
            </div>
            <span className="text-xs font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
