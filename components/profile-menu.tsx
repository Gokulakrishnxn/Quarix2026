"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { User } from "@supabase/supabase-js";

import { tryGetSupabaseBrowserClient } from "@/lib/supabase-client";

export function ProfileMenu() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    let isMounted = true;
    const supabase = tryGetSupabaseBrowserClient();

    if (!supabase) {
      return;
    }

    supabase.auth
      .getUser()
      .then(({ data }) => {
        if (!isMounted) {
          return;
        }

        setUser(data.user);
        setIsLoading(false);
      })
      .catch(() => {
        if (isMounted) {
          setIsLoading(false);
        }
      });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setIsLoading(false);
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const profile = useMemo(() => {
    const metadata = user?.user_metadata ?? {};
    const name =
      getMetadataString(metadata.name) ??
      getMetadataString(metadata.full_name) ??
      getMetadataString(metadata.user_name) ??
      user?.email ??
      "Quarix user";
    const avatarUrl =
      getMetadataString(metadata.avatar_url) ??
      getMetadataString(metadata.picture);
    const initials = getInitials(name);

    return {
      name,
      avatarUrl,
      initials,
      email: user?.email,
    };
  }, [user]);

  async function handleSignOut() {
    const supabase = tryGetSupabaseBrowserClient();
    if (!supabase) {
      return;
    }

    await supabase.auth.signOut();
    detailsRef.current?.removeAttribute("open");
    setUser(null);
    window.location.assign("/");
  }

  if (!user) {
    return (
      <div className="hidden items-center gap-2 sm:flex">
        <Link
          href="/sign-in"
          className="text-xs font-semibold text-zinc-700 transition hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
        >
          Sign in
        </Link>
      </div>
    );
  }

  return (
    <details ref={detailsRef} className="group relative flex items-center">
      <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full outline-none transition hover:opacity-80 [&::-webkit-details-marker]:hidden">
        <span className="sr-only">
          {isLoading ? "Loading profile" : "Open profile menu"}
        </span>
        <span
          className="grid size-8 shrink-0 place-items-center overflow-hidden rounded-full border border-zinc-200 bg-zinc-950 text-xs font-semibold text-white shadow-sm dark:border-white/10 dark:bg-white dark:text-zinc-950"
          style={
            profile.avatarUrl
              ? {
                  backgroundImage: `url(${profile.avatarUrl})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }
              : undefined
          }
          aria-hidden="true"
        >
          {profile.avatarUrl ? null : profile.initials}
        </span>
      </summary>

      <div className="absolute right-0 top-11 z-50 w-64 rounded-2xl border border-zinc-200 bg-white p-2 text-sm text-zinc-800 shadow-xl shadow-black/10 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-100">
        <div className="rounded-xl px-3 py-3">
          <p className="truncate text-sm font-semibold text-zinc-950 dark:text-white">
            {profile.name}
          </p>
          {profile.email ? (
            <p className="mt-1 truncate text-xs text-zinc-500 dark:text-zinc-400">
              {profile.email}
            </p>
          ) : null}
        </div>

        <div className="my-1 h-px bg-zinc-200 dark:bg-white/10" />

        <Link
          href="/templates"
          className="block rounded-xl px-3 py-2 transition hover:bg-zinc-100 dark:hover:bg-white/10"
        >
          Templates
        </Link>
        <Link
          href="/services"
          className="block rounded-xl px-3 py-2 transition hover:bg-zinc-100 dark:hover:bg-white/10"
        >
          Services
        </Link>
        <button
          type="button"
          onClick={handleSignOut}
          className="block w-full rounded-xl px-3 py-2 text-left text-red-600 transition hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-400/10"
        >
          Sign out
        </button>
      </div>
    </details>
  );
}

function getMetadataString(value: unknown) {
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

function getInitials(name: string) {
  const parts = name
    .replace(/@.*/, "")
    .split(/\s+/)
    .filter(Boolean);

  if (parts.length === 0) {
    return "Q";
  }

  return parts
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}
