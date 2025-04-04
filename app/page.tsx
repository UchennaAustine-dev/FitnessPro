import { HeroSection } from "@/components/hero-section";
import { FeaturedPosts } from "@/components/featured-posts";
import { NewsletterCta } from "@/components/newsletter-cta";
import { CategoryHighlights } from "@/components/category-highlights";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection />
      <FeaturedPosts />
      <CategoryHighlights />
      <NewsletterCta />
    </div>
  );
}
