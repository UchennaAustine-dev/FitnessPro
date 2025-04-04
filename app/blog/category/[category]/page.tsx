import { BlogPostGrid } from "@/components/blog-post-grid";
import { BlogSidebar } from "@/components/blog-sidebar";
import { Pagination } from "@/components/ui/pagination";
import { getBlogPostsByCategory, getCategoryBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: { category: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Resolve params
  const resolvedParams = await Promise.resolve(params);
  const categorySlug = resolvedParams.category;

  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${category.name} Articles`,
    description: `Browse our collection of ${category.name.toLowerCase()} articles, tips, and guides.`,
    openGraph: {
      title: `${category.name} Articles | FitnessPro`,
      description: `Browse our collection of ${category.name.toLowerCase()} articles, tips, and guides.`,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  // Resolve params
  const resolvedParams = await Promise.resolve(params);
  const categorySlug = resolvedParams.category;

  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const posts = getBlogPostsByCategory(categorySlug);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-heading text-4xl font-bold mb-8">
        {category.name} Articles
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-3/4">
          {posts.length > 0 ? (
            <>
              <p className="text-muted-foreground mb-8">
                Showing {posts.length} articles in {category.name}
              </p>
              <BlogPostGrid posts={posts} />
              <Pagination />
            </>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">No articles found</h2>
              <p className="text-muted-foreground">
                We couldn't find any articles in this category. Please check
                back later.
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
