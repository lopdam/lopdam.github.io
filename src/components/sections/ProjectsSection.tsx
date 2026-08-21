import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProjectGlyph } from "@/components/ui/project-glyph";
import { BlurFade } from "@/components/ui/blur-fade";
import { Building2, ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
  total: number;
}

function ProjectCard({ project, index, total }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [1, 1] : [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="sticky min-h-[70vh] md:h-[85vh] flex items-center py-4"
      style={{ top: `calc(5rem + ${index * 20}px)` }}
    >
      <motion.div style={{ scale }} className="w-full min-w-0">
        <Card className="rounded-[28px] md:rounded-[40px] border-2 shadow-2xl p-5 sm:p-6 md:p-10 overflow-hidden">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6 md:mb-8">
            <div className="flex items-baseline gap-3 sm:gap-4 min-w-0">
              <span className="text-[clamp(2rem,6vw,5rem)] font-black font-heading text-primary/20 leading-none shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-muted-foreground mb-1">
                  <Building2 className="w-4 h-4 shrink-0" />
                  <span className="text-sm font-medium break-words">{project.company}</span>
                  <span className="text-sm">• {project.date}</span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold break-words text-balance">
                  {project.title}
                </h3>
              </div>
            </div>
            {project.link && (
              <Button
                variant="outline"
                size="sm"
                className="gap-2 rounded-full uppercase tracking-widest"
                asChild
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </Button>
            )}
          </div>

          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <ProjectGlyph
              id={project.id}
              index={index}
              className="w-32 h-32 md:w-40 md:h-40 shrink-0 mx-auto"
            />
          </div>
        </Card>
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-20 px-4 overflow-x-clip">
      <div className="max-w-5xl mx-auto min-w-0">
        <BlurFade delay={0.1}>
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
              Featured Projects
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Contributions to impactful projects in payments, AI, and SaaS
            </p>
          </div>
        </BlurFade>

        <div className="relative">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              total={projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
