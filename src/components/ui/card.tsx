import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({
className,
...props
}: React.HTMLAttributes<HTMLDivElement>) {
return (
<div
    className={cn(
    "rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950",
    className
    )}
    {...props}
/>
);
}