"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";

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
  { value: 20, label: "Years in product" },
  { value: 9, label: "Companies" },
  { value: 6, label: "Live apps" },
  { value: 4, label: "Continents" },
];

function StatValue({ value }: { value: number }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const motionValue = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;

    if (reduce) {
      if (ref.current) ref.current.textContent = value.toString();
      return;
    }

    const controls = animate(motionValue, value, {
      duration: 2,
      ease: "easeOut",
    });
    const unsubscribe = motionValue.on("change", (latest) => {
      if (ref.current) ref.current.textContent = Math.round(latest).toString();
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [inView, reduce, value, motionValue]);

  return (
    <p
      ref={ref}
      className="font-display text-2xl font-bold tabular-nums text-accent md:text-3xl"
    >
      0
    </p>
  );
}

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex w-full flex-col overflow-hidden">
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

      {/* Hero content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-6 pb-16 pt-28 text-center md:pt-32"
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
          className="mt-14 grid w-full grid-cols-2 gap-x-8 gap-y-7 border-t border-line pt-8 sm:flex sm:items-center sm:justify-center sm:gap-16"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <StatValue value={stat.value} />
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
