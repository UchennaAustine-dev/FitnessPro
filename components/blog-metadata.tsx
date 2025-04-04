import { Clock, Calendar, Dumbbell } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface BlogMetadataProps {
  category: string;
  readTime: number;
  date: string;
  difficulty?: "Beginner" | "Intermediate" | "Advanced";
  className?: string;
}

export function BlogMetadata({
  category,
  readTime,
  date,
  difficulty,
  className,
}: BlogMetadataProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-4 text-sm text-muted-foreground",
        className
      )}
    >
      <Badge variant="secondary">{category}</Badge>

      <div className="flex items-center">
        <Clock className="mr-1 h-4 w-4" />
        <span>{readTime} min read</span>
      </div>

      <div className="flex items-center">
        <Calendar className="mr-1 h-4 w-4" />
        <time dateTime={date}>{date}</time>
      </div>

      {difficulty && (
        <Badge
          variant={
            difficulty === "Beginner"
              ? "outline"
              : difficulty === "Intermediate"
              ? "secondary"
              : "default"
          }
          className={
            difficulty === "Beginner"
              ? "border-green-500 text-green-600 bg-green-50 dark:bg-green-900/20"
              : difficulty === "Intermediate"
              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
              : "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
          }
        >
          <Dumbbell className="mr-1 h-3 w-3" />
          {difficulty}
        </Badge>
      )}
    </div>
  );
}
