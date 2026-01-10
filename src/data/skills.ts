import type { Skill } from "@/types";

export const skills: Skill[] = [
  // Mobile Development
  { id: "flutter", name: "Flutter", category: "Mobile Development" },
  { id: "react-native", name: "React Native", category: "Mobile Development" },
  { id: "android", name: "Android", category: "Mobile Development" },
  { id: "swift", name: "Swift", category: "Mobile Development" },

  // Frontend
  { id: "react", name: "React", category: "Frontend" },
  { id: "angular", name: "Angular", category: "Frontend" },

  // Backend & Languages
  { id: "python", name: "Python", category: "Backend" },
  { id: "django", name: "Django", category: "Backend" },
  { id: "flask", name: "Flask", category: "Backend" },
  { id: "fastapi", name: "FastAPI", category: "Backend" },

  // Cloud & DevOps
  { id: "aws", name: "AWS", category: "Cloud & DevOps" },
  { id: "docker", name: "Docker", category: "Cloud & DevOps" },
  { id: "firebase", name: "Firebase", category: "Cloud & DevOps" },

  // State Management
  { id: "riverpod", name: "Riverpod", category: "State Management" },

  // Version Control
  { id: "github", name: "GitHub", category: "Version Control" }
];

export const skillsByCategory = skills.reduce((acc, skill) => {
  if (!acc[skill.category]) {
    acc[skill.category] = [];
  }
  acc[skill.category].push(skill);
  return acc;
}, {} as Record<string, Skill[]>);
