import { compareDesc, format, parseISO } from "date-fns"
import type { BlogPost } from "./blog-types"

// Import all blog posts
import { post as dynamicMenuPost } from "./blog-posts/dynamic-menu-with-silent-cache"
import { post as aiDeveloperPost } from "./blog-posts/ai-100x-developer"
import { post as timeAsInvestment } from "./blog-posts/time-as-investment"

// Add all blog posts to this array
export const blogPosts: BlogPost[] = [
  dynamicMenuPost,
  aiDeveloperPost,
  timeAsInvestment
  // Add more posts here as you create them
]

// Add this function to calculate reading time
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200 // Average reading speed
  const wordCount = content.split(/\s+/).length
  const readingTime = Math.ceil(wordCount / wordsPerMinute)
  return Math.max(1, readingTime) // Ensure at least 1 minute
}

// Get all blog posts sorted by date
export function getAllPosts() {
  return [...blogPosts].sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
}

// Get a single blog post by slug
export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

// Format the date for display
export function formatDate(date: string) {
  const parsedDate = parseISO(date)
  return format(parsedDate, "MMMM dd, yyyy")
}

