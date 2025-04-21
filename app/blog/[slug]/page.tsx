import { getPostBySlug, formatDate, blogPosts, calculateReadingTime } from "../../../lib/blog"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock } from "lucide-react"
import { MarkdownRenderer } from "../../../components/markdown-renderer"
import type { Metadata, ResolvingMetadata } from "next"
import { MOBILE_BREAKPOINT } from "@/lib/constants"

export const dynamic = "force-static"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostPageProps, parent: ResolvingMetadata): Promise<Metadata> {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  // Get the absolute URL for the image
  const imageUrl = post.image?.startsWith("http")
    ? post.image
    : `https://razlifshitz.com${post.image || "/og-image.png"}`

  return {
    title: `${post.title} | Raz Lifshitz`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["Raz Lifshitz"],
      url: `https://razlifshitz.com/blog/${post.slug}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      siteName: "Raz Lifshitz",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [imageUrl],
      creator: "@razlifshitz",
    },
  }
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const readingTime = calculateReadingTime(post.content)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main>
        <article className="py-10 bg-white dark:bg-gray-900 pt-24 md:pt-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 mb-8 mt-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all posts
            </Link>

            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-4">{post.title}</h1>
              <div className="flex items-center justify-between flex-wrap gap-2">
                <time dateTime={post.date} className="text-gray-500 dark:text-gray-400">
                  {formatDate(post.date)}
                </time>
                <div className="flex items-center text-gray-500 dark:text-gray-400">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{readingTime} min read</span>
                </div>
              </div>
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {post.image && (
              <div className="relative w-full h-[300px] md:h-[400px] mb-10 overflow-hidden rounded-lg">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes={`(max-width: ${MOBILE_BREAKPOINT}px) 100vw, (max-width: 1200px) 50vw, 33vw`}
                  priority
                />
              </div>
            )}

            <MarkdownRenderer content={post.content} />

            <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
              <Link
                href="/blog"
                className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to all posts
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}

