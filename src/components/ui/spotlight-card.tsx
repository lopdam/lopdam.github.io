import type { ComponentPropsWithoutRef, CSSProperties } from "react";
import { Card } from "@/components/ui/card";
import { useSpotlight } from "@/hooks/use-spotlight";
import { cn } from "@/lib/utils";

const SPOTLIGHT_COLORS = {
  primary: "var(--primary)",
  cta: "var(--cta)",
} as const;

interface SpotlightCardProps extends ComponentPropsWithoutRef<typeof Card> {
  glow?: keyof typeof SPOTLIGHT_COLORS;
  radius?: string;
}

export const SpotlightCard = ({
  glow = "primary",
  radius,
  className,
  style,
  children,
  ...props
}: SpotlightCardProps) => {
  const { ref, onPointerMove } = useSpotlight<HTMLDivElement>();

  return (
    <Card
      ref={ref}
      onPointerMove={onPointerMove}
      style={
        {
          ...style,
          "--spotlight-color": SPOTLIGHT_COLORS[glow],
          ...(radius ? { "--spotlight-radius": radius } : {}),
        } as CSSProperties
      }
      className={cn("spotlight-card relative isolate", className)}
      {...props}
    >
      <span aria-hidden="true" className="spotlight-layer spotlight-fill" />
      <span aria-hidden="true" className="spotlight-layer spotlight-ring" />
      {children}
    </Card>
  );
};
