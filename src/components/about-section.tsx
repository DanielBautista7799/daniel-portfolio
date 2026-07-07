import { about, education } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

export function AboutSection() {
return (
<section id="about" className="mx-auto max-w-6xl px-6 py-24">
    <SectionHeading
    eyebrow="About"
    title="Building practical software with product value."
    description="I care about projects that are useful, polished, and explainable."
    />

    <div className="grid gap-6 md:grid-cols-[1.5fr_1fr]">
    <Card>
        <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300">
        {about.trim()}
        </p>
    </Card>

    <Card>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
        Education
        </p>

        <h3 className="mt-4 text-xl font-bold">{education.school}</h3>

        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        {education.degree}
        </p>

        <p className="mt-2 text-sm text-zinc-500">
        {education.graduation}
        </p>
    </Card>
    </div>
</section>
);
}