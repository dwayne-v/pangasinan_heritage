import type { Metadata } from "next";
import { HeritageGrid } from "@/components/organisms";
import { heritageSites } from "@/data/heritageSites";

export const metadata: Metadata = { title: "Heritage Sites" };

export default function SitesPage() {
  return <HeritageGrid sites={heritageSites} title="All Heritage Sites" />;
}
