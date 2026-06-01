import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { GetAccessCheckout } from "@/components/get-access-checkout";

const templates = [
  {
    slug: "portfolio",
    name: "Portfolio",
    description:
      "A clean portfolio template for showcasing projects, skills, experience, and contact details.",
    price: "₹1",
    priceLabel: "INR",
    amount: 100,
    previewType: "code",
    accent: "from-amber-300 via-orange-400 to-rose-500",
    downloadUrl: "/downloads/portfolio-template.txt",
  },
];

type PageProps = {
  params: Promise<{
    template: string;
  }>;
};

function getTemplate(slug: string) {
  return templates.find((template) => template.slug === slug);
}

export function generateStaticParams() {
  return templates.map((template) => ({
    template: template.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { template: templateSlug } = await params;
  const template = getTemplate(templateSlug);

  return {
    title: template ? `Get Access - ${template.name}` : "Get Access - Quarix",
    description: "Complete your Quarix template checkout.",
  };
}

export default async function GetAccessPage({ params }: PageProps) {
  const { template: templateSlug } = await params;
  const template = getTemplate(templateSlug);

  if (!template) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-zinc-950 dark:bg-[#050505] dark:text-white">
      <GetAccessCheckout template={template} />
    </main>
  );
}
