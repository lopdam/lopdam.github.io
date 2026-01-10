import type { PersonalInfo, SocialLink } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Dennys Lopez Damian",
  role: "Software Engineer",
  tagline: "Specializing in Flutter, React Native, React & Python",
  bio: "Passionate Software Engineer with 4+ years of experience building scalable and user-friendly mobile applications that empower people and organizations. Dedicated to delivering high-quality, tested code while creating solutions that generate real impact for users and businesses.",
  location: "Ecuador",
  email: "contact@example.com", // Replace with actual email
  availability: "Open to new opportunities",
  languages: ["Spanish (Native - C2)", "English (Advanced - B2)"]
};

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/lopdam",
    icon: "Github"
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/lopdam/",
    icon: "Linkedin"
  },
  {
    platform: "Email",
    url: "mailto:contact@example.com", // Replace with actual email
    icon: "Mail"
  }
];
