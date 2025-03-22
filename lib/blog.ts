import { compareDesc, format, parseISO } from "date-fns"
import type { BlogPost } from "./blog-types"

// Import all blog posts
import { post as dynamicMenuPost } from "./blog-posts/dynamic-menu-with-silent-cache"

// Add all blog posts to this array
// When you create a new blog post file, import it above and add it to this array
export const blogPosts: BlogPost[] = [
  dynamicMenuPost,
  // Add more posts here as you create them
]

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

