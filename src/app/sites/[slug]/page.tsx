import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Image, Typography, Icon } from "@/components/atoms";
import { heritageSites } from "@/data/heritageSites";

interface PageProps {
  params: { slug: string };
}

// Pre-renders every site to static HTML at build time -- required for
// `output: "export"` and the "deployable as JAMstack" requirement.
export function generateStaticParams() {
  return heritageSites.map((site) => ({ slug: site.slug }));
}

function getSite(slug: string) {
  return heritageSites.find((site) => site.slug === slug);
}

export function generateMetadata({ params }: PageProps): Metadata {
  const site = getSite(params.slug);
  if (!site) return {};
  return { title: site.name, description: site.blurb };
}

export default function SiteDetailPage({ params }: PageProps) {
  const site = getSite(params.slug);
  if (!site) notFound();

  return (
    <article className="mx-auto max-w-content px-4 py-10 sm:px-6 lg:px-8">
      <Image src={site.image} alt={`${site.name} in ${site.municipality}, Pangasinan`} ratio="16:9" priority className="mb-6" />
      <Typography variant="eyebrow">{site.category}</Typography>
      <Typography variant="h1" className="mt-1">
        {site.name}
      </Typography>
      <div className="mt-3 flex flex-wrap items-center gap-5 text-ink-500">
        <span className="flex items-center gap-1.5 text-sm">
          <Icon name="map-pin" size={16} />
          {site.municipality}, Pangasinan
        </span>
        <span className="flex items-center gap-1.5 text-sm">
          <Icon name="clock" size={16} />
          {site.visitDuration}
        </span>
      </div>
      <Typography variant="body" className="mt-6 max-w-2xl text-ink-700">
        {site.blurb}
      </Typography>
    </article>
  );
}
