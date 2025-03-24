"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Twitter, Camera, FileText } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { downloadCV } from "@/lib/utils"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!hasAnimated) {
      setIsVisible(true)
      setHasAnimated(true)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only set visibility, don't trigger animation again
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current)
      }
    }
  }, [isVisible, hasAnimated])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
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

  return (
    <div ref={heroRef} className="h-screen flex flex-col justify-center pt-4 md:pt-16 relative">
      <motion.div
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-20"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Mobile layout */}
        <div className="md:hidden">
          <div className="flex flex-col items-start">
            {/* Profile photo at the top */}
            <div className="w-full flex justify-center mb-5">
              <motion.div
                className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-700"
                variants={itemVariants}
              >
                <Image
                  src="/images/raz-profile.jpeg"
                  alt="Raz Lifshitz"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEtAJJXIDTjwAAAABJRU5ErkJggg=="
                />
              </motion.div>
            </div>

            <motion.h1
              className="text-4xl font-light text-gray-900 dark:text-white mb-3 w-full"
              variants={itemVariants}
            >
              I'm Raz Lifshitz.
            </motion.h1>

            <motion.p className="text-lg text-gray-800 dark:text-gray-200 mb-5 w-full" variants={itemVariants}>
              Frontend Engineer. Chess Player. Photographer. Maker.
            </motion.p>

            {/* Updated description text */}
            <motion.p className="text-base text-gray-600 dark:text-gray-300 mb-6 w-full" variants={itemVariants}>
              I create digital experiences, capture moments, and bring ideas to life.
            </motion.p>

            {/* Social icons aligned left on mobile */}
            <motion.div className="flex space-x-5 mb-8 w-full" variants={itemVariants}>
              <Link
                href="https://twitter.com/razlifshitz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="mailto:razlifshitz@gmail.com"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/raz-lifshitz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://github.com/razlifshitz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://500px.com/p/RazLifshitz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <Camera className="h-5 w-5" />
                <span className="sr-only">500px</span>
              </Link>
              <Link
                href="/raz-lifshitz-cv.pdf"
                download
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                onClick={downloadCV}
              >
                <FileText className="h-5 w-5" />
                <span className="sr-only">Download CV</span>
              </Link>
            </motion.div>

            {/* Arrow still centered */}
            <div className="w-full flex justify-center">
              <div className="animate-bounce">
                <ArrowDown className="h-6 w-6 text-gray-400 dark:text-gray-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:flex md:flex-row md:items-start md:gap-8">
          <motion.div className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0" variants={itemVariants}>
            <Image
              src="/images/raz-profile.jpeg"
              alt="Raz Lifshitz"
              fill
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEtAJJXIDTjwAAAABJRU5ErkJggg=="
            />
          </motion.div>

          <div>
            <motion.h1 className="text-6xl font-light text-gray-900 dark:text-white mb-6" variants={itemVariants}>
              I'm Raz Lifshitz.
            </motion.h1>

            <motion.p className="text-xl text-gray-800 dark:text-gray-200 mb-6" variants={itemVariants}>
              Frontend Engineer. Chess Player. Photographer. Maker.
            </motion.p>

            {/* Updated description text */}
            <motion.p className="text-lg text-gray-600 dark:text-gray-300 mb-8" variants={itemVariants}>
              I create digital experiences, capture moments, and bring ideas to life.
            </motion.p>

            <motion.div className="flex space-x-5" variants={itemVariants}>
              <Link
                href="https://twitter.com/razlifshitz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="mailto:razlifshitz@gmail.com"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/raz-lifshitz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://github.com/razlifshitz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://500px.com/p/RazLifshitz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <Camera className="h-5 w-5" />
                <span className="sr-only">500px</span>
              </Link>
              <Link
                href="/raz-lifshitz-cv.pdf"
                download
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                onClick={downloadCV}
              >
                <FileText className="h-5 w-5" />
                <span className="sr-only">Download CV</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Desktop arrow - absolute positioning at bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <ArrowDown className="h-6 w-6 text-gray-400 dark:text-gray-500" />
      </div>
    </div>
  )
}

