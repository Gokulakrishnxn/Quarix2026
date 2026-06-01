import type { Metadata } from "next";
import Link from "next/link";

import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "AI Agents - Quarix",
  description:
    "Quarix AI Agents page is currently a work in progress.",
};

export default function AiAgentsPage() {
  return (
    <PageShell
      eyebrow="AI Agents"
      title="AI agents are coming soon."
      description="We are designing AI agent workflows for business websites, customer support, lead capture, and appointment automation."
      heroClassName="flex min-h-[48vh] flex-col justify-center sm:min-h-[52vh]"
    >
      <section className="mx-auto max-w-xl px-4 pb-16 text-center sm:px-6 sm:pb-20 lg:px-8">
        <Link
          href="/get-started/ai-powered-business-website"
          className="inline-flex h-11 w-full items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-semibold text-white transition hover:bg-zinc-800 sm:w-auto dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
        >
          Contact through service
        </Link>
      </section>
    </PageShell>
  );
}
