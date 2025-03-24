import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "../components/theme-provider"
import { PersistentLayout } from "../components/persistent-layout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Raz Lifshitz",
  description: "Frontend Engineer, Chess Player, Photographer, and Maker",
  generator: "v0.dev",
  metadataBase: new URL("https://razlifshitz.com"), // Replace with your actual domain
  openGraph: {
    title: "Raz Lifshitz",
    description: "Frontend Engineer, Chess Player, Photographer, and Maker",
    url: "https://razlifshitz.com", // Replace with your actual domain
    siteName: "Raz Lifshitz",
    images: [
      {
        url: "/og-image.png", // This will be the thumbnail image
        width: 1200,
        height: 630,
        alt: "Raz Lifshitz",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raz Lifshitz",
    description: "Frontend Engineer, Chess Player, Photographer, and Maker",
    images: ["/og-image.png"], // Same image as OpenGraph
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/android-chrome-192x192.png", sizes: "192x192" },
      { url: "/android-chrome-512x512.png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    shortcut: ["/favicon.ico"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Script to prevent dark mode flickering */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function() {
try {
  const mode = localStorage.getItem('theme');
  if (mode === 'dark') {
    document.documentElement.classList.add('dark');
  }
} catch (e) {}
})();
`,
          }}
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <PersistentLayout>{children}</PersistentLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'