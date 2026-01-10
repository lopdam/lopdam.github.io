import { skills, skillsByCategory } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee";
import { BlurFade } from "@/components/ui/blur-fade";

export function SkillsSection() {
  const firstRow = skills.slice(0, Math.ceil(skills.length / 2));
  const secondRow = skills.slice(Math.ceil(skills.length / 2));

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <BlurFade delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized in building cross-platform mobile applications and
              scalable backend services
            </p>
          </div>
        </BlurFade>

        <div className="relative mb-12 overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((skill) => (
              <Badge
                key={skill.id}
                variant="outline"
                className="mx-2 px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {skill.name}
              </Badge>
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s] mt-4">
            {secondRow.map((skill) => (
              <Badge
                key={skill.id}
                variant="outline"
                className="mx-2 px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {skill.name}
              </Badge>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-background"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skillsByCategory).map(([category, categorySkills], index) => (
            <BlurFade key={category} delay={0.2 + index * 0.1}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => (
                      <Badge key={skill.id} variant="secondary">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
