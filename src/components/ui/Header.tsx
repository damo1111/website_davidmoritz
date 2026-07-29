export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/75 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
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
    </header>
  );
}
