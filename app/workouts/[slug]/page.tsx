import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, Dumbbell, Target, Award, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BlogAuthor } from "@/components/blog-author";
import { RelatedPosts } from "@/components/related-posts";
import { ShareButtons } from "@/components/share-buttons";

// This would be fetched from a database in a real app
const getWorkout = (slug: string) => {
  const workouts = [
    {
      id: "1",
      slug: "full-body-strength-workout",
      title: "Full Body Strength Workout",
      description:
        "Build muscle and strength with this comprehensive full body workout routine.",
      longDescription:
        "This full-body strength workout is designed to target all major muscle groups in a single session. It's perfect for those looking to build overall strength and muscle mass while improving functional fitness. The workout follows a compound-first approach, starting with the most demanding multi-joint exercises when your energy is highest, then moving to isolation exercises to finish off specific muscle groups.",
      image: "/placeholder.svg?height=600&width=1200",
      category: "strength",
      duration: 45,
      difficulty: "Intermediate",
      equipment: ["Dumbbells", "Barbell", "Bench"],
      targetMuscles: [
        "Quadriceps",
        "Hamstrings",
        "Chest",
        "Back",
        "Shoulders",
        "Arms",
        "Core",
      ],
      author: {
        name: "John Doe",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Strength Coach",
      },
      exercises: [
        {
          name: "Barbell Squat",
          sets: 4,
          reps: "8-10",
          rest: "90 sec",
          description:
            "Stand with feet shoulder-width apart, barbell across upper back. Bend knees and hips to lower until thighs are parallel to floor, then push back up.",
          tips: "Keep chest up and knees tracking over toes.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Bench Press",
          sets: 4,
          reps: "8-10",
          rest: "90 sec",
          description:
            "Lie on bench with feet flat on floor. Grip barbell slightly wider than shoulder width. Lower bar to chest, then press back up to starting position.",
          tips: "Keep wrists straight and elbows at approximately 45° angle from body.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Bent-Over Row",
          sets: 3,
          reps: "10-12",
          rest: "60 sec",
          description:
            "Hinge at hips with slight knee bend, back flat. Pull barbell to lower ribs, squeezing shoulder blades together.",
          tips: "Keep core tight and avoid rounding your back.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Overhead Press",
          sets: 3,
          reps: "8-10",
          rest: "60 sec",
          description:
            "Stand with feet shoulder-width apart, barbell at shoulder height. Press weight overhead until arms are fully extended.",
          tips: "Avoid excessive arching of the lower back.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Romanian Deadlift",
          sets: 3,
          reps: "10-12",
          rest: "60 sec",
          description:
            "Hold barbell in front of thighs, feet hip-width apart. Hinge at hips, lowering barbell while keeping back flat. Return to standing by driving hips forward.",
          tips: "Feel the stretch in your hamstrings and maintain a neutral spine.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Dumbbell Bicep Curl",
          sets: 3,
          reps: "12-15",
          rest: "45 sec",
          description:
            "Stand with dumbbells at sides, palms facing forward. Curl weights toward shoulders, keeping elbows close to ribs.",
          tips: "Avoid swinging the weights or using momentum.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Tricep Pushdown",
          sets: 3,
          reps: "12-15",
          rest: "45 sec",
          description:
            "Stand facing cable machine with rope attachment at chest height. Push rope down until arms are fully extended, keeping elbows close to body.",
          tips: "Focus on using your triceps, not your shoulders.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Plank",
          sets: 3,
          reps: "30-60 sec",
          rest: "30 sec",
          description:
            "Support body on forearms and toes, forming a straight line from head to heels. Hold position while keeping core engaged.",
          tips: "Don't let your hips sag or pike up.",
          image: "/placeholder.svg?height=300&width=400",
        },
      ],
      warmup:
        "5-10 minutes of light cardio (jogging, cycling, or rowing) followed by dynamic stretches targeting major muscle groups.",
      cooldown:
        "5 minutes of static stretching, holding each stretch for 20-30 seconds.",
      progressionTips:
        "Increase weight by 5-10% when you can complete all sets and reps with good form. Alternatively, add an extra set or 1-2 reps per set.",
    },
    {
      id: "2",
      slug: "hiit-calorie-burner",
      title: "20-Minute HIIT Calorie Burner",
      description:
        "Maximize fat loss with this high-intensity interval training session that burns up to 400 calories.",
      longDescription:
        "This high-intensity interval training (HIIT) workout is designed to maximize calorie burn in minimal time. By alternating between intense work periods and brief recovery periods, you'll keep your heart rate elevated while boosting your metabolism for hours after your workout. This routine requires no equipment and can be done anywhere, making it perfect for busy schedules.",
      image: "/placeholder.svg?height=600&width=1200",
      category: "hiit",
      duration: 20,
      difficulty: "Advanced",
      equipment: ["None"],
      targetMuscles: ["Full Body", "Cardiovascular System"],
      author: {
        name: "Jane Smith",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "HIIT Specialist",
      },
      exercises: [
        {
          name: "Jumping Jacks",
          sets: 1,
          reps: "40 seconds work, 20 seconds rest",
          rest: "None between exercises",
          description:
            "Start standing with arms at sides. Jump feet out while raising arms overhead, then return to starting position.",
          tips: "Keep a soft bend in knees and land lightly.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Mountain Climbers",
          sets: 1,
          reps: "40 seconds work, 20 seconds rest",
          rest: "None between exercises",
          description:
            "Start in push-up position. Alternately drive knees toward chest in a running motion.",
          tips: "Keep hips low and core engaged throughout the movement.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Burpees",
          sets: 1,
          reps: "40 seconds work, 20 seconds rest",
          rest: "None between exercises",
          description:
            "Begin standing, then squat down and place hands on floor. Jump feet back to plank position, perform a push-up, jump feet forward, and explosively jump up with arms overhead.",
          tips: "Modify by stepping back instead of jumping if needed.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "High Knees",
          sets: 1,
          reps: "40 seconds work, 20 seconds rest",
          rest: "None between exercises",
          description:
            "Run in place, lifting knees toward chest. Pump arms in a running motion.",
          tips: "Stay on balls of feet and maintain a quick pace.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Plank Jacks",
          sets: 1,
          reps: "40 seconds work, 20 seconds rest",
          rest: "None between exercises",
          description:
            "Start in plank position. Jump feet out wide and then back together, similar to a jumping jack motion.",
          tips: "Keep shoulders over wrists and maintain a stable core.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Squat Jumps",
          sets: 1,
          reps: "40 seconds work, 20 seconds rest",
          rest: "None between exercises",
          description:
            "Perform a bodyweight squat, then explosively jump up. Land softly and immediately lower into the next squat.",
          tips: "Land with soft knees to absorb impact.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Push-up to Side Plank",
          sets: 1,
          reps: "40 seconds work, 20 seconds rest",
          rest: "None between exercises",
          description:
            "Perform a push-up, then rotate into a side plank by lifting one arm toward ceiling. Return to push-up position and repeat on opposite side.",
          tips: "Modify with knee push-ups if needed.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          name: "Speed Skaters",
          sets: 1,
          reps: "40 seconds work, 20 seconds rest",
          rest: "None between exercises",
          description:
            "Jump laterally from one foot to the other, bringing trailing leg behind standing leg. Swing arms across body in the direction of each jump.",
          tips: "Jump as far to the side as possible for maximum intensity.",
          image: "/placeholder.svg?height=300&width=400",
        },
      ],
      warmup:
        "3 minutes of light jogging in place, arm circles, and dynamic stretches.",
      cooldown:
        "2-3 minutes of walking in place followed by full-body stretching.",
      progressionTips:
        "To increase intensity, maximize effort during work intervals. For an additional challenge, reduce rest periods to 15 or 10 seconds. Complete 2-3 rounds of the circuit for a longer workout.",
    },
  ];

  return workouts.find((workout) => workout.slug === slug);
};

export default function WorkoutPage({ params }: { params: { slug: string } }) {
  const workout = getWorkout(params.slug);

  if (!workout) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" asChild className="mb-6">
        <Link href="/workouts" className="flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Workouts
        </Link>
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
            <Image
              src={workout.image || "/placeholder.svg"}
              alt={workout.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            {workout.title}
          </h1>

          <div className="flex flex-wrap gap-4 mb-6">
            <Badge variant="secondary" className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              {workout.duration} minutes
            </Badge>

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
              <Dumbbell className="mr-1 h-4 w-4" />
              {workout.difficulty}
            </Badge>

            {workout.equipment.map((item) => (
              <Badge key={item} variant="outline">
                {item}
              </Badge>
            ))}
          </div>

          <BlogAuthor author={workout.author} />

          <div className="prose prose-lg max-w-none my-8">
            <p>{workout.longDescription}</p>
          </div>

          <div className="my-8">
            <h2 className="font-heading text-2xl font-bold mb-4">
              Target Muscle Groups
            </h2>
            <div className="flex flex-wrap gap-2">
              {workout.targetMuscles.map((muscle) => (
                <Badge
                  key={muscle}
                  variant="secondary"
                  className="flex items-center"
                >
                  <Target className="mr-1 h-4 w-4" />
                  {muscle}
                </Badge>
              ))}
            </div>
          </div>

          <Tabs defaultValue="workout" className="my-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="workout">Workout</TabsTrigger>
              <TabsTrigger value="instructions">Instructions</TabsTrigger>
              <TabsTrigger value="tips">Tips & Progression</TabsTrigger>
            </TabsList>

            <TabsContent value="workout" className="mt-6">
              <div className="space-y-6">
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-heading text-lg font-medium mb-2">
                    Warm-up
                  </h3>
                  <p>{workout.warmup}</p>
                </div>

                <div className="space-y-4">
                  {workout.exercises.map((exercise, index) => (
                    <Card key={exercise.name}>
                      <CardContent className="p-0">
                        <div className="grid grid-cols-1 md:grid-cols-3">
                          <div className="relative aspect-video md:aspect-square">
                            <Image
                              src={exercise.image || "/placeholder.svg"}
                              alt={exercise.name}
                              fill
                              className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                            />
                          </div>

                          <div className="p-6 md:col-span-2">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-heading text-xl font-bold">
                                {index + 1}. {exercise.name}
                              </h4>
                              <Badge variant="outline" className="font-medium">
                                {exercise.sets} × {exercise.reps}
                              </Badge>
                            </div>

                            <p className="text-muted-foreground mb-4">
                              {exercise.description}
                            </p>

                            <div className="bg-muted p-3 rounded-md">
                              <p className="text-sm font-medium flex items-center">
                                <Award className="mr-2 h-4 w-4 text-primary" />
                                Tip: {exercise.tips}
                              </p>
                            </div>

                            {exercise.rest && (
                              <p className="text-sm text-muted-foreground mt-3">
                                Rest: {exercise.rest}
                              </p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-heading text-lg font-medium mb-2">
                    Cool-down
                  </h3>
                  <p>{workout.cooldown}</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="instructions" className="mt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="font-heading text-xl font-bold mb-3">
                    How to Perform This Workout
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Complete all exercises in the order listed.</li>
                    <li>
                      Follow the prescribed sets, reps, and rest periods for
                      each exercise.
                    </li>
                    <li>
                      Focus on proper form rather than lifting heavy weights or
                      moving quickly.
                    </li>
                    <li>
                      Breathe out during the exertion phase and in during the
                      relaxation phase.
                    </li>
                    <li>Stay hydrated throughout your workout.</li>
                    <li>Don't skip the warm-up or cool-down phases.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-bold mb-3">
                    Equipment Setup
                  </h3>
                  <p className="mb-3">
                    Before starting, ensure you have all necessary equipment
                    ready:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    {workout.equipment.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-bold mb-3">
                    Workout Frequency
                  </h3>
                  <p>
                    For optimal results, perform this {workout.category} workout
                    2-3 times per week, allowing at least 48 hours of recovery
                    between sessions for the same muscle groups.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tips" className="mt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="font-heading text-xl font-bold mb-3">
                    Progression Tips
                  </h3>
                  <p className="mb-3">{workout.progressionTips}</p>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-bold mb-3">
                    Common Mistakes to Avoid
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Rushing through repetitions with poor form</li>
                    <li>Skipping warm-up and cool-down</li>
                    <li>Using momentum instead of controlled movements</li>
                    <li>Not challenging yourself with appropriate weights</li>
                    <li>Inconsistent breathing patterns</li>
                    <li>Inadequate rest between workouts</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-bold mb-3">
                    Modifications
                  </h3>
                  <p className="mb-3">
                    Adjust this workout to your fitness level:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Beginners:</strong> Reduce weight, sets, or reps;
                      take longer rest periods
                    </li>
                    <li>
                      <strong>Intermediate:</strong> Follow the workout as
                      prescribed
                    </li>
                    <li>
                      <strong>Advanced:</strong> Increase weight, add sets, or
                      reduce rest periods
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-8">
            <div className="bg-muted p-6 rounded-xl">
              <h3 className="font-heading text-xl font-bold mb-4">
                Workout Summary
              </h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="font-medium">
                    {workout.duration} minutes
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Difficulty:</span>
                  <span className="font-medium">{workout.difficulty}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Equipment:</span>
                  <span className="font-medium">
                    {workout.equipment.join(", ")}
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Exercises:</span>
                  <span className="font-medium">
                    {workout.exercises.length}
                  </span>
                </li>
              </ul>

              <div className="mt-6">
                <Button className="w-full">Download PDF</Button>
              </div>
            </div>

            <ShareButtons
              url={`/workouts/${workout.slug}`}
              title={workout.title}
            />
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="font-heading text-2xl font-bold mb-6">
          Related Workouts
        </h2>
        <RelatedPosts currentPostId={workout.id} category={workout.category} />
      </div>
    </div>
  );
}
