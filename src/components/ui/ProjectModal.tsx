"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-bg/80 px-4 py-10 backdrop-blur-sm md:items-center md:py-16"
          onClick={onClose}
          role="presentation"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 200, damping: 24 }}
            className="relative w-full max-w-xl rounded-3xl border border-line bg-paper p-7 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.6)] md:p-10"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              ✕
            </button>

            <span className="inline-flex items-center rounded-full bg-ink px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-tight text-bg">
              {project.tag}
            </span>

            <h3
              id="project-modal-title"
              className="mt-4 font-display text-3xl font-bold leading-none text-ink md:text-4xl"
            >
              {project.name}
            </h3>

            <p className="mt-2 font-accentSerif text-lg italic text-accent">
              {project.tagline}
            </p>

            <p className="mt-4 font-body text-sm leading-relaxed text-muted md:text-base">
              {project.description}
            </p>

            <ul className="mt-7 flex flex-col gap-5 border-t border-line pt-7">
              {project.features.map((feature) => (
                <li key={feature.title}>
                  <p className="font-mono text-[11px] font-bold uppercase tracking-tight text-ink">
                    {feature.title}
                  </p>
                  <p className="mt-1.5 font-body text-sm leading-relaxed text-muted">
                    {feature.description}
                  </p>
                </li>
              ))}
            </ul>

            <p className="mt-7 border-t border-line pt-6 font-accentSerif text-lg italic text-ink">
              {project.closingLine}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
