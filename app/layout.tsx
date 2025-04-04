import type React from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
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

const oswald = localFont({
  src: [
    {
      path: "../public/fonts/Oswald-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Oswald-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FitnessPro | Health & Fitness Blog",
  description:
    "Expert fitness advice, workout plans, and nutrition tips for all levels",
  keywords: ["fitness", "workout", "health", "nutrition", "exercise"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${oswald.variable} font-sans`}>
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
