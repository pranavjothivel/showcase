"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    let link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.getElementsByTagName("head")[0].appendChild(link);
    }
    link.href = resolvedTheme === "dark" ? "/favicon-dark.svg" : "/favicon-light.svg";
  }, [resolvedTheme, mounted]);

  const isDark = resolvedTheme === "dark";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 lg:px-24 py-5 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="font-display text-xl font-bold tracking-tight">
          Pranav Jothivel
        </a>
        <div className="flex items-center gap-8 font-display text-sm font-medium">
          <a href="#about" className="hidden md:inline hover:text-primary transition-colors">About</a>
          <a href="#experience" className="hidden md:inline hover:text-primary transition-colors">Experience</a>
          <a href="#projects" className="hidden md:inline hover:text-primary transition-colors">Work</a>
          <a href="#personal-projects" className="hidden md:inline hover:text-primary transition-colors">Side Projects</a>
          <a href="#contact" className="hidden md:inline hover:text-primary transition-colors">Contact</a>
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Toggle dark mode"
          >
            {mounted && (isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />)}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
