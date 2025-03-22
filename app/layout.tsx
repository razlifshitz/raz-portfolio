import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "../components/theme-provider"
import { PersistentLayout } from "../components/persistent-layout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Raz Lifshitz - Frontend Engineer",
  description: "Frontend Engineer, Chess Player, Photographer, and Maker",
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
              if (mode === 'dark' || (!mode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
                document.documentElement.style.backgroundColor = '#111827';
                document.body.style.backgroundColor = '#111827';
              } else {
                document.documentElement.classList.remove('dark');
              }
            } catch (e) {}
          })();
        `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <PersistentLayout>{children}</PersistentLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}

