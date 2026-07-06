import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "secondary" | "outline" | "ghost";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
default:
"bg-white text-black hover:bg-zinc-200 dark:bg-white dark:text-black",
secondary:
"bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black",
outline:
"border border-zinc-300 bg-transparent text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900",
ghost:
"bg-transparent text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900",
};

export function Button({
className,
variant = "default",
...props
}: ButtonProps) {
return (
<button
    className={cn(
    "inline-flex h-10 items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    className
    )}
    {...props}
/>
);
}

type ButtonLinkProps = React.ComponentProps<typeof Link> & {
variant?: ButtonVariant;
external?: boolean;
};

export function ButtonLink({
className,
variant = "default",
external = false,
...props
}: ButtonLinkProps) {
return (
<Link
    className={cn(
    "inline-flex h-10 items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition-colors",
    variantClasses[variant],
    className
    )}
    target={external ? "_blank" : undefined}
    rel={external ? "noreferrer" : undefined}
    {...props}
/>
);
}