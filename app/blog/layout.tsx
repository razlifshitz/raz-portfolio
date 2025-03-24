import type React from "react"
import type { Metadata } from "next"
import BlogLayoutClient from "./BlogLayoutClient"

export const metadata: Metadata = {
  title: "Raz Lifshitz - Blog",
  description: "Thoughts, stories, and ideas from my journey.",
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <BlogLayoutClient>{children}</BlogLayoutClient>
}

