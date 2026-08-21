import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "motion/react";
import { cn } from "@/lib/utils";

interface CharProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function Char({ children, progress, range }: CharProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return <motion.span style={{ opacity }}>{children}</motion.span>;
}

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export function AnimatedText({ text, className }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  if (prefersReducedMotion) {
    return (
      <p ref={containerRef} className={cn("text-balance", className)}>
        {text}
      </p>
    );
  }

  const words = text.split(" ");

  return (
    <p ref={containerRef} className={cn("text-balance", className)}>
      {words.map((word, wordIndex) => {
        const charsBefore = words
          .slice(0, wordIndex)
          .reduce((count, w) => count + w.length + 1, 0);

        return (
          <span key={wordIndex}>
            <span className="inline-block whitespace-nowrap">
              {word.split("").map((char, charIndex) => {
                const i = charsBefore + charIndex;
                return (
                  <Char
                    key={charIndex}
                    progress={scrollYProgress}
                    range={[i / text.length, (i + 1) / text.length]}
                  >
                    {char}
                  </Char>
                );
              })}
            </span>
            {wordIndex < words.length - 1 ? " " : null}
          </span>
        );
      })}
    </p>
  );
}
