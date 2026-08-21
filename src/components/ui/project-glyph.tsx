function hashSeed(id: string): number {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = (hash << 5) - hash + id.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

interface ProjectGlyphProps {
  id: string;
  index: number;
  className?: string;
}

export function ProjectGlyph({ id, index, className }: ProjectGlyphProps) {
  const seed = hashSeed(id);
  const rotation = (seed % 12) - 6;
  const flip = index % 2 === 0;
  const gradientId = `project-glyph-gradient-${id}`;

  return (
    <svg
      viewBox="0 0 200 200"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1={flip ? "0%" : "100%"}
          y1="0%"
          x2={flip ? "100%" : "0%"}
          y2="100%"
        >
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--cta))" />
        </linearGradient>
      </defs>

      <rect
        x="20"
        y="20"
        width="160"
        height="160"
        rx="28"
        fill={`url(#${gradientId})`}
        opacity="0.18"
        transform={`rotate(${rotation} 100 100)`}
      />
      <rect
        x="46"
        y="70"
        width="108"
        height="72"
        rx="18"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="1.5"
        strokeOpacity="0.5"
        transform={`rotate(${rotation / 2} 100 100)`}
      />
      <circle
        cx={flip ? 150 : 50}
        cy="55"
        r="10"
        fill="hsl(var(--cta))"
        opacity="0.7"
      />
      <circle
        cx={flip ? 55 : 150}
        cy="150"
        r="6"
        fill="hsl(var(--primary))"
        opacity="0.6"
      />
    </svg>
  );
}
