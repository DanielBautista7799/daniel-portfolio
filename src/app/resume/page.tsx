import Link from "next/link";
import { PrintButton } from "@/components/print-button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
education,
experience,
profile,
projects,
skills,
} from "@/lib/data";

const skillGroups = [
["Languages", skills.languages],
["Frontend", skills.frontend],
["Backend", skills.backend],
["Machine Learning", skills.machineLearning],
["Tools", skills.tools],
] as const;

export default function ResumePage() {
return (
<main className="mx-auto max-w-4xl px-6 py-10">
    <div className="mb-8 flex items-center justify-between print:hidden">
    <Link
        href="/"
        className="text-sm text-zinc-500 transition hover:text-zinc-950 dark:hover:text-white"
    >
        ← Back to portfolio
    </Link>

    <PrintButton />
    </div>

    <Card className="print:border-0 print:shadow-none">
    <section className="border-b border-zinc-200 pb-6 dark:border-zinc-800">
        <h1 className="text-4xl font-bold">{profile.name}</h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        {profile.title}
        </p>

        <div className="mt-4 flex flex-wrap gap-3 text-sm text-zinc-500">
        <span>{profile.email}</span>
        <span>{profile.github}</span>
        {profile.linkedin ? <span>{profile.linkedin}</span> : null}
        </div>
    </section>

    <section className="mt-8">
        <h2 className="text-lg font-bold">Education</h2>
        <div className="mt-3">
        <p className="font-semibold">{education.school}</p>
        <p className="text-zinc-600 dark:text-zinc-400">
            {education.degree}
        </p>
        <p className="text-sm text-zinc-500">{education.graduation}</p>
        </div>
    </section>

    <section className="mt-8">
        <h2 className="text-lg font-bold">Experience</h2>

        <div className="mt-3 space-y-5">
        {experience.map((item) => (
            <div key={`${item.company}-${item.role}`}>
            <div className="flex justify-between gap-4">
                <div>
                <p className="font-semibold">{item.role}</p>
                <p className="text-zinc-600 dark:text-zinc-400">
                    {item.company}
                </p>
                </div>

                {item.dates ? (
                <p className="text-sm text-zinc-500">{item.dates}</p>
                ) : null}
            </div>

            <p className="mt-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                {item.description}
            </p>
            </div>
        ))}
        </div>
    </section>

    <section className="mt-8">
        <h2 className="text-lg font-bold">Projects</h2>

        <div className="mt-3 space-y-5">
        {projects.map((project) => (
            <div key={project.title}>
            <p className="font-semibold">{project.title}</p>
            <p className="mt-1 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                {project.description}
            </p>
            <p className="mt-1 text-sm text-zinc-500">
                {project.technologies.join(", ")}
            </p>
            </div>
        ))}
        </div>
    </section>

    <section className="mt-8">
        <h2 className="text-lg font-bold">Skills</h2>

        <div className="mt-3 space-y-4">
        {skillGroups.map(([title, items]) => (
            <div key={title}>
            <p className="mb-2 text-sm font-semibold">{title}</p>
            <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                <Badge key={item}>{item}</Badge>
                ))}
            </div>
            </div>
        ))}
        </div>
    </section>
    </Card>
</main>
);
}