import { profile } from "@/lib/data";

export function Footer() {
return (
<footer className="border-t border-zinc-200 px-6 py-8 text-center text-sm text-zinc-500 dark:border-zinc-800">
    <p>
        ©{new Date().getFullYear()} {profile.name}. Built with Next.js,
    TypeScript, and Tailwind CSS.
    </p>
</footer>
);
}