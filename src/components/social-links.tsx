import { Mail } from "lucide-react";
import { profile } from "@/lib/data";

export function SocialLinks() {
return (
<div className="flex flex-wrap items-center gap-3">
    <a
    href={profile.github}
    target="_blank"
    rel="noreferrer"
    className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition hover:border-zinc-950 hover:text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-white dark:hover:text-white"
    >
    GitHub
    </a>

    {profile.linkedin ? (
    <a
        href={profile.linkedin}
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition hover:border-zinc-950 hover:text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-white dark:hover:text-white"
    >
        LinkedIn
    </a>
    ) : null}

    <a
    href={`mailto:${profile.email}`}
    className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition hover:border-zinc-950 hover:text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-white dark:hover:text-white"
    >
    <Mail size={15} />
    Email
    </a>
</div>
);
}