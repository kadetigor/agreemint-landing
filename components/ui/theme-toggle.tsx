"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative h-6 w-11 rounded-full bg-muted transition-colors hover:bg-muted/80"
      aria-label="Toggle theme">
      <motion.div
        className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-background shadow-sm"
        initial={false}
        animate={{
          x: theme === "dark" ? 20 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}>
        {theme === "dark" ? (
          <Moon className="h-3 w-3 text-muted-foreground" />
        ) : (
          <Sun className="h-3 w-3 text-muted-foreground" />
        )}
      </motion.div>
    </button>
  );
} 