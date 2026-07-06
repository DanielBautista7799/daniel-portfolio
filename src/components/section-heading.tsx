type SectionHeadingProps = {
eyebrow: string;
title: string;
description?: string;
};

export function SectionHeading({
eyebrow,
title,
description,
}: SectionHeadingProps) {
return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500">
        {eyebrow}
    </p>
    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
    </h2>
    {description ? (
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">{description}</p>
    ) : null}
    </div>
);
}