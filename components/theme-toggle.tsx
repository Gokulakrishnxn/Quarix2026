"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useSyncExternalStore } from "react";

type Theme = "light" | "dark";
const THEME_CHANGE_EVENT = "quarix-theme-change";

const listeners = new Set<() => void>();

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem("theme");

  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  const documentTheme = document.documentElement.dataset.theme;

  if (documentTheme === "dark" || documentTheme === "light") {
    return documentTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  window.addEventListener(THEME_CHANGE_EVENT, listener);

  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
    window.removeEventListener(THEME_CHANGE_EVENT, listener);
  };
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  window.localStorage.setItem("theme", theme);
}

function setThemePreference(theme: Theme) {
  applyTheme(theme);
  listeners.forEach((listener) => listener());
  window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
}

export function ThemeToggle() {
  const theme = useSyncExternalStore<Theme>(subscribe, getPreferredTheme, () => "light");

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    setThemePreference(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="inline-flex size-6 items-center justify-center rounded-full text-zinc-950 transition hover:text-zinc-500 dark:text-zinc-50 dark:hover:text-zinc-400"
    >
      {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}
