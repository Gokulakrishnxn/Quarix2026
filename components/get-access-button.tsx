"use client";

import { ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";

type GetAccessButtonProps = {
  href: string;
  price: string;
};

export function GetAccessButton({ href, price }: GetAccessButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  function handleClick() {
    if (isLoading) {
      return;
    }

    setIsLoading(true);

    window.setTimeout(() => {
      window.location.assign(href);
    }, 450);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isLoading}
      className="inline-flex h-11 w-full items-center justify-center rounded-2xl bg-zinc-950 px-5 text-sm font-semibold text-white transition hover:bg-zinc-800 disabled:cursor-wait disabled:opacity-80 sm:w-auto dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 size-4 animate-spin" />
          Loading...
        </>
      ) : (
        <>
          Get Access - {price}
          <ArrowRight className="ml-2 size-4" />
        </>
      )}
    </button>
  );
}
