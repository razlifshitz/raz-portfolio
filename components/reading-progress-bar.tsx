"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export function ReadingProgressBar() {
  const [readingProgress, setReadingProgress] = useState(0)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const updateReadingProgress = () => {
      const currentPosition = window.scrollY
      const scrollHeight = document.body.scrollHeight - window.innerHeight
      if (scrollHeight) {
        setReadingProgress(Number((currentPosition / scrollHeight).toFixed(2)) * 100)
      }
    }

    window.addEventListener("scroll", updateReadingProgress)

    // Initialize progress
    updateReadingProgress()

    return () => window.removeEventListener("scroll", updateReadingProgress)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 w-full h-1 z-[9999]"
      style={{
        pointerEvents: "none",
        backgroundColor: resolvedTheme === "dark" ? "#1f2937" : "#f3f4f6", // Match original dark:bg-gray-800 and bg-gray-100
      }}
    >
      <div
        className="h-full"
        style={{
          width: `${readingProgress}%`,
          backgroundColor: "rgb(75, 161, 204)", // Match your primary blue color
          transition: "width 100ms ease-out",
        }}
      />
    </div>
  )
}

