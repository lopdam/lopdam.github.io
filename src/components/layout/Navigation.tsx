import { useState, useEffect } from "react";
import { flushSync } from "react-dom";
import { Link } from "react-scroll";
import {
  Home,
  Code2,
  FolderGit2,
  CalendarDays,
  Mail,
  Sun,
  Moon,
  Download,
} from "lucide-react";

import { Dock, DockIcon } from "@/components/ui/dock";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", to: "home", icon: Home },
  { name: "Skills", to: "skills", icon: Code2 },
  { name: "Projects", to: "projects", icon: FolderGit2 },
  { name: "Timeline", to: "timeline", icon: CalendarDays },
  { name: "Contact", to: "contact", icon: Mail },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (!document.documentElement.classList.contains("dark") && !document.documentElement.classList.contains("light")) {
         document.documentElement.classList.add("dark");
    }
    setIsDark(document.documentElement.classList.contains("dark"));

    const handleScroll = () => {
      const sections = navItems.map((item) => item.to);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 300 && rect.bottom >= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = async (e: React.MouseEvent<HTMLButtonElement>) => {
    // @ts-ignore
    if (!document.startViewTransition) {
      setIsDark(!isDark);
      document.documentElement.classList.toggle("dark");
      return;
    }

    const x = e.clientX;
    const y = e.clientY;
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    );

    // @ts-ignore
    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setIsDark(!isDark);
        document.documentElement.classList.toggle("dark");
      });
    });

    await transition.ready;

    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ];

    document.documentElement.animate(
      {
        clipPath: isDark ? clipPath : [...clipPath].reverse(),
      },
      {
        duration: 500,
        easing: "ease-in-out",
        pseudoElement: isDark
          ? "::view-transition-new(root)"
          : "::view-transition-old(root)",
      }
    );
  };

  return (
    <div className="fixed bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 max-w-[calc(100vw-1.5rem)]">
      <Dock
        iconSize={34}
        iconMagnification={48}
        iconDistance={100}
        className="mt-0 max-w-full bg-white/80 dark:bg-black/10 backdrop-blur-md border border-black/5 dark:border-white/10 shadow-2xl"
      >
        {navItems.map((item) => (
          <DockIcon key={item.to}>
            <Link
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              onSetActive={() => setActiveSection(item.to)}
              className={cn(
                "flex items-center justify-center w-full h-full rounded-full transition-colors duration-300",
                activeSection === item.to
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
              aria-label={item.name}
            >
              <item.icon className="size-full" />
            </Link>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-8 mx-1 bg-black/10 dark:bg-white/20" />
        <DockIcon>
          <a
            href="/CV_LopezDamianDennys.pdf"
            download="Dennys_Lopez_Damian_CV.pdf"
            className="flex items-center justify-center w-full h-full rounded-full text-cta hover:text-cta/80 transition-colors duration-300"
            aria-label="Download CV"
          >
            <Download className="size-full" />
          </a>
        </DockIcon>
        <DockIcon>
          <button
            onClick={toggleTheme}
            className={cn(
              "flex items-center justify-center w-full h-full rounded-full text-muted-foreground hover:text-foreground transition-colors duration-300"
            )}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="size-full" /> : <Moon className="size-full" />}
          </button>
        </DockIcon>
      </Dock>
    </div>
  );
}
