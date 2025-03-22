"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Header } from "./header"
import { Footer } from "./footer"
import { PageTransition } from "./page-transition"
import { usePathname } from "next/navigation"

export function PersistentLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  // Set mounted state once the component is mounted
  useEffect(() => {
    setMounted(true)

    // Set CSS variables for theme colors
    document.documentElement.style.setProperty(
      "--background-color",
      document.documentElement.classList.contains("dark") ? "rgba(17, 24, 39, 0.9)" : "rgba(255, 255, 255, 0.9)",
    )
  }, [])

  // This ensures the layout is only rendered once on the client
  // preventing any server/client mismatch issues
  if (!mounted) {
    return (
      <div style={{ visibility: "hidden" }}>
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
    )
  }

  return (
    <>
      <Header key="persistent-header" />
      <PageTransition />
      <main key={`page-${pathname}`} className="hardware-accelerated">
        {children}
      </main>
      <Footer key="persistent-footer" />
    </>
  )
}

