export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  image: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}