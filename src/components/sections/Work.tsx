"use client";

import { motion } from "framer-motion";
import { work } from "@/data/work";

const headlineLines = ["Twenty years.", "Twelve companies.", "Four continents."];

export function Work() {
  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="font-mono text-xs font-medium uppercase tracking-tight text-accent">
          [ Experience ]
        </p>
        <h2 className="display-tight mt-3 font-display text-5xl font-bold uppercase text-ink md:text-8xl">
          {headlineLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ type: "spring", stiffness: 90, damping: 18 }}
        className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 md:mx-auto md:max-w-6xl"
      >
        {work.map((role, i) => (
          <article
            key={`${role.company}-${role.period}`}
            className="group relative flex min-h-[260px] w-[300px] shrink-0 snap-start flex-col rounded-3xl border border-line bg-paper p-7 transition-all duration-200 hover:-translate-y-1 hover:bg-ink hover:shadow-[0_28px_60px_-24px_rgba(217,185,138,0.5)]"
          >
            <div className="flex items-start justify-between">
              <span className="font-mono text-sm font-bold text-accent transition-colors group-hover:text-accent2">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-mono text-[11px] font-bold uppercase tracking-tight text-ink transition-colors group-hover:text-bg">
                {role.period}
              </span>
            </div>

            <h3 className="mt-6 font-display text-4xl font-bold leading-none text-ink transition-colors group-hover:text-bg">
              {role.company}
            </h3>
            <p className="mt-3 font-mono text-xs font-bold uppercase tracking-tight text-muted transition-colors group-hover:text-bg/70">
              {role.role}
            </p>
            <p className="mt-4 flex-1 font-body text-sm leading-relaxed text-muted transition-colors group-hover:text-bg/80">
              {role.context}
            </p>
            <p className="mt-4 font-mono text-[11px] font-medium uppercase tracking-tight text-muted transition-colors group-hover:text-bg/70">
              {role.location}
            </p>
          </article>
        ))}
        {/* trailing spacer so the last card can snap clear of the edge */}
        <div className="w-2 shrink-0" aria-hidden="true" />
      </motion.div>
    </section>
  );
}
