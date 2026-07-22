import { cn } from "@/lib/utils";

interface MarqueeProps {
  text: string;
  className?: string;
}

/**
 * Infinite horizontal marquee. Text scrolls right to left, continuously,
 * no pause on hover. The content is duplicated so the CSS animation
 * (translateX -50%) loops seamlessly with no gap between repetitions.
 */
export function Marquee({ text, className }: MarqueeProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden py-4",
        // subtle fade at both edges
        "[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        className
      )}
    >
      <div className="flex w-max animate-marquee whitespace-nowrap will-change-transform">
        <span className="font-mono text-[11px] tracking-[0.15em] text-muted">
          {text}
        </span>
        <span
          className="font-mono text-[11px] tracking-[0.15em] text-muted"
          aria-hidden="true"
        >
          {text}
        </span>
      </div>
    </div>
  );
}
