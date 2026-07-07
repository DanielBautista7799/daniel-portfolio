import { ArrowRight, Download } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { SocialLinks } from "@/components/social-links";
import { profile } from "@/lib/data";

export function Hero() {
return (
<section className="mx-auto flex min-h-[calc(100vh-73px)] max-w-6xl flex-col justify-center px-6 py-24">
    <div className="max-w-4xl">
    <div className="mb-6 inline-flex rounded-full border border-zinc-300 bg-white/60 px-4 py-2 text-sm text-zinc-600 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-zinc-400">
        Software Engineering · Machine Learning · Full Stack
    </div>

    <h1 className="text-5xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-6xl md:text-7xl">
        Building software that feels useful, polished, and practical.
    </h1>

    <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        I&apos;m {profile.name}, a Computer Science and Business
        Administration student at UNC Chapel Hill focused on full-stack
        development, machine learning, and systems-driven engineering.
    </p>

    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="#projects">
        View Projects
        <ArrowRight className="ml-2" size={16} />
        </ButtonLink>

        <ButtonLink href={profile.resume} variant="outline">
        Resume
        <Download className="ml-2" size={16} />
        </ButtonLink>
    </div>

    <div className="mt-8">
        <SocialLinks />
    </div>
    </div>
</section>
);
}