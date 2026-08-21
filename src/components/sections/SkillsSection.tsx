import { skills, skillsByCategory } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ParallaxText } from "@/components/ui/scroll-based-velocity";
import { BlurFade } from "@/components/ui/blur-fade";
import { SkillConstellation } from "@/components/ui/skill-constellation";

export function SkillsSection() {
  const firstRow = skills.slice(0, Math.ceil(skills.length / 2));
  const secondRow = skills.slice(Math.ceil(skills.length / 2));

  return (
    <section id="skills" className="relative overflow-hidden py-16 md:py-20 px-4">
      <SkillConstellation />
      <div className="max-w-6xl mx-auto min-w-0">
        <BlurFade delay={0.1}>
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
              Technical Expertise
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Specialized in building cross-platform mobile applications and
              scalable backend services
            </p>
          </div>
        </BlurFade>

        <div className="relative mb-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          <ParallaxText baseVelocity={2}>
            {firstRow.map((skill) => (
              <Badge
                key={skill.id}
                variant="outline"
                className="mx-2 px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {skill.name}
              </Badge>
            ))}
          </ParallaxText>
          <ParallaxText baseVelocity={-2} className="mt-4">
            {secondRow.map((skill) => (
              <Badge
                key={skill.id}
                variant="outline"
                className="mx-2 px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {skill.name}
              </Badge>
            ))}
          </ParallaxText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skillsByCategory).map(([category, categorySkills], index) => (
            <BlurFade key={category} delay={0.2 + index * 0.1}>
              <SpotlightCard className="hover:bg-white/10 hover:shadow-lg transition-[background-color,box-shadow] duration-300">
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
              </SpotlightCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
