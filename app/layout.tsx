import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "../components/theme-provider"
import { PersistentLayout } from "../components/persistent-layout"
import { ReCaptchaProvider } from "../components/recaptcha-provider"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

// Define the base URL
const baseUrl = "https://razlifshitz.com"

// Convert static metadata to dynamic generateMetadata function
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Raz Lifshitz",
    description: "Frontend Engineer, Chess Player, Photographer, and Maker",
    generator: "v0.dev",
    metadataBase: new URL(baseUrl),
    openGraph: {
      title: "Raz Lifshitz",
      description: "Frontend Engineer, Chess Player, Photographer, and Maker",
      url: baseUrl,
      siteName: "Raz Lifshitz",
      images: [
        {
          url: `${baseUrl}/og-image.png`,
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
      creator: "@razlifshitz",
      images: [
        {
          url: `${baseUrl}/razlifshitz_twitter.png`,
          width: 800,
          height: 800,
          alt: "Raz Lifshitz",
        },
      ],
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

        {/* Explicit Twitter card meta tags for maximum compatibility */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@razlifshitz" />
        <meta name="twitter:creator" content="@razlifshitz" />
        <meta name="twitter:title" content="Raz Lifshitz" />
        <meta name="twitter:description" content="Frontend Engineer, Chess Player, Photographer, and Maker" />
        <meta name="twitter:image" content={`${baseUrl}/razlifshitz_twitter.png`} />
        <meta name="twitter:image:alt" content="Raz Lifshitz" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ReCaptchaProvider>
            <Analytics />
            <SpeedInsights />
            <PersistentLayout>{children}</PersistentLayout>
          </ReCaptchaProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

import "./globals.css"

