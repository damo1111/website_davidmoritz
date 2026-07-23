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
  const { id, name, studio, url, tag, description, status, accentColor } = project;

  const CardTag = url ? "a" : "div";
  const linkProps = url
    ? {
        href: `https://${url}`,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      className={cn("group h-full", className)}
    >
      <CardTag
        {...linkProps}
        className={cn(
          "relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-3xl border-2 border-ink",
          "bg-bg transition-all duration-200 ease-out",
          "hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#0B0B0B]",
          wide && "md:min-h-[380px] md:flex-row"
        )}
      >
        {/* Animated app mockup */}
        <div
          className={cn(
            "relative shrink-0 overflow-hidden border-ink",
            wide
              ? "h-56 border-b-2 md:h-auto md:w-1/2 md:border-b-0 md:border-r-2"
              : "h-52 border-b-2"
          )}
        >
          <RealAppArt id={id} accent={accentColor} wide={wide} />
        </div>

        {/* Content */}
        <div className="relative flex flex-1 flex-col bg-bg p-6">
          {/* Top row: studio + arrow */}
          <div className="flex items-start justify-between">
            <div className="inline-flex items-center gap-2">
              <span
                className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  status === "live" ? "animate-pulse-dot bg-accent" : "bg-ink"
                )}
              />
              <span className="font-mono text-[10px] font-bold uppercase tracking-tight text-muted">
                {studio}
              </span>
            </div>
            {url ? (
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-ink bg-bg text-base font-bold text-ink transition-transform duration-300 group-hover:rotate-45"
                aria-hidden="true"
              >
                ↗
              </span>
            ) : (
              <span className="rounded-full bg-ink px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-tight text-bg">
                Soon
              </span>
            )}
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

          {/* URL / status */}
          <p className="mt-4 font-mono text-xs font-bold uppercase tracking-tight text-accent">
            {url ? `${url} →` : "In development"}
          </p>
        </div>
      </CardTag>
    </motion.div>
  );
}
