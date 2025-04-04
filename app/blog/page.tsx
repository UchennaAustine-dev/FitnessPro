import { BlogPostGrid } from "@/components/blog-post-grid";
import { BlogSidebar } from "@/components/blog-sidebar";
import { Pagination } from "@/components/ui/pagination";
import { CategoryFilter } from "@/components/category-filter";

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-heading text-4xl font-bold mb-8">Fitness Blog</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-3/4">
          <CategoryFilter />
          <BlogPostGrid />
          <Pagination />
        </div>
        <div className="w-full md:w-1/4">
          <BlogSidebar />
        </div>
      </div>
    </div>
  );
}
