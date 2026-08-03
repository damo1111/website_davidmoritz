"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NowCard {
  emoji: string;
  name: string;
  /** Number of letters redacted from the end of the name with a solid bar. */
  maskChars?: number;
  description: string;
  url: string | null;
  status: "active" | "building" | "development";
  statusLabel: string;
  /** Under wraps — shown teased, not described. */
  secret?: boolean;
}

const cards: NowCard[] = [
  {
    emoji: "🧠",
    name: "Mnemo",
    description:
      "Context-aware ambient AI. Human signal from wearables and spatial computing.",
    url: "mnemolabs.co",
    status: "active",
    statusLabel: "Active · SEIS Approved",
  },
  {
    emoji: "🦆",
    name: "eend.app",
    description:
      "Indie AI product studio. Five apps across eldercare, finance, travel, trading and health.",
    url: "eend.app",
    status: "building",
    statusLabel: "Building",
  },
  {
    emoji: "🧵",
    name: "Not That C",
    maskChars: 5,
    description: "Loose threads, pulled together. More stitched up soon.",
    url: null,
    status: "development",
    statusLabel: "Under wraps",
    secret: true,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 120, damping: 18 },
  },
};

function StatusPill({
  status,
  label,
  secret,
}: {
  status: NowCard["status"];
  label: string;
  secret?: boolean;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1",
        secret ? "border-[#F5C518]/40" : "border-line"
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          secret
            ? "bg-[#F5C518]"
            : status === "active"
              ? "animate-pulse-dot bg-accent"
              : "bg-accent2"
        )}
      />
      <span
        className={cn(
          "font-mono text-[10px] font-medium uppercase tracking-tight",
          secret ? "text-[#F5C518]" : "text-muted"
        )}
      >
        {label}
      </span>
    </div>
  );
}

function HazardTape() {
  const label = "DO NOT UNWRAP • ";
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-[-15%] top-[38%] -rotate-6 border-y-2 border-black/40 py-1.5 shadow-[0_2px_10px_rgba(0,0,0,0.35)]"
      style={{
        background:
          "repeating-linear-gradient(45deg, #F5C518 0 18px, #16171a 18px 36px)",
      }}
    >
      <div className="overflow-hidden whitespace-nowrap font-mono text-[10px] font-bold tracking-[0.2em] text-black/85">
        {label.repeat(20)}
      </div>
    </div>
  );
}

export function Now() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="font-mono text-xs font-medium uppercase tracking-tight text-accent">
            [ Currently ]
          </p>
          <h2 className="display-tight mt-3 font-display text-5xl font-bold uppercase text-ink md:text-7xl">
            What I&apos;m
            <br />
            building
          </h2>
          <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-muted md:text-lg">
            Three different things, running in parallel: a funded startup, a
            solo app studio, and something new.
          </p>
        </div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3"
      >
        {cards.map((card) => {
          const CardTag = card.url ? "a" : "div";
          const linkProps = card.url
            ? {
                href: `https://${card.url}`,
                target: "_blank",
                rel: "noopener noreferrer",
              }
            : {};
          return (
            <motion.div key={card.name} variants={item} className="group">
              <CardTag
                {...linkProps}
                className={cn(
                  "relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-paper p-7 transition-all duration-200",
                  card.url &&
                    "hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_28px_60px_-28px_rgba(217,185,138,0.45)]"
                )}
              >
                {card.secret && <HazardTape />}

                <div className={cn("text-4xl", card.secret && "opacity-70")}>
                  {card.emoji}
                </div>
                <h3 className="mt-5 flex items-center font-display text-2xl font-bold text-ink">
                  {card.name}
                  {!!card.maskChars && (
                    <span
                      aria-hidden="true"
                      className="ml-1.5 inline-block h-[0.72em] translate-y-[0.05em] rounded-[2px] bg-black"
                      style={{ width: `${card.maskChars * 0.62}em` }}
                    />
                  )}
                  {!!card.maskChars && (
                    <span className="sr-only"> (redacted)</span>
                  )}
                </h3>
                <p
                  className={cn(
                    "mt-3 flex-1 font-body text-[15px] leading-relaxed text-muted",
                    card.secret && "select-none blur-[3px]"
                  )}
                >
                  {card.description}
                </p>
                {card.url && (
                  <p className="mt-5 font-mono text-xs font-bold uppercase tracking-tight text-accent">
                    {card.url} →
                  </p>
                )}
                <div className="mt-5">
                  <StatusPill
                    status={card.status}
                    label={card.statusLabel}
                    secret={card.secret}
                  />
                </div>
              </CardTag>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
