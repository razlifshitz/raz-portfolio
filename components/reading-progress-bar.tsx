"use client"

import { useEffect, useState } from "react"

export function ReadingProgressBar() {
  const [readingProgress, setReadingProgress] = useState(0)

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
    <div className="sticky top-16 left-0 w-full h-1 z-40 bg-gray-100 dark:bg-gray-800">
      <div
        className="h-full bg-primary transition-all duration-100 ease-out"
        style={{ width: `${readingProgress}%` }}
      />
    </div>
  )
}

