import { getAllPosts, formatDate, calculateReadingTime } from "../../lib/blog"
import Link from "next/link"
import Image from "next/image"
import { Clock } from "lucide-react"

export const dynamic = "force-static"

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="pt-20">
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-light text-gray-900 dark:text-white">Blog</h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Thoughts, stories, and ideas from my journey.
              </p>
            </div>

            {posts.length > 0 ? (
              <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
                {posts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                    <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 transition-all duration-200 hover:shadow-md h-full flex flex-col">
                      {post.image && (
                        <div className="relative w-full h-48 overflow-hidden">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title || "Blog post image"}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                          />
                        </div>
                      )}
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center justify-between">
                          <time dateTime={post.date} className="text-sm text-gray-500 dark:text-gray-400">
                            {formatDate(post.date)}
                          </time>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <Clock className="w-3.5 h-3.5 mr-1" />
                            <span>{calculateReadingTime(post.content)} min read</span>
                          </div>
                        </div>

                        {/* Title with max 3 lines but no fixed height */}
                        <h3 className="mt-2 text-xl font-medium text-gray-900 dark:text-white line-clamp-3 min-h-[28px]">
                          {post.title}
                        </h3>

                        {/* Tags with conditional margin based on content */}
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-3">
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

                        {/* Description with auto-expanding space */}
                        <p className="mt-3 text-gray-600 dark:text-gray-300 line-clamp-3 flex-grow">
                          {post.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-600 dark:text-gray-300">No blog posts found.</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}

