import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({
className,
...props
}: React.HTMLAttributes<HTMLDivElement>) {
return (
<div
    className={cn(
    "rounded-3xl border border-zinc-200/80 bg-white/75 p-6 shadow-sm shadow-zinc-200/50 backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-200/60 dark:border-zinc-800/80 dark:bg-zinc-950/70 dark:shadow-black/20 dark:hover:shadow-black/40",
    className
    )}
    {...props}
/>
);
}