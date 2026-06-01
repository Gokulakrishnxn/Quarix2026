import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail, Menu } from "lucide-react";
import { notFound } from "next/navigation";

import { GetStartedForm } from "@/components/get-started-form";
import { ProfileMenu } from "@/components/profile-menu";
import { SearchCommand } from "@/components/search-command";
import { ThemeToggle } from "@/components/theme-toggle";

const services = [
  {
    slug: "custom-website-design",
    title: "Custom Website Design",
    price: "₹4,999",
    description:
      "Start a custom website project tailored to your brand, business goals, and launch timeline.",
    features: [
      "Custom UI design from scratch",
      "Mobile responsive layout",
      "Contact form integration",
      "3 free revisions included",
    ],
    accent: "from-sky-400 to-cyan-300",
  },
  {
    slug: "full-functional-business-site",
    title: "Full Functional Business Site",
    price: "₹14,999",
    description:
      "Plan a complete business website with booking, payments, dashboard, and support.",
    features: [
      "Booking & appointment system",
      "Payment gateway integration",
      "Admin dashboard",
      "30 days free support",
    ],
    accent: "from-violet-400 to-fuchsia-300",
  },
  {
    slug: "ai-powered-business-website",
    title: "AI Powered Business Website",
    price: "₹19,999",
    description:
      "Build a website with an AI chatbot that answers questions, captures leads, and books appointments.",
    features: [
      "AI chatbot trained on your business",
      "WhatsApp & email auto-reply",
      "Lead capture system",
      "SEO optimized + 30 days support",
    ],
    accent: "from-zinc-950 to-sky-500",
  },
];

const navItems = [
  { label: "Templates", href: "/templates" },
  { label: "Showcase", href: "/showcase" },
  { label: "Services", href: "/services" },
  { label: "AI Agents", href: "/ai-agents" },
];

type PageProps = {
  params: Promise<{
    service: string;
  }>;
};

function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function generateStaticParams() {
  return services.map((service) => ({
    service: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { service: serviceSlug } = await params;
  const service = getService(serviceSlug);

  if (!service) {
    return {
      title: "Get Started - Quarix",
    };
  }

  return {
    title: `Get Started - ${service.title}`,
    description: `Contact Quarix about ${service.title}.`,
  };
}

export default async function GetStartedPage({ params }: PageProps) {
  const { service: serviceSlug } = await params;
  const service = getService(serviceSlug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-zinc-950 dark:bg-black dark:text-white">
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(9,9,11,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(9,9,11,0.045)_1px,transparent_1px)] bg-[size:72px_72px] dark:bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]" />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/70 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-black/80">
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

      <main className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-24 sm:px-6 sm:pt-28 lg:px-8 lg:pt-32">
        <section className="hero-reveal mx-auto max-w-3xl text-center">
          <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-600 shadow-sm shadow-sky-950/10 backdrop-blur dark:text-sky-300 dark:shadow-sky-950/20">
            <Mail className="size-3.5" />
            Contact by email
          </span>

          <h1 className="mx-auto mt-5 max-w-3xl text-balance text-3xl font-semibold tracking-[-0.065em] min-[420px]:text-4xl sm:text-6xl lg:text-7xl">
            Let&apos;s start your
            <br />
            <span className="bg-gradient-to-r from-zinc-950 via-zinc-700 to-sky-500 bg-clip-text text-transparent dark:from-white dark:via-zinc-200 dark:to-sky-300">
              {service.title}
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-pretty text-sm leading-6 text-zinc-600 sm:text-base dark:text-zinc-400">
            {service.description} Fill out the form and your request will be
            sent directly to my inbox using Resend.
          </p>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[0.78fr_1fr] lg:items-start lg:gap-8">
          <aside className="rounded-[2rem] border border-zinc-200 bg-white/80 p-5 shadow-2xl shadow-zinc-950/10 backdrop-blur sm:p-6 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/40">
            <div className="flex flex-col gap-4 min-[420px]:flex-row min-[420px]:items-start min-[420px]:justify-between">
              <div>
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  Selected package
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.05em]">
                  {service.title}
                </h2>
              </div>
              <div
                className={`h-11 w-11 shrink-0 rounded-2xl bg-gradient-to-br ${service.accent} shadow-lg shadow-sky-950/10`}
              />
            </div>

            <ul className="mt-6 space-y-3">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm leading-5 text-zinc-700 dark:text-zinc-200"
                >
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-sky-400/10 text-sky-300">
                    <svg
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      className="size-3.5"
                      fill="none"
                    >
                      <path
                        d="m5 10 3 3 7-7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-3xl border border-zinc-200 bg-zinc-50 p-4 dark:border-white/10 dark:bg-black/40">
              <p className="text-sm font-semibold text-zinc-950 dark:text-white">
                What happens next?
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                I review your request, reply by email, and share the project
                scope, timeline, and next steps.
              </p>
            </div>
          </aside>

          <div className="scroll-reveal">
            <GetStartedForm
              serviceTitle={service.title}
              serviceSlug={service.slug}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
