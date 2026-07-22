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
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
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
    <div className="inline-flex items-center gap-2">
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          status === "active"
            ? "animate-pulse-dot bg-[#7BC47F]"
            : "bg-gold"
        )}
      />
      <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
        {label}
      </span>
    </div>
  );
}

export function Now() {
  return (
    <section className="mx-auto w-full max-w-6xl px-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
        Currently
      </p>
      <h2 className="mt-4 font-display text-4xl font-light italic text-text md:text-5xl">
        What I&apos;m building.
      </h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3"
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
                  "flex h-full flex-col rounded border border-border bg-surface p-8 transition-all duration-300",
                  card.url && "hover:-translate-y-0.5 hover:border-gold"
                )}
              >
                <div className="text-2xl">{card.emoji}</div>
                <h3 className="mt-4 font-display text-2xl font-light text-text">
                  {card.name}
                </h3>
                <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-muted">
                  {card.description}
                </p>
                {card.url && (
                  <p className="mt-4 font-mono text-xs text-gold">{card.url}</p>
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
