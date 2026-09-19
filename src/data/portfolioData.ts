import {
  WorkExperience,
  EducationItem,
  SkillCategory,
  ProjectItem,
  FAQItem,
  AccentColorConfig
} from '../types';

export const PERSONAL_INFO = {
  name: "MD. KAMRUL ISLAM",
  shortName: "Kamrul",
  title: "ERP & MIS | IT | Data Analysis Professional",
  currentRole: "Assistant Officer (ERP & MIS)",
  currentCompany: "Jann Composite Mills Ltd.",
  currentPeriod: "May 2025 – Present",
  location: "Dhaka, Bangladesh",
  permanentLocation: "Chouhali, Sirajganj, Bangladesh",
  phone: "+8801810811417",
  email: "mdkamrulislamnakir@gmail.com",
  linkedin: "https://www.linkedin.com/in/md-kamrul-islam1997",
  whatsapp: "https://wa.me/8801810811417",
  youtube: "https://www.youtube.com/@AllTechAcademyBD",
  blog: "https://alltechacademybd.blogspot.com/",
  github: "https://github.com/mdkamrulislamnakir",
  availability: "Available for Opportunities",
  intro: "Assistant Officer (ERP & MIS) with hands-on experience in ERP operations, MIS reporting, data analysis, and business process support. Skilled in preparing management reports, maintaining data accuracy, and utilizing information systems to support decision-making and operational efficiency.",
  careerObjective: "To contribute to organizational success by leveraging my MIS & IT expertise, analytical skills, and technology-driven approach to improve business processes, optimize decision-making, and drive operational excellence."
};

export const PROFESSIONAL_QUALITIES = [
  {
    id: "problem-solver",
    title: "Problem Solver",
    description: "Analytical mindset focused on resolving operational bottlenecks and optimizing workflows."
  },
  {
    id: "team-player",
    title: "Team Player",
    description: "Collaborative professional skilled in cross-departmental coordination and reporting."
  },
  {
    id: "quick-learner",
    title: "Quick Learner",
    description: "Rapidly adapts to new enterprise software, IT tools, and networking protocols."
  },
  {
    id: "result-oriented",
    title: "Result Oriented",
    description: "Committed to data precision, timely MIS delivery, and high business productivity."
  }
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    id: "exp-1",
    role: "Assistant Officer (ERP & MIS)",
    company: "Jann Composite Mills Ltd.",
    location: "Dhaka, Bangladesh",
    period: "May 2025 – Present",
    isCurrent: true,
    responsibilities: [
      "Generate and maintain ARM & PIS reports to facilitate executive management decisions.",
      "Prepare daily, weekly, and monthly MIS reports ensuring strict data integrity.",
      "Manage ERP-related operational data across production and supply chain modules.",
      "Analyze production and inventory information to identify trends and cost optimizations.",
      "Ensure accurate reporting, documentation, and automated spreadsheet models using Microsoft Excel."
    ]
  },
  {
    id: "exp-2",
    role: "Graphic Designer",
    company: "Alpona Graphics Design",
    location: "Bangladesh",
    period: "2019 – 2025",
    isCurrent: false,
    responsibilities: [
      "Designed marketing banners, corporate posters, visiting cards, and branding collateral.",
      "Created and edited complex vector and raster graphics using Adobe Photoshop.",
      "Collaborated directly with corporate and private clients to tailor designs to exact specifications.",
      "Prepared print-ready production files and ensured rigorous visual output quality."
    ]
  },
  {
    id: "exp-3",
    role: "Computer Trainer & Computer Operator",
    company: "Labbib Computer Training Center",
    location: "Bangladesh",
    period: "2016 – 2019",
    isCurrent: false,
    responsibilities: [
      "Conducted practical computer training courses and workshops for students and professionals.",
      "Taught Microsoft Office suite (Word, Excel, PowerPoint) and fundamental computer operations.",
      "Assisted students with practical business computing exercises and data entry practices.",
      "Performed hardware setup, operating system installation, software troubleshooting, and maintenance."
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "erp-mis",
    title: "ERP & MIS",
    iconName: "Database",
    description: "Enterprise operational software, report generation, and data governance",
    skills: [
      "ERP Operations",
      "MIS Reporting",
      "ARM & PIS Reports",
      "Operational Data Management",
      "Production & Inventory Analysis",
      "ERP Logic",
      "Business Process Support",
      "Oracle & MySQL"
    ]
  },
  {
    id: "office-excel",
    title: "Microsoft Office",
    iconName: "FileSpreadsheet",
    description: "Advanced data manipulation, dashboard creation, and documentation",
    skills: [
      "Microsoft Excel (Advanced)",
      "Pivot Tables & Lookups",
      "Data Modeling",
      "Microsoft PowerPoint",
      "Microsoft Word",
      "Microsoft Outlook",
      "Management Presentation Decks"
    ]
  },
  {
    id: "programming",
    title: "Programming & Web",
    iconName: "Code2",
    description: "Full-stack languages, scripting, and database administration",
    skills: [
      "JavaScript",
      "PHP",
      "C++",
      "Java (Basic)",
      "Visual Basic",
      "HTML5 & CSS3",
      "Bootstrap",
      "MySQL",
      "VS Code",
      "Notepad++"
    ]
  },
  {
    id: "networking",
    title: "Networking & IT",
    iconName: "Network",
    description: "Network architecture, routing, protocols, and server infrastructure",
    skills: [
      "Cisco Packet Tracer",
      "Network Configuration (Routers, Switches)",
      "Firewalls & Security",
      "TCP/IP & Subnetting",
      "VLANs & Routing (OSPF, EIGRP, BGP)",
      "Windows Server Administration",
      "Linux Server Administration",
      "Cloud Networking & Wireless Security"
    ]
  },
  {
    id: "design-media",
    title: "Design & Multimedia",
    iconName: "Palette",
    description: "Creative visual design, UI mockups, and multimedia editing",
    skills: [
      "Adobe Photoshop",
      "Figma",
      "Graphic Design & Print Media",
      "Video Editing",
      "Wondershare Filmora",
      "Audacity Audio Editing",
      "Blender 3D (Basic)"
    ]
  }
];

// ============================================================================
// PROJECTS CONFIGURATION
// 💡 কিভাবে Project এর ছবি বা লেখা পরিবর্তন করবেন (How to Customize Any Project):
// 1. ছবি পরিবর্তন: 'public/projects/' ফোল্ডারে আপনার ইমেজ রাখুন এবং
//    image: '/projects/your_image.jpg' দিন, অথবা সরাসরি URL দিন।
// 2. লেখা বা বিবরণ পরিবর্তন: title, description, category, tags, highlights পরিবর্তন করুন।
// 3. স্ট্যাটাস: status: 'in-progress' বা 'live' বা 'completed'।
// ============================================================================
export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "ai-tools-hub",
    title: "AI Tools Hub",
    category: "Web Application | AI Directory | SaaS",
    description: "Your One-Stop Destination for All AI Tools — Discover, explore, and use the best AI tools (ChatGPT, Midjourney, CapCut, Canva, etc.) for work, study, creativity, and business.",
    fullDetails: "AI Tools Hub is an innovative digital directory and exploration platform currently under active development. It provides curated access to 100+ verified free and paid AI tools across writing, image generation, video, coding, voice, and business productivity with intuitive filtering and task-based recommendations.",
    // আপনি যেকোনো ছবি এখানে বসাতে পারেন: যেমন '/projects/ai_tools_hub.jpg' অথবা অনলাইন লিংক
    image: "/projects/ai_tools_hub.jpg",
    status: "in-progress",
    statusLabel: "In Progress (কাজ চলতেছে)",
    tags: ["React / Web", "AI Tools Directory", "UI/UX Design", "Work in Progress", "In Development"],
    highlights: [
      "Categorized AI tools directory (Writing, Image, Video, Coding, Marketing, Audio)",
      "Curated listings with verified pricing badges (100% Free, Freemium & Paid)",
      "Interactive task-based search & filter system",
      "Currently under active development by Md. Kamrul Islam"
    ]
  },
  {
    id: "all-tech-academy-bd",
    title: "All Tech Academy BD",
    category: "Education | Technology",
    description: "Technology education platform providing free tutorials, tech guides, coding tutorials, and productivity skills for aspiring tech professionals.",
    fullDetails: "Founded to bridge the digital skills gap by providing open educational resources, technology tutorials, and practical computing masterclasses across YouTube and web publication channels.",
    image: "/projects/project_alltech_1789805856808.jpg",
    status: "live",
    statusLabel: "Live Platform",
    tags: ["Tech Education", "Content Creation", "Video Tutorials", "Computer Skills"],
    liveUrl: "https://alltechacademybd.blogspot.com/",
    githubUrl: "https://www.youtube.com/@AllTechAcademyBD",
    highlights: [
      "Extensive tech tutorials on AI Tools, Programming, and Office tools",
      "Dual presence across dedicated learning blog and YouTube channel",
      "Empowering students and job seekers across Bangladesh"
    ]
  },
  {
    id: "mis-reporting-dashboard",
    title: "MIS Reporting & Data Analysis Dashboard",
    category: "Excel | Data Analysis",
    description: "Enterprise management dashboard featuring automated daily, weekly, and monthly MIS analytics, ARM & PIS metrics, and production inventory forecasting.",
    fullDetails: "Developed for high-volume enterprise operations to consolidate disparate production and inventory metrics into automated executive summaries with dynamic pivot tables, conditional KPI status indicators, and audit-ready reporting.",
    image: "/projects/project_mis_dash_1789805829809.jpg",
    status: "completed",
    statusLabel: "Enterprise Solution",
    tags: ["Microsoft Excel", "MIS Reporting", "Data Analysis", "ARM & PIS", "Business Intelligence"],
    highlights: [
      "Consolidates production records into automated daily/monthly MIS reports",
      "Dynamic KPI dashboards with automated variance calculations",
      "Standardized ARM & PIS inventory tracking models"
    ]
  }
];

export const ALL_TECH_ACADEMY_TOPICS = [
  { title: "AI Tools", desc: "Modern AI utilities, workflows, and productivity tools" },
  { title: "Programming", desc: "Fundamentals of JavaScript, PHP, web scripting, and software" },
  { title: "Freelancing", desc: "Digital marketplace strategies, portfolio crafting, and client communication" },
  { title: "Microsoft Skills", desc: "Advanced Excel modeling, formulas, Word, and PowerPoint mastery" },
  { title: "Video Editing", desc: "Video production workflows with Wondershare Filmora & Adobe tools" },
  { title: "Online Skills", desc: "Computer maintenance, troubleshooting, and enterprise software literacy" }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Management Information Systems (MIS)",
    institution: "Khwaja Yunus Ali University, Sirajganj",
    period: "Session: 2021 – 2025",
    grade: "CGPA: 3.50 / 4.00",
    details: "Completed 4-Year Academic Program (Final Viva Pending). Focused on enterprise information architecture, business database systems, systems analysis, and IT management."
  },
  {
    id: "edu-2",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Nagorpur Government College, Tangail",
    period: "Passing Year: 2020",
    grade: "GPA: 3.00 / 5.00",
    group: "Humanities",
    details: "Higher secondary education focusing on liberal arts, civic studies, and general communication."
  },
  {
    id: "edu-3",
    degree: "Secondary School Certificate (SSC)",
    institution: "R.P.N Shohid Shajahan Kabir High School",
    period: "Passing Year: 2015",
    grade: "GPA: 3.06 / 5.00",
    group: "Science",
    details: "Secondary education with a strong foundation in science, mathematics, and fundamental physics."
  }
];

export const VOLUNTEERING_ACTIVITIES = [
  {
    id: "vol-1",
    title: "Blood Donation Campaign Participant",
    description: "Actively took part in multiple university and local community blood donation drives."
  },
  {
    id: "vol-2",
    title: "Scout Member / Leader",
    description: "Active leadership in university scouting programs, developing teamwork, crisis resolution, and problem-solving skills."
  },
  {
    id: "vol-3",
    title: "Networking Club Member",
    description: "Hands-on lab sessions and workshop collaboration on Cisco networking and Packet Tracer simulations."
  }
];

export const LANGUAGES_DATA = [
  { language: "Bengali", proficiency: "Native" },
  { language: "English", proficiency: "Bilingual / Professional Working" },
  { language: "Hindi", proficiency: "Fluent" }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "What do you do?",
    answer: "I am an ERP & MIS professional, IT practitioner, and Data Analysis specialist. I focus on managing ERP operations, building automated MIS reports in Microsoft Excel, analyzing production and inventory datasets, configuring IT and computer networks, and supporting business processes to drive organizational efficiency."
  },
  {
    id: "faq-2",
    question: "What is your current role?",
    answer: "I currently serve as an Assistant Officer (ERP & MIS) at Jann Composite Mills Ltd. (May 2025 – Present), where I oversee operational ERP data, generate ARM & PIS reports, and deliver daily, weekly, and monthly MIS insights for executive decisions."
  },
  {
    id: "faq-3",
    question: "What are your key technical skills?",
    answer: "My core competencies include Microsoft Excel (Advanced modeling, pivot tables, lookup formulas), ERP operations (ARM & PIS reports, inventory and production data), Networking (Cisco Packet Tracer, router & switch configuration, TCP/IP, VLANs, routing protocols), Programming (JavaScript, PHP, C++, basic Java, MySQL, Oracle), and Graphic Design & Multimedia (Adobe Photoshop, Figma, Filmora)."
  },
  {
    id: "faq-4",
    question: "What kind of MIS & ERP work do you handle?",
    answer: "I handle end-to-end enterprise data workflows: inputting and validating ERP transactional records, auditing production output against scheduled targets, tracking raw material and finished inventory movements, generating automated ARM and PIS reports, and packaging complex metrics into clear executive MIS dashboards."
  },
  {
    id: "faq-5",
    question: "Are you available for professional opportunities?",
    answer: "Yes, I am actively open to exciting professional opportunities, career advancements, and collaborative projects in ERP operations, MIS management, business data analysis, and corporate IT roles."
  },
  {
    id: "faq-6",
    question: "Can I contact you for a project or collaboration?",
    answer: "Absolutely! Whether you are seeking assistance with enterprise reporting, Excel automation, database/MIS architecture, networking consulting, or technology training, please feel free to reach out via the contact form, email, or direct WhatsApp call."
  },
  {
    id: "faq-7",
    question: "Where can I see your projects?",
    answer: "You can explore my featured projects right here in the Projects section above, visit my educational technology channel on YouTube (@AllTechAcademyBD), read technical guides on my blog (All Tech Academy BD), or review my code repositories on GitHub."
  },
  {
    id: "faq-8",
    question: "How can I contact you?",
    answer: "You can reach me directly via phone or WhatsApp at +8801810811417, email me at mdkamrulislamnakir@gmail.com, or connect with me on LinkedIn at www.linkedin.com/in/md-kamrul-islam1997."
  }
];

export const ACCENT_COLORS: Record<string, AccentColorConfig> = {
  blue: {
    id: 'blue',
    name: 'Electric Blue',
    primary: 'bg-blue-600',
    primaryLight: 'bg-blue-500',
    border: 'border-blue-500',
    bgSubtle: 'bg-blue-50 dark:bg-blue-950/40',
    text: 'text-blue-600 dark:text-blue-400',
    hover: 'hover:bg-blue-700',
    badge: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
    glow: 'rgba(37, 99, 235, 0.25)'
  },
  cyan: {
    id: 'cyan',
    name: 'Vibrant Cyan',
    primary: 'bg-cyan-500',
    primaryLight: 'bg-cyan-400',
    border: 'border-cyan-500',
    bgSubtle: 'bg-cyan-50 dark:bg-cyan-950/40',
    text: 'text-cyan-600 dark:text-cyan-400',
    hover: 'hover:bg-cyan-600',
    badge: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
    glow: 'rgba(6, 182, 212, 0.25)'
  },
  purple: {
    id: 'purple',
    name: 'Royal Purple',
    primary: 'bg-purple-600',
    primaryLight: 'bg-purple-500',
    border: 'border-purple-500',
    bgSubtle: 'bg-purple-50 dark:bg-purple-950/40',
    text: 'text-purple-600 dark:text-purple-400',
    hover: 'hover:bg-purple-700',
    badge: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
    glow: 'rgba(147, 51, 234, 0.25)'
  },
  green: {
    id: 'green',
    name: 'Emerald Green',
    primary: 'bg-emerald-600',
    primaryLight: 'bg-emerald-500',
    border: 'border-emerald-500',
    bgSubtle: 'bg-emerald-50 dark:bg-emerald-950/40',
    text: 'text-emerald-600 dark:text-emerald-400',
    hover: 'hover:bg-emerald-700',
    badge: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    glow: 'rgba(16, 185, 129, 0.25)'
  },
  pink: {
    id: 'pink',
    name: 'Rose Pink',
    primary: 'bg-pink-600',
    primaryLight: 'bg-pink-500',
    border: 'border-pink-500',
    bgSubtle: 'bg-pink-50 dark:bg-pink-950/40',
    text: 'text-pink-600 dark:text-pink-400',
    hover: 'hover:bg-pink-700',
    badge: 'bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20',
    glow: 'rgba(236, 72, 153, 0.25)'
  }
};
