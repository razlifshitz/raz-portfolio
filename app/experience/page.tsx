"use client"
import { Timeline } from "../../components/timeline"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEffect } from "react"

export default function ExperiencePage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="pt-20">
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-light text-gray-900 dark:text-white">Timeline</h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                My journey through education and professional experience.{" "}
                <Link
                  href="/raz-lifshitz-cv.pdf"
                  download
                  className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 inline-flex items-center group"
                  style={{ color: "rgb(75, 161, 204)" }}
                >
                  Download my CV
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </p>
            </div>

            <Timeline />
          </div>
        </section>
      </main>
    </div>
  )
}

