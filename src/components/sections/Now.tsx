"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NowCard {
  emoji: string;
  name: string;
  description: string;
  url: string | null;
  status: "active" | "building" | "development";
  statusLabel: string;
}

const cards: NowCard[] = [
  {
    emoji: "🧠",
    name: "Mnemo",
    description:
      "Context-aware ambient AI. Human signal from wearables and spatial computing.",
    url: "mnemo.systems",
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
    emoji: "🪿",
    name: "NOT THAT CVNVRD",
    description: "Directional fashion label. Duck energy. Canard universe.",
    url: null,
    status: "development",
    statusLabel: "In Development",
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
}: {
  status: NowCard["status"];
  label: string;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-ink px-3 py-1">
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          status === "active" ? "animate-pulse-dot bg-accent" : "bg-ink"
        )}
      />
      <span className="font-mono text-[10px] font-medium uppercase tracking-tight text-ink">
        {label}
      </span>
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
                  "flex h-full flex-col rounded-3xl border-2 border-ink bg-bg p-7 transition-all duration-200",
                  card.url &&
                    "hover:-translate-y-1 hover:bg-paper hover:shadow-[6px_6px_0_0_#0B0B0B]"
                )}
              >
                <div className="text-4xl">{card.emoji}</div>
                <h3 className="mt-5 font-display text-2xl font-bold text-ink">
                  {card.name}
                </h3>
                <p className="mt-3 flex-1 font-body text-[15px] leading-relaxed text-muted">
                  {card.description}
                </p>
                {card.url && (
                  <p className="mt-5 font-mono text-xs font-bold uppercase tracking-tight text-accent">
                    {card.url} →
                  </p>
                )}
                <div className="mt-5">
                  <StatusPill status={card.status} label={card.statusLabel} />
                </div>
              </CardTag>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
