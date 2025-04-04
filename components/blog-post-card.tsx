import Image from "next/image";
import Link from "next/link";
import { Clock, MessageSquare, Dumbbell } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface BlogPostCardProps {
  post: {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    coverImage: string;
    category: string;
    readTime: number;
    date: string;
    commentCount: number;
    difficulty: "Beginner" | "Intermediate" | "Advanced";
  };
  featured?: boolean;
  className?: string;
}

export function BlogPostCard({
  post,
  featured = false,
  className,
}: BlogPostCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border bg-card text-card-foreground shadow transition-all hover:shadow-md",
        featured && "md:flex-row",
        className
      )}
    >
      <div
        className={cn(
          "relative aspect-video overflow-hidden",
          featured ? "md:w-1/2" : "w-full"
        )}
      >
        <Link href={`/blog/${post.slug}`}>
          <Image
            src={post.coverImage || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        <div className="absolute top-4 left-4">
          <Badge
            variant="secondary"
            className="font-medium bg-white/90 dark:bg-slate-900/90 hover:bg-white dark:hover:bg-slate-900"
          >
            {post.category}
          </Badge>
        </div>

        <div className="absolute top-4 right-4">
          <Badge
            variant={
              post.difficulty === "Beginner"
                ? "outline"
                : post.difficulty === "Intermediate"
                ? "secondary"
                : "default"
            }
            className={
              post.difficulty === "Beginner"
                ? "border-green-500 text-green-600 bg-green-50 dark:bg-green-900/20"
                : post.difficulty === "Intermediate"
                ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
                : "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
            }
          >
            <Dumbbell className="mr-1 h-3 w-3" />
            {post.difficulty}
          </Badge>
        </div>
      </div>

      <div
        className={cn("flex flex-col p-6", featured ? "md:w-1/2" : "w-full")}
      >
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
          <time dateTime={post.date}>{post.date}</time>
          <div className="flex items-center">
            <Clock className="mr-1 h-3 w-3" />
            <span>{post.readTime} min read</span>
          </div>
          <div className="flex items-center">
            <MessageSquare className="mr-1 h-3 w-3" />
            <span>{post.commentCount}</span>
          </div>
        </div>

        <h3 className="font-heading text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        <p className="text-muted-foreground mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="mt-auto">
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            Read More <span className="ml-1">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
