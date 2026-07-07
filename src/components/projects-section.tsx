import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/data";

export function ProjectsSection() {
return (
<section id="projects" className="mx-auto max-w-6xl px-6 py-24">
    <SectionHeading
    eyebrow="Projects"
    title="Selected work"
    description="A mix of full-stack applications, machine learning projects, and technical practice built to show range."
    />

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
    ))}
    </div>
</section>
);
}