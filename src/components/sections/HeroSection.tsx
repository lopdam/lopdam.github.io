import { useRef } from "react";
import { personalInfo } from "@/data/personal";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { timeline } from "@/data/timeline";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Link } from "react-scroll";
import { Terminal, TypingAnimation } from "@/components/ui/terminal";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Magnet } from "@/components/ui/magnet";

const MONTH_INDEX: Record<string, number> = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
};

// Safari's Date parser rejects "MMM YYYY" strings (returns Invalid Date),
// so this parses via the numeric Date constructor instead of Date(string).
function parseTimelineDate(dateStr: string): number {
  const [month, year] = dateStr.trim().split(" ");
  const monthIndex = MONTH_INDEX[month];
  return monthIndex !== undefined
    ? new Date(Number(year), monthIndex, 1).getTime()
    : new Date(Number(month), 0, 1).getTime();
}

const earliestWorkStart = timeline
  .filter((item) => item.type === "work")
  .reduce((earliest, item) => Math.min(earliest, parseTimelineDate(item.startDate)), Infinity);

const yearsExperience = Math.floor(
  (Date.now() - earliestWorkStart) / (365.25 * 24 * 60 * 60 * 1000)
);

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], prefersReducedMotion ? [1, 1] : [1, 0]);

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4 py-20 overflow-x-clip"
    >
      <motion.div style={{ y, opacity }} className="max-w-4xl w-full mx-auto text-center min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 md:mb-12 px-1"
        >
          <AnimatedGradientText className="text-[clamp(1.75rem,8vw,4.5rem)] md:text-7xl font-bold leading-tight break-words">
            {personalInfo.name}
          </AnimatedGradientText>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mb-8 md:mb-12 w-full min-w-0"
        >
          <Terminal className="w-full max-w-3xl min-w-0 font-mono text-left shadow-2xl">
            <TypingAnimation duration={30} className="text-primary font-semibold text-sm sm:text-base md:text-lg mb-4 break-words whitespace-normal">
              {personalInfo.role}
            </TypingAnimation>
            <TypingAnimation duration={25} className="text-muted-foreground text-xs sm:text-sm md:text-base mb-5 break-words whitespace-normal">
              {personalInfo.tagline}
            </TypingAnimation>
            <TypingAnimation duration={20} className="text-foreground leading-relaxed text-xs sm:text-sm md:text-base break-words whitespace-normal">
              Passionate Software Engineer with 6+ years of experience building scalable and user-friendly mobile applications that empower people and organizations. Dedicated to delivering high-quality, tested code while creating solutions that generate real impact for users and businesses.
            </TypingAnimation>
          </Terminal>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap gap-3 sm:gap-4 justify-center"
        >
          <Magnet padding={60} strength={4}>
            <Button
              size="lg"
              variant="cta"
              className="gap-2"
              asChild
            >
              <a href="/CV_LopezDamianDennys.pdf" download="Dennys_Lopez_Damian_CV.pdf">
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </Button>
          </Magnet>
          <Button
            size="lg"
            variant="outline"
            className="gap-2"
            asChild
          >
            <a
              href="https://wa.me/593985349480"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </Button>
          <Link to="projects" smooth={true} duration={500}>
            <Button size="lg" variant="outline" className="gap-2">
              View Projects
            </Button>
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            <Button size="lg" variant="outline" className="gap-2">
              <Mail className="w-4 h-4" />
              Contact Me
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-8 mt-10 text-center"
        >
          <div>
            <div className="text-2xl md:text-3xl font-heading font-bold text-primary">
              <NumberTicker value={yearsExperience} className="text-primary dark:text-primary" />+
            </div>
            <div className="text-xs text-muted-foreground mt-1">Years Experience</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-heading font-bold text-primary">
              <NumberTicker value={projects.length} className="text-primary dark:text-primary" />
            </div>
            <div className="text-xs text-muted-foreground mt-1">Projects Shipped</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-heading font-bold text-primary">
              <NumberTicker value={skills.length} className="text-primary dark:text-primary" />
            </div>
            <div className="text-xs text-muted-foreground mt-1">Technologies</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
