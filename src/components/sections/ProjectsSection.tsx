import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BlurFade } from "@/components/ui/blur-fade";
import { Building2 } from "lucide-react";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <BlurFade delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Contributions to impactful projects in payments, AI, and SaaS
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <BlurFade key={project.id} delay={0.2 + index * 0.1}>
              <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1 duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                    <Building2 className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {project.company}
                    </span>
                    <span className="text-sm">• {project.date}</span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
