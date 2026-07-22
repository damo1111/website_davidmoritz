const links = [
  { label: "Mnemo", href: "https://mnemo.systems" },
  { label: "eend.app", href: "https://eend.app" },
  { label: "NOT THAT CVNVRD", href: null },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/davidmoritz" },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-8 py-6 sm:flex-row">
        <p className="font-mono text-[11px] text-muted">
          © 2026 David Moritz
        </p>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {links.map((link) =>
            link.href ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] text-muted transition-colors duration-300 hover:text-gold"
              >
                {link.label}
              </a>
            ) : (
              <span
                key={link.label}
                className="font-mono text-[11px] text-muted"
              >
                {link.label}
              </span>
            )
          )}
        </nav>
      </div>
    </footer>
  );
}
