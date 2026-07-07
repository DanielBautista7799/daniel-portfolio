import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type ProjectCardProps = {
title: string;
description: string;
technologies: string[];
github: string;
live: string;
};

export function ProjectCard({
title,
description,
technologies,
github,
live,
}: ProjectCardProps) {
return (
<Card className="flex h-full flex-col">
    <div className="flex-1">
    <h3 className="text-xl font-bold tracking-tight">{title}</h3>

    <p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-400">
        {description}
    </p>

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
    ) : (
        <ButtonLink href={live || "#"} variant="outline">
        GitHub Coming Soon
        </ButtonLink>
    )}
    </div>
</Card>
);
}