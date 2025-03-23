"use client"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { cn } from "../lib/utils"
import { useTheme } from "next-themes"

interface MarkdownRendererProps {
  content: string
  className?: string
}

export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  // Ensure content is a string
  const safeContent = typeof content === "string" ? content : ""

  return (
    <div
      className={cn("prose prose-lg max-w-none blog-content", className)}
      style={{
        maxWidth: "none",
        color: isDark ? "#e2e8f0" : "inherit",
      }}
    >
      {/* @ts-ignore */}
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {safeContent}
      </ReactMarkdown>
    </div>
  )
}