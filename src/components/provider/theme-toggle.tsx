"use client";
import { useTheme } from "next-themes";
import Button from "../buttons";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="flex items-center justify-center cursor-pointer"
    >
      <Sun
        size={16}
        className="text-black transition-all rotate-0 scale-100 opacity-100 
        dark:text-white dark:-rotate-90 dark:scale-0 dark:opacity-0"
      />

      <Moon
        size={16}
        className="absolute h-4 w-4 transition-all 
               rotate-90 scale-0 opacity-0
               dark:rotate-0 dark:scale-100 dark:opacity-100"
      />
    </Button>
  );
}
