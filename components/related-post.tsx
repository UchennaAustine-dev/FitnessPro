import { BlogPostCard } from "@/components/blog-post-card";
import { getRelatedPosts } from "@/lib/blog";

interface RelatedPostsProps {
  currentPostId: string;
  category: string;
}

export function RelatedPosts({ currentPostId, category }: RelatedPostsProps) {
  // In a real app, this would fetch from a CMS or database
  const relatedPosts = getRelatedPosts(currentPostId, category);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 className="font-heading text-2xl font-bold mb-6">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
