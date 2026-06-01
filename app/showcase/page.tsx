import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Footer } from "@/components/footer";
import { ProfileMenu } from "@/components/profile-menu";
import { SearchCommand } from "@/components/search-command";
import { ShowcaseGallery } from "@/components/showcase-gallery";
import { ThemeToggle } from "@/components/theme-toggle";

export const metadata: Metadata = {
  title: "Showcase - Quarix",
  description:
    "Explore Quarix showcase projects and open each card to learn about the project.",
};

const navItems = [
  { label: "Templates", href: "/templates" },
  { label: "Showcase", href: "/showcase" },
  { label: "Services", href: "/services" },
  { label: "AI Agents", href: "/ai-agents" },
];

export default function ShowcasePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-zinc-950 dark:bg-[#080808] dark:text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/70 bg-white/95 backdrop-blur-xl dark:border-white/10 dark:bg-[#080808]/90">
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
              <div className="absolute right-0 top-11 w-48 rounded-2xl border border-zinc-200 bg-white p-2 text-sm font-medium text-zinc-800 shadow-xl shadow-black/10 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-100 dark:shadow-black/40">
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
        <section className="mx-auto max-w-4xl px-4 pb-10 pt-16 text-center sm:px-6 sm:pb-12 sm:pt-20 lg:px-8">
          <h1 className="text-balance text-4xl font-semibold tracking-[-0.06em] text-zinc-950 sm:text-6xl dark:text-white">
            Showcase
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-zinc-600 sm:text-base dark:text-zinc-400">
            Companies choose Quarix to build landing pages, portfolio sites,
            business websites, and AI-powered customer experiences.
          </p>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <ShowcaseGallery />
        </section>
      </main>

      <Footer />
    </div>
  );
}
