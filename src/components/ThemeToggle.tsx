import { useTheme } from "../hooks/useTheme";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-1 transition hover:opacity-80"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun size={25} className="text-white" />
      ) : (
        <Moon
          size={25}
          className="text-[var(--color-foreground)]"
        />
      )}
    </button>
  );
}
