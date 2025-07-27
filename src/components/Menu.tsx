// Menu.tsx - versão refinada com animação, layout e botão "X" personalizados inspirados no site de Charles Bruyerre

import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { motion, AnimatePresence } from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";

const menuItems = [
  { number: "01", label: "Home", href: "#home" },
  { number: "02", label: "Skills", href: "#skills" },
  { number: "03", label: "Projects", href: "#projects" },
  { number: "04", label: "About", href: "#about" },
  { number: "05", label: "Contact", href: "#contact" },
];

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-[1000]">
      {/* Top bar */}
      <nav
        className={`flex items-center justify-between px-8 py-4 backdrop-blur-lg bg-black/20 dark:bg-white/5 border border-white/10 rounded-full mx-auto w-[95vw] max-w-screen-xl mt-6 transition-all duration-500 ${
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* Logo */}
        <img
          src="/logo-dark.svg"
          alt="Logo Light"
          className="w-14 h-14 block dark:hidden"
        />
        <img
          src="/logo.svg"
          alt="Logo Dark"
          className="w-14 h-14 hidden dark:block"
        />

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(true)}
            className="text-white dark:text-white text-2xl p-2 rounded-full hover:bg-white/10 dark:hover:bg-white/10 transition"
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {/* Fullscreen menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full z-[999] flex flex-col justify-center items-start px-10 md:px-24 bg-[var(--color-background)] text-[var(--color-foreground)] backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Close button */}
            <motion.button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-5xl hover:text-[var(--color-accent)] transition"
              initial={{ rotate: 45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              aria-label="Fechar menu"
            >
              <IoCloseOutline />
            </motion.button>

            {/* Menu Items */}
            <ul className="space-y-8 text-left mt-16">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center text-4xl md:text-6xl font-bold tracking-widest transition-all duration-300 font-mono"
                  >
                    <span className="text-[var(--color-accent)] mr-4 text-xl md:text-2xl">
                      {item.number}
                    </span>
                    <h6 className="group-hover:text-[var(--color-accent-light)]">
                      {item.label}
                    </h6>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
