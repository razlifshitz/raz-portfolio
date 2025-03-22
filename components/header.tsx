"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Moon, Sun } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { useTheme } from "next-themes"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { resolvedTheme, setTheme } = useTheme()

  // Define our colors
  const primaryBlue = "rgb(75, 161, 204)"
  const darkModeBlue = "#60a5ff"

  // After mounting, we can safely show the UI that depends on the theme
  useEffect(() => {
    setMounted(true)

    // Set initial scroll state to prevent flickering
    setScrolled(window.scrollY > 10)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)

      // Only track sections on home page
      if (pathname === "/") {
        const sections = ["industry", "projects", "interests", "contact"]

        // Find the current section in view
        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const rect = element.getBoundingClientRect()
            // If the section is in the viewport (with some buffer for better UX)
            if (rect.top <= 150 && rect.bottom >= 150) {
              setActiveSection(section)
              break
            }
          }
        }

        // If we're at the top, set hero as active
        if (window.scrollY < 300) {
          setActiveSection("")
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Disable body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.body.style.overflow = ""
    }
  }, [isMenuOpen, pathname])

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault()

      // If we're already on the home page
      if (pathname === "/") {
        const id = href.substring(2)
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
          setIsMenuOpen(false)
        }
      } else {
        // Navigate to home page with the hash
        window.location.href = href
      }
    }

    setIsMenuOpen(false)
  }

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    if (pathname === "/") {
      // If already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      // Navigate to home page
      router.push("/")
    }

    setIsMenuOpen(false)
  }

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    if (pathname === "/") {
      // If already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      // Navigate to home page
      router.push("/")
    }
  }

  const handleTimelineClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setIsMenuOpen(false)
    router.push("/experience")
    // Scroll to top will be handled in the experience page component
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  // Determine active link color based on current theme
  const getActiveLinkColor = (isActive: boolean) => {
    if (!isActive) return undefined
    return resolvedTheme === "dark" ? darkModeBlue : primaryBlue
  }

  // Add a fixed height to prevent layout shifts
  const headerHeight = "4rem" // 64px

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm" : "bg-transparent dark:bg-gray-900/90"
      }`}
      style={{ height: headerHeight }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-light text-gray-900 dark:text-white transition-colors hover:text-blue-500 dark:hover:text-blue-400"
              onClick={handleLogoClick}
            >
              Raz Lifshitz
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              <Link
                href="/"
                className="text-sm font-light transition-colors text-gray-600 dark:text-gray-300 hover:text-[#4ba1cc] dark:hover:text-[#60a5ff]"
                style={{
                  color: getActiveLinkColor(pathname === "/" && activeSection === ""),
                }}
                onClick={handleHomeClick}
              >
                Home
              </Link>
              <Link
                href="/#industry"
                className="text-sm font-light transition-colors text-gray-600 dark:text-gray-300 hover:text-[#4ba1cc] dark:hover:text-[#60a5ff]"
                style={{
                  color: getActiveLinkColor(activeSection === "industry"),
                }}
                onClick={(e) => handleAnchorClick(e, "/#industry")}
              >
                Industry
              </Link>
              <Link
                href="/#projects"
                className="text-sm font-light transition-colors text-gray-600 dark:text-gray-300 hover:text-[#4ba1cc] dark:hover:text-[#60a5ff]"
                style={{
                  color: getActiveLinkColor(activeSection === "projects"),
                }}
                onClick={(e) => handleAnchorClick(e, "/#projects")}
              >
                Projects
              </Link>
              <Link
                href="/#interests"
                className="text-sm font-light transition-colors text-gray-600 dark:text-gray-300 hover:text-[#4ba1cc] dark:hover:text-[#60a5ff]"
                style={{
                  color: getActiveLinkColor(activeSection === "interests"),
                }}
                onClick={(e) => handleAnchorClick(e, "/#interests")}
              >
                Interests
              </Link>
              <Link
                href="/#contact"
                className="text-sm font-light transition-colors text-gray-600 dark:text-gray-300 hover:text-[#4ba1cc] dark:hover:text-[#60a5ff]"
                style={{
                  color: getActiveLinkColor(activeSection === "contact"),
                }}
                onClick={(e) => handleAnchorClick(e, "/#contact")}
              >
                Contact
              </Link>
              <Link
                href="/experience"
                className="text-sm font-light transition-colors text-gray-600 dark:text-gray-300 hover:text-[#4ba1cc] dark:hover:text-[#60a5ff]"
                style={{
                  color: getActiveLinkColor(pathname === "/experience"),
                }}
              >
                Timeline
              </Link>
              <Link
                href="/blog"
                className="text-sm font-light transition-colors text-gray-600 dark:text-gray-300 hover:text-[#4ba1cc] dark:hover:text-[#60a5ff]"
                style={{
                  color: getActiveLinkColor(pathname === "/blog" || pathname.startsWith("/blog/")),
                }}
              >
                Blog
              </Link>
            </nav>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
              aria-label="Toggle dark mode"
            >
              {mounted && (resolvedTheme === "dark" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />)}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
              aria-label="Toggle dark mode"
            >
              {mounted && (resolvedTheme === "dark" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />)}
            </button>
            <button
              type="button"
              className="text-gray-600 dark:text-gray-300 hover:text-[#4ba1cc] dark:hover:text-[#60a5ff]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              style={{ color: isMenuOpen ? (resolvedTheme === "dark" ? darkModeBlue : primaryBlue) : undefined }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - completely fixed positioning */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 w-screen h-screen bg-white dark:bg-gray-900 z-50 flex flex-col justify-center items-center">
          <button
            type="button"
            className="absolute top-4 right-4 text-gray-600 dark:text-gray-300"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
            style={{ color: resolvedTheme === "dark" ? darkModeBlue : primaryBlue }}
          >
            <X size={24} />
          </button>

          <nav className="flex flex-col items-center space-y-8 text-xl">
            <Link
              href="/"
              className="text-gray-600 dark:text-gray-300 hover:text-[#4ba1cc] dark:hover:text-[#60a5ff]"
              onClick={handleHomeClick}
              style={{
                color: getActiveLinkColor(pathname === "/" && activeSection === ""),
              }}
            >
              Home
            </Link>
            <Link
              href="/#industry"
              className="text-gray-600 dark:text-gray-300 hover:text-[#4ba1cc] dark:hover:text-[#60a5ff]"
              onClick={(e) => handleAnchorClick(e, "/#industry")}
              style={{
                color: getActiveLinkColor(activeSection === "industry"),
              }}
            >
              Industry
            </Link>
            <Link
              href="/#projects"
              className="text-gray-600 dark:text-gray-300 hover:text-[#4ba1cc] dark:hover:text-[#60a5ff]"
              onClick={(e) => handleAnchorClick(e, "/#projects")}
              style={{
                color: getActiveLinkColor(activeSection === "projects"),
              }}
            >
              Projects
            </Link>
            <Link
              href="/#interests"
              className="text-gray-600 dark:text-gray-300 hover:text-[#4ba1cc] dark:hover:text-[#60a5ff]"
              onClick={(e) => handleAnchorClick(e, "/#interests")}
              style={{
                color: getActiveLinkColor(activeSection === "interests"),
              }}
            >
              Interests
            </Link>
            <Link
              href="/#contact"
              className="text-gray-600 dark:text-gray-300 hover:text-[#4ba1cc] dark:hover:text-[#60a5ff]"
              onClick={(e) => handleAnchorClick(e, "/#contact")}
              style={{
                color: getActiveLinkColor(activeSection === "contact"),
              }}
            >
              Contact
            </Link>
            <Link
              href="/experience"
              className="text-gray-600 dark:text-gray-300 hover:text-[#4ba1cc] dark:hover:text-[#60a5ff]"
              onClick={handleTimelineClick}
              style={{
                color: getActiveLinkColor(pathname === "/experience"),
              }}
            >
              Timeline
            </Link>
            <Link
              href="/blog"
              className="text-gray-600 dark:text-gray-300 hover:text-[#4ba1cc] dark:hover:text-[#60a5ff]"
              onClick={() => setIsMenuOpen(false)}
              style={{
                color: getActiveLinkColor(pathname === "/blog" || pathname.startsWith("/blog/")),
              }}
            >
              Blog
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

