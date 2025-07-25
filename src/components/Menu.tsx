import { ThemeToggle } from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

export function Menu() {
  return (
    <nav className="flex flex-row w-screen px-8 justify-between items-center">
      {/* Logo para tema claro */}
      <img
        src="/logo-dark.svg"
        alt="Logo Dark"
        className="w-20 h-20 block dark:hidden"
      />

      {/* Logo para tema escuro */}
      <img
        src="/logo.svg"
        alt="Logo Light"
        className="w-20 h-20 hidden dark:block"
      />

      <div className="flex flex-row gap-2">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </nav>
  );
}
