import { BlogPostCard } from "@/components/blog-post-card";
import { getBlogPosts } from "@/lib/blog";

export function BlogPostGrid() {
  // In a real app, this would fetch from a CMS or database
  const posts = getBlogPosts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
      {posts.map((post) => (
        <BlogPostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
