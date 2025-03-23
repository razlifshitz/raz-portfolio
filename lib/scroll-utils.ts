/**
 * Utility functions for handling scroll behavior
 */

/**
 * Prevents scrolling for a short period of time
 * Useful when navigating between pages to prevent unwanted scrolling
 */
export function preventScrollTemporarily(duration = 100): void {
  // Store the current scroll position
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop

  // Function to prevent scrolling by immediately resetting to stored position
  const preventScroll = () => {
    window.scrollTo(0, scrollPosition)
  }

  // Add the event listener
  window.addEventListener("scroll", preventScroll)

  // Remove it after the specified duration
  setTimeout(() => {
    window.removeEventListener("scroll", preventScroll)
  }, duration)
}

/**
 * Scrolls to a specific section without animation
 */
export function scrollToSectionInstantly(sectionId: string): void {
  const element = document.getElementById(sectionId)
  if (element) {
    const yOffset = element.getBoundingClientRect().top + window.pageYOffset
    window.scrollTo({
      top: yOffset,
      behavior: "auto", // Use 'auto' for no animation
    })
  }
}

/**
 * Maintains the current scroll position
 */
export function maintainScrollPosition(): void {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop
  window.scrollTo(0, scrollPosition)
}

