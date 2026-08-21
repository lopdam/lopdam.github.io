import { Navigation } from "@/components/layout/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { ManifestoSection } from "@/components/sections/ManifestoSection";
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
        <ManifestoSection />
        <SkillsSection />
        <ProjectsSection />
        <TimelineSection />
        <ContactSection />
      </main>
      <footer className="pt-6 pb-24 sm:pb-28 px-4">
        <p className="text-center text-xs text-muted-foreground">
          © 2026 Dennys Lopez Damian
        </p>
      </footer>
    </div>
  );
}

export default App;
