import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { timeline } from "@/data/timeline";
import { Badge } from "@/components/ui/badge";
import { CardContent } from "@/components/ui/card";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { BlurFade } from "@/components/ui/blur-fade";
import { Briefcase, GraduationCap } from "lucide-react";

export function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.6"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [1, 1] : [0, 1]);

  return (
    <section id="timeline" className="py-16 md:py-20 px-4 overflow-x-clip">
      <div className="max-w-4xl mx-auto min-w-0">
        <BlurFade delay={0.1}>
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
              Career Journey
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              6+ years of professional experience building impactful solutions
            </p>
          </div>
        </BlurFade>

        <div ref={containerRef} className="relative">
          {/* Timeline line */}
          <motion.div
            aria-hidden="true"
            style={{ scaleY }}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 origin-top bg-gradient-to-b from-primary via-primary/60 to-primary/10"
          />

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <BlurFade key={item.id} delay={0.2 + index * 0.1}>
                <div
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row`}
                >
                  {/* Timeline dot */}
                  <div
                    aria-hidden="true"
                    className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white/10 shadow-[0_0_10px_hsl(var(--primary)/0.5)] transform -translate-x-1/2 z-10"
                  />

                  {/* Content */}
                  <div className="ml-14 sm:ml-16 md:ml-0 md:w-5/12 min-w-0">
                    <SpotlightCard className="hover:bg-white/10 hover:shadow-lg transition-[background-color,box-shadow] duration-300 overflow-hidden">
                      <CardContent className="pt-6">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          {item.type === "work" ? (
                            <Briefcase className="w-4 h-4 text-primary shrink-0" />
                          ) : (
                            <GraduationCap className="w-4 h-4 text-primary shrink-0" />
                          )}
                          <span className="text-sm text-muted-foreground">
                            {item.startDate} - {item.endDate}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-1 break-words text-balance">
                          {item.role}
                        </h3>
                        <p className="text-muted-foreground mb-3 break-words">
                          {item.company}
                        </p>
                        {item.responsibilities.length > 0 && (
                          <ul className="list-disc list-outside pl-4 text-sm text-muted-foreground space-y-1 mb-3">
                            {item.responsibilities.map((resp, i) => (
                              <li key={i} className="break-words">{resp}</li>
                            ))}
                          </ul>
                        )}
                        {item.techStack.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {item.techStack.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </SpotlightCard>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
