import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subscribe | FitnessPro",
  description:
    "Subscribe to our newsletter for weekly workouts, nutrition tips, and exclusive content.",
  openGraph: {
    title: "Subscribe | FitnessPro",
    description:
      "Subscribe to our newsletter for weekly workouts, nutrition tips, and exclusive content.",
  },
};

export default function SubscribePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Join Our Fitness Community
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to our newsletter and get weekly workouts, nutrition
              tips, and exclusive content delivered straight to your inbox.
            </p>

            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>

              <div className="space-y-4">
                <p className="font-medium">I'm interested in:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="strength" />
                    <Label htmlFor="strength">Strength Training</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="hiit" />
                    <Label htmlFor="hiit">HIIT Workouts</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="nutrition" />
                    <Label htmlFor="nutrition">Nutrition</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="recovery" />
                    <Label htmlFor="recovery">Recovery</Label>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox id="terms" />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="terms" className="text-sm font-normal">
                    I agree to receive emails from FitnessPro. You can
                    unsubscribe at any time.
                  </Label>
                </div>
              </div>

              <Button type="submit" className="w-full">
                Subscribe Now
              </Button>
            </form>
          </div>

          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/4498482/pexels-photo-4498482.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1"
              alt="Subscribe to FitnessPro"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
              <div className="bg-white/90 dark:bg-slate-900/90 p-4 rounded-lg">
                <p className="font-bold text-lg">
                  Join 10,000+ fitness enthusiasts
                </p>
                <p className="text-muted-foreground">
                  Get exclusive workouts and tips every week
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
