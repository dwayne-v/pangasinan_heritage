import { Button, Typography } from "@/components/atoms";
import { HeritageGrid } from "@/components/organisms";
import { heritageSites } from "@/data/heritageSites";

export default function HomePage() {
  return (
    <>
      <section className="bg-ocean-700">
        <div className="mx-auto flex max-w-content flex-col gap-4 px-4 py-14 sm:px-6 lg:px-8">
          <Typography variant="eyebrow" className="!text-sunset-300">
            Provincial Tourism Office
          </Typography>
          <Typography variant="display" className="max-w-2xl text-sand-50">
            Pangasinan, where a hundred islands meet the coast.
          </Typography>
          <div className="mt-2">
            <Button variant="secondary" size="lg" fullWidthOnMobile>
              Start exploring
            </Button>
          </div>
        </div>
      </section>

      <HeritageGrid sites={heritageSites} />
    </>
  );
}
