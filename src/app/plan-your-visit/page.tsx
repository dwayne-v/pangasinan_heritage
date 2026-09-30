import type { Metadata } from "next";
import { Typography } from "@/components/atoms";

export const metadata: Metadata = { title: "Plan Your Visit" };

export default function PlanYourVisitPage() {
  return (
    <div className="mx-auto max-w-content px-4 py-10 sm:px-6 lg:px-8">
      <Typography variant="h1">Plan Your Visit</Typography>
      <Typography variant="body" className="mt-4 max-w-2xl text-ink-700">
        Getting to Pangasinan&rsquo;s heritage sites, boat rates for Hundred Islands, and a suggested two-day
        itinerary linking Alaminos, Bolinao, and Balungao.
      </Typography>
    </div>
  );
}
