"use client";

import Image from "next/image";
import Link from "next/link";
import { type FormEvent, useState } from "react";

import { cn } from "@/lib/utils";
import { getSupabaseBrowserClient } from "@/lib/supabase-client";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

type LoginFormProps = React.ComponentProps<"div"> & {
  mode?: "sign-in" | "sign-up";
};

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.73c-2.78.62-3.37-1.22-3.37-1.22-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 7.13c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.95.68 1.92v2.84c0 .27.18.59.69.49A10.08 10.08 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

export function LoginForm({
  mode = "sign-in",
  className,
  ...props
}: LoginFormProps) {
  const isSignIn = mode === "sign-in";
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");
  const [unconfirmedEmail, setUnconfirmedEmail] = useState("");
  const title = isSignIn ? "Welcome back" : "Create your account";
  const description = isSignIn
    ? "Sign in to access your templates and downloads."
    : "Sign up to unlock templates, downloads, and checkout access.";
  const githubLabel = isSignIn ? "Sign in with GitHub" : "Sign up with GitHub";
  const submitLabel = isSignIn ? "Sign in" : "Create account";
  const switchHref = isSignIn ? "/sign-up" : "/sign-in";
  const switchText = isSignIn
    ? "Don’t have an account?"
    : "Already have an account?";
  const switchAction = isSignIn ? "Sign up" : "Sign in";
  const isLoading = status === "loading";

  async function handleGithubAuth() {
    setStatus("loading");
    setMessage("");
    setUnconfirmedEmail("");

    try {
      const supabase = getSupabaseBrowserClient();
      const redirectTo = `${window.location.origin}/auth/callback`;
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "github",
        options: {
          redirectTo,
        },
      });

      if (error) {
        setStatus("error");
        setMessage(error.message);
      }
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to start GitHub auth.");
    }
  }

  async function handleEmailAuth(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");

    if (!email || !password) {
      setStatus("error");
      setMessage("Please enter your email and password.");
      return;
    }

    setStatus("loading");
    setMessage("");
    setUnconfirmedEmail("");

    try {
      const supabase = getSupabaseBrowserClient();

      if (isSignIn) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          if (error.message.toLowerCase().includes("email not confirmed")) {
            setUnconfirmedEmail(email);
            setStatus("error");
            setMessage(
              "Your email is not confirmed yet. Please confirm your email or resend the confirmation link.",
            );
            return;
          }

          setStatus("error");
          setMessage(error.message);
          return;
        }

        setStatus("success");
        setMessage("Signed in successfully. Opening templates...");
        window.location.assign("/templates");
        return;
      }

      const signUpResponse = await fetch("/api/auth/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const signUpResult = (await signUpResponse.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!signUpResponse.ok || !signUpResult.success) {
        setStatus("error");
        setMessage(signUpResult.message ?? "Unable to create account.");
        return;
      }

      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setStatus("error");
        setMessage(error.message);
        return;
      }

      setStatus("success");
      setMessage("Account created. Opening templates...");
      window.location.assign("/templates");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Authentication failed.");
    }
  }

  async function handleResendConfirmation() {
    if (!unconfirmedEmail) {
      return;
    }

    setStatus("loading");
    setMessage("Sending confirmation email...");

    try {
      const supabase = getSupabaseBrowserClient();
      const { error } = await supabase.auth.resend({
        type: "signup",
        email: unconfirmedEmail,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) {
        setStatus("error");
        setMessage(error.message);
        return;
      }

      setStatus("success");
      setMessage("Confirmation email sent. Please check your inbox.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Unable to resend confirmation email.",
      );
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form onSubmit={handleEmailAuth}>
        <FieldGroup>
          <div className="flex flex-col items-center gap-2 text-center">
            <Link
              href="/"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="relative flex size-10 items-center justify-center rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/5">
                <Image
                  src="/quarix-logo-transparent.png"
                  alt="Quarix logo"
                  fill
                  sizes="40px"
                  className="object-contain p-2"
                  priority
                />
              </div>
              <span className="sr-only">Quarix</span>
            </Link>
            <h1 className="text-2xl font-bold tracking-[-0.04em]">{title}</h1>
            <FieldDescription>{description}</FieldDescription>
            <FieldDescription>
              {switchText} <Link href={switchHref}>{switchAction}</Link>
            </FieldDescription>
          </div>

          <Field>
            <Button
              variant="outline"
              type="button"
              disabled={isLoading}
              onClick={handleGithubAuth}
            >
              <GithubIcon />
              {githubLabel}
            </Button>
          </Field>

          <FieldSeparator>Or continue with email</FieldSeparator>

          {!isSignIn ? (
            <Field>
              <FieldLabel htmlFor="name">Name</FieldLabel>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
              />
            </Field>
          ) : null}

          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              required
            />
          </Field>

          {isSignIn ? (
            <div className="flex justify-end">
              <Link
                href="/sign-in"
                className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
              >
                Forgot password?
              </Link>
            </div>
          ) : null}

          <Field>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Please wait..." : submitLabel}
            </Button>
          </Field>
          {message ? (
            <div className="space-y-3 text-center">
              <p
                className={`text-sm ${
                  status === "error" ? "text-red-500" : "text-emerald-600"
                }`}
              >
                {message}
              </p>
              {unconfirmedEmail ? (
                <Button
                  type="button"
                  variant="outline"
                  disabled={isLoading}
                  onClick={handleResendConfirmation}
                >
                  Resend confirmation email
                </Button>
              ) : null}
            </div>
          ) : null}
        </FieldGroup>
      </form>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <Link href="/">Terms</Link> and{" "}
        <Link href="/">Privacy Policy</Link>.
      </FieldDescription>
    </div>
  );
}
