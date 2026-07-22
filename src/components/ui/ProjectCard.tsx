"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const { name, studio, url, tag, description, status, screengrab, accentColor } =
    project;

  // Fall back to the accent block if a screengrab is absent or fails to load
  // (screengrabs are added later — see brief section 8).
  const [imageOk, setImageOk] = useState(Boolean(screengrab));
  const showImage = Boolean(screengrab) && imageOk;

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
          "relative flex h-full min-h-[280px] flex-col justify-between overflow-hidden rounded-3xl border-2 border-ink p-7",
          "transition-all duration-200 ease-out",
          "hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#0B0B0B]"
        )}
        style={{ backgroundColor: showImage ? "#0B0B0B" : accentColor }}
      >
        {/* Screengrab background when available */}
        {showImage && screengrab && (
          <>
            <Image
              src={screengrab}
              alt={`${name} preview`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-90"
              onError={() => setImageOk(false)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
          </>
        )}

        {/* Top row: studio + arrow */}
        <div className="relative z-10 flex items-start justify-between">
          <div className="inline-flex items-center gap-2 rounded-full border border-ink bg-bg/90 px-3 py-1">
            <span
              className={cn(
                "h-1.5 w-1.5 rounded-full",
                status === "live" ? "animate-pulse-dot bg-accent" : "bg-ink"
              )}
            />
            <span className="font-mono text-[10px] font-bold uppercase tracking-tight text-ink">
              {studio}
            </span>
          </div>
          {url && (
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink bg-bg text-lg font-bold text-ink transition-transform duration-300 group-hover:rotate-45"
              aria-hidden="true"
            >
              ↗
            </span>
          )}
        </div>

        {/* Bottom content */}
        <div className="relative z-10 mt-auto pt-8">
          <span className="inline-flex items-center rounded-full bg-ink px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-tight text-bg">
            {tag}
          </span>
          <h3
            className={cn(
              "mt-3 font-display text-3xl font-bold leading-tight md:text-[34px]",
              showImage ? "text-bg" : "text-ink"
            )}
          >
            {name}
          </h3>
          <p
            className={cn(
              "mt-2 max-h-0 overflow-hidden font-body text-sm font-medium opacity-0 transition-all duration-300 group-hover:max-h-40 group-hover:opacity-100",
              showImage ? "text-bg/90" : "text-ink/80"
            )}
          >
            {description}
          </p>
          {url && (
            <p
              className={cn(
                "mt-3 font-mono text-xs font-bold uppercase tracking-tight opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                showImage ? "text-bg" : "text-ink"
              )}
            >
              {url}
            </p>
          )}
        </div>
      </CardTag>
    </motion.div>
  );
}
