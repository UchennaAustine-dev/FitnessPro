import Image from "next/image";
import Link from "next/link";
import { Instagram, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NewsletterCta } from "@/components/newsletter-cta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | FitnessPro",
  description:
    "Learn about FitnessPro's mission, team, and approach to providing science-backed fitness and nutrition information.",
  openGraph: {
    title: "About Us | FitnessPro",
    description:
      "Learn about FitnessPro's mission, team, and approach to providing science-backed fitness and nutrition information.",
    images: [
      {
        url: "https://images.pexels.com/photos/3912516/pexels-photo-3912516.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&dpr=1",
        width: 1200,
        height: 630,
        alt: "FitnessPro Team",
      },
    ],
  },
};

const team = [
  {
    name: "John Doe",
    role: "Founder & Head Coach",
    bio: "Former professional athlete with 15+ years of coaching experience. Specializes in strength training and athletic performance.",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
    social: {
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Jane Smith",
    role: "Nutrition Specialist",
    bio: "Registered Dietitian with a Master's in Sports Nutrition. Helps athletes optimize their diet for performance and recovery.",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
    social: {
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Mike Johnson",
    role: "HIIT & Cardio Coach",
    bio: "Certified personal trainer specializing in high-intensity interval training and cardiovascular fitness programs.",
    image:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
    social: {
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Sarah Williams",
    role: "Yoga & Recovery Specialist",
    bio: "200-hour certified yoga instructor with a focus on using yoga for athletic recovery and mobility improvement.",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
    social: {
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
  },
];

const testimonials = [
  {
    name: "David Chen",
    role: "Marathon Runner",
    quote:
      "The training programs and nutrition advice from FitnessPro completely transformed my marathon performance. I shaved 15 minutes off my personal best!",
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
  },
  {
    name: "Emily Rodriguez",
    role: "Fitness Enthusiast",
    quote:
      "As someone new to strength training, the beginner guides were incredibly helpful. The step-by-step instructions and form tips gave me the confidence to start my fitness journey.",
    image:
      "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
  },
  {
    name: "Mark Thompson",
    role: "CrossFit Athlete",
    quote:
      "The mobility routines and recovery techniques have been game-changers for my performance. I've seen significant improvements in my lifts and overall movement quality.",
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              About FitnessPro
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 2018, FitnessPro is dedicated to providing
              science-backed fitness and nutrition information to help people of
              all levels achieve their health and performance goals.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Our team of certified fitness professionals, nutritionists, and
              health experts work together to create comprehensive resources
              that are both effective and accessible.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're just starting your fitness journey or you're an
              experienced athlete looking to optimize your performance, we're
              here to provide the guidance and support you need.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/blog">Read Our Blog</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/3912516/pexels-photo-3912516.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1"
              alt="FitnessPro team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <h2 className="font-heading text-3xl font-bold text-center mb-12">
          Our Mission
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <CardTitle className="font-heading text-xl">
                Evidence-Based Approach
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We're committed to providing fitness and nutrition information
                that's grounded in scientific research and proven methodologies.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <CardTitle className="font-heading text-xl">
                Inclusive Community
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We believe fitness is for everyone. Our content is designed to
                be accessible and beneficial for people of all fitness levels,
                backgrounds, and goals.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-primary"
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
              <CardTitle className="font-heading text-xl">
                Empowering Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We don't just tell you what to do—we explain why and how. Our
                goal is to empower you with knowledge so you can make informed
                decisions about your health.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <h2 className="font-heading text-3xl font-bold text-center mb-4">
          Meet Our Team
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Our team of certified fitness professionals and health experts are
          passionate about helping you achieve your goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <Card key={member.name} className="overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-heading text-xl">
                  {member.name}
                </CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{member.bio}</p>
              </CardContent>
              <CardFooter className="flex justify-center gap-4">
                <Link
                  href={member.social.twitter}
                  className="text-muted-foreground hover:text-primary"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href={member.social.instagram}
                  className="text-muted-foreground hover:text-primary"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href={member.social.linkedin}
                  className="text-muted-foreground hover:text-primary"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-12 md:py-24">
        <h2 className="font-heading text-3xl font-bold text-center mb-4">
          What Our Community Says
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Don't just take our word for it. Here's what members of our community
          have to say about their experience with FitnessPro.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="h-full">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="italic text-muted-foreground">
                  "{testimonial.quote}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <div className="my-16">
        <NewsletterCta />
      </div>
    </div>
  );
}
