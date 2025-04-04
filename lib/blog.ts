// This is a mock data file that would be replaced with actual API calls to a CMS or database

interface Author {
  name: string;
  avatar?: string;
  role?: string;
}

interface BlogPost {
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
}

interface Category {
  id: string;
  name: string;
  slug: string;
  count: number;
}

interface Tag {
  id: string;
  name: string;
  slug: string;
}

// Mock data
const authors: Author[] = [
  {
    name: "John Doe",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "Fitness Coach",
  },
  {
    name: "Jane Smith",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "Nutritionist",
  },
];

const posts: BlogPost[] = [
  {
    id: "1",
    slug: "hiit-workout-burn-400-calories",
    title: "HIIT Workout: Burn 400 Calories in Just 20 Minutes",
    excerpt:
      "This high-intensity interval training routine is designed to maximize calorie burn in minimal time. Perfect for busy schedules and effective for weight loss.",
    content:
      "<p>High-Intensity Interval Training (HIIT) has revolutionized the fitness world with its ability to deliver maximum results in minimum time. This 20-minute workout is specifically designed to help you burn approximately 400 calories while improving your cardiovascular health and boosting your metabolism.</p><h2 id='why-hiit'>Why HIIT Works</h2><p>HIIT alternates between intense bursts of activity and fixed periods of less-intense activity or complete rest. This approach keeps your heart rate up and burns more fat in less time compared to steady-state cardio exercises.</p><h2 id='the-workout'>The Workout</h2><p>Complete each exercise at maximum effort for 40 seconds, followed by 20 seconds of rest. Repeat the entire circuit 4 times for a total of 20 minutes.</p>",
    coverImage: "/placeholder.svg?height=600&width=1200",
    date: "April 15, 2023",
    author: authors[0],
    category: "HIIT",
    readTime: 5,
    commentCount: 24,
    difficulty: "Intermediate",
    headings: [
      { id: "why-hiit", text: "Why HIIT Works", level: 2 },
      { id: "the-workout", text: "The Workout", level: 2 },
    ],
    workoutPlan:
      "<ul><li><strong>Jump Squats</strong>: 40 seconds</li><li><strong>Push-ups</strong>: 40 seconds</li><li><strong>Burpees</strong>: 40 seconds</li><li><strong>Mountain Climbers</strong>: 40 seconds</li><li><strong>High Knees</strong>: 40 seconds</li></ul><p>Rest 20 seconds between each exercise. Complete 4 rounds.</p>",
  },
  {
    id: "2",
    slug: "proper-squat-form",
    title: "Master the Perfect Squat: Form Guide for All Levels",
    excerpt:
      "Learn the proper squat technique to prevent injuries and maximize results. This comprehensive guide covers common mistakes and how to fix them.",
    content:
      "<p>The squat is often called the king of all exercises, and for good reason. It's a compound movement that engages multiple muscle groups simultaneously, making it incredibly effective for building strength and muscle mass.</p><h2 id='proper-form'>Proper Squat Form</h2><p>Stand with feet shoulder-width apart, toes slightly turned out. Keep your chest up and core engaged. Lower your body by bending at the knees and hips, as if sitting in a chair. Go as low as you can while maintaining proper form, ideally until your thighs are parallel to the ground.</p><h2 id='common-mistakes'>Common Mistakes</h2><p>Many beginners make the mistake of letting their knees cave inward or allowing their heels to lift off the ground. Both can lead to injuries over time.</p>",
    coverImage: "/placeholder.svg?height=600&width=1200",
    date: "March 22, 2023",
    author: authors[0],
    category: "Strength Training",
    readTime: 7,
    commentCount: 17,
    difficulty: "Beginner",
    headings: [
      { id: "proper-form", text: "Proper Squat Form", level: 2 },
      { id: "common-mistakes", text: "Common Mistakes", level: 2 },
    ],
  },
  {
    id: "3",
    slug: "nutrition-guide-muscle-building",
    title: "Complete Nutrition Guide for Muscle Building",
    excerpt:
      "Discover what to eat, when to eat, and how much to eat to maximize muscle growth. Includes meal plans and supplement recommendations.",
    content:
      "<p>Building muscle requires more than just lifting weights. Proper nutrition is essential for providing your body with the building blocks it needs to repair and grow muscle tissue.</p><h2 id='protein-needs'>Protein Requirements</h2><p>Aim for 1.6-2.2g of protein per kg of bodyweight daily. Good sources include lean meats, eggs, dairy, and plant-based options like tofu and legumes.</p><h2 id='carbs-fats'>Carbohydrates and Fats</h2><p>Carbohydrates fuel your workouts and recovery, while healthy fats support hormone production. Don't skimp on either!</p>",
    coverImage: "/placeholder.svg?height=600&width=1200",
    date: "February 10, 2023",
    author: authors[1],
    category: "Nutrition",
    readTime: 10,
    commentCount: 32,
    difficulty: "Intermediate",
    headings: [
      { id: "protein-needs", text: "Protein Requirements", level: 2 },
      { id: "carbs-fats", text: "Carbohydrates and Fats", level: 2 },
    ],
  },
  {
    id: "4",
    slug: "beginners-guide-strength-training",
    title: "Beginner's Guide to Strength Training: Start Strong",
    excerpt:
      "New to lifting weights? This comprehensive guide will teach you everything you need to know to start your strength training journey safely and effectively.",
    content:
      "<p>Strength training is one of the most beneficial forms of exercise for overall health and fitness. It builds muscle, increases bone density, improves metabolism, and enhances quality of life.</p><h2 id='getting-started'>Getting Started</h2><p>Begin with bodyweight exercises to learn proper movement patterns before adding external resistance. Focus on form over weight.</p><h2 id='basic-exercises'>Basic Exercises</h2><p>Master these fundamental movements: squats, push-ups, rows, lunges, and planks. These engage multiple muscle groups and form the foundation of any good program.</p>",
    coverImage: "/placeholder.svg?height=600&width=1200",
    date: "January 5, 2023",
    author: authors[0],
    category: "Strength Training",
    readTime: 8,
    commentCount: 45,
    difficulty: "Beginner",
    headings: [
      { id: "getting-started", text: "Getting Started", level: 2 },
      { id: "basic-exercises", text: "Basic Exercises", level: 2 },
    ],
  },
  {
    id: "5",
    slug: "recovery-techniques-athletes",
    title: "Advanced Recovery Techniques for Serious Athletes",
    excerpt:
      "Optimize your recovery with these science-backed techniques. Learn how proper recovery can enhance performance and prevent overtraining.",
    content:
      "<p>Recovery is just as important as training when it comes to improving performance and achieving fitness goals. Without adequate recovery, you risk overtraining, injury, and diminished results.</p><h2 id='sleep-optimization'>Sleep Optimization</h2><p>Aim for 7-9 hours of quality sleep per night. Create a sleep-conducive environment by keeping your bedroom dark, cool, and free from electronic distractions.</p><h2 id='active-recovery'>Active Recovery</h2><p>Light activity on rest days can enhance blood flow and accelerate recovery. Try walking, swimming, or gentle yoga.</p>",
    coverImage: "/placeholder.svg?height=600&width=1200",
    date: "December 12, 2022",
    author: authors[0],
    category: "Recovery",
    readTime: 6,
    commentCount: 19,
    difficulty: "Advanced",
    headings: [
      { id: "sleep-optimization", text: "Sleep Optimization", level: 2 },
      { id: "active-recovery", text: "Active Recovery", level: 2 },
    ],
  },
  {
    id: "6",
    slug: "cardio-myths-debunked",
    title: "5 Cardio Myths Debunked by Science",
    excerpt:
      "Separate fact from fiction when it comes to cardiovascular exercise. Learn the truth about fat burning zones, fasted cardio, and more.",
    content:
      "<p>There's a lot of misinformation out there about cardio exercise. Let's clear up some common misconceptions with evidence-based facts.</p><h2 id='myth-1'>Myth 1: The Fat-Burning Zone</h2><p>While lower-intensity exercise does burn a higher percentage of calories from fat, higher-intensity exercise burns more total calories and more total fat.</p><h2 id='myth-2'>Myth 2: Fasted Cardio Burns More Fat</h2><p>Research shows that while fasted cardio might burn slightly more fat during the exercise itself, the difference in total fat loss over time is negligible.</p>",
    coverImage: "/placeholder.svg?height=600&width=1200",
    date: "November 8, 2022",
    author: authors[1],
    category: "Cardio",
    readTime: 5,
    commentCount: 27,
    difficulty: "Beginner",
    headings: [
      { id: "myth-1", text: "Myth 1: The Fat-Burning Zone", level: 2 },
      { id: "myth-2", text: "Myth 2: Fasted Cardio Burns More Fat", level: 2 },
    ],
  },
];

const categories: Category[] = [
  { id: "1", name: "Strength Training", slug: "strength-training", count: 24 },
  { id: "2", name: "Cardio", slug: "cardio", count: 18 },
  { id: "3", name: "HIIT", slug: "hiit", count: 15 },
  { id: "4", name: "Nutrition", slug: "nutrition", count: 22 },
  { id: "5", name: "Recovery", slug: "recovery", count: 10 },
];

const tags: Tag[] = [
  { id: "1", name: "Weight Loss", slug: "weight-loss" },
  { id: "2", name: "Muscle Building", slug: "muscle-building" },
  { id: "3", name: "Meal Prep", slug: "meal-prep" },
  { id: "4", name: "Home Workout", slug: "home-workout" },
  { id: "5", name: "Supplements", slug: "supplements" },
  { id: "6", name: "Stretching", slug: "stretching" },
  { id: "7", name: "Running", slug: "running" },
  { id: "8", name: "Bodyweight", slug: "bodyweight" },
];

// Helper functions
export function getBlogPosts(): BlogPost[] {
  return posts;
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return posts.slice(0, 4);
}

export function getPopularPosts(): Pick<
  BlogPost,
  "id" | "title" | "slug" | "date"
>[] {
  return posts
    .sort((a, b) => b.commentCount - a.commentCount)
    .slice(0, 4)
    .map(({ id, title, slug, date }) => ({ id, title, slug, date }));
}

export function getRelatedPosts(
  currentPostId: string,
  category: string
): BlogPost[] {
  return posts
    .filter((post) => post.id !== currentPostId && post.category === category)
    .slice(0, 3);
}

export function getCategories(): Category[] {
  return categories;
}

export function getTags(): Tag[] {
  return tags;
}
