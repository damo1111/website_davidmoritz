"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section className="w-full bg-accent text-accent-ink">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ type: "spring", stiffness: 110, damping: 18 }}
        className="mx-auto flex w-full max-w-6xl flex-col px-6 py-28 md:py-40"
      >
        <p className="font-mono text-xs font-medium uppercase tracking-tight text-accent-ink/70">
          [ Contact ]
        </p>
        <h2 className="display-tight mt-4 font-display text-7xl font-bold uppercase md:text-[11rem]">
          Let&apos;s
          <br />
          talk
        </h2>
        <p className="mt-8 max-w-xl font-body text-lg font-medium leading-snug md:text-2xl">
          Available for senior advisory, fractional product leadership, and
          early-stage collaboration.
        </p>
        <a
          href="mailto:david@moritz.life"
          className="group mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-bg px-8 py-4 font-mono text-sm font-bold uppercase tracking-tight text-ink transition-transform hover:-translate-y-1"
        >
          david@moritz.life
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
        <p className="mt-10 font-mono text-[11px] font-medium uppercase tracking-tight text-accent-ink/70">
          Melbourne · GMT+10
        </p>
      </motion.div>
    </section>
  );
}
