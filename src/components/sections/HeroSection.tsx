import { personalInfo } from "@/data/personal";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Terminal, TypingAnimation, AnimatedSpan } from "@/components/ui/terminal";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { NumberTicker } from "@/components/ui/number-ticker";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4 py-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <AnimatedGradientText className="text-5xl md:text-7xl font-bold">
            {personalInfo.name}
          </AnimatedGradientText>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mb-12 w-full"
        >
          <Terminal className="w-full max-w-3xl font-mono text-left shadow-2xl">
            <TypingAnimation duration={30} className="text-primary font-semibold text-base md:text-lg mb-4">
              {personalInfo.role}
            </TypingAnimation>
            <TypingAnimation duration={25} className="text-muted-foreground text-sm md:text-base mb-5">
              {personalInfo.tagline}
            </TypingAnimation>
            <TypingAnimation duration={20} className="text-foreground leading-relaxed text-sm md:text-base">
              Passionate Software Engineer with 4+ years of experience building scalable and user-friendly mobile applications that empower people and organizations. Dedicated to delivering high-quality, tested code while creating solutions that generate real impact for users and businesses.
            </TypingAnimation>
          </Terminal>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button size="lg" variant="outline" className="gap-2" asChild>
            <a
              href="https://wa.me/593985349480"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </Button>
          <Link to="projects" smooth={true} duration={500}>
            <Button size="lg" className="gap-2">
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
      </div>
    </section>
  );
}
