import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NewsletterCta } from "@/components/newsletter-cta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nutrition Resources | FitnessPro",
  description:
    "Explore science-backed nutrition advice, meal plans, recipes, and supplement guides to fuel your fitness journey.",
  openGraph: {
    title: "Nutrition Resources | FitnessPro",
    description:
      "Explore science-backed nutrition advice, meal plans, recipes, and supplement guides to fuel your fitness journey.",
    images: [
      {
        url: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&dpr=1",
        width: 1200,
        height: 630,
        alt: "Nutrition Resources",
      },
    ],
  },
};

const nutritionCategories = [
  { id: "meal-plans", name: "Meal Plans" },
  { id: "recipes", name: "Recipes" },
  { id: "supplements", name: "Supplements" },
  { id: "guides", name: "Nutrition Guides" },
];

const nutritionContent = [
  {
    id: "1",
    title: "7-Day Muscle Building Meal Plan",
    description:
      "A complete week of high-protein meals designed to support muscle growth and recovery.",
    image:
      "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1",
    category: "meal-plans",
    slug: "muscle-building-meal-plan",
  },
  {
    id: "2",
    title: "High-Protein Breakfast Recipes",
    description:
      "Start your day right with these protein-packed breakfast options that keep you full and energized.",
    image:
      "https://images.pexels.com/photos/1580466/pexels-photo-1580466.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1",
    category: "recipes",
    slug: "high-protein-breakfast",
  },
  {
    id: "3",
    title: "Complete Guide to Protein Supplements",
    description:
      "Learn about different types of protein supplements and how to choose the right one for your goals.",
    image:
      "https://images.pexels.com/photos/3735704/pexels-photo-3735704.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1",
    category: "supplements",
    slug: "protein-supplements-guide",
  },
  {
    id: "4",
    title: "Nutrition for Fat Loss",
    description:
      "Evidence-based strategies for creating a sustainable nutrition plan that promotes fat loss.",
    image:
      "https://images.pexels.com/photos/1346155/pexels-photo-1346155.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1",
    category: "guides",
    slug: "nutrition-fat-loss",
  },
  {
    id: "5",
    title: "Post-Workout Nutrition Guide",
    description:
      "Optimize recovery and results with proper post-workout nutrition timing and composition.",
    image:
      "https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1",
    category: "guides",
    slug: "post-workout-nutrition",
  },
  {
    id: "6",
    title: "Healthy Meal Prep for Busy Athletes",
    description:
      "Time-saving meal prep strategies and recipes for athletes with packed schedules.",
    image:
      "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1",
    category: "meal-plans",
    slug: "meal-prep-busy-athletes",
  },
  {
    id: "7",
    title: "Protein-Packed Smoothie Recipes",
    description:
      "Delicious and nutritious smoothie recipes that deliver protein, vitamins, and minerals.",
    image:
      "https://images.pexels.com/photos/775031/pexels-photo-775031.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1",
    category: "recipes",
    slug: "protein-smoothie-recipes",
  },
  {
    id: "8",
    title: "Pre-Workout Supplements: What Works",
    description:
      "An evidence-based look at pre-workout supplements and their effects on performance.",
    image:
      "https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1",
    category: "supplements",
    slug: "pre-workout-supplements",
  },
];

export default function NutritionPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
          Nutrition Resources
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Fuel your fitness journey with science-backed nutrition advice, meal
          plans, recipes, and supplement guides.
        </p>
      </div>

      <Tabs defaultValue="all" className="mb-12">
        <TabsList className="flex flex-wrap justify-center mb-8">
          <TabsTrigger value="all">All Resources</TabsTrigger>
          {nutritionCategories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent
          value="all"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {nutritionContent.map((item) => (
            <NutritionCard key={item.id} item={item} />
          ))}
        </TabsContent>

        {nutritionCategories.map((category) => (
          <TabsContent
            key={category.id}
            value={category.id}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {nutritionContent
              .filter((item) => item.category === category.id)
              .map((item) => (
                <NutritionCard key={item.id} item={item} />
              ))}
          </TabsContent>
        ))}
      </Tabs>

      <section className="my-16 bg-muted rounded-xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold mb-4">
              Personalized Nutrition Coaching
            </h2>
            <p className="text-muted-foreground mb-6">
              Get a customized nutrition plan tailored to your specific goals,
              preferences, and lifestyle. Our certified nutritionists will help
              you optimize your diet for performance and results.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-primary mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Personalized macro calculations</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-primary mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Custom meal plans based on your preferences</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-primary mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Ongoing support and adjustments</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-primary mr-2 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Supplement recommendations</span>
              </li>
            </ul>
            <Button size="lg" asChild>
              <Link href="/nutrition/coaching">Learn More</Link>
            </Button>
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/4506108/pexels-photo-4506108.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1"
              alt="Nutrition coaching"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <div className="my-16">
        <NewsletterCta />
      </div>
    </div>
  );
}

interface NutritionCardProps {
  item: {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    slug: string;
  };
}

function NutritionCard({ item }: NutritionCardProps) {
  return (
    <Card className="overflow-hidden group h-full flex flex-col">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <CardHeader>
        <CardTitle className="font-heading text-xl group-hover:text-primary transition-colors">
          <Link href={`/nutrition/${item.slug}`}>{item.title}</Link>
        </CardTitle>
        <CardDescription>
          {item.category
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{item.description}</p>
      </CardContent>

      <CardFooter>
        <Button variant="outline" asChild className="w-full">
          <Link
            href={`/nutrition/${item.slug}`}
            className="flex items-center justify-center"
          >
            Read More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
