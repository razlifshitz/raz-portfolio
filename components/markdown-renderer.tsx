"use client"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { cn } from "@/lib/utils"
import { CodeBlock } from "./code-block"
import { useTheme } from "next-themes"

interface MarkdownRendererProps {
  content: string
  className?: string
}

export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  // Remove language tags from the content
  const processedContent = content.replace(/```javascript/g, "```").replace(/```typescript/g, "```")

  return (
    <div
      className={cn("prose prose-lg max-w-none", className)}
      style={{
        maxWidth: "none",
        color: isDark ? "#e2e8f0" : "inherit",
      }}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Skip h1 rendering to avoid duplicate title
          h1: () => null,
          code({ node, inline, className, children, ...props }) {
            const value = String(children).replace(/\n$/, "")

            if (inline) {
              return (
                <code
                  className="bg-gray-100 px-1 py-0.5 rounded text-sm"
                  style={{ backgroundColor: "#f1f5f9", color: "#333", border: "none" }}
                  {...props}
                >
                  {children}
                </code>
              )
            }

            // Process code to add comment styling
            const processedCode = value
              .replace(/(\/\/.*)/g, '<span class="comment">$1</span>')
              .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="comment">$1</span>')

            return <CodeBlock value={processedCode} />
          },
          // Customize other elements as needed with dark mode text colors
          h2: ({ children }) => (
            <h2 className="text-2xl font-bold mt-6 mb-3" style={{ color: isDark ? "#f8fafc" : "inherit" }}>
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-bold mt-5 mb-2" style={{ color: isDark ? "#f8fafc" : "inherit" }}>
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="my-4" style={{ color: isDark ? "#e2e8f0" : "inherit" }}>
              {children}
            </p>
          ),
          ul: ({ children }) => <ul className="list-disc pl-6 my-4">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal pl-6 my-4">{children}</ol>,
          li: ({ children }) => (
            <li className="mb-1" style={{ color: isDark ? "#e2e8f0" : "inherit" }}>
              {children}
            </li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">{children}</blockquote>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-blue-500 hover:text-blue-700"
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {children}
            </a>
          ),
          img: ({ src, alt }) => (
            <div className="my-4">
              <img src={src || "/placeholder.svg"} alt={alt || ""} className="max-w-full h-auto rounded" />
            </div>
          ),
        }}
      >
        {processedContent}
      </ReactMarkdown>
    </div>
  )
}

