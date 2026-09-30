import NextImage, { ImageProps as NextImageProps } from "next/image";
import clsx from "@/lib/clsx";

export interface ImageProps extends Omit<NextImageProps, "alt" | "placeholder" | "loading"> {
  /** Required (not optional) -- every image must describe itself for screen-reader users. */
  alt: string;
  /** Visual aspect ratio, applied via CSS so layout never shifts while the image streams in. */
  ratio?: "16:9" | "4:3" | "1:1" | "3:4";
  rounded?: boolean;
  /** First image on the page (e.g. hero) should load eagerly + at high priority. */
  priority?: boolean;
}

const RATIO_CLASSES: Record<NonNullable<ImageProps["ratio"]>, string> = {
  "16:9": "aspect-[16/9]",
  "4:3": "aspect-[4/3]",
  "1:1": "aspect-square",
  "3:4": "aspect-[3/4]",
};

/**
 * Atoms / Image
 *
 * Thin, opinionated wrapper around `next/image`. Centralizes three
 * performance/accessibility rules the whole site must follow:
 *   1. Every image reserves its box (via `ratio`) before it loads, so
 *      the layout never jumps on a slow connection.
 *   2. `alt` is required at the type level, not just convention.
 *   3. Everything lazy-loads except explicit `priority` images (LCP
 *      hero/heritage-card imagery above the fold).
 */
export default function Image({
  alt,
  ratio = "4:3",
  rounded = true,
  priority = false,
  className,
  fill = true,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  ...rest
}: ImageProps) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden bg-sand-200",
        RATIO_CLASSES[ratio],
        rounded && "rounded-card",
        className
      )}
    >
      <NextImage
        alt={alt}
        fill={fill}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        priority={priority}
        className="object-cover"
        {...rest}
      />
    </div>
  );
}
