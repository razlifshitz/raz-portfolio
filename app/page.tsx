"use client"

import { Contact } from "@/components/contact"
import { Industry } from "@/components/industry"
import { Hero } from "@/components/hero"
import { Interests } from "@/components/interests"
import { Projects } from "@/components/projects"
import { useEffect } from "react"
import { useTheme } from "next-themes"

export default function Home() {
  const { resolvedTheme } = useTheme()

  // Set background color immediately on mount to prevent flashing
  useEffect(() => {
    if (resolvedTheme === "dark") {
      document.documentElement.classList.add("dark")
      document.documentElement.style.backgroundColor = "#111827"
      document.body.style.backgroundColor = "#111827"
    } else {
      document.documentElement.style.backgroundColor = "#ffffff"
      document.body.style.backgroundColor = "#ffffff"
    }
  }, [resolvedTheme])

  // Handle anchor links scrolling
  useEffect(() => {
    // Check if there's a hash in the URL when the component mounts
    if (window.location.hash) {
      const id = window.location.hash.substring(1)
      const element = document.getElementById(id)
      if (element) {
        // Add a slight delay to ensure all elements are rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" })
        }, 100)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main>
        <Hero />
        <Industry />
        <Projects />
        <Interests />
        <Contact />
      </main>
    </div>
  )
}

