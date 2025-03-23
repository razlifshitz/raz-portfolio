import { getPostBySlug, formatDate, blogPosts } from "../../../lib/blog"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { MarkdownRenderer } from "../../../components/markdown-renderer"

export const dynamic = "force-static"

interface BlogPostPageProps {
  params: {
    slug: string
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

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="pt-20">
        <article className="py-10 bg-white dark:bg-gray-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all posts
            </Link>

            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-4">{post.title}</h1>
              <time dateTime={post.date} className="text-gray-500 dark:text-gray-400">
                {formatDate(post.date)}
              </time>
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
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )}

            <MarkdownRenderer content={post.content} />
          </div>
        </article>
      </main>
    </div>
  )
}

