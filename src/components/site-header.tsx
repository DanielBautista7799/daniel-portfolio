import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
{ label: "About", href: "#about" },
{ label: "Projects", href: "#projects" },
{ label: "Experience", href: "#experience" },
{ label: "Skills", href: "#skills" },
{ label: "Contact", href: "#contact" },
];

export function SiteHeader() {
return (
<header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/80">
    <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
    <Link href="/" className="text-sm font-bold tracking-tight">
        Daniel Bautista
    </Link>

    <div className="hidden items-center gap-6 md:flex">
        {navItems.map((item) => (
        <Link
            key={item.href}
            href={item.href}
            className="text-sm text-zinc-600 transition hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
        >
            {item.label}
        </Link>
        ))}
    </div>

    <ThemeToggle />
    </nav>
</header>
);
}