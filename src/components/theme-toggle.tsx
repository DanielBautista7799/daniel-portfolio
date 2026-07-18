"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
const [isDark, setIsDark] = useState(false);

useEffect(() => {
const savedTheme = localStorage.getItem("theme");
const shouldUseDark = savedTheme === "dark";

document.documentElement.classList.toggle("dark", shouldUseDark);
setIsDark(shouldUseDark);
}, []);

function toggleTheme() {
const nextIsDark = !isDark;

document.documentElement.classList.toggle("dark", nextIsDark);
localStorage.setItem("theme", nextIsDark ? "dark" : "light");
setIsDark(nextIsDark);
}

return (
<Button
    variant="outline"
    className="h-9 w-9 rounded-full px-0"
    onClick={toggleTheme}
    aria-label="Toggle theme"
>
    {isDark ? <Sun size={16} /> : <Moon size={16} />}
</Button>
);
}