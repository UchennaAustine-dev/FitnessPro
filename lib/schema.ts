export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "FitnessPro",
    url: "https://www.fitness-pro.site/",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.fitness-pro.site/blog?search={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    description:
      "Expert fitness advice, workout plans, and nutrition tips for all levels",
    publisher: {
      "@type": "Organization",
      name: "FitnessPro",
      logo: {
        "@type": "ImageObject",
        url: "https://www.fitness-pro.site/logo.png",
      },
    },
  };
}

export function generateBlogPostSchema(post: {
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: { name: string };
  content: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: post.coverImage,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "FitnessPro",
      logo: {
        "@type": "ImageObject",
        url: "https://www.fitness-pro.site/logo.png",
      },
    },
    url: `https://www.fitness-pro.site/blog/${post.slug}`,
    description: post.excerpt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.fitness-pro.site/blog/${post.slug}`,
    },
  };
}

export function generateWorkoutSchema(workout: {
  title: string;
  slug: string;
  description: string;
  image: string;
  duration: number;
  difficulty: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: workout.title,
    description: workout.description,
    image: workout.image,
    totalTime: `PT${workout.duration}M`,
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: "0",
    },
    difficulty: workout.difficulty,
    step: [
      {
        "@type": "HowToStep",
        name: "Warm up",
        text: "Start with a proper warm-up to prepare your body for the workout.",
      },
      {
        "@type": "HowToStep",
        name: "Complete exercises",
        text: "Perform all exercises in the workout with proper form.",
      },
      {
        "@type": "HowToStep",
        name: "Cool down",
        text: "Finish with a cool-down to help your body recover.",
      },
    ],
    url: `https://www.fitness-pro.site/workouts/${workout.slug}`,
  };
}
