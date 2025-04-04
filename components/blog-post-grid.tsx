import { BlogPostCard } from "@/components/blog-post-card";
import { getBlogPosts } from "@/lib/blog";
import type { BlogPost } from "@/types/blog";

interface BlogPostGridProps {
  posts?: BlogPost[];
}

export function BlogPostGrid({ posts: propPosts }: BlogPostGridProps) {
  // Use provided posts or fetch all posts if none provided
  const posts = propPosts || getBlogPosts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
      {posts.map((post) => (
        <BlogPostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
