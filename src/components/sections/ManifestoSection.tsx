import { personalInfo } from "@/data/personal";
import { AnimatedText } from "@/components/ui/animated-text";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";

export function ManifestoSection() {
  return (
    <section className="py-16 md:py-20 px-4 overflow-x-clip">
      <div className="max-w-4xl mx-auto text-center min-w-0">
        <AnimatedGradientText className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-6 inline-block">
          What I Do
        </AnimatedGradientText>
        <AnimatedText
          text={personalInfo.bio}
          className="font-heading font-medium leading-relaxed text-foreground text-[clamp(1.125rem,2.8vw,2.25rem)] px-1"
        />
      </div>
    </section>
  );
}
