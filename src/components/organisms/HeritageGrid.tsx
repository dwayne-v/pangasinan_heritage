"use client";

import { useMemo, useState } from "react";
import { Typography } from "@/components/atoms";
import { HeritageCard, SearchForm } from "@/components/molecules";
import type { HeritageSite } from "@/data/heritageSites";

export interface HeritageGridProps {
  sites: HeritageSite[];
  title?: string;
}

/**
 * Organisms / HeritageGrid
 *
 * The main content organism of the showcase's landing/listing page:
 * a SearchForm molecule filtering a responsive grid of HeritageCard
 * molecules. This is the only place that owns the "which sites are
 * currently visible" state -- cards and the search box stay dumb and
 * reusable elsewhere.
 *
 * Responsive: 1 column on mobile, 2 on tablet (>=640px), 3 on desktop
 * (>=1024px). Grid, not flex, so the last row never stretches oddly
 * when the count isn't a multiple of the column count.
 */
export default function HeritageGrid({ sites, title = "Explore Pangasinan's Heritage Sites" }: HeritageGridProps) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query) return sites;
    const q = query.toLowerCase();
    return sites.filter(
      (site) =>
        site.name.toLowerCase().includes(q) ||
        site.municipality.toLowerCase().includes(q) ||
        site.category.toLowerCase().includes(q)
    );
  }, [sites, query]);

  return (
    <section aria-labelledby="heritage-grid-heading" className="mx-auto max-w-content px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <Typography variant="h2" id="heritage-grid-heading">
          {title}
        </Typography>
        <SearchForm onSearch={setQuery} />
      </div>

      {filtered.length === 0 ? (
        <Typography variant="body" role="status" className="text-ink-500">
          No sites match &ldquo;{query}&rdquo;. Try searching a municipality like Bolinao or Alaminos.
        </Typography>
      ) : (
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((site, index) => (
            <li key={site.slug}>
              <HeritageCard site={site} priority={index < 3} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
