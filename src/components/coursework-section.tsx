import { education } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

export function CourseworkSection() {
return (
<section id="coursework" className="mx-auto max-w-6xl px-6 py-24">
    <SectionHeading
    eyebrow="Coursework"
    title="Academic foundation"
    description="Relevant computer science and business coursework supporting software engineering, machine learning, systems, and product thinking."
    />

    <div className="grid gap-5 md:grid-cols-2">
    <Card>
        <h3 className="text-lg font-bold">Computer Science</h3>

        <div className="mt-4 flex flex-wrap gap-2">
        {education.computerScienceCoursework.map((course) => (
            <Badge key={course}>{course}</Badge>
        ))}
        </div>
    </Card>

    <Card>
        <h3 className="text-lg font-bold">Business Administration</h3>

        <div className="mt-4 flex flex-wrap gap-2">
        {education.businessCoursework.map((course) => (
            <Badge key={course}>{course}</Badge>
        ))}
        </div>
    </Card>
    </div>
</section>
);
}