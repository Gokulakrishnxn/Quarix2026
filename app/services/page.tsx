import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Footer } from "@/components/footer";
import { ProfileMenu } from "@/components/profile-menu";
import { SearchCommand } from "@/components/search-command";
import { ServiceShimmerLink } from "@/components/service-shimmer-link";
import { ThemeToggle } from "@/components/theme-toggle";

export const metadata: Metadata = {
  title: "Services - Quarix",
  description:
    "Explore Quarix website design, business website, and AI-powered website services.",
};

const navItems = [
  { label: "Templates", href: "/templates" },
  { label: "Showcase", href: "/showcase" },
  { label: "Services", href: "/services" },
  { label: "AI Agents", href: "/ai-agents" },
];

const servicePlans = [
  {
    slug: "custom-website-design",
    plan: "Basic",
    title: "Custom Website Design",
    audience: "For founders and personal brands",
    description:
      "A polished website designed around your brand, message, and first impression.",
    features: [
      "Custom UI design from scratch",
      "Mobile responsive layout",
      "Contact form integration",
      "3 free revisions included",
      "Fast launch-ready structure",
      "Clean visual direction",
    ],
    accent: "from-sky-400 to-cyan-300",
  },
  {
    slug: "ai-powered-business-website",
    plan: "Pro",
    title: "AI Powered Business Website",
    audience: "For growing businesses",
    description:
      "A business website with an AI assistant that answers questions and captures leads.",
    features: [
      "Full custom website design",
      "AI chatbot trained on your business",
      "WhatsApp & email auto-reply",
      "Lead capture system",
      "Appointment booking automation",
      "SEO optimized + 30 days support",
    ],
    accent: "from-violet-400 to-sky-400",
    featured: true,
  },
  {
    slug: "full-functional-business-site",
    plan: "Business",
    title: "Full Functional Business Site",
    audience: "For service teams and companies",
    description:
      "A complete business website with booking, payments, dashboard, and support.",
    features: [
      "Booking & appointment system",
      "Payment gateway integration",
      "Admin dashboard",
      "Contact and lead workflow",
      "Business-ready page sections",
      "30 days free support",
    ],
    accent: "from-zinc-950 to-indigo-400",
  },
];

const processSteps = [
  {
    title: "Tell us your goal",
    description:
      "Share your business, target audience, content, and the result you want from the site.",
  },
  {
    title: "Get a clear plan",
    description:
      "We map the pages, features, timeline, and launch path before the build starts.",
  },
  {
    title: "Launch with support",
    description:
      "Your website ships responsive, polished, and ready for real customers.",
  },
];

export default function ServicesPage() {
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
        <section className="mx-auto max-w-5xl px-4 pb-12 pt-16 text-center sm:px-6 sm:pb-16 sm:pt-20 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500 dark:text-zinc-400">
            Services
          </p>
          <h1 className="mx-auto mt-4 max-w-4xl text-balance text-4xl font-semibold tracking-[-0.06em] text-zinc-950 min-[420px]:text-5xl sm:text-6xl lg:text-7xl dark:text-white">
            Websites and AI systems built to grow your business.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-sm leading-6 text-zinc-600 sm:text-base dark:text-zinc-400">
            Pick the service that fits your stage. Every option is designed to
            be responsive, polished, fast to launch, and easy to support.
          </p>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-zinc-200 bg-zinc-50 p-4 shadow-sm sm:p-6 lg:p-8 dark:border-white/10 dark:bg-[#050505]">
            <div className="grid gap-4 lg:grid-cols-3">
              {servicePlans.map((service) => (
                <article
                  key={service.slug}
                  className={`smooth-card flex min-h-[34rem] flex-col overflow-hidden rounded-2xl border ${
                    service.featured
                      ? "border-zinc-950 bg-zinc-950 text-white shadow-2xl shadow-zinc-950/20 dark:border-white/10 dark:bg-white/[0.09] dark:shadow-black/40"
                      : "border-zinc-200 bg-white text-zinc-950 dark:border-white/10 dark:bg-[#070707] dark:text-white"
                  }`}
                >
                  <div className="p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p
                          className={`text-sm ${
                            service.featured
                              ? "text-zinc-300"
                              : "text-zinc-500 dark:text-zinc-400"
                          }`}
                        >
                          {service.audience}
                        </p>
                        <h2
                          className={`mt-2 text-xl font-semibold tracking-[-0.04em] ${
                            service.featured
                              ? "text-white"
                              : "text-zinc-950 dark:text-white"
                          }`}
                        >
                          {service.title}
                        </h2>
                      </div>

                      {service.featured ? (
                        <span className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-black/60 px-2 py-1 text-[11px] font-medium text-white">
                          <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="size-3 fill-current"
                          >
                            <path d="M12 2.5 14.9 8.6l6.6.9-4.8 4.7 1.1 6.6L12 17.7l-5.8 3.1 1.1-6.6-4.8-4.7 6.6-.9L12 2.5Z" />
                          </svg>
                          Popular
                        </span>
                      ) : null}
                    </div>

                    <div className="mt-8">
                      <span
                        className={`text-4xl font-bold tracking-[-0.06em] ${
                          service.featured
                            ? "text-white"
                            : "text-zinc-950 dark:text-white"
                        }`}
                      >
                        {service.plan}
                      </span>
                      <span
                        className={`ml-1 text-sm ${
                          service.featured
                            ? "text-zinc-300"
                            : "text-zinc-500 dark:text-zinc-400"
                        }`}
                      >
                        service
                      </span>
                      <p
                        className={`mt-3 text-sm leading-6 ${
                          service.featured
                            ? "text-zinc-300"
                            : "text-zinc-600 dark:text-zinc-400"
                        }`}
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`border-t px-5 py-6 sm:px-6 ${
                      service.featured
                        ? "border-white/10"
                        : "border-zinc-200 dark:border-white/10"
                    }`}
                  >
                    <ul className="space-y-4">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className={`flex items-start gap-3 text-sm leading-5 ${
                            service.featured
                              ? "text-zinc-300"
                              : "text-zinc-600 dark:text-zinc-400"
                          }`}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className={`mt-0.5 size-4 shrink-0 ${
                              service.featured
                                ? "stroke-zinc-200"
                                : "stroke-zinc-700 dark:stroke-zinc-200"
                            }`}
                            fill="none"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="9" />
                            <path d="m8.5 12 2.4 2.4 4.6-5" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className={`mt-auto border-t p-4 ${
                      service.featured
                        ? "border-white/10"
                        : "border-zinc-200 dark:border-white/10"
                    }`}
                  >
                    <ServiceShimmerLink
                      href={`/get-started/${service.slug}`}
                      featured={service.featured}
                      label="Get started"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500 dark:text-zinc-400">
              Process
            </p>
            <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.05em] text-zinc-950 sm:text-5xl dark:text-white">
              Simple steps from idea to launch.
            </h2>
          </div>

          <div className="relative mt-10">
            <div className="absolute left-4 top-0 hidden h-full w-px bg-zinc-200 sm:block lg:left-1/2 dark:bg-white/10" />
            <div className="space-y-5">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className={`relative grid gap-4 lg:grid-cols-2 ${
                    index % 2 === 1 ? "lg:[&>div]:col-start-2" : ""
                  }`}
                >
                  <span className="absolute left-0 top-6 hidden size-8 place-items-center rounded-full bg-zinc-950 text-xs font-semibold text-white ring-8 ring-white sm:grid lg:left-1/2 lg:-translate-x-1/2 dark:bg-white dark:text-zinc-950 dark:ring-zinc-950">
                    {index + 1}
                  </span>
                  <div className="rounded-[1.75rem] border border-zinc-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
                    <h3 className="text-xl font-semibold tracking-[-0.04em] text-zinc-950 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-zinc-950 via-zinc-900 to-sky-950 p-6 text-white shadow-2xl shadow-zinc-950/20 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-sky-200">
                  Ready to start?
                </p>
                <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.05em] sm:text-5xl">
                  Tell us what you want to build next.
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-300">
                  Choose a service and send your project details. We will reply
                  with the next steps, scope, and timeline.
                </p>
              </div>
              <Link
                href="/get-started/ai-powered-business-website"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
              >
                Get started
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
