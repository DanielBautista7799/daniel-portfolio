import { ArrowRight, Download } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { SocialLinks } from "@/components/social-links";
import { profile } from "@/lib/data";

export function Hero() {
return (
<section className="mx-auto flex min-h-[calc(100vh-73px)] max-w-6xl flex-col justify-center px-6 py-24">
    <div className="max-w-3xl">
    <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-zinc-500">
        Software Engineering Portfolio
    </p>

    <h1 className="text-5xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-6xl md:text-7xl">
        Hi, I&apos;m {profile.name}.
    </h1>

    <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        I build full-stack applications, machine learning projects, and
        systems-focused software with a focus on clean execution and real
        product value.
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