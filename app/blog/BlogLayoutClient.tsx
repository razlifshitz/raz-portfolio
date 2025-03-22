"use client"
import type React from "react"
import { useTheme } from "next-themes"
import { useEffect } from "react"

export default function BlogLayoutClient({
  children,
}: {
  children: React.ReactNode
}) {
  const { resolvedTheme } = useTheme()

  // Set background color immediately on mount to prevent flashing
  useEffect(() => {
    if (resolvedTheme === "dark") {
      document.documentElement.classList.add("dark")
      document.documentElement.style.backgroundColor = "#111827"
      document.body.style.backgroundColor = "#111827"
    }
  }, [resolvedTheme])

  return (
    <>
      <style jsx global>{`
        /* Global override to ensure no black borders */
        pre, code, .code-block {
          background-color: #f5f5f5 !important;
          color: #24292e !important;
          border: none !important;
          box-shadow: none !important;
          padding: 0.5rem !important;
          margin: 0.5rem 0 !important;
        }
        
        /* Dark mode text color fixes */
        .dark .prose {
          color: #e2e8f0 !important;
        }
        
        .dark .prose h1,
        .dark .prose h2,
        .dark .prose h3,
        .dark .prose h4,
        .dark .prose strong {
          color: #f8fafc !important;
        }
        
        .dark .prose p,
        .dark .prose li {
          color: #e2e8f0 !important;
        }
        
        /* Syntax highlighting with better contrast */
        .code-block .keyword {
          color: #d73a49 !important;
          font-weight: bold;
        }
        
        .code-block .function {
          color: #6f42c1 !important;
        }
        
        .code-block .string {
          color: #032f62 !important;
        }
        
        .code-block .number {
          color: #005cc5 !important;
        }
        
        .code-block .comment {
          color: #6a737d !important;
          font-style: italic;
        }
      `}</style>
      {children}
    </>
  )
}

