import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  className?: string;
}

export function Magnet({ children, padding = 100, strength = 4, className }: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY);
      const activationRadius = Math.max(rect.width, rect.height) / 2 + padding;

      if (distance < activationRadius) {
        setIsActive(true);
        setTranslate({
          x: (e.clientX - centerX) / strength,
          y: (e.clientY - centerY) / strength,
        });
      } else {
        setIsActive(false);
        setTranslate({ x: 0, y: 0 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [padding, strength, prefersReducedMotion]);

  return (
    <div
      ref={ref}
      className={cn("inline-block", className)}
      style={{
        transform: `translate3d(${translate.x}px, ${translate.y}px, 0)`,
        transition: isActive ? "transform 0.3s ease-out" : "transform 0.6s ease-in-out",
        willChange: isActive ? "transform" : "auto",
      }}
    >
      {children}
    </div>
  );
}
