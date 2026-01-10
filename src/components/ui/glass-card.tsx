import { cn } from "@/lib/utils";
import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
}

export const GlassCard = ({ children, className, gradient = false, ...props }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-xl transition-all duration-300 hover:bg-white/10 hover:shadow-2xl hover:scale-[1.01]",
        "dark:bg-black/10 dark:border-white/5",
        gradient && "before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
