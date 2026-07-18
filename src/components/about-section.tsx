import { about, education, spokenLanguages } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
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

    <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
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

        <p className="mt-2 text-zinc-700 dark:text-zinc-300">
        {education.degree}
        </p>

        <p className="mt-2 text-sm text-zinc-500">{education.graduation}</p>

        <div className="mt-6">
        <p className="text-sm font-semibold text-zinc-900 dark:text-white">
            Awards
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
            {education.awards.map((award) => (
            <Badge key={award}>{award}</Badge>
            ))}
        </div>
        </div>

        <div className="mt-6">
        <p className="text-sm font-semibold text-zinc-900 dark:text-white">
            Languages
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
            {spokenLanguages.map((item) => (
            <Badge key={item.language}>
                {item.language} · {item.proficiency}
            </Badge>
            ))}
        </div>
        </div>
    </Card>
    </div>
</section>
);
}