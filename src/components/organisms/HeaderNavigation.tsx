"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button, Icon, Typography } from "@/components/atoms";
import { NavigationItem } from "@/components/molecules";

const ROUTES: { href: string; label: string; icon: "map-pin" }[] = [
  { href: "/", label: "Home", icon: "map-pin" },
  { href: "/sites", label: "Heritage Sites", icon: "map-pin" },
  { href: "/plan-your-visit", label: "Plan Your Visit", icon: "map-pin" },
  { href: "/about", label: "About Pangasinan", icon: "map-pin" },
];

/**
 * Organisms / HeaderNavigation
 *
 * Sticky site header combining the wordmark, the desktop
 * NavigationItem list, and a mobile hamburger toggle built from the
 * Button + Icon atoms. Present on every route (rendered once in
 * `app/layout.tsx`), so its accessibility choices -- skip link
 * target, `aria-expanded` menu button, focus-visible ring -- protect
 * every page at once.
 *
 * Responsive logic: below the `lg` breakpoint the inline nav list is
 * replaced by a collapsed menu button; expanding it reveals a
 * block-variant NavigationItem list in a full-width drawer instead of
 * cramming a horizontal bar onto a narrow viewport.
 */
export default function HeaderNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-sand-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Typography variant="h3" as="span" className="!font-display !text-xl text-ocean-700">
            Pangasinan Heritage
          </Typography>
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex lg:items-center lg:gap-1">
          {ROUTES.map((route) => (
            <NavigationItem key={route.href} href={route.href} label={route.label} isActive={pathname === route.href} />
          ))}
        </nav>

        <Button
          variant="ghost"
          size="sm"
          className="lg:hidden !px-2.5"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <Icon name={isMenuOpen ? "close" : "menu"} label={isMenuOpen ? "Close menu" : "Open menu"} />
        </Button>
      </div>

      {isMenuOpen && (
        <nav id="mobile-nav" aria-label="Primary" className="border-t border-sand-200 bg-white px-4 py-3 lg:hidden">
          <ul role="list" className="flex flex-col gap-1">
            {ROUTES.map((route) => (
              <li key={route.href}>
                <NavigationItem
                  href={route.href}
                  label={route.label}
                  icon={route.icon}
                  isActive={pathname === route.href}
                  variant="block"
                />
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
