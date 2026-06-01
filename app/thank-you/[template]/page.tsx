import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ThankYouTemplateAccess } from "@/components/thank-you-template-access";

const templates = [
  {
    slug: "portfolio",
    name: "Portfolio",
    description:
      "A clean portfolio template for showcasing projects, skills, experience, and contact details.",
    downloadUrl: "/downloads/portfolio-template.txt",
    livePreviewUrl: "/templates#portfolio",
    previewType: "code",
    accent: "from-amber-300 via-orange-400 to-rose-500",
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
    title: template ? `Thank You - ${template.name}` : "Thank You - Quarix",
    description: "Download your Quarix template source code.",
  };
}

export default async function ThankYouPage({ params }: PageProps) {
  const { template: templateSlug } = await params;
  const template = getTemplate(templateSlug);

  if (!template) {
    notFound();
  }

  return <ThankYouTemplateAccess template={template} />;
}
