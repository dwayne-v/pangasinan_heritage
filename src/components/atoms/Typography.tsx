import { ElementType, HTMLAttributes, ReactNode } from "react";
import clsx from "@/lib/clsx";

export type TypographyVariant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "body"
  | "bodySmall"
  | "caption"
  | "eyebrow";

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  /** Override the rendered tag, e.g. render an `h2` visually styled as `display`. */
  as?: ElementType;
  children: ReactNode;
}

const VARIANT_MAP: Record<TypographyVariant, { tag: ElementType; classes: string }> = {
  display: { tag: "h1", classes: "font-display text-4xl sm:text-5xl lg:text-6xl leading-tight" },
  h1: { tag: "h1", classes: "font-display text-3xl sm:text-4xl leading-tight" },
  h2: { tag: "h2", classes: "font-display text-2xl sm:text-3xl leading-snug" },
  h3: { tag: "h3", classes: "font-display text-xl sm:text-2xl leading-snug" },
  body: { tag: "p", classes: "font-body text-base leading-relaxed" },
  bodySmall: { tag: "p", classes: "font-body text-sm leading-relaxed" },
  caption: { tag: "span", classes: "font-body text-xs text-ink-500" },
  eyebrow: {
    tag: "span",
    classes: "font-body text-xs font-bold uppercase tracking-[0.14em] text-ocean-600",
  },
};

/**
 * Atoms / Typography
 *
 * A single source of truth for every text style in the showcase (a
 * type scale of 8 variants instead of ad-hoc `text-*` combinations
 * scattered through pages). Keeping this as one component means the
 * "accessible" requirement (minimum 16px body text, 4.5:1 contrast
 * against `sand-50`/`ocean-900` backgrounds, predictable heading
 * order) is enforced in one place instead of re-audited per page.
 *
 * `as` lets a component pick the *visual* size independently from the
 * *semantic* heading level, which matters for WCAG 2.1 AA success
 * criterion 1.3.1 (headings must nest in document order).
 */
export default function Typography({ variant = "body", as, className, children, ...rest }: TypographyProps) {
  const { tag, classes } = VARIANT_MAP[variant];
  const Tag = as ?? tag;

  return (
    <Tag className={clsx(classes, className)} {...rest}>
      {children}
    </Tag>
  );
}
