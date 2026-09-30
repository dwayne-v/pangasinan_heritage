import { SVGAttributes } from "react";

export type IconName = "map-pin" | "search" | "menu" | "close" | "arrow-right" | "clock";

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  name: IconName;
  size?: number;
  /** Accessible label. Omit when the icon is purely decorative and sits next to visible text. */
  label?: string;
}

const PATHS: Record<IconName, string> = {
  "map-pin": "M12 22s7-7.58 7-12.5A7 7 0 0 0 5 9.5C5 14.42 12 22 12 22Zm0-9.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z",
  search: "M21 21l-4.34-4.34m0 0A7.5 7.5 0 1 0 6.16 6.16a7.5 7.5 0 0 0 10.5 10.5Z",
  menu: "M3 6h18M3 12h18M3 18h18",
  close: "M18 6 6 18M6 6l12 12",
  "arrow-right": "M5 12h14M13 6l6 6-6 6",
  clock: "M12 8v4l3 3M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
};

/**
 * Atoms / Icon
 *
 * One inline-SVG sprite sheet as a single tree-shaken component
 * instead of an icon-font (no extra network request, no FOIT/FOUT,
 * <1KB per icon) -- important for the "lightning fast on 3G/4G"
 * requirement. Stroke-based so icons inherit `currentColor` and scale
 * losslessly at any size/DPI.
 */
export default function Icon({ name, size = 20, label, className, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      {...rest}
    >
      <path d={PATHS[name]} />
    </svg>
  );
}
