import { BlogPostGrid } from "@/components/blog-post-grid";
import { BlogSidebar } from "@/components/blog-sidebar";
import { Pagination } from "@/components/ui/pagination";
import { getBlogPostsByTag, getTagBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: { tag: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Resolve params
  const resolvedParams = await Promise.resolve(params);
  const tagSlug = resolvedParams.tag;

  const tag = getTagBySlug(tagSlug);

  if (!tag) {
    return {
      title: "Tag Not Found",
    };
  }

  return {
    title: `${tag.name} Articles`,
    description: `Browse our collection of articles tagged with ${tag.name.toLowerCase()}.`,
    openGraph: {
      title: `${tag.name} Articles | FitnessPro`,
      description: `Browse our collection of articles tagged with ${tag.name.toLowerCase()}.`,
    },
  };
}

export default async function TagPage({ params }: Props) {
  // Resolve params
  const resolvedParams = await Promise.resolve(params);
  const tagSlug = resolvedParams.tag;

  const tag = getTagBySlug(tagSlug);

  if (!tag) {
    notFound();
  }

  const posts = getBlogPostsByTag(tagSlug);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-heading text-4xl font-bold mb-8">
        Articles Tagged: {tag.name}
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-3/4">
          {posts.length > 0 ? (
            <>
              <p className="text-muted-foreground mb-8">
                Showing {posts.length} articles tagged with {tag.name}
              </p>
              <BlogPostGrid posts={posts} />
              <Pagination />
            </>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">No articles found</h2>
              <p className="text-muted-foreground">
                We couldn't find any articles with this tag. Please check back
                later.
              </p>
            </div>
          )}
        </div>
        <div className="w-full md:w-1/4">
          <BlogSidebar />
        </div>
      </div>
    </div>
  );
}
