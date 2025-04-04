import type React from "react";
import type { Metadata, Viewport } from "next";
import { Montserrat, Oswald } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SonnerProvider } from "@/components/sonner-provider";
import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";
import { Analytics } from "@/components/analytics";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-oswald",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#171717" },
  ],
};

export const metadata: Metadata = {
  title: {
    template: "%s | FitnessPro",
    default: "FitnessPro | Health & Fitness Blog",
  },
  description:
    "Expert fitness advice, workout plans, and nutrition tips for all levels",
  keywords: [
    "fitness",
    "workout",
    "health",
    "nutrition",
    "exercise",
    "strength training",
    "cardio",
    "yoga",
  ],
  authors: [{ name: "FitnessPro Team" }],
  creator: "FitnessPro",
  publisher: "FitnessPro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://fitnesspro.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fitnesspro.com",
    siteName: "FitnessPro",
    title: "FitnessPro | Health & Fitness Blog",
    description:
      "Expert fitness advice, workout plans, and nutrition tips for all levels",
    images: [
      {
        url: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&dpr=1",
        width: 1200,
        height: 630,
        alt: "FitnessPro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FitnessPro | Health & Fitness Blog",
    description:
      "Expert fitness advice, workout plans, and nutrition tips for all levels",
    images: [
      "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&dpr=1",
    ],
    creator: "@fitnesspro",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${oswald.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <SonnerProvider />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
