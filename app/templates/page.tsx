import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Menu } from "lucide-react";

import { GetAccessButton } from "@/components/get-access-button";
import { ProfileMenu } from "@/components/profile-menu";
import { SearchCommand } from "@/components/search-command";
import { ThemeToggle } from "@/components/theme-toggle";

export const metadata: Metadata = {
  title: "Templates - Quarix",
  description:
    "Premium website templates for developers, startups, and businesses built with Next.js and Tailwind CSS.",
};

const navItems = [
  { label: "Templates", href: "/templates" },
  { label: "Showcase", href: "/#showcase" },
  { label: "Services", href: "/#services" },
];

const templates = [
  {
    slug: "codeforge-template",
    name: "Codeforge Template",
    description:
      "A professional landing page template designed for developer tools and APIs. Showcase code snippets, highlight features, and display pricing plans with a polished responsive layout.",
    price: "₹999 INR",
    previewType: "code",
    accent: "from-sky-500 via-cyan-400 to-blue-500",
    techStack: ["Next", "React", "TS", "Tailwind", "Motion"],
  },
  {
    slug: "dev-tool-template",
    name: "Dev Tool Template",
    description:
      "A premium template for SaaS tools, AI products, and developer platforms. Includes conversion-ready hero blocks, pricing cards, testimonials, and launch-focused sections.",
    price: "₹999 INR",
    previewType: "pricing",
    accent: "from-violet-500 via-fuchsia-400 to-indigo-500",
    techStack: ["Next", "React", "TS", "Shadcn", "Motion"],
  },
  {
    slug: "portfolio",
    name: "Portfolio",
    description:
      "A clean portfolio template for showcasing projects, skills, experience, and contact details.",
    price: "₹1 INR",
    previewType: "code",
    accent: "from-amber-300 via-orange-400 to-rose-500",
    techStack: ["Next", "React", "TS", "Tailwind", "Motion"],
  },
  {
    slug: "test-mode-template",
    name: "Test Mode Template",
    description:
      "A test template for previewing the thank-you page, download source code button, and live preview flow without payment.",
    price: "Test Mode",
    previewType: "code",
    accent: "from-emerald-300 via-sky-400 to-blue-500",
    techStack: ["No Payment", "Thank You", "Download", "Preview"],
    testMode: true,
  },
];

function SiteHeader() {
  return (
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
          <SearchCommand placeholder="Search templates..." />
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
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}

function TemplatePreview({ type }: { type: string }) {
  if (type === "pricing") {
    return (
      <div className="grid h-full grid-cols-3 gap-2 p-3 sm:gap-3 sm:p-6">
        {["Solo", "Pro", "Custom"].map((plan, index) => (
          <div
            key={plan}
            className={`flex min-h-28 flex-col rounded-2xl border p-3 sm:min-h-40 sm:p-4 ${
              index === 2
                ? "border-violet-400/60 bg-violet-400/10"
                : "border-white/10 bg-white/[0.03]"
            }`}
          >
            <span className="text-xs text-zinc-500">{plan}</span>
            <strong className="mt-2 text-base font-semibold text-white sm:text-2xl">
              ${index === 0 ? "99" : index === 1 ? "290" : "Custom"}
            </strong>
            <div className="mt-5 space-y-2">
              <span className="block h-2 rounded-full bg-white/20" />
              <span className="block h-2 w-4/5 rounded-full bg-white/10" />
              <span className="block h-2 w-2/3 rounded-full bg-white/10" />
            </div>
            <span
              className={`mt-auto h-8 rounded-xl ${
                index === 2 ? "bg-violet-400" : "bg-white/10"
              }`}
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden p-4 sm:p-6">
      <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="w-full max-w-md text-center">
        <div className="mx-auto mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-zinc-400">
          Save time
        </div>
        <h2 className="text-2xl font-semibold tracking-[-0.06em] text-white min-[380px]:text-3xl sm:text-5xl">
          Stop writing
          <br />
          boilerplate.{" "}
          <span className="bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text text-transparent">
            Start building features.
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-xs text-xs leading-5 text-zinc-500">
          Your AI agent handles repetitive product tasks, reviews code, and
          catches issues before deployment.
        </p>
      </div>
      <div className="absolute inset-x-10 bottom-6 h-10 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.22),transparent_70%)] blur-xl" />
    </div>
  );
}

export default function TemplatesPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-zinc-950 dark:bg-[#050505] dark:text-white">
      <SiteHeader />
      <main className="mx-auto w-full max-w-7xl px-4 pb-10 pt-22 sm:px-6 sm:pb-14 sm:pt-28 lg:px-8 lg:pb-20">
        <section className="hero-reveal mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold text-sky-500">Templates</span>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.06em] sm:text-5xl lg:text-6xl">
            Premium templates ready to launch.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-zinc-600 sm:text-base dark:text-zinc-400">
            Pick a polished Quarix template, preview the experience, and get
            access to ship your next landing page faster.
          </p>
        </section>

        <section className="mt-12 space-y-8 sm:mt-16 lg:space-y-10">
          {templates.map((template) => (
            <article
              key={template.name}
              id={template.slug}
              className="section-smooth scroll-reveal grid items-center gap-6 lg:grid-cols-[0.72fr_1fr] lg:gap-12"
            >
              <div className="order-2 flex flex-col justify-center lg:order-1">
                <span className="text-sm font-semibold text-sky-500">
                  Template
                </span>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.055em] sm:text-4xl">
                  {template.name}
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-600 sm:text-base dark:text-zinc-400">
                  {template.description}
                </p>

                <div className="mt-5 text-2xl font-semibold tracking-[-0.05em] text-zinc-950 sm:text-3xl lg:hidden dark:text-white">
                  {template.price}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <GetAccessButton
                    href={
                      template.testMode
                        ? `/thank-you/${template.slug}`
                        : `/get-access/${template.slug}`
                    }
                    price={template.price}
                  />
                  <a
                    href="#"
                    className="inline-flex h-11 items-center justify-center rounded-2xl border border-zinc-200 bg-white px-5 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                  >
                    Live Preview
                    <ExternalLink className="ml-2 size-4" />
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {template.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="smooth-card preview-float relative min-h-[240px] overflow-hidden rounded-[1.5rem] border border-zinc-900/10 bg-[#07070a] shadow-2xl shadow-black/20 sm:min-h-[360px] dark:border-white/10">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px]" />
                  <div
                    className={`absolute -left-24 top-1/3 size-64 rounded-full bg-gradient-to-br ${template.accent} opacity-20 blur-3xl`}
                  />
                  <div
                    className={`absolute -right-20 bottom-0 size-56 rounded-full bg-gradient-to-br ${template.accent} opacity-15 blur-3xl`}
                  />
                  <div className="relative h-full min-h-[240px] sm:min-h-[360px]">
                    <TemplatePreview type={template.previewType} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
