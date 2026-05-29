import Link from "next/link";

export function ProfileMenu() {
  return (
    <details className="group relative hidden sm:block">
      <summary className="grid size-6 cursor-pointer list-none place-items-center rounded-full bg-gradient-to-br from-emerald-300 to-sky-400 text-[11px] font-semibold text-white ring-1 ring-black/5 transition hover:scale-105 [&::-webkit-details-marker]:hidden dark:ring-white/10">
        <span className="sr-only">Open profile menu</span>
        G
      </summary>

      <div className="absolute right-0 top-10 z-50 w-56 rounded-2xl border border-zinc-200 bg-white p-2 text-sm text-zinc-800 shadow-2xl shadow-black/10 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-100">
        <div className="rounded-xl px-3 py-2">
          <p className="text-sm font-semibold text-zinc-950 dark:text-white">
            Gokulakrishnan
          </p>
          <p className="mt-0.5 truncate text-xs text-zinc-500 dark:text-zinc-400">
            Quarix profile
          </p>
        </div>

        <div className="my-1 h-px bg-zinc-200 dark:bg-white/10" />

        <Link
          href="/login"
          className="block rounded-xl px-3 py-2 font-medium text-red-500 transition hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-500/10"
        >
          Logout
        </Link>
      </div>
    </details>
  );
}
