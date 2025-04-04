import Link from "next/link";
import { BlogPostCard } from "@/components/blog-post-card";
import { Button } from "@/components/ui/button";
import { getFeaturedPosts } from "@/lib/blog";

export function FeaturedPosts() {
  // In a real app, this would fetch from a CMS or database
  const featuredPosts = getFeaturedPosts();

  return (
    <section className="py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-heading text-3xl font-bold">Featured Articles</h2>
        <Button variant="outline" asChild>
          <Link href="/blog">View All</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {featuredPosts.slice(0, 1).map((post) => (
          <BlogPostCard key={post.id} post={post} featured />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {featuredPosts.slice(1, 4).map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
