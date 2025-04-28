import { HeroSection } from "@/components/hero-section";
import { FeaturedPosts } from "@/components/featured-posts";
import { NewsletterCta } from "@/components/newsletter-cta";
import { CategoryHighlights } from "@/components/category-highlights";
import { LeaderboardAd } from "@/components/ads/leaderboard-ad";
import { BillboardAd } from "@/components/ads/billboard-ad";
import { StickyAd } from "@/components/ads/sticky-ad";
import { generateWebsiteSchema } from "@/lib/schema";
import { AdPlacement } from "@/components/ads/ad-placement";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateWebsiteSchema()),
        }}
      />
      <HeroSection />

      <LeaderboardAd className="my-8 mx-auto" />
      <AdPlacement adId="c2" className="my-8 flex justify-center" />
      <FeaturedPosts />
      <AdPlacement adId="c3" className="my-8 flex justify-center" />
      <BillboardAd className="my-8 mx-auto" />

      <CategoryHighlights />
      <AdPlacement adId="c4" className="my-8 flex justify-center" />
      <NewsletterCta />

      <StickyAd />
    </div>
  );
}
