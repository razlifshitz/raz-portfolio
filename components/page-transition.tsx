"use client"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export function PageTransition() {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [prevPathname, setPrevPathname] = useState("")

  useEffect(() => {
    if (prevPathname && prevPathname !== pathname) {
      setIsTransitioning(true)

      // Hide the transition overlay after a short delay
      const timer = setTimeout(() => {
        setIsTransitioning(false)
      }, 300)

      return () => clearTimeout(timer)
    }

    setPrevPathname(pathname)
  }, [pathname, prevPathname])

  if (!isTransitioning) return null

  return (
    <div
      className="fixed inset-0 z-[100] pointer-events-none page-transition active"
      style={{
        backgroundColor: "var(--background-color)",
        opacity: 0.5,
        transition: "opacity 0.3s ease",
      }}
    />
  )
}

