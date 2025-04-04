import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    id: "strength",
    title: "Strength Training",
    description:
      "Build muscle, increase strength, and boost your metabolism with our expert strength training guides.",
    image: "/placeholder.svg?height=300&width=400",
    color: "from-blue-500 to-indigo-600",
    link: "/blog/category/strength-training",
  },
  {
    id: "hiit",
    title: "HIIT Workouts",
    description:
      "Burn maximum calories in minimum time with high-intensity interval training routines.",
    image: "/placeholder.svg?height=300&width=400",
    color: "from-red-500 to-pink-600",
    link: "/blog/category/hiit",
  },
  {
    id: "nutrition",
    title: "Nutrition Guides",
    description:
      "Fuel your fitness journey with science-backed nutrition advice for optimal performance.",
    image: "/placeholder.svg?height=300&width=400",
    color: "from-green-500 to-emerald-600",
    link: "/blog/category/nutrition",
  },
];

export function CategoryHighlights() {
  return (
    <section className="py-12">
      <h2 className="font-heading text-3xl font-bold mb-8">
        Explore Categories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={category.link}
            className="group relative overflow-hidden rounded-xl h-80"
          >
            <Image
              src={category.image || "/placeholder.svg"}
              alt={category.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div
              className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-80`}
            ></div>

            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
              <h3 className="font-heading text-2xl font-bold mb-2">
                {category.title}
              </h3>
              <p className="mb-4 opacity-90">{category.description}</p>
              <div className="flex items-center font-medium">
                <span>Explore</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
