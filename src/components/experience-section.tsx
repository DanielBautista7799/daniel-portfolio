import { experience } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

export function ExperienceSection() {
return (
<section id="experience" className="mx-auto max-w-6xl px-6 py-24">
    <SectionHeading
    eyebrow="Experience"
    title="Technical and product-focused experience"
    description="Teaching, systems work, and business-facing experience that shaped how I build software."
    />

    <div className="space-y-5">
    {experience.map((item) => (
        <Card key={`${item.company}-${item.role}`}>
        <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div>
            <h3 className="text-xl font-bold">{item.role}</h3>
            <p className="mt-1 text-zinc-700 dark:text-zinc-300">
                {item.company}
            </p>
            <p className="mt-1 text-sm text-zinc-500">{item.location}</p>
            </div>

            <p className="text-sm font-medium text-zinc-500">
            {item.dates}
            </p>
        </div>

        <p className="mt-4 leading-7 text-zinc-700 dark:text-zinc-300">
            {item.description}
        </p>

        <ul className="mt-5 space-y-2">
            {item.highlights.map((highlight) => (
            <li
                key={highlight}
                className="flex gap-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400"
            >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-950 dark:bg-white" />
                <span>{highlight}</span>
            </li>
            ))}
        </ul>
        </Card>
    ))}
    </div>
</section>
);
}