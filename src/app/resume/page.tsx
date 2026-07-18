import Link from "next/link";
import { PrintButton } from "@/components/print-button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
certifications,
education,
experience,
profile,
projects,
skills,
spokenLanguages,
} from "@/lib/data";

const skillGroups = [
["Programming Languages", skills.languages],
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

        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-zinc-500">
        <span>{profile.email}</span>
        <span>{profile.phone}</span>
        <span>{profile.location}</span>
        <span>{profile.github}</span>
        <span>{profile.linkedinLabel}</span>
        </div>
    </section>

    <section className="mt-8">
        <h2 className="text-lg font-bold">Education</h2>

        <div className="mt-3">
        <div className="flex justify-between gap-4">
            <p className="font-semibold">{education.school}</p>
            <p className="text-sm text-zinc-500">{education.graduation}</p>
        </div>

        <p className="text-zinc-600 dark:text-zinc-400">
            {education.degree}
        </p>

        <div className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <p>
            <span className="font-semibold">Computer Science:</span>{" "}
            {education.computerScienceCoursework.join(", ")}
            </p>

            <p>
            <span className="font-semibold">Business Administration:</span>{" "}
            {education.businessCoursework.join(", ")}
            </p>

            <p>
            <span className="font-semibold">Awards:</span>{" "}
            {education.awards.join(", ")}
            </p>
        </div>
        </div>
    </section>

    <section className="mt-8">
        <h2 className="text-lg font-bold">Skills</h2>

        <div className="mt-3 space-y-3">
        {skillGroups.map(([title, items]) => (
            <p key={title} className="text-sm text-zinc-700 dark:text-zinc-300">
            <span className="font-semibold">{title}:</span>{" "}
            {items.join(", ")}
            </p>
        ))}

        <p className="text-sm text-zinc-700 dark:text-zinc-300">
            <span className="font-semibold">Spoken Languages:</span>{" "}
            {spokenLanguages
            .map((item) => `${item.language} (${item.proficiency})`)
            .join(", ")}
        </p>
        </div>
    </section>

    <section className="mt-8">
        <h2 className="text-lg font-bold">Experience</h2>

        <div className="mt-3 space-y-6">
        {experience.map((item) => (
            <div key={`${item.company}-${item.role}`}>
            <div className="flex justify-between gap-4">
                <div>
                <p className="font-semibold">
                    {item.company} | {item.role}
                </p>
                <p className="text-sm text-zinc-500">{item.location}</p>
                </div>

                <p className="text-sm text-zinc-500">{item.dates}</p>
            </div>

            <ul className="mt-2 list-disc space-y-1 pl-5">
                {item.highlights.slice(0, 3).map((highlight) => (
                <li
                    key={highlight}
                    className="text-sm leading-6 text-zinc-700 dark:text-zinc-300"
                >
                    {highlight}
                </li>
                ))}
            </ul>
            </div>
        ))}
        </div>
    </section>

    <section className="mt-8">
        <h2 className="text-lg font-bold">Relevant Projects</h2>

        <div className="mt-3 space-y-6">
        {projects.slice(0, 3).map((project) => (
            <div key={project.title}>
            <div className="flex justify-between gap-4">
                <p className="font-semibold">
                {project.title} | {project.technologies.join(", ")}
                </p>

                <p className="text-sm text-zinc-500">{project.dates}</p>
            </div>

            <ul className="mt-2 list-disc space-y-1 pl-5">
                {project.highlights.slice(0, 2).map((highlight) => (
                <li
                    key={highlight}
                    className="text-sm leading-6 text-zinc-700 dark:text-zinc-300"
                >
                    {highlight}
                </li>
                ))}
            </ul>
            </div>
        ))}
        </div>
    </section>

    {certifications.length > 0 ? (
        <section className="mt-8">
        <h2 className="text-lg font-bold">Certifications</h2>

        <div className="mt-3 space-y-3">
            {certifications.map((certification) => (
            <div
                key={certification.name}
                className="flex justify-between gap-4"
            >
                <p className="font-semibold">
                {certification.name} | {certification.issuer}
                </p>

                <p className="text-sm text-zinc-500">
                {certification.date}
                </p>
            </div>
            ))}
        </div>
        </section>
    ) : null}
    </Card>
</main>
);
}