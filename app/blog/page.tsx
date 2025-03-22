import { getAllPosts, formatDate } from "@/lib/blog"
import Link from "next/link"
import Image from "next/image"

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
                Thoughts, stories, and ideas from my journey as a developer.
              </p>
            </div>

            {posts.length > 0 ? (
              <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
                {posts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                    <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 transition-all duration-200 hover:shadow-md">
                      {post.image && (
                        <div className="relative w-full h-48 overflow-hidden">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title || "Blog post image"}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <time dateTime={post.date} className="text-sm text-gray-500 dark:text-gray-400">
                          {formatDate(post.date)}
                        </time>
                        <h3 className="mt-2 text-xl font-medium text-gray-900 dark:text-white">{post.title}</h3>

                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-3 mb-4">
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

                        <p className="mt-3 text-gray-600 dark:text-gray-300 line-clamp-2">{post.description}</p>
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

