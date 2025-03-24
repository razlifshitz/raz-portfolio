import type React from "react"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Handles downloading the CV file with cross-browser compatibility
 * @param e Optional event to prevent default behavior
 * @param filename Optional custom filename for the downloaded file (default: "Raz_Lifshitz_Resume.pdf")
 */
export function downloadCV(e?: React.MouseEvent, filename = "Raz Lifshitz Resume.pdf") {
  if (e) {
    e.preventDefault()
  }

  // Create a blob URL for the file path
  fetch("/raz-lifshitz-cv.pdf")
    .then((response) => response.blob())
    .then((blob) => {
      // Create a blob URL
      const blobUrl = window.URL.createObjectURL(blob)

      // Create a temporary link element
      const link = document.createElement("a")
      link.style.display = "none"
      link.href = blobUrl
      link.setAttribute("download", filename)

      // Append to the DOM, click, and clean up
      document.body.appendChild(link)
      link.click()

      // Clean up after a short delay to ensure the download starts
      setTimeout(() => {
        document.body.removeChild(link)
        window.URL.revokeObjectURL(blobUrl)
      }, 100)
    })
    .catch((error) => {
      console.error("Error downloading CV:", error)

      // Fallback method if fetch fails
      const link = document.createElement("a")
      link.href = "/raz-lifshitz-cv.pdf"
      link.setAttribute("download", filename)
      link.setAttribute("target", "_blank")
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    })
}

