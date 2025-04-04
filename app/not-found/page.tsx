import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>

      <div className="relative z-10 text-center p-8 max-w-2xl">
        {/* Fitness-themed 404 illustration */}
        <div className="mb-8 mx-auto w-64 h-64 bg-gradient-to-tr from-primary to-secondary rounded-full flex items-center justify-center">
          <div className="text-9xl font-bold text-white">404</div>
        </div>

        <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Oops! Lost Your Way?
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          The page you're looking for doesn't exist. Maybe you took a wrong turn
          during your workout?
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="px-8 py-4 text-lg animate-bounce">
            <Link href="/">Back to Home Gym</Link>
          </Button>

          <Button variant="outline" asChild className="px-8 py-4 text-lg">
            <Link href="/workouts">Explore Workouts</Link>
          </Button>
        </div>
      </div>

      {/* Fitness motivational quote */}
      <div className="absolute bottom-8 left-0 right-0 text-center text-gray-400 dark:text-gray-500 text-sm">
        "Success starts with showing up - even when you take a wrong turn."
      </div>
    </div>
  );
}
