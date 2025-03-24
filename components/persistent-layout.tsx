"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Header } from "./header"
import { Footer } from "./footer"
import { PageTransition } from "./page-transition"
import { usePathname } from "next/navigation"
import { ReadingProgressBar } from "./reading-progress-bar"

export function PersistentLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  // Set mounted state once the component is mounted
  useEffect(() => {
    setMounted(true)
  }, [])

  // This ensures the layout is only rendered once on the client
  // preventing any server/client mismatch issues
  if (!mounted) {
    return (
      <div style={{ visibility: "visible", opacity: 1 }}>
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
    )
  }

  const isBlogPost = pathname.startsWith("/blog/") && pathname !== "/blog/"

  return (
    <>
      {/* Reading Progress Bar - only shown on blog posts */}
      {isBlogPost && <ReadingProgressBar />}

      <Header key="persistent-header" />
      <PageTransition />
      <main key={`page-${pathname}`} className="hardware-accelerated">
        {children}
      </main>
      <Footer key="persistent-footer" />
    </>
  )
}

