"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { tryGetSupabaseBrowserClient } from "@/lib/supabase-client";

export default function AuthCallbackPage() {
  const [message, setMessage] = useState("Completing GitHub sign in...");

  useEffect(() => {
    async function completeAuth() {
      const code = new URL(window.location.href).searchParams.get("code");

      if (!code) {
        setMessage("Missing auth code. Please try signing in again.");
        return;
      }

      try {
        const supabase = tryGetSupabaseBrowserClient();
        if (!supabase) {
          setMessage("Authentication is not configured. Check your Supabase env variables.");
          return;
        }

        const { error } = await supabase.auth.exchangeCodeForSession(code);

        if (error) {
          setMessage(error.message);
          return;
        }

        window.location.assign("/templates");
      } catch (error) {
        setMessage(
          error instanceof Error ? error.message : "Unable to complete sign in.",
        );
      }
    }

    void completeAuth();
  }, []);

  return (
    <main className="grid min-h-screen place-items-center bg-white px-4 text-zinc-950 dark:bg-[#050505] dark:text-white">
      <div className="w-full max-w-sm rounded-[2rem] border border-zinc-200 bg-white p-6 text-center shadow-xl shadow-black/5 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{message}</p>
        <Link
          href="/sign-in"
          className="mt-5 inline-flex text-sm font-semibold text-sky-500"
        >
          Back to sign in
        </Link>
      </div>
    </main>
  );
}
