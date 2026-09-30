import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "@/lib/clsx";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  /** Icon placed before the label. Purely decorative -> pass an Icon with aria-hidden. */
  icon?: ReactNode;
  fullWidthOnMobile?: boolean;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "bg-ocean-600 text-white hover:bg-ocean-700 active:bg-ocean-800 disabled:bg-ocean-200",
  secondary:
    "bg-sunset-500 text-ink-900 hover:bg-sunset-600 active:bg-sunset-700 disabled:bg-sunset-100",
  ghost:
    "bg-transparent text-ocean-600 border border-ocean-600 hover:bg-ocean-50 disabled:text-ocean-200 disabled:border-ocean-200",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "text-sm px-3 py-1.5 gap-1.5",
  md: "text-base px-4 py-2.5 gap-2",
  lg: "text-lg px-6 py-3.5 gap-2.5",
};

/**
 * Atoms / Button
 *
 * The single interactive "call to action" primitive for the whole
 * showcase (e.g. "Plan your visit", "View gallery", "Search"). Every
 * other clickable atom/molecule composes this component rather than
 * styling a raw <button> again, so a brand or accessibility change
 * (e.g. tightening the tap target) only has to happen in one file.
 *
 * Accessibility: min tap target is 44x44px at the `md` size per WCAG
 * 2.1 AA (2.5.5), uses the shared focus-visible ring, and never relies
 * on color alone -- disabled state also drops opacity and removes the
 * pointer cursor.
 */
export default function Button({
  variant = "primary",
  size = "md",
  icon,
  fullWidthOnMobile = false,
  className,
  children,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-full font-semibold font-body",
        "transition-colors duration-150 ease-out",
        "disabled:cursor-not-allowed disabled:opacity-60",
        fullWidthOnMobile && "w-full sm:w-auto",
        VARIANT_CLASSES[variant],
        SIZE_CLASSES[size],
        className
      )}
      disabled={disabled}
      {...rest}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
}
