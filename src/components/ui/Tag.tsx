import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-gold/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-gold",
        className
      )}
    >
      {children}
    </span>
  );
}
