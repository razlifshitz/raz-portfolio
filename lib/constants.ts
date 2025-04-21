export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280,
} as const

// Common breakpoint for mobile/desktop transition
export const MOBILE_BREAKPOINT = BREAKPOINTS.mobile

// Theme colors
export const THEME = {
  primaryBlue: "rgb(75, 161, 204)",
  darkModeBlue: "#60a5ff",
} as const 