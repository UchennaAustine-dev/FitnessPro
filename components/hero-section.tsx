import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative py-12 md:py-24 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight">
              Transform Your Body,{" "}
              <span className="text-primary">Elevate Your Life</span>
            </h1>
            <p className="text-xl text-slate-700 dark:text-slate-300">
              Expert-backed workouts, nutrition advice, and fitness tips to help
              you reach your goals, whether you're a beginner or advanced
              athlete.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/workouts">Explore Workouts</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/blog">Read Blog</Link>
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 overflow-hidden"
                  >
                    <Image
                      src={`/placeholder.svg?height=40&width=40`}
                      alt={`User ${i}`}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="font-bold">10k+ members</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  Join our community
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Fitness training"
                width={800}
                height={600}
                className="object-cover"
                priority
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    HIIT Workout
                  </div>
                  <div className="font-bold">400 calories in 20 min</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
