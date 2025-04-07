import Link from "next/link";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getPopularPosts, getCategories, getTags } from "@/lib/blog";
import { RectangleAd } from "@/components/ads/rectangle-ad";
import { LargeRectangleAd } from "@/components/ads/large-rectangle-ad";

export function BlogSidebar() {
  // In a real app, this would fetch from a CMS or database
  const popularPosts = getPopularPosts();
  const categories = getCategories();
  const tags = getTags();

  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-heading text-lg font-bold mb-4">Search</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search articles..." className="pl-10" />
        </div>
      </div>

      <RectangleAd className="mx-auto" />

      <div>
        <h3 className="font-heading text-lg font-bold mb-4">Popular Posts</h3>
        <div className="space-y-4">
          {popularPosts.map((post) => (
            <div key={post.id} className="flex gap-3">
              <div className="w-16 h-16 rounded-md bg-muted flex-shrink-0"></div>
              <div>
                <h4 className="font-medium line-clamp-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-primary"
                  >
                    {post.title}
                  </Link>
                </h4>
                <p className="text-xs text-muted-foreground">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-heading text-lg font-bold mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex justify-between items-center"
            >
              <Link
                href={`/blog/category/${category.slug}`}
                className="hover:text-primary"
              >
                {category.name}
              </Link>
              <Badge variant="secondary">{category.count}</Badge>
            </div>
          ))}
        </div>
      </div>

      <LargeRectangleAd className="mx-auto" />

      <div>
        <h3 className="font-heading text-lg font-bold mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link key={tag.id} href={`/blog/tag/${tag.slug}`}>
              <Badge
                variant="outline"
                className="hover:bg-primary hover:text-primary-foreground"
              >
                {tag.name}
              </Badge>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-primary/10 rounded-xl p-6">
        <h3 className="font-heading text-lg font-bold mb-2">Newsletter</h3>
        <p className="text-sm mb-4">
          Get the latest fitness tips and workouts delivered to your inbox.
        </p>
        <Input placeholder="Your email" className="mb-2" />
        <Button className="w-full">Subscribe</Button>
      </div>
    </div>
  );
}
