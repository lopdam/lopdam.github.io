import { cn } from "@/lib/utils";

export const LiquidBackground = ({ className }: { className?: string }) => {
  return (
    <div className={cn("fixed inset-0 -z-10 overflow-hidden", className)}>
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/30 blur-[120px] animate-blob mix-blend-multiply filter opacity-70" />
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-500/30 blur-[120px] animate-blob [animation-delay:2s] mix-blend-multiply filter opacity-70" />
      <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-cyan-500/30 blur-[120px] animate-blob [animation-delay:4s] mix-blend-multiply filter opacity-70" />
      <div className="absolute inset-0 bg-background/40 backdrop-blur-[1px]" />
    </div>
  );
};
