import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import type { ReactNode } from "react";

import { Footer } from "@/components/footer";
import { ProfileMenu } from "@/components/profile-menu";
import { SearchCommand } from "@/components/search-command";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Templates", href: "/templates" },
  { label: "Showcase", href: "/showcase" },
  { label: "Services", href: "/services" },
  { label: "AI Agents", href: "/ai-agents" },
];

type PageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  heroClassName?: string;
};

export function PageShell({
  eyebrow,
  title,
  description,
  children,
  heroClassName,
}: PageShellProps) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-zinc-950 dark:bg-zinc-950 dark:text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/70 bg-white/95 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/90">
        <nav className="mx-auto flex h-12 max-w-[1440px] items-center gap-2.5 px-3 text-[13px] sm:h-14 sm:gap-4 sm:px-5 sm:text-sm lg:gap-7 lg:px-7">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-1.5 font-semibold tracking-[-0.02em] sm:gap-2"
          >
            <span className="relative block size-5 sm:size-6">
              <Image
                src="/quarix-logo-transparent.png"
                alt="Quarix logo"
                fill
                sizes="(min-width: 640px) 24px, 20px"
                className="object-contain"
                loading="eager"
                priority
              />
            </span>
            Quarix
          </Link>

          <div className="hidden items-center gap-5 text-xs font-medium text-zinc-800 lg:flex lg:gap-7 dark:text-zinc-200">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition hover:text-zinc-500 dark:hover:text-zinc-400"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-1.5 sm:gap-3 lg:gap-5">
            <SearchCommand />
            <ThemeToggle />
            <ProfileMenu />
            <details className="group relative lg:hidden">
              <summary className="flex size-7 cursor-pointer list-none items-center justify-center rounded-full text-zinc-950 transition hover:bg-zinc-100 hover:text-zinc-500 [&::-webkit-details-marker]:hidden dark:text-zinc-50 dark:hover:bg-white/10 dark:hover:text-zinc-400">
                <span className="sr-only">Open navigation menu</span>
                <Menu className="size-4" />
              </summary>
              <div className="absolute right-0 top-11 w-48 rounded-2xl border border-zinc-200 bg-white p-2 text-sm font-medium text-zinc-800 shadow-xl shadow-black/10 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-100">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block rounded-xl px-3 py-2 transition hover:bg-zinc-100 dark:hover:bg-white/10"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="my-1 h-px bg-zinc-200 dark:bg-white/10" />
                <Link
                  href="/sign-in"
                  className="block rounded-xl px-3 py-2 transition hover:bg-zinc-100 dark:hover:bg-white/10"
                >
                  Sign in
                </Link>
              </div>
            </details>
          </div>
        </nav>
      </header>

      <main className="pt-12 sm:pt-14">
        <section
          className={cn(
            "mx-auto max-w-5xl px-4 pb-12 pt-16 text-center sm:px-6 sm:pb-16 sm:pt-20 lg:px-8",
            heroClassName,
          )}
        >
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500 dark:text-zinc-400">
            {eyebrow}
          </p>
          <h1 className="mx-auto mt-4 max-w-4xl text-balance text-4xl font-semibold tracking-[-0.06em] text-zinc-950 min-[420px]:text-5xl sm:text-6xl lg:text-7xl dark:text-white">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-sm leading-6 text-zinc-600 sm:text-base dark:text-zinc-400">
            {description}
          </p>
        </section>

        {children}
      </main>

      <Footer />
    </div>
  );
}
