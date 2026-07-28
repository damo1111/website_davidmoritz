"use client";

import { motion, useReducedMotion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 120, damping: 18 },
  },
};

const stats = [
  { value: "20", label: "Years in product" },
  { value: "6", label: "Live apps" },
  { value: "4", label: "Continents" },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden">
      {/* Ambient champagne glow behind the headline */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[8%] h-[560px] w-[720px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(217,185,138,0.22) 0%, rgba(217,185,138,0) 68%)",
        }}
        animate={
          reduce
            ? { opacity: 0.8 }
            : { opacity: [0.7, 1, 0.7], scale: [1, 1.08, 1] }
        }
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Top bar */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <span className="flex h-8 w-11 items-center justify-center rounded bg-ink font-mono text-xs font-bold text-bg">
          DM
        </span>
        <a
          href="mailto:david@moritz.life"
          className="rounded-full border border-line px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-tight text-ink transition-colors hover:border-accent2 hover:text-accent2"
        >
          Get in touch
        </a>
      </div>

      {/* Hero content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-6 py-16 text-center"
      >
        <motion.p
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-line px-3.5 py-1.5 font-body text-xs font-medium uppercase tracking-[0.16em] text-accent2"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Private beta &middot; six live apps
        </motion.p>

        <motion.h1
          variants={item}
          className="display-tight mt-7 font-display text-[clamp(2.6rem,7vw,4.6rem)] font-extrabold tracking-tight text-ink"
        >
          Product leadership,
          <br />
          <span className="font-accentSerif text-[1.15em] font-normal italic tracking-normal text-accent">
            built by hand
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-lg font-body text-base font-light leading-relaxed text-ink/80 md:text-lg"
        >
          David Moritz &mdash; senior product leader and AI builder. Twenty
          years shipping at scale across four continents, now building six
          apps solo, no VC.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="rounded-full bg-accent px-7 py-3.5 font-body text-sm font-semibold text-accent-ink transition-transform hover:-translate-y-0.5"
          >
            See the work
          </a>
          <a
            href="mailto:david@moritz.life"
            className="rounded-full border border-line px-7 py-3 font-body text-sm font-medium text-ink transition-colors hover:border-accent2 hover:text-accent2"
          >
            david@moritz.life
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-14 flex w-full items-center justify-center gap-10 border-t border-line pt-8 md:gap-16"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-2xl font-bold tabular-nums text-accent md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
