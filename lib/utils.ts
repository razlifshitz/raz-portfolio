import type React from "react"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Handles downloading the CV file with browser compatibility
 * @param e Optional event to prevent default behavior
 * @param filename Optional custom filename for the downloaded file (default: "raz-lifshitz-cv.pdf")
 */
export function downloadCV(e?: React.MouseEvent, filename = "Raz Lifshitz Resume.pdf") {
  if (e) {
    e.preventDefault()
  }

  const link = document.createElement("a")
  link.href = "/raz-lifshitz-cv.pdf" // This is the path to the file on the server
  link.download = filename // This is the filename that will appear when downloaded
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

