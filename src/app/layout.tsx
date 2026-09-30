import type { Metadata, Viewport } from "next";
import HeaderNavigation from "@/components/organisms/HeaderNavigation";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pangasinan-heritage.example.gov.ph"),
  title: {
    default: "Pangasinan Heritage Digital Showcase",
    template: "%s | Pangasinan Heritage Digital Showcase",
  },
  description:
    "Discover Pangasinan's Hundred Islands, Bolinao Lighthouse, Balungao Hot Spring, and more -- an official digital guide from the Provincial Tourism Office.",
  openGraph: {
    type: "website",
    locale: "en_PH",
    siteName: "Pangasinan Heritage Digital Showcase",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#146083",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col font-body antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <HeaderNavigation />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <footer className="border-t border-sand-200 bg-white py-8">
          <div className="mx-auto max-w-content px-4 text-sm text-ink-500 sm:px-6 lg:px-8">
            <p>
              &copy; {new Date().getFullYear()} Pangasinan Provincial Tourism Office. Built as a static, JAMstack
              site for fast loading on mobile networks across the province.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
