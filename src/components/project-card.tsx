import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type ProjectCardProps = {
title: string;
dates: string;
description: string;
technologies: string[];
highlights: string[];
github: string;
live: string;
};

export function ProjectCard({
title,
dates,
description,
technologies,
highlights,
github,
live,
}: ProjectCardProps) {
return (
<Card className="flex h-full flex-col">
    <div className="flex-1">
    <p className="text-sm font-medium text-zinc-500">{dates}</p>

    <h3 className="mt-2 text-xl font-bold tracking-tight">{title}</h3>

    <p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-400">
        {description}
    </p>

    <ul className="mt-5 space-y-2">
        {highlights.slice(0, 3).map((highlight) => (
        <li
            key={highlight}
            className="flex gap-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400"
        >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-950 dark:bg-white" />
            <span>{highlight}</span>
        </li>
        ))}
    </ul>

    <div className="mt-5 flex flex-wrap gap-2">
        {technologies.map((technology) => (
        <Badge key={technology}>{technology}</Badge>
        ))}
    </div>
    </div>

    <div className="mt-6 flex flex-wrap gap-3">
    {live ? (
        <ButtonLink href={live} external>
        Live Demo
        <ExternalLink className="ml-2" size={15} />
        </ButtonLink>
    ) : null}

    {github ? (
        <ButtonLink href={github} variant="outline" external>
        GitHub
        </ButtonLink>
    ) : null}
    </div>
</Card>
);
}