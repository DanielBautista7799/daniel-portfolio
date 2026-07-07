import { Mail } from "lucide-react";
import { profile } from "@/lib/data";

export function SocialLinks() {
return (
<div className="flex flex-wrap items-center gap-3">
    <a
    href={profile.github}
    target="_blank"
    rel="noreferrer"
    className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900"
    >
    GitHub
    </a>

    {profile.linkedin ? (
    <a
        href={profile.linkedin}
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900"
    >
        LinkedIn
    </a>
    ) : null}

    <a
    href={`mailto:${profile.email}`}
    className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900"
    >
    <Mail size={15} />
    Email
    </a>
</div>
);
}