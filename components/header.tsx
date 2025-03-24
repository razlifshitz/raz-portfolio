"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, Moon, Sun } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { useTheme } from "next-themes"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { resolvedTheme, setTheme } = useTheme()
  const lastScrollY = useRef(0)

  // Define our colors
  const primaryBlue = "rgb(75, 161, 204)"
  const darkModeBlue = "#60a5ff"

  // After mounting, we can safely show the UI that depends on the theme
  useEffect(() => {
    setMounted(true)

    // Set initial scroll state to prevent flickering
    setScrolled(window.scrollY > 10)
  }, [])

  // Reset active section when navigating away from home page
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("")
    }
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Determine if we should show/hide header based on scroll direction
      if (currentScrollY > lastScrollY.current + 20 && currentScrollY > 100) {
        // Scrolling down - hide header
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY.current - 5 || currentScrollY < 100) {
        // Scrolling up or near top - show header
        setIsVisible(true)
      }

      lastScrollY.current = currentScrollY
      setScrolled(currentScrollY > 10)

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
    e.preventDefault()
    setIsMenuOpen(false)

    // Extract the section ID from the href
    const sectionId = href.startsWith("/#") ? href.substring(2) : ""

    // If we're already on the home page
    if (pathname === "/") {
      const element = document.getElementById(sectionId)
      if (element) {
        // Use scrollIntoView with a block: "start" to ensure the section is at the top
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // If we're on another page (like blog), navigate to home with the section target
      sessionStorage.setItem("scrollToSection", sectionId)
      router.push("/")
    }
  }

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setIsMenuOpen(false)

    // If we're already on the home page, scroll to top
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      // Navigate to home page and scroll to top
      sessionStorage.setItem("scrollToTop", "true")
      router.push("/")
    }
  }

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setIsMenuOpen(false)

    if (pathname !== "/") {
      sessionStorage.setItem("scrollToTop", "true")
      router.push("/")
    } else {
      // If already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handleTimelineClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setIsMenuOpen(false)
    router.push("/experience")
  }

  const handleBlogClick = () => {
    setIsMenuOpen(false)
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
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
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
                  color: getActiveLinkColor(pathname === "/" && activeSection === "industry"),
                }}
                onClick={(e) => handleAnchorClick(e, "/#industry")}
              >
                Industry
              </Link>
              <Link
                href="/#projects"
                className="text-sm font-light transition-colors text-gray-600 dark:text-gray-300 hover:text-[#4ba1cc] dark:hover:text-[#60a5ff]"
                style={{
                  color: getActiveLinkColor(pathname === "/" && activeSection === "projects"),
                }}
                onClick={(e) => handleAnchorClick(e, "/#projects")}
              >
                Projects
              </Link>
              <Link
                href="/#interests"
                className="text-sm font-light transition-colors text-gray-600 dark:text-gray-300 hover:text-[#4ba1cc] dark:hover:text-[#60a5ff]"
                style={{
                  color: getActiveLinkColor(pathname === "/" && activeSection === "interests"),
                }}
                onClick={(e) => handleAnchorClick(e, "/#interests")}
              >
                Interests
              </Link>
              <Link
                href="/#contact"
                className="text-sm font-light transition-colors text-gray-600 dark:text-gray-300 hover:text-[#4ba1cc] dark:hover:text-[#60a5ff]"
                style={{
                  color: getActiveLinkColor(pathname === "/" && activeSection === "contact"),
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
                onClick={handleTimelineClick}
              >
                Timeline
              </Link>
              <Link
                href="/blog"
                className="text-sm font-light transition-colors text-gray-600 dark:text-gray-300 hover:text-[#4ba1cc] dark:hover:text-[#60a5ff]"
                style={{
                  color: getActiveLinkColor(pathname === "/blog" || pathname.startsWith("/blog/")),
                }}
                onClick={handleBlogClick}
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
              href="/#contact"
              className="text-gray-600 dark:text-gray-300 hover:text-[#4ba1cc] dark:hover:text-[#60a5ff]"
              onClick={(e) => handleAnchorClick(e, "/#contact")}
              style={{
                color: getActiveLinkColor(pathname === "/" && activeSection === "contact"),
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
              onClick={handleBlogClick}
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

