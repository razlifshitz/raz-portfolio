"use client"

import type React from "react"

import { Github, Linkedin, Mail, Twitter, Camera, Phone, FileText } from "lucide-react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { downloadCV } from "@/lib/utils"

export function Footer() {
  const router = useRouter()
  const pathname = usePathname()

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()

    // Check if we're on the home page
    if (pathname === "/") {
      // If on home page, scroll to the section
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // If on another page, set flag and navigate to home
      sessionStorage.setItem("scrollToSection", sectionId)
      router.push("/")
    }
  }

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-light text-gray-900 dark:text-white">Raz Lifshitz</h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Frontend Engineer • Chess Player • Photographer • Maker
            </p>
          </div>

          <div className="flex space-x-6">
            <Link
              href="https://twitter.com/razlifshitz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="mailto:razlifshitz@gmail.com"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
            <Link
              href="tel:+972123456789"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span className="sr-only">Phone</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/raz-lifshitz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/razlifshitz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://500px.com/p/RazLifshitz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Camera className="h-5 w-5" />
              <span className="sr-only">500px</span>
            </Link>
            <Link
              href="/raz-lifshitz-cv.pdf"
              download
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              onClick={downloadCV}
            >
              <FileText className="h-5 w-5" />
              <span className="sr-only">Download CV</span>
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Raz Lifshitz. All rights reserved.
          </p>
          <nav className="mt-4 md:mt-0">
            <ul className="flex flex-wrap justify-center space-x-4 md:space-x-6">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    sessionStorage.setItem("scrollToTop", "true")
                    router.push("/")
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#industry"
                  className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                  onClick={(e) => handleSectionClick(e, "industry")}
                >
                  Industry
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  Timeline
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                  onClick={(e) => handleSectionClick(e, "projects")}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/#interests"
                  className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                  onClick={(e) => handleSectionClick(e, "interests")}
                >
                  Interests
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                  onClick={(e) => handleSectionClick(e, "contact")}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

