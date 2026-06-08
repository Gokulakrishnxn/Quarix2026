"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle2, Download, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Footer } from "@/components/footer";
import { Confetti, type ConfettiRef } from "@/components/ui/confetti";

type ThankYouTemplate = {
  name: string;
  description: string;
  downloadUrl: string;
  livePreviewUrl: string;
  previewType: string;
  accent: string;
  isFree?: boolean;
};

type ThankYouTemplateAccessProps = {
  template: ThankYouTemplate;
};

function TemplateImageCard({
  type,
  accent,
}: {
  type: string;
  accent: string;
}) {
  if (type === "3d") {
    return (
      <div className="relative min-h-[22rem] overflow-hidden rounded-[2rem] border border-white/10 p-5 sm:min-h-[420px] sm:p-8">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:44px_44px]" />
        <div
          className={`absolute -bottom-20 left-1/2 size-64 -translate-x-1/2 rounded-full bg-gradient-to-br ${accent} opacity-25 blur-3xl`}
        />
        <div
          className="relative flex min-h-72 items-center justify-center sm:min-h-[356px]"
          style={{ perspective: "900px" }}
        >
          <div
            className="w-full max-w-sm rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-violet-500/20 sm:p-6"
            style={{ transform: "rotateX(12deg) rotateY(-14deg)" }}
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1 text-[10px] font-semibold text-violet-200">
                3D Creator
              </span>
              <span className="size-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
            </div>
            <h3 className="text-2xl font-semibold tracking-[-0.05em] text-white sm:text-3xl">
              Build in
              <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                three dimensions
              </span>
            </h3>
            <div className="mt-5 grid grid-cols-3 gap-2">
              {["Work", "About", "Contact"].map((item, index) => (
                <div
                  key={item}
                  className={`rounded-xl border px-2 py-3 text-center text-[10px] font-medium text-zinc-300 ${
                    index === 1
                      ? "border-fuchsia-400/40 bg-fuchsia-400/10"
                      : "border-white/10 bg-white/[0.03]"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "pricing") {
    return (
      <div className="relative min-h-[22rem] overflow-hidden rounded-[2rem] border border-white/10 p-4 sm:min-h-[420px] sm:p-6">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div
          className={`absolute -right-10 bottom-0 size-40 rounded-full bg-gradient-to-br ${accent} opacity-20 blur-3xl`}
        />
        <div className="relative grid h-full grid-cols-3 gap-2 sm:gap-3">
          {["Solo", "Pro", "Custom"].map((plan, index) => (
            <div
              key={plan}
              className={`flex min-h-32 flex-col rounded-2xl border p-3 sm:min-h-64 sm:p-4 ${
                index === 2
                  ? "border-violet-400/60 bg-violet-400/10"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              <span className="text-[10px] text-zinc-500">{plan}</span>
              <strong className="mt-1 text-sm font-semibold text-white sm:text-lg">
                {index === 2 ? "Custom" : index === 1 ? "$290" : "$99"}
              </strong>
              <span className="mt-4 h-1.5 rounded-full bg-white/15" />
              <span className="mt-2 h-1.5 w-2/3 rounded-full bg-white/10" />
              <span
                className={`mt-auto h-6 rounded-xl ${
                  index === 2 ? "bg-violet-400" : "bg-white/10"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-[22rem] overflow-hidden rounded-[2rem] border border-white/10 p-5 sm:min-h-[420px] sm:p-8">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:44px_44px]" />
      <div
        className={`absolute -bottom-20 left-1/2 size-64 -translate-x-1/2 rounded-full bg-gradient-to-br ${accent} opacity-25 blur-3xl`}
      />
      <div className="relative flex min-h-72 items-center justify-center text-center sm:min-h-[356px]">
        <div>
          <div className="mx-auto mb-3 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] text-zinc-400">
            Save time
          </div>
          <h3 className="text-3xl font-semibold tracking-[-0.06em] text-white min-[420px]:text-4xl sm:text-6xl">
            Stop writing
            <br />
            boilerplate.{" "}
            <span className="bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text text-transparent">
              Start building features.
            </span>
          </h3>
          <p className="mx-auto mt-5 max-w-72 text-xs leading-5 text-zinc-500 sm:text-sm sm:leading-6">
            Launch polished developer pages faster with ready-made sections.
          </p>
        </div>
      </div>
    </div>
  );
}

export function ThankYouTemplateAccess({
  template,
}: ThankYouTemplateAccessProps) {
  const confettiRef = useRef<ConfettiRef>(null);
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    confettiRef.current?.fire({
      particleCount: 180,
      spread: 100,
      startVelocity: 38,
      origin: { x: 0.5, y: 0.32 },
      colors: ["#38bdf8", "#22c55e", "#facc15", "#ffffff", "#a78bfa"],
    });

    const timeout = window.setTimeout(() => {
      setShowCard(true);
    }, 650);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-white px-4 pb-6 pt-6 text-zinc-950 sm:px-6 lg:pb-8 lg:pt-8 dark:bg-[#050505] dark:text-white">
      <Confetti
        ref={confettiRef}
        manualstart
        className="pointer-events-none fixed inset-0 z-50 h-screen w-screen"
      />

      <section className="relative z-10 mx-auto w-full max-w-6xl">
        <Link
          href="/templates"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
        >
          <ArrowLeft className="size-4" />
          Back to templates
        </Link>

        <div className="mx-auto mt-10 max-w-3xl text-center sm:mt-12">
          <div className="mx-auto grid size-14 place-items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 shadow-2xl shadow-emerald-500/20 sm:size-16">
            <CheckCircle2 className="size-7 sm:size-8" />
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.28em] text-sky-300">
            {template.isFree ? "Free template" : "Payment completed"}
          </p>
          <h1 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.06em] min-[420px]:text-4xl sm:text-6xl">
            {template.isFree
              ? "Your free template is ready."
              : "Thank you for your purchase."}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-zinc-600 sm:text-base dark:text-zinc-400">
            {template.isFree
              ? "Download the source code or open the live preview below."
              : "Your Quarix template access is ready. Download the source code or open the live preview below."}
          </p>
        </div>

        <div
          className={`mt-10 transition duration-500 ${
            showCard ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr] lg:grid-cols-[1.25fr_0.75fr] lg:items-stretch">
            <TemplateImageCard
              type={template.previewType}
              accent={template.accent}
            />
            <aside className="flex flex-col justify-between rounded-[2rem] border border-zinc-200 p-5 text-left shadow-sm sm:p-6 dark:border-white/10 dark:shadow-none">
              <div>
                <span className="inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-200">
                  Template access
                </span>
                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.055em] text-zinc-950 sm:text-4xl dark:text-white">
                  {template.name}
                </h2>
                <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {template.description}
                </p>
              </div>

              <div className="mt-8 grid gap-3">
                <a
                  href={template.downloadUrl}
                  download
                  className="inline-flex h-12 items-center justify-center rounded-2xl bg-zinc-950 px-5 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
                >
                  <Download className="mr-2 size-4" />
                  Download Source Code
                </a>
                <a
                  href={template.livePreviewUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-2xl border border-zinc-200 bg-white px-5 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                >
                  Live Preview
                  <ExternalLink className="ml-2 size-4" />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <div className="relative z-10 mt-20">
        <Footer />
      </div>
    </main>
  );
}
