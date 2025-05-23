"use client"

interface CodeBlockProps {
  value: string
}

export function CodeBlock({ value }: CodeBlockProps) {
  // Ensure value is always a string
  const safeValue = value || ""

  return (
    <div className="relative" style={{ margin: "0.5rem 0" }}>
      <pre
        className="code-block"
        style={{
          backgroundColor: "#f5f5f5",
          color: "#333",
          padding: "0.5rem",
          borderRadius: "0.5rem",
          border: "none",
          boxShadow: "none",
          outline: "none",
        }}
      >
        <code
          dangerouslySetInnerHTML={{ __html: safeValue }}
          style={{
            backgroundColor: "transparent",
            color: "#333",
            border: "none",
          }}
        />
      </pre>
    </div>
  )
}

