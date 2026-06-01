import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Menu } from "lucide-react";
import { notFound } from "next/navigation";

import { Footer } from "@/components/footer";
import { ProfileMenu } from "@/components/profile-menu";
import { SearchCommand } from "@/components/search-command";
import { ShowcaseProjectMockup } from "@/components/showcase-project-mockup";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  getShowcaseProject,
  showcaseProjects,
} from "@/lib/showcase-projects";

type PageProps = {
  params: Promise<{
    project: string;
  }>;
};

const navItems = [
  { label: "Templates", href: "/templates" },
  { label: "Showcase", href: "/showcase" },
  { label: "Services", href: "/services" },
  { label: "AI Agents", href: "/ai-agents" },
];

export function generateStaticParams() {
  return showcaseProjects.map((project) => ({
    project: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { project: projectSlug } = await params;
  const project = getShowcaseProject(projectSlug);

  if (!project) {
    return {
      title: "Showcase Project - Quarix",
    };
  }

  return {
    title: `${project.title} - Showcase - Quarix`,
    description: project.description,
  };
}

export default async function ShowcaseProjectPage({ params }: PageProps) {
  const { project: projectSlug } = await params;
  const project = getShowcaseProject(projectSlug);

  if (!project) {
    notFound();
  }

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
        <section className="mx-auto max-w-7xl px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8">
          <Link
            href="/showcase"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
          >
            <ArrowLeft className="size-4" />
            Back to showcase
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500 dark:text-zinc-500">
                {project.category}
              </p>
              <h1 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.06em] text-zinc-950 sm:text-6xl dark:text-white">
                {project.title}
              </h1>
              <p className="mt-4 text-xl font-medium tracking-[-0.04em] text-zinc-700 dark:text-zinc-300">
                {project.subtitle}
              </p>
              <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-600 sm:text-base dark:text-zinc-400">
                {project.overview}
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div
              className={`rounded-[2rem] bg-gradient-to-br ${project.accent} p-5 shadow-2xl shadow-black/40 sm:p-8`}
            >
              <ShowcaseProjectMockup project={project} large />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
            <article className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm sm:p-8 dark:border-white/10 dark:bg-white/[0.04]">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500 dark:text-zinc-500">
                Overview
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-zinc-950 dark:text-white">
                Project direction
              </h2>
              <p className="mt-5 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
              <p className="mt-4 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
                {project.result}
              </p>
            </article>

            <article className="rounded-[2rem] border border-zinc-200 bg-zinc-50 p-6 sm:p-8 dark:border-white/10 dark:bg-zinc-950">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">
                Highlights
              </p>
              <ul className="mt-6 space-y-4">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300"
                  >
                    <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="size-3 stroke-current"
                        fill="none"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m5 12 4 4L19 6" />
                      </svg>
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
          <div className="rounded-[2rem] bg-white p-6 text-zinc-950 sm:p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">
                  Start a similar project
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em]">
                  Want a website like {project.title}?
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-600">
                  Choose a Quarix service and send your project details. We will
                  reply with the scope, timeline, and next steps.
                </p>
              </div>
              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-7 text-sm font-semibold text-white transition hover:bg-zinc-800"
              >
                View services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
