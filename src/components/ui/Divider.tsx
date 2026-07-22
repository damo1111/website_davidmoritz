export function Divider() {
  return (
    <div className="mx-auto my-20 flex max-w-6xl items-center gap-4 px-6 md:my-28">
      <div className="h-px flex-1 bg-line" />
      <span className="flex h-6 w-9 items-center justify-center rounded bg-ink font-mono text-[10px] font-bold tracking-tight text-bg">
        DM
      </span>
      <div className="h-px flex-1 bg-line" />
    </div>
  );
}
