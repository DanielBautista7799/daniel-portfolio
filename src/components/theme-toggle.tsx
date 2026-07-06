"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
const { theme, setTheme } = useTheme();

const isDark = theme === "dark";

return (
<Button
    variant="outline"
    className="h-9 w-9 rounded-full px-0"
    onClick={() => setTheme(isDark ? "light" : "dark")}
    aria-label="Toggle theme"
>
    {isDark ? <Sun size={16} /> : <Moon size={16} />}
</Button>
);
}