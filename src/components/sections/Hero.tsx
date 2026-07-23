"use client";

import { motion } from "framer-motion";
import { Marquee } from "@/components/ui/Marquee";

const MARQUEE_TEXT =
  "VP PRODUCT — JET (19 MARKETS) ✳ HEAD OF PRODUCT — IAG LOYALTY & BRITISH AIRWAYS AVIOS ✳ SENIOR PM — REA GROUP ✳ PRODUCT LEAD — ZOOPLA ✳ AMAZON ✳ TESCO ✳ FOUNDER — MNEMO ✳ BUILDER — EEND.APP ✳ ";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 120, damping: 18 },
  },
};

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden">
      {/* Playful background color blocks */}
      <motion.div
        aria-hidden="true"
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 60, damping: 16, delay: 0.2 }}
        className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-lime md:h-96 md:w-96"
      />
      <motion.div
        aria-hidden="true"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 60, damping: 16, delay: 0.35 }}
        className="pointer-events-none absolute -left-16 bottom-40 h-40 w-40 rounded-3xl bg-accent md:h-56 md:w-56"
      />

      {/* Top bar */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <span className="flex h-8 w-11 items-center justify-center rounded bg-ink font-mono text-xs font-bold text-bg">
          DM
        </span>
        <div className="flex items-center gap-3">
          <a
            href="mailto:david@moritznet.com"
            className="rounded-full bg-ink px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-tight text-bg transition-transform hover:-translate-y-0.5"
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Hero content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 py-16"
      >
        <motion.p
          variants={item}
          className="font-mono text-xs font-medium uppercase tracking-tight text-muted md:text-sm"
        >
          Melbourne / London / Amsterdam
        </motion.p>

        <motion.h1
          variants={item}
          className="display-tight mt-4 font-display text-[clamp(3.5rem,15vw,12rem)] font-bold uppercase text-ink"
        >
          David
          <br />
          Moritz<span className="text-accent">.</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl font-body text-lg font-medium leading-snug text-ink md:text-2xl"
        >
          Senior product leader and AI builder. 20 years shipping at scale
          across four continents.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-mono text-sm font-bold uppercase tracking-tight text-accent-ink transition-transform hover:-translate-y-0.5"
          >
            See the work
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="mailto:david@moritznet.com"
            className="inline-flex items-center rounded-full border-2 border-ink px-7 py-3 font-mono text-sm font-bold uppercase tracking-tight text-ink transition-colors hover:bg-ink hover:text-bg"
          >
            david@moritznet.com
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom marquee bar */}
      <div className="relative z-10 w-full -rotate-1 md:-rotate-[0.5deg]">
        <Marquee text={MARQUEE_TEXT} variant="bar" />
      </div>
    </section>
  );
}
