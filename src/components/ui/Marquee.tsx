import { cn } from "@/lib/utils";

interface MarqueeProps {
  text: string;
  className?: string;
  /** Visual variant. "bar" is a full-width ink block; "plain" is bare text. */
  variant?: "bar" | "plain";
  fast?: boolean;
}

/**
 * Infinite horizontal marquee. Text scrolls right to left, continuously.
 * The content is duplicated so the CSS animation (translateX -50%) loops
 * seamlessly with no gap between repetitions.
 */
export function Marquee({
  text,
  className,
  variant = "plain",
  fast = false,
}: MarqueeProps) {
  const isBar = variant === "bar";
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        isBar ? "bg-ink py-4 text-bg" : "py-3 text-ink",
        className
      )}
    >
      <div
        className={cn(
          "flex w-max whitespace-nowrap will-change-transform",
          fast ? "animate-marquee-fast" : "animate-marquee"
        )}
      >
        <span className="font-mono text-sm font-medium uppercase tracking-tight">
          {text}
        </span>
        <span
          className="font-mono text-sm font-medium uppercase tracking-tight"
          aria-hidden="true"
        >
          {text}
        </span>
      </div>
    </div>
  );
}
