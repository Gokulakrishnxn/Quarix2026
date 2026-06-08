"use client";

import { Search, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const searchItems = [
  {
    title: "Templates",
    description: "Browse available Quarix website templates.",
    href: "/templates",
    category: "Page",
  },
  {
    title: "3D Portfolio",
    description:
      "Free interactive 3D creator portfolio with magnetic hover and scroll animations.",
    href: "/templates#3d-portfolio",
    category: "Template",
  },
  {
    title: "Showcase",
    description: "Explore featured Quarix project cards.",
    href: "/showcase",
    category: "Page",
  },
  {
    title: "Services",
    description: "Explore custom website and AI business website services.",
    href: "/services",
    category: "Page",
  },
  {
    title: "AI Agents",
    description: "Preview upcoming Quarix AI agent workflows.",
    href: "/ai-agents",
    category: "Page",
  },
  {
    title: "FAQ",
    description: "Read common questions before launching.",
    href: "/#faq",
    category: "Section",
  },
  {
    title: "Contact",
    description: "Send a message to Quarix.",
    href: "/contact",
    category: "Page",
  },
  {
    title: "Privacy",
    description: "Read the Quarix privacy policy.",
    href: "/privacy",
    category: "Page",
  },
  {
    title: "Terms",
    description: "Read the Quarix terms and conditions.",
    href: "/terms",
    category: "Page",
  },
];

type SearchCommandProps = {
  placeholder?: string;
};

export function SearchCommand({
  placeholder = "Search documentation...",
}: SearchCommandProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return searchItems;
    }

    return searchItems.filter((item) =>
      `${item.title} ${item.description} ${item.category}`
        .toLowerCase()
        .includes(normalizedQuery),
    );
  }, [query]);

  const openSearch = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeSearch = useCallback(() => {
    setIsOpen(false);
    setQuery("");
  }, []);

  const toggleSearch = useCallback(() => {
    if (isOpen) {
      closeSearch();
      return;
    }

    openSearch();
  }, [closeSearch, isOpen, openSearch]);

  useEffect(() => {
    function handleShortcut(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        toggleSearch();
        return;
      }

      if (event.key === "Escape") {
        closeSearch();
      }
    }

    window.addEventListener("keydown", handleShortcut);

    return () => {
      window.removeEventListener("keydown", handleShortcut);
    };
  }, [closeSearch, toggleSearch]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const frameId = requestAnimationFrame(() => {
      inputRef.current?.focus();
    });

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  function openFirstResult() {
    const firstResult = filteredItems[0];

    if (!firstResult) {
      return;
    }

    closeSearch();
    window.location.href = firstResult.href;
  }

  return (
    <>
      <button
        type="button"
        onClick={openSearch}
        aria-label="Open search"
        className="inline-flex size-7 items-center justify-center rounded-full text-zinc-950 transition hover:bg-zinc-100 hover:text-zinc-500 lg:hidden dark:text-zinc-50 dark:hover:bg-white/10 dark:hover:text-zinc-400"
      >
        <Search className="size-4" />
      </button>
      <button
        type="button"
        onClick={openSearch}
        aria-expanded={isOpen}
        className="hidden h-9 w-64 items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50/80 px-3 text-left text-xs text-zinc-500 transition hover:bg-zinc-100 lg:flex xl:w-72 dark:border-white/10 dark:bg-white/5 dark:text-zinc-400 dark:hover:bg-white/10"
      >
        <Search className="size-3.5" />
        <span>{placeholder}</span>
        <kbd className="ml-auto rounded border border-zinc-200 bg-white px-1.5 py-0.5 text-[10px] leading-none text-zinc-400 dark:border-white/10 dark:bg-zinc-950">
          ⌘ K
        </kbd>
      </button>

      {isOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Search Quarix"
          className="fixed inset-0 z-[100] bg-zinc-950/35 px-3 pt-16 backdrop-blur-sm sm:px-4 sm:pt-24"
          onMouseDown={closeSearch}
        >
          <div
            className="hero-reveal mx-auto max-w-xl overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-2xl shadow-black/20 dark:border-white/10 dark:bg-zinc-950"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-zinc-200 px-4 dark:border-white/10">
              <Search className="size-4 text-zinc-400" />
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    openFirstResult();
                  }
                }}
                placeholder="Search pages and services..."
                className="h-14 flex-1 bg-transparent text-sm text-zinc-950 outline-none placeholder:text-zinc-400 dark:text-white"
              />
              <button
                type="button"
                onClick={closeSearch}
                aria-label="Close search"
                className="grid size-8 place-items-center rounded-full text-zinc-500 transition hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-white/10"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="max-h-[calc(100svh-9rem)] overflow-y-auto p-2 sm:max-h-[22rem]">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <a
                    key={`${item.category}-${item.title}`}
                    href={item.href}
                    onClick={closeSearch}
                    className="block rounded-2xl px-4 py-3 transition hover:bg-zinc-100 dark:hover:bg-white/10"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm font-semibold text-zinc-950 dark:text-white">
                        {item.title}
                      </span>
                      <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500 dark:bg-white/10 dark:text-zinc-400">
                        {item.category}
                      </span>
                    </div>
                    <p className="mt-1 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
                      {item.description}
                    </p>
                  </a>
                ))
              ) : (
                <div className="px-4 py-10 text-center text-sm text-zinc-500 dark:text-zinc-400">
                  No results found.
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
