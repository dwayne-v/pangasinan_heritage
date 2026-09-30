import Link from "next/link";
import { Image, Typography, Icon } from "@/components/atoms";
import type { HeritageSite } from "@/data/heritageSites";

export interface HeritageCardProps {
  site: HeritageSite;
  /** First few cards above the fold should be priority-loaded. */
  priority?: boolean;
}

/**
 * Molecules / HeritageCard
 *
 * Combines the Image, Typography, and Icon atoms into the one
 * repeating unit used to preview a tourist site. Used exclusively
 * inside the HeritageGrid organism -- it should never be used to
 * display anything other than a `HeritageSite` record.
 *
 * The whole card is a single tap target on mobile (the wrapping
 * `<Link>` covers the card via `after:absolute after:inset-0`) so
 * users on a phone do not have to precisely hit a small link.
 */
export default function HeritageCard({ site, priority = false }: HeritageCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-card bg-white shadow-sm ring-1 ring-sand-200 transition-shadow hover:shadow-md">
      <Image
        src={site.image}
        alt={`${site.name} in ${site.municipality}, Pangasinan`}
        ratio="4:3"
        priority={priority}
        rounded={false}
      />
      <div className="flex flex-1 flex-col gap-2 p-4">
        <Typography variant="eyebrow">{site.category}</Typography>
        <Typography variant="h3" as="h3" className="!text-lg">
          <Link href={`/sites/${site.slug}`} className="after:absolute after:inset-0 focus-visible:outline-none">
            {site.name}
          </Link>
        </Typography>
        <Typography variant="bodySmall" className="text-ink-700 line-clamp-3">
          {site.blurb}
        </Typography>
        <div className="mt-auto flex items-center gap-4 pt-2 text-ink-500">
          <span className="flex items-center gap-1 text-xs">
            <Icon name="map-pin" size={14} />
            {site.municipality}
          </span>
          <span className="flex items-center gap-1 text-xs">
            <Icon name="clock" size={14} />
            {site.visitDuration}
          </span>
        </div>
      </div>
    </article>
  );
}
