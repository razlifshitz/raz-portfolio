"use client"

import { Contact } from "../components/contact"
import { Industry } from "../components/industry"
import { Hero } from "../components/hero"
import { Interests } from "../components/interests"
import { Projects } from "../components/projects"
import { useEffect } from "react"
import { useTheme } from "next-themes"

export default function Home() {
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    // Get the section to scroll to, if any
    const sectionId = sessionStorage.getItem("scrollToSection")

    if (sectionId) {
      // Clear the flag immediately
      sessionStorage.removeItem("scrollToSection")

      // Use setTimeout to ensure the DOM is ready
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          // Scroll directly to the element with a slight offset for the header
          const headerOffset = 80 // Account for fixed header
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
          const offsetPosition = elementPosition - headerOffset

          // Use immediate scrolling without animation
          window.scrollTo({
            top: offsetPosition,
            behavior: "auto",
          })
        }
      }, 100)
    } else if (sessionStorage.getItem("scrollToTop") === "true") {
      // Only scroll to top if explicitly requested
      sessionStorage.removeItem("scrollToTop")
      window.scrollTo(0, 0)
    } else if (window.location.hash) {
      // If there's a hash in the URL, scroll to that section
      const id = window.location.hash.substring(1)
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
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

