import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Providers from "@/components/Providers";
import "./globals.css";

const SITE_URL = "https://pranavjothivel.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Pranav Jothivel",
  description:
    "Software engineer focused on building thoughtful, high-quality products. Explore my experience, projects, and work.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Pranav Jothivel",
    description:
      "Software engineer focused on building thoughtful, high-quality products. Explore my experience, projects, and work.",
    url: SITE_URL,
    siteName: "Pranav Jothivel",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Pranav Jothivel",
    description:
      "Software engineer focused on building thoughtful, high-quality products. Explore my experience, projects, and work.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          {children}
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
