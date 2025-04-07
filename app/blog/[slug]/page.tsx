import Image from "next/image";
import { notFound } from "next/navigation";
import { BlogAuthor } from "@/components/blog-author";
import { BlogMetadata } from "@/components/blog-metadata";
import { ShareButtons } from "@/components/share-buttons";
import { RelatedPosts } from "@/components/related-posts";
import { CommentSection } from "@/components/comment-section";
import { TableOfContents } from "@/components/table-of-contents";
import { NewsletterCta } from "@/components/newsletter-cta";
import { getBlogPost } from "@/lib/blog";
import { LeaderboardAd } from "@/components/ads/leaderboard-ad";
import { RectangleAd } from "@/components/ads/rectangle-ad";
import { ParallaxAd } from "@/components/ads/parallax-ad";
import { InterstitialAd } from "@/components/ads/interstitial-ad";
import type { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Resolve params
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams.slug;

  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  // Resolve params
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams.slug;

  // In a real app, this would fetch from a CMS or database
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <InterstitialAd />

      <LeaderboardAd className="mb-8 mx-auto max-w-4xl" />

      <article className="max-w-4xl mx-auto">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
          {post.title}
        </h1>

        <BlogMetadata
          category={post.category}
          readTime={post.readTime}
          date={post.date}
          difficulty={post.difficulty}
        />

        <BlogAuthor author={post.author} />

        <div className="my-8 relative aspect-video rounded-xl overflow-hidden">
          <Image
            src={post.coverImage || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <aside className="hidden md:block w-1/4">
            <div className="sticky top-24">
              <TableOfContents headings={post.headings} />
              <ShareButtons url={`/blog/${slug}`} title={post.title} />
              <RectangleAd className="mt-6" />
            </div>
          </aside>

          <div className="w-full md:w-3/4">
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <ParallaxAd className="my-8" />

            {post.workoutPlan && (
              <div className="my-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                <h2 className="font-heading text-2xl font-bold mb-4">
                  Workout Plan
                </h2>
                <div
                  className="prose prose-blue max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.workoutPlan }}
                />
              </div>
            )}
          </div>
        </div>
      </article>

      <LeaderboardAd className="my-8 mx-auto max-w-4xl" />

      <div className="max-w-4xl mx-auto mt-12">
        <CommentSection postId={slug} />
      </div>

      <div className="mt-16">
        <RelatedPosts currentPostId={slug} category={post.category} />
      </div>

      <div className="mt-16">
        <NewsletterCta />
      </div>
    </div>
  );
}
