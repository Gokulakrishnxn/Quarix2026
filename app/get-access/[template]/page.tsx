import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { GetAccessCheckout } from "@/components/get-access-checkout";

const templates = [] as {
  slug: string;
  name: string;
  description: string;
  price: string;
  priceLabel: string;
  amount: number;
  previewType: string;
  accent: string;
  downloadUrl: string;
}[];

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
