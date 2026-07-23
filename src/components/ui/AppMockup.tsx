"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

/**
 * Animated, visuals-led mockups for each app tile. Each renders a tilted,
 * softly-lit "app window" that floats in 3D with live in-UI motion — a
 * fictitious-but-plausible screen that shows off the product without linking
 * to it. Purely presentational.
 */

const SCREEN = "#0B0B0B";
const SCREEN_2 = "#141416";
const WHITE = "#FFFFFF";
const ACCENT = "#3B2BFF";
const LIME = "#D6FF3E";
const GREEN = "#39D98A";
const RED = "#FF5C5C";

function shade(hex: string, amt: number) {
  // darken a #rrggbb by amt (0..1)
  const n = parseInt(hex.slice(1), 16);
  let r = (n >> 16) & 255,
    g = (n >> 8) & 255,
    b = n & 255;
  r = Math.round(r * (1 - amt));
  g = Math.round(g * (1 - amt));
  b = Math.round(b * (1 - amt));
  return `rgb(${r}, ${g}, ${b})`;
}

interface MockProps {
  id: string;
  accent: string;
}

export function AppMockup({ id, accent }: MockProps) {
  const reduce = useReducedMotion();

  const float: Variants = {
    animate: reduce
      ? {}
      : {
          y: [0, -8, 0],
          rotateX: [7, 5, 7],
          rotateY: [-13, -11, -13],
          transition: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        },
  };

  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden p-4"
      style={{
        background: `linear-gradient(140deg, ${accent}, ${shade(accent, 0.28)})`,
        perspective: "1100px",
      }}
    >
      {/* LED glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute h-40 w-40 rounded-full blur-2xl"
        style={{ background: accent, opacity: 0.55, filter: "blur(48px)" }}
      />

      <motion.div
        variants={float}
        initial={reduce ? undefined : { rotateX: 7, rotateY: -13 }}
        animate="animate"
        className="relative w-[86%] max-w-[300px]"
        style={{ transformStyle: "preserve-3d" }}
      >
        <Scene id={id} reduce={!!reduce} />
      </motion.div>
    </div>
  );
}

function ScreenShell({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_24px_50px_-12px_rgba(0,0,0,0.55)]"
      style={{ background: SCREEN }}
    >
      {/* title bar */}
      <div className="flex items-center gap-1.5 px-3 py-2">
        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
        <span className="ml-auto font-mono text-[7px] uppercase tracking-widest text-white/40">
          {label}
        </span>
      </div>
      <div className="px-3 pb-3">{children}</div>
    </div>
  );
}

function Chip({
  children,
  className = "",
  delay = 0,
  reduce,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  reduce: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, type: "spring", stiffness: 200, damping: 16 }}
      animate={
        reduce
          ? undefined
          : { y: [0, -5, 0], transition: { duration: 5, repeat: Infinity, ease: "easeInOut", delay } }
      }
      className={`absolute rounded-xl border border-white/10 bg-white px-2.5 py-1.5 shadow-[0_12px_24px_-8px_rgba(0,0,0,0.4)] ${className}`}
      style={{ transform: "translateZ(40px)" }}
    >
      {children}
    </motion.div>
  );
}

function Scene({ id, reduce }: { id: string; reduce: boolean }) {
  switch (id) {
    case "ministry-of-susan":
      return <SusanScene reduce={reduce} />;
    case "davanity":
      return <DavanityScene reduce={reduce} />;
    case "pond-hopping":
      return <PondScene reduce={reduce} />;
    case "moritzwith":
      return <DuckworthScene reduce={reduce} />;
    case "nous":
      return <NousScene reduce={reduce} />;
    case "chinwag":
      return <ChinwagScene reduce={reduce} />;
    default:
      return <DavanityScene reduce={reduce} />;
  }
}

/* ---------------- Ministry of Susan — care status ---------------- */
function SusanScene({ reduce }: { reduce: boolean }) {
  return (
    <>
      <ScreenShell label="Susan">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-mono text-[7px] uppercase tracking-widest text-white/40">
              Status
            </p>
            <p className="mt-0.5 text-sm font-semibold text-white">All good</p>
          </div>
          <span className="flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold text-black" style={{ background: GREEN }}>
            ✓
          </span>
        </div>
        {/* heartbeat trace */}
        <div className="mt-2 rounded-lg p-2" style={{ background: SCREEN_2 }}>
          <svg viewBox="0 0 120 32" className="h-8 w-full">
            <motion.path
              d="M0 16 H26 l6 -11 l7 22 l6 -18 l6 13 H70 l6 -8 l8 8 H120"
              fill="none"
              stroke={GREEN}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
            />
          </svg>
          <div className="mt-1 flex justify-between font-mono text-[7px] text-white/45">
            <span>HEART · 68 BPM</span>
            <span>LIVE</span>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-2 rounded-lg px-2 py-1.5" style={{ background: SCREEN_2 }}>
          <span className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ background: GREEN }} />
          <span className="text-[9px] text-white/70">Last check-in 9:32am</span>
        </div>
      </ScreenShell>
      <Chip className="-right-3 top-8" delay={0.5} reduce={reduce}>
        <span className="text-[8px] font-bold text-ink">🫧 Proactive care</span>
      </Chip>
    </>
  );
}

/* ---------------- Davanity — activity rings ---------------- */
function DavanityScene({ reduce }: { reduce: boolean }) {
  const rings = [
    { r: 26, color: "#FF5C7A", pct: 0.78 },
    { r: 19, color: LIME, pct: 0.62 },
    { r: 12, color: "#37B6FF", pct: 0.9 },
  ];
  return (
    <>
      <ScreenShell label="Davanity">
        <div className="flex items-center gap-3">
          <svg viewBox="0 0 64 64" className="h-20 w-20 -rotate-90">
            {rings.map((ring, i) => (
              <g key={i}>
                <circle cx="32" cy="32" r={ring.r} fill="none" stroke="#ffffff14" strokeWidth="5" />
                <motion.circle
                  cx="32"
                  cy="32"
                  r={ring.r}
                  fill="none"
                  stroke={ring.color}
                  strokeWidth="5"
                  strokeLinecap="round"
                  pathLength={1}
                  strokeDasharray="1 1"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: ring.pct }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: "easeOut", delay: i * 0.15 }}
                />
              </g>
            ))}
          </svg>
          <div className="space-y-1.5">
            <Stat label="Steps" value="8,240" dot="#FF5C7A" />
            <Stat label="Active" value="52 min" dot={LIME} />
            <Stat label="Resting HR" value="61 bpm" dot="#37B6FF" />
          </div>
        </div>
      </ScreenShell>
      <Chip className="-left-3 bottom-6" delay={0.5} reduce={reduce}>
        <span className="text-[8px] font-bold text-ink">⌚ Synced</span>
      </Chip>
    </>
  );
}

function Stat({ label, value, dot }: { label: string; value: string; dot: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: dot }} />
      <span className="font-mono text-[7px] uppercase tracking-wider text-white/40">{label}</span>
      <span className="ml-auto text-[10px] font-semibold text-white">{value}</span>
    </div>
  );
}

/* ---------------- Pond Hopping — flight route ---------------- */
function PondScene({ reduce }: { reduce: boolean }) {
  return (
    <>
      <ScreenShell label="Pond">
        <div className="flex items-center justify-between">
          <RouteEnd code="MEL" city="Melbourne" />
          <span className="font-mono text-[7px] text-white/40">14h 20m</span>
          <RouteEnd code="AMS" city="Amsterdam" align="right" />
        </div>
        <div className="mt-2 rounded-lg p-2" style={{ background: SCREEN_2 }}>
          <svg viewBox="0 0 120 34" className="h-9 w-full">
            <circle cx="6" cy="28" r="3" fill={WHITE} />
            <circle cx="114" cy="8" r="3" fill="#37B6FF" />
            <motion.path
              d="M6 28 Q60 -10 114 8"
              fill="none"
              stroke="#37B6FF"
              strokeWidth="1.5"
              strokeDasharray="3 3"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
            />
            {!reduce && (
              <motion.g
                initial={{ offsetDistance: "0%" }}
                animate={{ offsetDistance: "100%" }}
                transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
                style={{ offsetPath: 'path("M6 28 Q60 -10 114 8")' } as React.CSSProperties}
              >
                <text fontSize="9">✈️</text>
              </motion.g>
            )}
          </svg>
        </div>
        <div className="mt-2 flex items-center gap-2 rounded-lg px-2 py-1.5" style={{ background: SCREEN_2 }}>
          <span className="text-[10px]">🗺️</span>
          <span className="text-[9px] text-white/70">3 stops planned · itinerary ready</span>
        </div>
      </ScreenShell>
      <Chip className="-right-3 top-7" delay={0.5} reduce={reduce}>
        <span className="text-[8px] font-bold text-ink">✨ AI planned</span>
      </Chip>
    </>
  );
}

function RouteEnd({ code, city, align = "left" }: { code: string; city: string; align?: "left" | "right" }) {
  return (
    <div className={align === "right" ? "text-right" : ""}>
      <p className="text-sm font-bold text-white">{code}</p>
      <p className="font-mono text-[7px] uppercase tracking-wider text-white/40">{city}</p>
    </div>
  );
}

/* ---------------- DuckWorth — finance ---------------- */
function DuckworthScene({ reduce }: { reduce: boolean }) {
  return (
    <>
      <ScreenShell label="DuckWorth">
        <p className="font-mono text-[7px] uppercase tracking-widest text-white/40">Net balance</p>
        <div className="flex items-end justify-between">
          <p className="text-lg font-bold text-white">£12,480</p>
          <span className="mb-0.5 rounded px-1.5 py-0.5 text-[8px] font-bold text-black" style={{ background: GREEN }}>
            +6.2%
          </span>
        </div>
        <div className="mt-2 rounded-lg p-2" style={{ background: SCREEN_2 }}>
          <svg viewBox="0 0 120 40" className="h-11 w-full">
            <motion.path
              d="M2 34 L22 30 L40 32 L58 22 L76 24 L96 12 L118 6"
              fill="none"
              stroke={LIME}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
            />
            <motion.circle
              cx="118"
              cy="6"
              r="3"
              fill={LIME}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.6, type: "spring" }}
            />
          </svg>
        </div>
      </ScreenShell>
      <Chip className="-left-3 bottom-5" delay={0.5} reduce={reduce}>
        <span className="text-[8px] font-bold text-ink">💸 Interpreted</span>
      </Chip>
    </>
  );
}

/* ---------------- Nous — trading ---------------- */
function NousScene({ reduce }: { reduce: boolean }) {
  const candles = [
    { h: 14, y: 14, up: true },
    { h: 20, y: 8, up: true },
    { h: 12, y: 18, up: false },
    { h: 24, y: 6, up: true },
    { h: 16, y: 10, up: false },
    { h: 26, y: 4, up: true },
    { h: 30, y: 2, up: true },
  ];
  return (
    <>
      <ScreenShell label="Nous">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-bold text-white">BTC / USD</span>
            <span className="rounded px-1 text-[8px] font-bold text-black" style={{ background: GREEN }}>
              +4.2%
            </span>
          </div>
          <span className="font-mono text-[7px] text-white/40">SIGNAL · BUY</span>
        </div>
        <div className="mt-2 flex items-end justify-between gap-1 rounded-lg p-2" style={{ background: SCREEN_2, height: 52 }}>
          {candles.map((c, i) => (
            <div key={i} className="flex flex-1 items-end justify-center" style={{ height: "100%" }}>
              <motion.div
                className="w-1.5 rounded-sm"
                style={{ background: c.up ? GREEN : RED }}
                initial={{ height: 0 }}
                whileInView={{ height: c.h }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, type: "spring", stiffness: 160, damping: 14 }}
              />
            </div>
          ))}
        </div>
      </ScreenShell>
      <Chip className="-right-3 top-6" delay={0.5} reduce={reduce}>
        <span className="text-[8px] font-bold text-ink">📈 Live signal</span>
      </Chip>
    </>
  );
}

/* ---------------- Chinwag — messaging ---------------- */
function ChinwagScene({ reduce }: { reduce: boolean }) {
  return (
    <>
      <ScreenShell label="Chinwag">
        <div className="flex items-center gap-1.5">
          {["🟢", "in", "✉️"].map((n, i) => (
            <span key={i} className="flex h-4 w-4 items-center justify-center rounded-full bg-white/10 text-[8px]">
              {n}
            </span>
          ))}
          <span className="ml-auto font-mono text-[7px] text-white/40">1 INBOX</span>
        </div>
        <div className="mt-2 space-y-1.5">
          <Bubble side="in" delay={0.2}>Are we still on for Friday?</Bubble>
          <TypingBubble reduce={reduce} />
          <Bubble side="out" delay={1.1}>Yes! 6pm at the Prahran. Booked it 🦆</Bubble>
        </div>
      </ScreenShell>
      <Chip className="-left-3 bottom-4" delay={1.3} reduce={reduce}>
        <span className="text-[8px] font-bold text-ink">🪄 In your voice</span>
      </Chip>
    </>
  );
}

function Bubble({ side, delay, children }: { side: "in" | "out"; delay: number; children: React.ReactNode }) {
  const out = side === "out";
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.35 }}
      className={`flex ${out ? "justify-end" : "justify-start"}`}
    >
      <span
        className={`max-w-[80%] rounded-xl px-2 py-1 text-[9px] leading-snug ${out ? "text-black" : "text-white"}`}
        style={{ background: out ? LIME : SCREEN_2 }}
      >
        {children}
      </span>
    </motion.div>
  );
}

function TypingBubble({ reduce }: { reduce: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6 }}
      className="flex justify-start"
    >
      <span className="flex items-center gap-1 rounded-xl px-2 py-1.5" style={{ background: SCREEN_2 }}>
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="h-1 w-1 rounded-full bg-white/60"
            animate={reduce ? undefined : { opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </span>
    </motion.div>
  );
}
