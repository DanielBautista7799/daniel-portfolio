import { experience } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

export function ExperienceSection() {
return (
<section id="experience" className="mx-auto max-w-6xl px-6 py-24">
    <SectionHeading
    eyebrow="Experience"
    title="Technical and product-focused experience"
    description="A mix of teaching, systems work, and business-facing experience."
    />

    <div className="space-y-5">
    {experience.map((item) => (
        <Card key={`${item.company}-${item.role}`}>
        <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div>
            <h3 className="text-xl font-bold">{item.role}</h3>
            <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                {item.company}
            </p>
            </div>

            {item.dates ? (
            <p className="text-sm text-zinc-500">{item.dates}</p>
            ) : null}
        </div>

        <p className="mt-4 leading-7 text-zinc-700 dark:text-zinc-300">
            {item.description}
        </p>
        </Card>
    ))}
    </div>
</section>
);
}