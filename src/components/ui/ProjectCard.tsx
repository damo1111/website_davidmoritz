"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { RealAppArt } from "@/components/ui/RealAppArt";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  className?: string;
  /** Large cards place the mockup beside the copy on desktop. */
  wide?: boolean;
}

export function ProjectCard({ project, className, wide = false }: ProjectCardProps) {
  const { id, name, studio, tag, description, status, accentColor } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      className={cn("group h-full", className)}
    >
      <div
        className={cn(
          "relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-3xl border border-line bg-paper transition-colors duration-200 hover:border-accent/40",
          wide && "md:min-h-[380px] md:flex-row"
        )}
      >
        {/* Real app imagery */}
        <div
          className={cn(
            "relative shrink-0 overflow-hidden border-line",
            wide
              ? "h-56 border-b md:h-auto md:w-1/2 md:border-b-0 md:border-r"
              : "h-52 border-b"
          )}
        >
          <RealAppArt id={id} accent={accentColor} wide={wide} />
        </div>

        {/* Content */}
        <div className="relative flex flex-1 flex-col bg-bg p-6">
          {/* Top row: studio + status */}
          <div className="flex items-start justify-between">
            <div className="inline-flex items-center gap-2">
              <span
                className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  status === "live" ? "animate-pulse-dot bg-accent" : "bg-accent2"
                )}
              />
              <span className="font-mono text-[10px] font-bold uppercase tracking-tight text-muted">
                {studio}
              </span>
            </div>
            <span className="rounded-full bg-ink px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-tight text-bg">
              {status === "live" ? "Live" : "Building"}
            </span>
          </div>

          {/* Name + tag */}
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
            <h3 className="font-display text-2xl font-bold leading-none text-ink md:text-3xl">
              {name}
            </h3>
            <span className="inline-flex items-center rounded-full bg-ink px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-tight text-bg">
              {tag}
            </span>
          </div>

          {/* Description — always visible */}
          <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-muted">
            {description}
          </p>

          {/* Status line — no link, nothing is public yet */}
          <p className="mt-4 font-mono text-xs font-bold uppercase tracking-tight text-accent">
            {status === "live" ? "Private beta" : "In development"}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
