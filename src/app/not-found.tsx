import Link from "next/link";
import { Typography } from "@/components/atoms";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-content px-4 py-20 text-center sm:px-6 lg:px-8">
      <Typography variant="h1">Page not found</Typography>
      <Typography variant="body" className="mt-3 text-ink-700">
        The page you&rsquo;re looking for may have moved.{" "}
        <Link href="/" className="text-ocean-600 underline">
          Return home
        </Link>
        .
      </Typography>
    </div>
  );
}
