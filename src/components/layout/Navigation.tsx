import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";
import { Moon, Sun, Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", to: "home" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Timeline", to: "timeline" },
  { name: "Contact", to: "contact" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add("dark");

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple scroll spy
      const sections = navItems.map((item) => item.to);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-white/5 dark:bg-black/5 backdrop-blur-xl border-b border-white/10 dark:border-white/5 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-xl font-bold cursor-pointer bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
            >
              DLD
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className={`cursor-pointer transition-all duration-300 rounded-full px-5 ${
                    activeSection === item.to
                      ? "bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.15)] text-foreground scale-105 font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="ml-2 rounded-full hover:bg-white/10"
            >
              {isDark ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-white/10"
            >
              {isDark ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-full hover:bg-white/10"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 bg-white/5 backdrop-blur-xl absolute left-0 right-0 shadow-xl rounded-b-2xl">
            <div className="flex flex-col gap-2 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button
                    variant="ghost"
                    className={`w-full justify-start cursor-pointer rounded-xl ${
                      activeSection === item.to
                        ? "bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-white/20 dark:border-white/10 shadow-lg text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                    }`}
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
