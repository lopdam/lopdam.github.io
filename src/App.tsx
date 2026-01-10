import { Navigation } from "@/components/layout/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { LiquidBackground } from "@/components/ui/liquid-background";

function App() {
  return (
    <div className="min-h-screen relative">
      <LiquidBackground />
      <Navigation />
      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <TimelineSection />
        <ContactSection />
      </main>
      <footer className="py-6">
        <p className="text-center text-xs text-muted-foreground">
          © 2026 Dennys Lopez Damian
        </p>
      </footer>
    </div>
  );
}

export default App;
