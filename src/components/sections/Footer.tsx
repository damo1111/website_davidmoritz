import Image from "next/image";

const links = [
  { label: "Mnemo", href: "https://mnemolabs.co" },
  { label: "eend.app", href: "https://eend.app" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/damoritz/" },
];

export function Footer() {
  return (
    <footer className="w-full bg-ink text-bg">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <Image
            src="/images/avatar.png"
            alt="David Moritz"
            width={36}
            height={36}
            className="h-9 w-9 rounded-full"
          />
          <p className="font-mono text-[11px] font-medium uppercase tracking-tight text-bg/70">
            © 2026 David Moritz
          </p>
        </div>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {links.map((link) =>
            link.href ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] font-bold uppercase tracking-tight text-bg transition-colors duration-200 hover:text-accent2"
              >
                {link.label}
              </a>
            ) : (
              <span
                key={link.label}
                className="font-mono text-[11px] font-bold uppercase tracking-tight text-bg/50"
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
