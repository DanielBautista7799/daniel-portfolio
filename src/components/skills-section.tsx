import { skills } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

const skillGroups = [
["Languages", skills.languages],
["Frontend", skills.frontend],
["Backend", skills.backend],
["Machine Learning", skills.machineLearning],
["Tools", skills.tools],
] as const;

export function SkillsSection() {
return (
<section id="skills" className="mx-auto max-w-6xl px-6 py-24">
    <SectionHeading
    eyebrow="Skills"
    title="Tools I use to build"
    description="A practical stack across frontend, backend, machine learning, and systems."
    />

    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
    {skillGroups.map(([title, items]) => (
        <Card key={title}>
        <h3 className="text-lg font-bold">{title}</h3>

        <div className="mt-4 flex flex-wrap gap-2">
            {items.map((item) => (
            <Badge key={item}>{item}</Badge>
            ))}
        </div>
        </Card>
    ))}
    </div>
</section>
);
}