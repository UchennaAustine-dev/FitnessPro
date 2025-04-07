import Image from "next/image";
import Link from "next/link";
import { Dumbbell, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
import { LeaderboardAd } from "@/components/ads/leaderboard-ad";
import { RectangleAd } from "@/components/ads/rectangle-ad";
import { InterstitialAd } from "@/components/ads/interstitial-ad";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workout Library | FitnessPro",
  description:
    "Browse our collection of expert-designed workouts for all fitness levels, from strength training to HIIT, cardio, yoga, and mobility.",
  openGraph: {
    title: "Workout Library | FitnessPro",
    description:
      "Browse our collection of expert-designed workouts for all fitness levels, from strength training to HIIT, cardio, yoga, and mobility.",
    images: [
      {
        url: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&dpr=1",
        width: 1200,
        height: 630,
        alt: "Workout Library",
      },
    ],
  },
};

const workoutCategories = [
  { id: "strength", name: "Strength" },
  { id: "hiit", name: "HIIT" },
  { id: "cardio", name: "Cardio" },
  { id: "yoga", name: "Yoga" },
  { id: "mobility", name: "Mobility" },
];

const workouts = [
  {
    id: "1",
    title: "Full Body Strength Workout",
    description:
      "Build muscle and strength with this comprehensive full body workout routine.",
    image:
      "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1",
    category: "strength",
    duration: 45,
    difficulty: "Intermediate",
    equipment: ["Dumbbells", "Barbell", "Bench"],
    slug: "full-body-strength-workout",
  },
  {
    id: "2",
    title: "20-Minute HIIT Calorie Burner",
    description:
      "Maximize fat loss with this high-intensity interval training session that burns up to 400 calories.",
    image:
      "https://images.pexels.com/photos/999309/pexels-photo-999309.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1",
    category: "hiit",
    duration: 20,
    difficulty: "Advanced",
    equipment: ["None"],
    slug: "hiit-calorie-burner",
  },
  {
    id: "3",
    title: "5K Running Program",
    description:
      "Progressive running plan designed to help you complete your first 5K race.",
    image:
      "https://images.pexels.com/photos/2803158/pexels-photo-2803158.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1",
    category: "cardio",
    duration: 30,
    difficulty: "Beginner",
    equipment: ["Running Shoes"],
    slug: "5k-running-program",
  },
  {
    id: "4",
    title: "Yoga for Flexibility",
    description:
      "Improve your range of motion and prevent injuries with this yoga flow.",
    image:
      "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1",
    category: "yoga",
    duration: 40,
    difficulty: "Beginner",
    equipment: ["Yoga Mat"],
    slug: "yoga-for-flexibility",
  },
  {
    id: "5",
    title: "Mobility Routine for Athletes",
    description:
      "Enhance performance and reduce pain with targeted mobility exercises.",
    image:
      "https://images.pexels.com/photos/4498151/pexels-photo-4498151.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1",
    category: "mobility",
    duration: 25,
    difficulty: "Intermediate",
    equipment: ["Foam Roller", "Resistance Band"],
    slug: "mobility-for-athletes",
  },
  {
    id: "6",
    title: "Upper Body Strength Builder",
    description:
      "Focus on developing your chest, back, shoulders and arms with this targeted routine.",
    image:
      "https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1",
    category: "strength",
    duration: 50,
    difficulty: "Intermediate",
    equipment: ["Dumbbells", "Pull-up Bar"],
    slug: "upper-body-strength",
  },
];

export default function WorkoutsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <InterstitialAd number={2} />

      <div className="text-center mb-12">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
          Workout Library
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Browse our collection of expert-designed workouts for all fitness
          levels. Filter by category, duration, and difficulty to find the
          perfect routine for your goals.
        </p>
      </div>

      <LeaderboardAd className="mb-8 mx-auto" />

      <Tabs defaultValue="all" className="mb-12">
        <TabsList className="flex flex-wrap justify-center mb-8">
          <TabsTrigger value="all">All Workouts</TabsTrigger>
          {workoutCategories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent
          value="all"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {workouts.map((workout, index) => (
            <>
              <WorkoutCard key={workout.id} workout={workout} />
              {index === 2 && (
                <RectangleAd className="mx-auto md:col-span-2 lg:col-span-3" />
              )}
            </>
          ))}
        </TabsContent>

        {workoutCategories.map((category) => (
          <TabsContent
            key={category.id}
            value={category.id}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {workouts
              .filter((workout) => workout.category === category.id)
              .map((workout, index) => (
                <>
                  <WorkoutCard key={workout.id} workout={workout} />
                  {index === 1 &&
                    workouts.filter((w) => w.category === category.id).length >
                      2 && (
                      <RectangleAd className="mx-auto md:col-span-2 lg:col-span-3" />
                    )}
                </>
              ))}
          </TabsContent>
        ))}
      </Tabs>

      <div className="my-16">
        <NewsletterCta />
      </div>
    </div>
  );
}

interface WorkoutCardProps {
  workout: {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    duration: number;
    difficulty: string;
    equipment: string[];
    slug: string;
  };
}

function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <Card className="overflow-hidden group h-full flex flex-col">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={workout.image || "/placeholder.svg"}
          alt={workout.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <Badge
            variant={
              workout.difficulty === "Beginner"
                ? "outline"
                : workout.difficulty === "Intermediate"
                ? "secondary"
                : "default"
            }
            className={
              workout.difficulty === "Beginner"
                ? "border-green-500 text-green-600 bg-green-50 dark:bg-green-900/20"
                : workout.difficulty === "Intermediate"
                ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
                : "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
            }
          >
            <Dumbbell className="mr-1 h-3 w-3" />
            {workout.difficulty}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Badge
            variant="secondary"
            className="bg-white/90 dark:bg-slate-900/90"
          >
            <Clock className="mr-1 h-3 w-3" />
            {workout.duration} min
          </Badge>
        </div>
      </div>

      <CardHeader>
        <CardTitle className="font-heading text-xl group-hover:text-primary transition-colors">
          <Link href={`/workouts/${workout.slug}`}>{workout.title}</Link>
        </CardTitle>
        <CardDescription className="flex flex-wrap gap-2 mt-1">
          {workout.equipment.map((item) => (
            <Badge key={item} variant="outline" className="font-normal">
              {item}
            </Badge>
          ))}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-2">
          {workout.description}
        </p>
      </CardContent>

      <CardFooter>
        <Button asChild className="w-full">
          <Link
            href={`/workouts/${workout.slug}`}
            className="flex items-center justify-center"
          >
            Start Workout
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
