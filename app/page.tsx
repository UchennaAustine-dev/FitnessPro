import { HeroSection } from "@/components/hero-section";
import { FeaturedPosts } from "@/components/featured-posts";
import { NewsletterCta } from "@/components/newsletter-cta";
import { CategoryHighlights } from "@/components/category-highlights";
import { LeaderboardAd } from "@/components/ads/leaderboard-ad";
import { BillboardAd } from "@/components/ads/billboard-ad";
import { StickyAd } from "@/components/ads/sticky-ad";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection />

      <LeaderboardAd className="my-8 mx-auto" />

      <FeaturedPosts />

      <BillboardAd className="my-8 mx-auto" />

      <CategoryHighlights />

      <NewsletterCta />

      <StickyAd />
    </div>
  );
}
