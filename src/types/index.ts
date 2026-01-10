export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  availability: string;
  languages: string[];
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  icon?: string;
}

export interface Project {
  id: string;
  company: string;
  title: string;
  description: string;
  techStack: string[];
  date: string;
  link?: string;
}

export interface TimelineItem {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  techStack: string[];
  type: 'work' | 'education';
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
