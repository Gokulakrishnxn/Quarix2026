import { Menu } from "lucide-react";
import Image from "next/image";

import { ThemeToggle } from "@/components/theme-toggle";
import { Footer } from "@/components/footer";
import { ProfileMenu } from "@/components/profile-menu";
import { SearchCommand } from "@/components/search-command";
import { AuroraText } from "@/components/ui/aurora-text";

const navItems = [
  { label: "Templates", href: "/templates" },
  { label: "Showcase", href: "#showcase" },
  { label: "Services", href: "#services" },
];

const showcaseCards = [
  {
    title: "SaaS Launch",
    description: "A polished landing page for product teams and early-stage startups.",
    accent: "from-sky-400 to-cyan-300",
  },
  {
    title: "AI Dashboard",
    description: "Clean analytics blocks, prompts, metrics, and product panels.",
    accent: "from-violet-400 to-fuchsia-300",
  },
  {
    title: "Portfolio Pro",
    description: "A sharp personal site layout for designers, engineers, and founders.",
    accent: "from-amber-300 to-orange-400",
  },
  {
    title: "Waitlist Kit",
    description: "Conversion-focused hero, proof, and signup sections for launches.",
    accent: "from-emerald-300 to-teal-400",
  },
  {
    title: "Agency Page",
    description: "Modern service sections, testimonials, pricing, and strong CTAs.",
    accent: "from-rose-300 to-pink-400",
  },
  {
    title: "Creator Store",
    description: "Beautiful commerce sections for templates, courses, and products.",
    accent: "from-indigo-300 to-blue-500",
  },
];

const testimonials = [
  {
    name: "Aiden Bai",
    handle: "@aidenybai",
    quote: "Quarix helped us ship a landing page in one afternoon. The sections feel polished out of the box.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Guillermo Rauch",
    handle: "@rauchg",
    quote: "Beautiful templates, clean defaults, and a great fit for teams building with Next.js.",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Mckay Wrigley",
    handle: "@mckaywrigley",
    quote:
      "Need a beautiful landing page? Start here. The templates give you a strong base and still feel easy to customize.",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    featured: true,
  },
  {
    name: "Steven Tey",
    handle: "@steventey",
    quote: "The details are so good. Typography, spacing, and motion all feel carefully tuned.",
    avatar: "https://randomuser.me/api/portraits/men/18.jpg",
  },
  {
    name: "Ray Fernando",
    handle: "@RayFernando1337",
    quote: "I used Quarix as the starting point for a product launch and it saved days of design work.",
    avatar: "https://randomuser.me/api/portraits/men/62.jpg",
  },
  {
    name: "Alex",
    handle: "@vahaah",
    quote: "This is my new favourite UI library. The templates look magical and ship-ready.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Marc Klingen",
    handle: "@marcklingen",
    quote: "A clean system for building landing pages without losing craft. The components compose really well.",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
  },
  {
    name: "Jordan Hughes",
    handle: "@jordanhughes",
    quote: "This is awesome. The card layouts and hero sections make product pages feel premium fast.",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
  },
];

const serviceCards = [
  {
    slug: "custom-website-design",
    title: "Custom Website Design",
    price: "₹4,999",
    iconType: "design",
    description:
      "We design stunning, modern websites tailored to your brand - clean, fast, and built to impress visitors from the first second.",
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
    iconType: "business",
    description:
      "A complete, fully functional business website with booking systems, payment integration, admin dashboard and everything your business needs.",
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
    iconType: "ai",
    description:
      "Your website that works while you sleep. Full custom site with an AI chatbot trained on your business - answers questions, captures leads and books appointments 24/7.",
    features: [
      "Full custom website design",
      "AI chatbot trained on your business",
      "WhatsApp & email auto-reply",
      "Lead capture system",
      "Appointment booking automation",
      "SEO optimized + 30 days support",
    ],
    accent: "from-zinc-950 to-sky-500",
    featured: true,
  },
];

const faqs = [
  {
    question: "How fast can my website go live?",
    answer:
      "Most template-based pages can launch in a few days. Fully custom business sites and AI-powered websites depend on scope, integrations, and content readiness.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Yes. Every website and section is designed responsively so it works across phones, tablets, laptops, and desktop screens.",
  },
  {
    question: "Can you connect booking and payment systems?",
    answer:
      "Yes. Business sites can include appointment booking, payment gateway integration, admin dashboards, contact forms, and workflow automations.",
  },
  {
    question: "How does the AI chatbot work?",
    answer:
      "The chatbot is trained on your business details, services, FAQs, and workflows so it can answer questions, capture leads, and support appointment booking.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. Business and AI website plans include 30 days of free support after launch for fixes, guidance, and small improvements.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/70 bg-white/95 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/90">
        <nav className="mx-auto flex h-12 max-w-[1440px] items-center gap-2.5 px-3 text-[13px] sm:h-14 sm:gap-4 sm:px-5 sm:text-sm lg:gap-7 lg:px-7">
          <a
            href="#home"
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
          </a>

          <div className="hidden items-center gap-5 text-xs font-medium text-zinc-800 lg:flex lg:gap-7 dark:text-zinc-200">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition hover:text-zinc-500 dark:hover:text-zinc-400"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-1.5 sm:gap-3 lg:gap-5">
            <SearchCommand />
            <a
              href="https://github.com"
              aria-label="GitHub"
              className="hidden text-zinc-950 transition hover:text-zinc-500 sm:block dark:text-zinc-50 dark:hover:text-zinc-400"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="size-4 fill-current"
              >
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.73c-2.78.62-3.37-1.22-3.37-1.22-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 7.13c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.95.68 1.92v2.84c0 .27.18.59.69.49A10.08 10.08 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
              </svg>
            </a>
            <ThemeToggle />
            <ProfileMenu />
            <details className="group relative lg:hidden">
              <summary className="flex size-7 cursor-pointer list-none items-center justify-center rounded-full text-zinc-950 transition hover:bg-zinc-100 hover:text-zinc-500 [&::-webkit-details-marker]:hidden dark:text-zinc-50 dark:hover:bg-white/10 dark:hover:text-zinc-400">
                <span className="sr-only">Open navigation menu</span>
                <Menu className="size-4" />
              </summary>
              <div className="absolute right-0 top-11 w-48 rounded-2xl border border-zinc-200 bg-white p-2 text-sm font-medium text-zinc-800 shadow-xl shadow-black/10 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-100">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block rounded-xl px-3 py-2 transition hover:bg-zinc-100 dark:hover:bg-white/10"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </details>
          </div>
        </nav>
      </header>
      <main id="home" className="flex-1 pt-12 sm:pt-14">
        <section className="hero-reveal mx-auto flex w-full max-w-4xl flex-col items-center px-4 pb-16 pt-12 text-center sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pt-20">
          <div className="relative mb-5 size-12 sm:size-16">
            <Image
              src="/quarix-logo-transparent.png"
              alt="Quarix logo"
              fill
              sizes="(min-width: 640px) 64px, 48px"
              className="object-contain"
              loading="eager"
              priority
            />
          </div>

          <h1 className="max-w-3xl text-balance text-3xl font-semibold tracking-[-0.055em] text-zinc-950 min-[380px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
            Beautiful Templates.
            <br />
            Ship <AuroraText colors={["#38bdf8", "#6366f1", "#d946ef", "#38bdf8"]}>Faster.</AuroraText>
          </h1>

          <p className="mt-5 max-w-2xl text-pretty text-sm leading-6 text-zinc-600 sm:text-base dark:text-zinc-400">
            10+ templates and 10+ landing page sections built with Next.js,
            Typescript, Tailwind CSS, Shadcn, and Motion. Save thousands of
            hours, create a beautiful landing page, and convert your visitors
            into customers.
          </p>

          <div className="mt-8 flex w-full max-w-sm flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a
              href="#home"
              className="inline-flex h-10 w-full items-center justify-center rounded-full bg-zinc-950 px-5 text-xs font-medium text-white shadow-lg shadow-zinc-950/10 transition hover:bg-zinc-800 sm:w-auto dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              Get Unlimited Access
            </a>
            <a
              href="/templates"
              className="inline-flex h-10 w-full items-center justify-center rounded-full border border-zinc-200 bg-white px-5 text-xs font-medium text-zinc-950 shadow-sm transition hover:bg-zinc-50 sm:w-auto dark:border-white/10 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
            >
              Browse Template
            </a>
          </div>
        </section>

        <section id="showcase" className="section-smooth scroll-reveal py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500 dark:text-zinc-400">
              Showcase
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-zinc-950 sm:text-4xl dark:text-white">
              Templates that feel ready to ship.
            </h2>
          </div>

          <div className="showcase-fade mt-10 overflow-hidden">
            <div className="showcase-marquee flex w-max gap-5 px-4 sm:gap-6">
              {[...showcaseCards, ...showcaseCards].map((card, index) => (
                <article
                  key={`${card.title}-${index}`}
                  className="smooth-card w-[21rem] shrink-0 rounded-3xl bg-transparent p-5 sm:w-[26rem]"
                >
                  <div
                    className={`h-48 rounded-2xl bg-gradient-to-br ${card.accent} p-px sm:h-56`}
                  >
                    <div className="flex h-full items-end rounded-2xl bg-white/80 p-4 backdrop-blur dark:bg-zinc-950/70">
                      <div className="h-12 w-full rounded-xl border border-black/10 bg-white/70 dark:border-white/10 dark:bg-white/10" />
                    </div>
                  </div>
                  <h3 className="mt-5 text-left text-lg font-semibold tracking-[-0.02em]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-left text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-smooth scroll-reveal mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-zinc-950 sm:text-5xl dark:text-white">
              What People Are Saying
            </h2>
            <p className="mt-4 text-sm leading-6 text-zinc-600 sm:text-base dark:text-zinc-400">
              Builders, founders, and design engineers use Quarix to launch
              polished pages faster.
            </p>
          </div>

          <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.handle}
                className="smooth-card mb-4 break-inside-avoid rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm hover:shadow-lg dark:border-white/10 dark:bg-zinc-900/70"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      aria-label={`${testimonial.name} profile avatar`}
                      className="size-10 rounded-full bg-cover bg-center ring-1 ring-black/5 dark:ring-white/10"
                      style={{ backgroundImage: `url(${testimonial.avatar})` }}
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="text-sm font-semibold text-zinc-950 dark:text-white">
                          {testimonial.name}
                        </h3>
                        <span className="grid size-4 place-items-center rounded-full bg-sky-500 text-[10px] font-bold text-white">
                          ✓
                        </span>
                      </div>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">
                        {testimonial.handle}
                      </p>
                    </div>
                  </div>
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="size-4 shrink-0 fill-zinc-400"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.967 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
                  </svg>
                </div>

                <p className="mt-4 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                  {testimonial.quote}
                </p>

              </article>
            ))}
          </div>
        </section>

        <section id="services" className="section-smooth scroll-reveal mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500 dark:text-zinc-400">
              Services
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-[-0.05em] text-zinc-950 sm:text-5xl dark:text-white">
              Everything You Need to
              <br />
              Launch Online
            </h2>
            <p className="mt-5 text-pretty text-sm leading-6 text-zinc-600 sm:text-base dark:text-zinc-400">
              From ready-made templates to fully custom AI-powered websites -
              every solution to get your business online fast.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-5xl gap-4 md:grid-cols-2 xl:grid-cols-3">
            {serviceCards.map((service) => (
              <article
                key={service.title}
                className={`smooth-card relative flex h-full flex-col rounded-3xl border p-5 shadow-sm sm:p-6 ${
                  service.featured
                    ? "border-zinc-950 bg-white text-zinc-950 shadow-xl shadow-zinc-950/10 dark:border-white dark:bg-zinc-950 dark:text-white dark:shadow-none"
                    : "border-zinc-200 bg-white text-zinc-950 dark:border-white/10 dark:bg-zinc-900/70 dark:text-white"
                }`}
              >
                <div className="mb-5 grid size-12 place-items-center text-zinc-950 dark:text-white">
                  {service.iconType === "design" ? (
                    <svg
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                      className="size-10"
                      fill="none"
                    >
                      <rect
                        x="7"
                        y="10"
                        width="34"
                        height="26"
                        rx="5"
                        stroke="currentColor"
                        strokeWidth="3"
                      />
                      <path
                        d="M7 18h34M15 15h.1M20 15h.1M23 28l5-5 5 5M28 23v13"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : service.iconType === "business" ? (
                    <svg
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                      className="size-10"
                      fill="none"
                    >
                      <rect
                        x="8"
                        y="12"
                        width="32"
                        height="28"
                        rx="4"
                        stroke="currentColor"
                        strokeWidth="3"
                      />
                      <path
                        d="M16 12V9.5A3.5 3.5 0 0 1 19.5 6h9A3.5 3.5 0 0 1 32 9.5V12M8 23h32M18 23v4h12v-4"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : service.iconType === "ai" ? (
                    <svg
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                      className="size-10"
                      fill="none"
                    >
                      <path
                        d="M24 5l2.7 10.3L37 18l-10.3 2.7L24 31l-2.7-10.3L11 18l10.3-2.7L24 5Z"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M37 29l1.5 5.5L44 36l-5.5 1.5L37 43l-1.5-5.5L30 36l5.5-1.5L37 29ZM12 30l1.1 4L17 35l-3.9 1L12 40l-1.1-4L7 35l3.9-1L12 30Z"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : null}
                </div>

                <div className="flex flex-col gap-3 min-[420px]:flex-row min-[420px]:items-start min-[420px]:justify-between">
                  <h3 className="text-lg font-semibold tracking-[-0.04em] sm:text-xl">
                    {service.title}
                  </h3>
                  {service.featured ? (
                    <span className="shrink-0 rounded-xl bg-zinc-950 px-2.5 py-1 text-[11px] font-semibold text-white shadow-lg shadow-zinc-950/20 dark:bg-white dark:text-zinc-950">
                      Popular
                    </span>
                  ) : null}
                </div>

                <p className="mt-4 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                  {service.description}
                </p>

                <div className="mt-5 text-3xl font-semibold tracking-[-0.06em] sm:text-4xl">
                  {service.price}
                  <span className="ml-2 text-sm font-medium tracking-normal text-zinc-500">
                    INR
                  </span>
                </div>

                <ul className="mt-6 space-y-3">
                  {service.features.map((feature, featureIndex) => {
                    const mutedFeature =
                      !service.featured && featureIndex === service.features.length - 1;

                    return (
                      <li
                        key={feature}
                        className={`flex gap-2.5 text-xs leading-5 sm:text-sm ${
                          mutedFeature
                            ? "text-zinc-500 dark:text-zinc-500"
                            : "text-zinc-950 dark:text-zinc-100"
                        }`}
                      >
                        {mutedFeature ? (
                          <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                        ) : (
                          <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="mt-0.5 size-4 shrink-0 stroke-current"
                            fill="none"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m5 12 4 4L19 6" />
                          </svg>
                        )}
                        <span>
                        {feature}
                      </span>
                      </li>
                    );
                  })}
                </ul>

                <a
                  href={`/get-started/${service.slug}`}
                  className="mt-6 inline-flex h-10 w-full items-center justify-center rounded-xl bg-zinc-950 px-5 text-xs font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
                >
                  Get started
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500 dark:text-zinc-300">
              FAQ
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-[-0.05em] text-zinc-950 sm:text-5xl dark:text-white">
              Questions before you launch?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-zinc-600 sm:text-base dark:text-zinc-300">
              Here are the common things founders and business owners ask
              before starting with Quarix.
            </p>
          </div>

          <div className="mt-10 divide-y divide-zinc-200 rounded-[2rem] border border-zinc-200 bg-white px-5 dark:divide-white/15 dark:border-white/15 dark:bg-zinc-900 sm:px-7">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-zinc-950 [&::-webkit-details-marker]:hidden dark:text-white">
                  {faq.question}
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-zinc-100 text-lg leading-none transition group-open:rotate-45 dark:bg-white/15">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
