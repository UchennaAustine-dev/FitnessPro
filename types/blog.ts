export interface Author {
  name: string;
  avatar?: string;
  role?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  author: Author;
  category: string;
  readTime: number;
  commentCount: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  headings: { id: string; text: string; level: number }[];
  workoutPlan?: string;
  tags?: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  count: number;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}
