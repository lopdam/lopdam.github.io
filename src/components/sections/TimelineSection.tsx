import { timeline } from "@/data/timeline";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BlurFade } from "@/components/ui/blur-fade";
import { Briefcase, GraduationCap } from "lucide-react";

export function TimelineSection() {
  return (
    <section id="timeline" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <BlurFade delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Career Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              4+ years of professional experience building impactful solutions
            </p>
          </div>
        </BlurFade>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10" />

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <BlurFade key={item.id} delay={0.2 + index * 0.1}>
                <div
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white/10 shadow-[0_0_10px_rgba(var(--primary),0.5)] transform -translate-x-1/2 z-10" />

                  {/* Content */}
                  <div className="ml-16 md:ml-0 md:w-5/12">
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-2 mb-2">
                          {item.type === "work" ? (
                            <Briefcase className="w-4 h-4 text-primary" />
                          ) : (
                            <GraduationCap className="w-4 h-4 text-primary" />
                          )}
                          <span className="text-sm text-muted-foreground">
                            {item.startDate} - {item.endDate}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold mb-1">
                          {item.role}
                        </h3>
                        <p className="text-muted-foreground mb-3">
                          {item.company}
                        </p>
                        {item.responsibilities.length > 0 && (
                          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mb-3">
                            {item.responsibilities.map((resp, i) => (
                              <li key={i}>{resp}</li>
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
                    </Card>
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
