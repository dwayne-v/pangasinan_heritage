import type { Metadata } from "next";
import { Typography } from "@/components/atoms";

export const metadata: Metadata = { title: "About Pangasinan" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-content px-4 py-10 sm:px-6 lg:px-8">
      <Typography variant="h1">About Pangasinan</Typography>
      <Typography variant="body" className="mt-4 max-w-2xl text-ink-700">
        Pangasinan is a coastal province in the Ilocos Region of the Philippines, known for the Lingayen Gulf, the
        Hundred Islands National Park, and a coastline that stretches from Bolinao to Dagupan. This showcase is
        maintained by the Provincial Tourism Office to help visitors plan low-friction, high-value trips using only
        a mobile phone and a light data connection.
      </Typography>
    </div>
  );
}
