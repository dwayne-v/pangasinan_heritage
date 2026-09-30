import Link from "next/link";
import clsx from "@/lib/clsx";
import { Icon, IconProps } from "@/components/atoms";

export interface NavigationItemProps {
  href: string;
  label: string;
  icon?: IconProps["name"];
  isActive?: boolean;
  /** Renders as a block row (mobile drawer) instead of an inline pill (desktop bar). */
  variant?: "inline" | "block";
}

/**
 * Molecules / NavigationItem
 *
 * One link + optional icon, aware of its own "current page" state.
 * Repeats inside the HeaderNavigation organism to build both the
 * desktop nav bar and the mobile slide-down menu from the same list
 * of routes, so adding a page means adding one array entry, not
 * editing markup in two places.
 */
export default function NavigationItem({ href, label, icon, isActive = false, variant = "inline" }: NavigationItemProps) {
  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={clsx(
        "flex items-center gap-2 font-body font-medium transition-colors",
        variant === "inline" ? "rounded-full px-3 py-2 text-sm" : "w-full rounded-lg px-4 py-3 text-base",
        isActive ? "bg-ocean-50 text-ocean-700" : "text-ink-700 hover:bg-ocean-50 hover:text-ocean-700"
      )}
    >
      {icon && <Icon name={icon} size={18} />}
      {label}
    </Link>
  );
}
