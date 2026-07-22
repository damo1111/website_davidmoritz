export function Divider() {
  return (
    <div className="mx-auto my-24 flex max-w-6xl items-center gap-4 px-8">
      <div className="h-px flex-1 bg-border" />
      <span className="font-mono text-xs tracking-widest text-muted">
        — D.M. —
      </span>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}
