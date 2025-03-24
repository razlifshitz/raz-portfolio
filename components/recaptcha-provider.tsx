"use client"

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"
import type React from "react"

export function ReCaptchaProvider({ children }: { children: React.ReactNode }) {
  const reCaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={reCaptchaSiteKey}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: "head",
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  )
}

