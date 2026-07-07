import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export function SocialLinks() {
return (
<div className="flex items-center gap-4">
    <a
    href={profile.github}
    target="_blank"
    rel="noreferrer"
    aria-label="GitHub"
    className="text-zinc-500 transition hover:text-zinc-950 dark:hover:text-white"
    >
    <Github size={20} />
    </a>

    {profile.linkedin ? (
    <a
        href={profile.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        className="text-zinc-500 transition hover:text-zinc-950 dark:hover:text-white"
    >
        <Linkedin size={20} />
    </a>
    ) : null}

    <a
    href={`mailto:${profile.email}`}
    aria-label="Email"
    className="text-zinc-500 transition hover:text-zinc-950 dark:hover:text-white"
    >
    <Mail size={20} />
    </a>
</div>
);
}