export type ThemeMode = 'light' | 'dark';

export type AccentColor = 'blue' | 'cyan' | 'purple' | 'green' | 'pink';

export interface AccentColorConfig {
  id: AccentColor;
  name: string;
  primary: string; // Tailwind class or hex
  primaryLight: string;
  border: string;
  bgSubtle: string;
  text: string;
  hover: string;
  badge: string;
  glow: string;
}

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  isCurrent?: boolean;
  responsibilities: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade?: string;
  group?: string;
  details?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  description: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDetails?: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  highlights?: string[];
  status?: 'in-progress' | 'completed' | 'live' | string;
  statusLabel?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
