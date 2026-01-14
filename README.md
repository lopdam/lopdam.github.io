# LOPDAM Portfolio

<!-- Add project banner/logo here -->
<!-- ![LOPDAM Portfolio Banner](./docs/banner.png) -->

A modern, animated portfolio website showcasing professional experience and skills with cutting-edge web technologies.

![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)
![React](https://img.shields.io/badge/React-19.2.0-61dafb)
![Vite](https://img.shields.io/badge/Vite-7.2.5-646cff)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38bdf8)
![License](https://img.shields.io/badge/License-MIT-green)

<!-- Add screenshot/demo GIF here -->
<!-- ![Demo Screenshot](./docs/screenshot.png) -->

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Customization Guide](#customization-guide)
- [Custom Components](#custom-components)
- [Deployment](#deployment)
- [Browser Support](#browser-support)
- [Performance](#performance)
- [License](#license)
- [Contributing](#contributing)
- [Acknowledgments](#acknowledgments)
- [Contact](#contact)

## About the Project

**LOPDAM** is a professional portfolio and personal brand website built for Dennys Lopez Damian, a software engineer with 4+ years of experience in cross-platform mobile and full-stack development. This single-page application demonstrates modern web development practices with emphasis on animation, interactivity, and visual polish.

### Key Highlights

- **Modern Single-Page Application** - Built with React 19 and TypeScript for type safety and performance
- **Smooth Animations** - Powered by Framer Motion for micro-interactions and page transitions
- **Custom UI Component Library** - Reusable, animated components with glassmorphism effects
- **Dark/Light Theme** - Animated theme switching using the View Transitions API
- **Responsive Design** - Mobile-first approach with Tailwind CSS utilities
- **Optimized Build** - Using rolldown-vite for faster builds and smaller bundle sizes

## Features

- **🎨 Animated Hero Section** - Terminal-style typing effect showcasing role and tagline with smooth gradient text animations
- **🚀 Dock-Style Navigation** - Fixed bottom navigation with mouse-following magnification effect (macOS-inspired)
- **💼 Projects Showcase** - Featured projects with descriptions, company names, dates, and technology stacks
- **📊 Interactive Skills Section** - Horizontal marquee displays and categorized skill cards with animated hovers
- **🗓️ Career Timeline** - Visual timeline with alternating cards showing work experience and education history
- **🌓 Animated Theme Toggle** - Smooth transition between dark and light modes with circular reveal animation
- **📱 Fully Responsive** - Optimized for all screen sizes from mobile to desktop
- **⚡ Performance Optimized** - Built with rolldown-vite for fast loading and minimal bundle size
- **🔗 Smooth Scrolling** - Seamless navigation between sections with active state highlighting
- **✨ Liquid Background** - Animated blob shapes with blur and blend effects for dynamic backgrounds

## Tech Stack

### Core Framework

- **React** 19.2.0 - Modern UI library with concurrent features
- **TypeScript** 5.9.3 - Strict type checking for robust code
- **Vite** (rolldown-vite 7.2.5) - Fast build tool with optimized performance

### Styling

- **Tailwind CSS** 3.4.17 - Utility-first CSS framework
- **CSS Variables** - HSL-based color system for dynamic theming
- **Glassmorphism** - Backdrop blur and transparency effects
- **View Transitions API** - Native browser animations for theme switching

### Animation Libraries

- **Framer Motion** (motion/react 12.25.0) - Production-ready animation library
- **react-intersection-observer** 10.0.0 - Viewport detection for scroll-triggered animations
- **Tailwind CSS Animate** 1.0.7 - Extended Tailwind animations

### UI Components

- **Radix UI** - Unstyled, accessible component primitives (separator, slot)
- **lucide-react** 0.562.0 - Beautiful, consistent icon library
- **react-scroll** 1.9.3 - Smooth scrolling functionality
- **Class Variance Authority** 0.7.1 - Component variant management
- **clsx** 2.1.1 + **tailwind-merge** 3.4.0 - Utility for conditional className merging

### Developer Tools

- **ESLint** - TypeScript and React-specific linting rules
- **TypeScript Strict Mode** - Maximum type safety
- **Path Aliasing** - `@/` aliased to `src/` for clean imports

## Project Structure

```
lopdam/
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── sections/      # Main page sections
│   │   │   ├── hero.tsx
│   │   │   ├── skills.tsx
│   │   │   ├── projects.tsx
│   │   │   ├── timeline.tsx
│   │   │   └── contact.tsx
│   │   └── ui/            # Custom UI components
│   │       ├── dock.tsx
│   │       ├── terminal.tsx
│   │       ├── glass-card.tsx
│   │       ├── blur-fade.tsx
│   │       ├── marquee.tsx
│   │       └── liquid-background.tsx
│   ├── data/              # Portfolio data
│   │   ├── personal.ts    # Name, role, bio, contact
│   │   ├── skills.ts      # Technical skills
│   │   ├── projects.ts    # Featured projects
│   │   └── timeline.ts    # Work experience & education
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles & theme variables
├── eslint.config.js       # ESLint configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── package.json           # Dependencies & scripts
```

## Getting Started

### Prerequisites

- **Node.js** 18 or higher
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/[your-username]/lopdam.git
cd lopdam
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

The application will open at `http://localhost:5173` with Hot Module Replacement (HMR) enabled.

### Available Scripts

- **`npm run dev`** - Start development server with HMR
- **`npm run build`** - Build for production (runs TypeScript check + Vite build)
- **`npm run preview`** - Preview production build locally
- **`npm run lint`** - Run ESLint to check code quality

## Customization Guide

This portfolio is designed to be easily customizable. Follow these steps to make it your own:

### 1. Update Personal Information

Edit `src/data/personal.ts`:

```typescript
export const personal = {
  name: "Your Name",
  role: "Your Role",
  tagline: "Your tagline...",
  bio: "Your bio...",
  location: "Your City, Country",
  email: "your.email@example.com",
  languages: ["English", "Spanish"],
};
```

### 2. Add Your Skills

Modify `src/data/skills.ts` to list your technical skills:

```typescript
export const skills = [
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  // Add your skills...
];

export const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["React", "TypeScript", "Tailwind CSS"],
  },
  // Add your categories...
];
```

### 3. Showcase Your Projects

Update `src/data/projects.ts` with your project portfolio:

```typescript
export const projects = [
  {
    title: "Project Name",
    company: "Company Name",
    description: "Project description...",
    technologies: ["React", "Node.js", "MongoDB"],
    date: "2024",
  },
  // Add your projects...
];
```

### 4. Update Career Timeline

Edit `src/data/timeline.ts` with your work experience and education:

```typescript
export const timeline = [
  {
    title: "Position Title",
    company: "Company Name",
    date: "Jan 2023 - Present",
    description: "What you did...",
    type: "work", // or "education"
  },
  // Add your timeline items...
];
```

### 5. Theme Customization

**Colors**: Modify CSS variables in `src/index.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  /* Customize your colors... */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* Dark mode colors... */
}
```

**Animations**: Extend animations in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      animation: {
        // Add custom animations
      },
    },
  },
};
```

### 6. Component Customization

- **UI Components**: Modify reusable components in `src/components/ui/`
- **Section Components**: Edit page sections in `src/components/sections/`
- **Layout**: Update main layout in `src/App.tsx`

## Custom Components

### Dock & DockIcon

Bottom navigation with mouse-following magnification effect.

**Location**: `src/components/ui/dock.tsx`

**Key Props**:
- `direction` - Layout direction ("top" | "middle" | "bottom")
- `magnification` - Zoom level on hover (default: 60)
- `distance` - Effect activation distance (default: 140)

**Usage**:
```tsx
<Dock direction="bottom">
  <DockIcon>
    <Home className="h-6 w-6" />
  </DockIcon>
</Dock>
```

### Terminal

Terminal-style container with typing animation effect.

**Location**: `src/components/ui/terminal.tsx`

**Features**:
- Typing animation for dynamic text
- Terminal window styling
- Used in hero section

### Glass Card

Glassmorphism card with backdrop blur effects.

**Location**: `src/components/ui/glass-card.tsx`

**Variants**:
- `default` - Standard glass effect
- `solid` - Solid background with blur
- `gradient` - Animated gradient border

### BlurFade

Entrance animation with blur effect triggered by viewport intersection.

**Location**: `src/components/ui/blur-fade.tsx`

**Key Props**:
- `delay` - Animation delay in seconds
- `inView` - Whether element is in viewport
- `blur` - Blur amount (default: "6px")
- `duration` - Animation duration

### Marquee

Infinite horizontal scroll with pause-on-hover functionality.

**Location**: `src/components/ui/marquee.tsx`

**Features**:
- Seamless infinite scroll
- Pause animation on hover
- Customizable speed and direction

### Liquid Background

Animated blob shapes for dynamic backgrounds.

**Location**: `src/components/ui/liquid-background.tsx`

**Features**:
- Multiple animated blob elements
- Blur and mix-blend-mode effects
- Customizable colors and animation

## Deployment

### Live Site

**https://lopdam.github.io**

### Deploy to GitHub Pages (Current)

This project is configured for automatic deployment to GitHub Pages via GitHub Actions.

1. **Enable GitHub Pages** in your repo settings:
   - Go to Settings → Pages
   - Set Source to **GitHub Actions**

2. **Push to main branch**:
```bash
git push origin main
```

The site will automatically build and deploy on each push to `main`.

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**:
```bash
npm i -g vercel
```

2. **Deploy**:
```bash
vercel
```

3. **Production deployment**:
```bash
vercel --prod
```

**Or use the Vercel Dashboard**:
1. Push your code to GitHub
2. Import your repository on [vercel.com](https://vercel.com)
3. Vercel will auto-detect Vite and configure build settings

### Deploy to Netlify

1. **Build your project**:
```bash
npm run build
```

2. **Configure Netlify**:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18

3. **Deploy**:
   - Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)
   - Or connect your Git repository for automatic deployments

### Environment Variables

No environment variables are required for basic deployment. Optional variables:

- `VITE_ANALYTICS_ID` - Google Analytics tracking ID
- `VITE_CONTACT_API` - Contact form API endpoint
- `VITE_PUBLIC_URL` - Public URL for production

### Build Configuration

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 18+
- **Install Command**: `npm install`

## Browser Support

- **Chrome** (latest 2 versions)
- **Firefox** (latest 2 versions)
- **Safari** (latest 2 versions)
- **Edge** (latest 2 versions)

**Note**: View Transitions API requires Chrome 111+ for animated theme switching. Other browsers will fall back to instant theme changes (graceful degradation).

## Performance

- **Optimized Build**: Uses rolldown-vite for reduced bundle size
- **Code Splitting**: React lazy loading for route-based splitting
- **Optimized Animations**: Framer Motion with GPU-accelerated transforms
- **Image Optimization**: Responsive images and lazy loading
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Dennys Lopez Damian

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

## Contributing

Contributions are welcome! If you'd like to improve this portfolio or use it as a template:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Code Style

- Follow the existing TypeScript/React patterns
- Run `npm run lint` before committing
- Use meaningful commit messages
- Add comments for complex logic

### Bug Reports

If you find a bug, please open an issue with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Browser/OS information

## Acknowledgments

- **Design Inspiration**: Modern portfolio trends and macOS dock interactions
- **Animation Library**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

Special thanks to the open-source community for the amazing tools and libraries that made this project possible.

## Contact

**Dennys Lopez Damian**

- Portfolio: [lopdam.github.io](https://lopdam.github.io)
- GitHub: [@lopdam](https://github.com/lopdam) (add your GitHub)
- LinkedIn: [dennys-lopez-damian](https://linkedin.com/in/dennys-lopez-damian) (add your LinkedIn)
- Email: contact@lopdam.com (add your email)

For questions, collaborations, or just to say hi, feel free to reach out!

---

**Built with ❤️ using React, TypeScript, and modern web technologies**
