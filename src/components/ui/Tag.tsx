import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-ink bg-bg px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-tight text-ink",
        className
      )}
    >
      {children}
    </span>
  );
}
