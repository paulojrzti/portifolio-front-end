import { useTheme } from "../hooks/useTheme";
import { Moon, Sun } from "lucide-react"; 

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-xl transition bg-neutral-200 dark:bg-neutral-800"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
}
