"use client";

import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getCategories } from "@/lib/blog";

export function CategoryFilter() {
  const categories = getCategories();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="flex items-center justify-between">
      <div className="text-sm text-muted-foreground">
        Showing{" "}
        {selectedCategory ? `${selectedCategory} articles` : "all articles"}
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center gap-1">
            {selectedCategory || "All Categories"}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuGroup>
            <DropdownMenuItem
              onClick={() => setSelectedCategory(null)}
              className="flex items-center justify-between"
            >
              <span>All Categories</span>
              {!selectedCategory && <Check className="h-4 w-4" />}
            </DropdownMenuItem>

            {categories.map((category) => (
              <DropdownMenuItem
                key={category.id}
                onClick={() => setSelectedCategory(category.name)}
                className="flex items-center justify-between"
              >
                <span>{category.name}</span>
                {selectedCategory === category.name && (
                  <Check className="h-4 w-4" />
                )}
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
