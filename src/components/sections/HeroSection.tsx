import { personalInfo } from "@/data/personal";
import { Button } from "@/components/ui/button";
import { ArrowDown, MessageCircle, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

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
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            {personalInfo.name}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-foreground">
            {personalInfo.role}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-6">
            {personalInfo.tagline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {personalInfo.bio}
          </p>
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <Link to="skills" smooth={true} duration={500}>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="cursor-pointer"
            >
              <ArrowDown className="w-6 h-6 text-muted-foreground" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
