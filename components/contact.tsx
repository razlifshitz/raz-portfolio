"use client"

import type React from "react"

import { Button } from "./ui/button"
import { useEffect, useRef, useState } from "react"
import { useInView, useAnimation } from "framer-motion"
import { Send, Coffee } from "lucide-react"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const mainControls = useAnimation()
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFocusedField(e.target.name)
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!e.target.value) {
      setFocusedField(null)
    }
  }

  const validateForm = () => {
    let valid = true
    const newErrors = { name: "", email: "", message: "" }

    if (!formState.name.trim()) {
      newErrors.name = "Please tell us your name"
      valid = false
    }

    if (!formState.email.trim()) {
      newErrors.email = "We need your email to reach you"
      valid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "That doesn't look like a valid email"
      valid = false
    }

    if (!formState.message.trim()) {
      newErrors.message = "Don't forget to write a message"
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // In a real implementation, you would call your serverless function here
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formState)
      // })

      setIsSubmitted(true)
    } catch (error) {
      console.error("Error sending message:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setIsSubmitted(false)
    setFormState({
      name: "",
      email: "",
      message: "",
    })
    setErrors({
      name: "",
      email: "",
      message: "",
    })
    setFocusedField(null)
  }

  return (
    <section id="contact" ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-gray-900 dark:text-white">Let's Connect</h2>
          {!isSubmitted && (
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The best ideas brew over coffee. Shall we grab one together?
            </p>
          )}
        </div>

        <div className="max-w-md mx-auto">
          {!isSubmitted ? (
            <form
              onSubmit={handleSubmit}
              className="space-y-6 p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            >
              <div className="relative">
                <div
                  className={`relative ${
                    errors.name
                      ? "border-red-500"
                      : focusedField === "name" || formState.name
                        ? "border-blue-500"
                        : "border-gray-200 dark:border-gray-700"
                  } rounded-md transition-all duration-200`}
                >
                  <label
                    htmlFor="name"
                    className={`absolute transition-all duration-200 ${
                      focusedField === "name" || formState.name
                        ? "text-xs text-blue-500 top-1 left-3"
                        : "text-base text-gray-500 dark:text-gray-400 top-3 left-3"
                    }`}
                    style={{ color: focusedField === "name" || formState.name ? "rgb(75, 161, 204)" : "" }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formState.name}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className="block w-full px-3 pt-6 pb-2 rounded-md focus:outline-none focus:ring-0 bg-transparent border border-gray-200 dark:border-gray-700 dark:text-white"
                  />
                </div>
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              <div className="relative">
                <div
                  className={`relative ${
                    errors.email
                      ? "border-red-500"
                      : focusedField === "email" || formState.email
                        ? "border-blue-500"
                        : "border-gray-200 dark:border-gray-700"
                  } rounded-md transition-all duration-200`}
                >
                  <label
                    htmlFor="email"
                    className={`absolute transition-all duration-200 ${
                      focusedField === "email" || formState.email
                        ? "text-xs text-blue-500 top-1 left-3"
                        : "text-base text-gray-500 dark:text-gray-400 top-3 left-3"
                    }`}
                    style={{ color: focusedField === "email" || formState.email ? "rgb(75, 161, 204)" : "" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formState.email}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className="block w-full px-3 pt-6 pb-2 rounded-md focus:outline-none focus:ring-0 bg-transparent border border-gray-200 dark:border-gray-700 dark:text-white"
                  />
                </div>
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              <div className="relative">
                <div
                  className={`relative ${
                    errors.message
                      ? "border-red-500"
                      : focusedField === "message" || formState.message
                        ? "border-blue-500"
                        : "border-gray-200 dark:border-gray-700"
                  } rounded-md transition-all duration-200`}
                >
                  <label
                    htmlFor="message"
                    className={`absolute transition-all duration-200 ${
                      focusedField === "message" || formState.message
                        ? "text-xs text-blue-500 top-1 left-3"
                        : "text-base text-gray-500 dark:text-gray-400 top-3 left-3"
                    }`}
                    style={{ color: focusedField === "message" || formState.message ? "rgb(75, 161, 204)" : "" }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className="block w-full px-3 pt-6 pb-2 rounded-md focus:outline-none focus:ring-0 bg-transparent border border-gray-200 dark:border-gray-700 dark:text-white"
                  />
                </div>
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 inline-flex items-center justify-center dark:bg-blue-600 dark:hover:bg-blue-700"
                style={{ backgroundColor: "rgb(75, 161, 204)" }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          ) : (
            <div className="text-center py-10 p-8 rounded-lg shadow-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 mb-6">
                <Coffee className="h-8 w-8 text-green-600 dark:text-green-300" />
              </div>
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">Coffee's brewing!</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md mx-auto mb-6">
                I can already smell the coffee beans grinding. Thanks for reaching out—I'll get back to you soon!
              </p>
              <Button
                onClick={resetForm}
                className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
                style={{ backgroundColor: "rgb(75, 161, 204)" }}
              >
                Send another message
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

