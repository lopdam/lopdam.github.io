import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { skillsByCategory } from "@/data/skills";
import { cn } from "@/lib/utils";

interface Node {
  id: string;
  x: number;
  y: number;
}

interface Edge {
  id: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

function buildLayout() {
  const categories = Object.keys(skillsByCategory);
  const cx = 50;
  const cy = 50;
  const hubRadius = 32;
  const skillExtra = 15;

  const hubs: (Node & { angle: number })[] = categories.map((category, i) => {
    const angle = (i / categories.length) * Math.PI * 2 - Math.PI / 2;
    return {
      id: category,
      angle,
      x: cx + hubRadius * Math.cos(angle),
      y: cy + hubRadius * Math.sin(angle),
    };
  });

  const skillNodes: Node[] = [];
  const edges: Edge[] = [];

  hubs.forEach((hub) => {
    const catSkills = skillsByCategory[hub.id];
    const skillRadius = hubRadius + skillExtra;
    const spread = Math.min(0.9, 0.22 * catSkills.length);

    catSkills.forEach((skill, si) => {
      const offset =
        catSkills.length > 1 ? (si / (catSkills.length - 1) - 0.5) * spread : 0;
      const angle = hub.angle + offset;
      const x = cx + skillRadius * Math.cos(angle);
      const y = cy + skillRadius * Math.sin(angle);
      skillNodes.push({ id: skill.id, x, y });
      edges.push({ id: `${hub.id}-${skill.id}`, x1: hub.x, y1: hub.y, x2: x, y2: y });
    });
  });

  return { hubs, skillNodes, edges };
}

const LAYOUT = buildLayout();

interface SkillConstellationProps {
  className?: string;
}

export function SkillConstellation({ className }: SkillConstellationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "start 0.15"],
  });

  const lineDraw = useTransform(scrollYProgress, [0, 0.9], prefersReducedMotion ? [1, 1] : [0, 1]);
  const nodeOpacity = useTransform(scrollYProgress, [0, 0.4], prefersReducedMotion ? [1, 1] : [0, 1]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 opacity-50 dark:opacity-35",
        className
      )}
    >
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
        {LAYOUT.edges.map((edge) => (
          <motion.line
            key={edge.id}
            x1={edge.x1}
            y1={edge.y1}
            x2={edge.x2}
            y2={edge.y2}
            stroke="hsl(var(--primary))"
            strokeWidth={0.15}
            strokeOpacity={0.4}
            style={{ pathLength: lineDraw }}
          />
        ))}
        {LAYOUT.hubs.map((hub) => (
          <motion.circle
            key={hub.id}
            cx={hub.x}
            cy={hub.y}
            r={2.2}
            fill="hsl(var(--primary))"
            style={{ opacity: nodeOpacity, scale: nodeOpacity }}
          />
        ))}
        {LAYOUT.skillNodes.map((node) => (
          <motion.circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r={1.1}
            fill="hsl(var(--primary))"
            fillOpacity={0.7}
            style={{ opacity: nodeOpacity, scale: nodeOpacity }}
          />
        ))}
      </svg>
    </div>
  );
}
