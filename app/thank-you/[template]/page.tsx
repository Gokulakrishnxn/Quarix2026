import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ThankYouTemplateAccess } from "@/components/thank-you-template-access";

const templates = [
  {
    slug: "3d-portfolio",
    name: "3D Portfolio",
    description:
      "Elevate your digital presence with this premium, highly interactive 3D Creator portfolio template featuring magnetic hover effects and dynamic scroll-driven animations.",
    downloadUrl: "/downloads/3d-portfolio.zip",
    livePreviewUrl: "https://3dportfolio-quarix.vercel.app/",
    previewType: "3d",
    accent: "from-violet-400 via-fuchsia-400 to-cyan-400",
    isFree: true,
    previewImage: "/templates/3dportfolio.gif",
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
