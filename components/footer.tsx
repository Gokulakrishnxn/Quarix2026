"use client";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type FooterLink = {
	title: string;
	href: string;
	icon?: ReactNode;
};

type FooterSection = {
	label: string;
	links: FooterLink[];
};

const footerLinks: FooterSection[] = [
	{
		label: "Product",
		links: [
			{ title: "Templates", href: "/templates" },
			{ title: "Showcase", href: "/showcase" },
			{ title: "Testimonials", href: "/#testimonials" },
			{ title: "Services", href: "/services" },
			{ title: "AI Agents", href: "/ai-agents" },
		],
	},
	{
		label: "Services",
		links: [
			{ title: "Custom Website", href: "/services" },
			{ title: "Business Site", href: "/services" },
			{ title: "AI Website", href: "/services" },
			{ title: "Support", href: "/services" },
		],
	},
	{
		label: "Resources",
		links: [
			{ title: "FAQ", href: "/#faq" },
			{ title: "Privacy", href: "/privacy" },
			{ title: "Terms", href: "/terms" },
			{ title: "Contact", href: "/contact" },
		],
	},
];

export function Footer() {
	return (
		<footer
			className={cn(
				"relative mx-auto mt-10 flex w-full max-w-6xl flex-col items-center justify-center rounded-t-[2rem] border-t border-zinc-200 bg-zinc-50/80 px-4 text-zinc-950 sm:px-5 md:px-8",
				"dark:border-white/10 dark:bg-zinc-950 dark:text-white"
			)}
		>
			<div className="grid w-full gap-8 py-8 md:py-10 lg:grid-cols-3 lg:gap-10">
				<AnimatedContainer className="space-y-4">
					<Link href="/" className="flex items-center gap-2 text-sm font-semibold">
						<span className="relative block size-7">
							<Image
								src="/quarix-logo-transparent.png"
								alt="Quarix logo"
								fill
								sizes="28px"
								className="object-contain"
							/>
						</span>
						Quarix
					</Link>
					<p className="mt-4 max-w-sm text-sm leading-6 text-zinc-600 dark:text-zinc-400">
						Beautiful websites, service pages, and AI-powered business
						experiences built to help you launch faster.
					</p>
				</AnimatedContainer>

				<div className="grid grid-cols-1 gap-8 min-[420px]:grid-cols-2 sm:grid-cols-3 lg:col-span-2">
					{footerLinks.map((section, index) => (
						<AnimatedContainer delay={0.1 + index * 0.1} key={section.label}>
							<div>
								<h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-950 dark:text-white">
									{section.label}
								</h3>
								<ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
									{section.links.map((link) => (
										<li key={link.title}>
											<Link
												className="inline-flex items-center duration-250 hover:text-zinc-950 dark:hover:text-white [&_svg]:me-1.5 [&_svg]:size-3.5"
												href={link.href}
												key={`${section.label}-${link.title}`}
											>
												{link.icon}
												{link.title}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</AnimatedContainer>
					))}
				</div>
			</div>
			<div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-white/10" />
			<div className="flex w-full flex-col items-center justify-center gap-2 py-4 text-center text-xs text-zinc-500 sm:flex-row sm:text-sm dark:text-zinc-400">
				<p>&copy; {new Date().getFullYear()} Quarix. All rights reserved.</p>
				<span className="hidden sm:inline">Built by</span>
				<a
					href="https://www.gokulakrishnan.dev"
					target="_blank"
					rel="noreferrer"
					className="inline-flex items-center gap-2 font-medium text-zinc-950 transition hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300"
				>
					<span className="relative size-5 overflow-hidden rounded-full bg-white ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-white/10">
						<Image
							src="/gokulakrishnan-avatar.png"
							alt="Gokulakrishnan avatar"
							fill
							sizes="20px"
							className="object-cover"
						/>
					</span>
					Gokulakrishnan
				</a>
			</div>
		</footer>
	);
}

function AnimatedContainer({
	className,
	delay = 0.1,
	children,
}: {
	delay?: number;
	className?: string;
	children: ReactNode;
}) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return children;
	}

	return (
		<motion.div
			className={className}
			initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
			transition={{ delay, duration: 0.8 }}
			viewport={{ once: true }}
			whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
		>
			{children}
		</motion.div>
	);
}
