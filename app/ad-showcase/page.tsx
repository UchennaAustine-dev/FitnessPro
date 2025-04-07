import type React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RectangleAd } from "@/components/ads/rectangle-ad";
import { LargeRectangleAd } from "@/components/ads/large-rectangle-ad";
import { LeaderboardAd } from "@/components/ads/leaderboard-ad";
import { BillboardAd } from "@/components/ads/billboard-ad";
import { StickyAd } from "@/components/ads/sticky-ad";
import { InterstitialAd } from "@/components/ads/interstitial-ad";
import { ParallaxAd } from "@/components/ads/parallax-ad";
import { AdUnit } from "@/components/ads/ad-unit";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ad Showcase | FitnessPro",
  description: "A showcase of all ad formats used on FitnessPro",
};

export default function AdShowcasePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
          Ad Showcase
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          This page demonstrates all the different ad formats used throughout
          the FitnessPro website.
        </p>
      </div>

      <Tabs defaultValue="standard" className="mb-12">
        <TabsList className="flex flex-wrap justify-center mb-8">
          <TabsTrigger value="standard">Standard Ads</TabsTrigger>
          <TabsTrigger value="special">Special Formats</TabsTrigger>
          <TabsTrigger value="notification">Notification Ads</TabsTrigger>
        </TabsList>

        <TabsContent value="standard">
          <div className="grid grid-cols-1 gap-8">
            <AdCard
              title="Rectangle Ad (300x250)"
              description="Standard IAB rectangle ad format, commonly used in sidebars and within content."
            >
              <RectangleAd className="mx-auto" />
            </AdCard>

            <AdCard
              title="Large Rectangle Ad (300x600)"
              description="Larger vertical ad format, often used in sidebars for better visibility."
            >
              <LargeRectangleAd className="mx-auto" />
            </AdCard>

            <AdCard
              title="Leaderboard Ad (728x90)"
              description="Horizontal banner typically placed at the top or bottom of content."
            >
              <LeaderboardAd className="mx-auto" />
            </AdCard>

            <AdCard
              title="Billboard Ad (750x400)"
              description="Large format ad that provides high visibility within content."
            >
              <BillboardAd className="mx-auto" />
            </AdCard>
          </div>
        </TabsContent>

        <TabsContent value="special">
          <div className="grid grid-cols-1 gap-8">
            <AdCard
              title="Sticky Ad"
              description="Ad that remains visible as the user scrolls down the page."
            >
              <StickyAd className="mx-auto" />
            </AdCard>

            <AdCard
              title="Interstitial Ad"
              description="Full-screen ad that appears between page transitions."
            >
              <InterstitialAd className="mx-auto" />
            </AdCard>

            <AdCard
              title="Interstitial Ad (Variation 2)"
              description="Alternative interstitial ad format."
            >
              <InterstitialAd number={2} className="mx-auto" />
            </AdCard>

            <AdCard
              title="Parallax Ad"
              description="Ad that creates a 3D effect as users scroll through the page."
            >
              <ParallaxAd className="mx-auto" />
            </AdCard>
          </div>
        </TabsContent>

        <TabsContent value="notification">
          <div className="grid grid-cols-1 gap-8">
            <AdCard
              title="Notification Ad (Vertical 1)"
              description="Notification-style ad that appears in the corner of the screen."
            >
              <AdUnit
                notification={1}
                sizesDesktop="120x600,160x600,300x600,336x280"
                sizesMobile="120x600,160x600,300x600,336x280"
                className="mx-auto"
              />
            </AdCard>

            <AdCard
              title="Notification Ad (Vertical 2)"
              description="Alternative vertical notification ad."
            >
              <AdUnit
                notification={2}
                sizesDesktop="120x600,160x600,300x600,336x280"
                sizesMobile="120x600,160x600,300x600,336x280"
                className="mx-auto"
              />
            </AdCard>

            <AdCard
              title="Notification Ad (Rectangle 1)"
              description="Rectangle notification ad format."
            >
              <AdUnit
                notification={3}
                sizesDesktop="200x200,250x250,300x250,336x280"
                sizesMobile="200x200,250x250,300x250,300x50,320x100,320x50,360x100,360x50"
                className="mx-auto"
              />
            </AdCard>

            <AdCard
              title="Notification Ad (Rectangle 2)"
              description="Alternative rectangle notification ad."
            >
              <AdUnit
                notification={4}
                sizesDesktop="200x200,250x250,300x250,336x280"
                sizesMobile="200x200,250x250,300x250,300x50,320x100,320x50,360x100,360x50"
                className="mx-auto"
              />
            </AdCard>

            <AdCard
              title="Notification Ad (Rectangle 3)"
              description="Third variation of rectangle notification ad."
            >
              <AdUnit
                notification={5}
                sizesDesktop="200x200,250x250,300x250,336x280"
                sizesMobile="200x200,250x250,300x250,300x50,320x100,320x50,360x100,360x50"
                className="mx-auto"
              />
            </AdCard>

            <AdCard
              title="Notification Ad (Rectangle 4)"
              description="Fourth variation of rectangle notification ad."
            >
              <AdUnit
                notification={6}
                sizesDesktop="200x200,250x250,300x250,336x280"
                sizesMobile="200x200,250x250,300x250,300x50,320x100,320x50,360x100,360x50"
                className="mx-auto"
              />
            </AdCard>

            <AdCard
              title="Notification Ad (Mobile Banner 1)"
              description="Mobile-optimized notification banner."
            >
              <AdUnit
                notification={7}
                sizesDesktop="300x50,320x100,320x50,360x100,360x50"
                sizesMobile="300x50,320x100,320x50,360x100,360x50"
                className="mx-auto"
              />
            </AdCard>

            <AdCard
              title="Notification Ad (Mobile Banner 2)"
              description="Alternative mobile notification banner."
            >
              <AdUnit
                notification={8}
                sizesDesktop="300x50,320x100,320x50,360x100,360x50"
                sizesMobile="300x50,320x100,320x50,360x100,360x50"
                className="mx-auto"
              />
            </AdCard>

            <AdCard
              title="Notification Ad (Mobile Banner 3)"
              description="Third variation of mobile notification banner."
            >
              <AdUnit
                notification={9}
                sizesDesktop="300x50,320x100,320x50,360x100,360x50"
                sizesMobile="300x50,320x100,320x50,360x100,360x50"
                className="mx-auto"
              />
            </AdCard>

            <AdCard
              title="Notification Ad (Mobile Banner 4)"
              description="Fourth variation of mobile notification banner."
            >
              <AdUnit
                notification={10}
                sizesDesktop="300x50,320x100,320x50,360x100,360x50"
                sizesMobile="300x50,320x100,320x50,360x100,360x50"
                className="mx-auto"
              />
            </AdCard>
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-muted p-6 rounded-lg mt-12">
        <h2 className="font-heading text-2xl font-bold mb-4">
          Ad Implementation Notes
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            All ads are responsive and will adapt to different screen sizes
          </li>
          <li>Ads are integrated with the GDPR consent system</li>
          <li>Interstitial ads appear only once per session</li>
          <li>Sticky ads remain visible while scrolling</li>
          <li>Notification ads appear in the corner of the screen</li>
          <li>Parallax ads create a 3D effect when scrolling</li>
        </ul>
      </div>
    </div>
  );
}

interface AdCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

function AdCard({ title, description, children }: AdCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">{children}</CardContent>
    </Card>
  );
}
