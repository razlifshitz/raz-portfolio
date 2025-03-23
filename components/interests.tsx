"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Camera } from "lucide-react"
import Image from "next/image"

export function Interests() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.05 })
  const mainControls = useAnimation()

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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="interests" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={containerVariants} initial="hidden" animate={mainControls} className="space-y-20">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 dark:text-white">Interests</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-900 dark:text-white"
                >
                  <path
                    d="M17 3H7V6C7 7.65685 8.34315 9 10 9H14C15.6569 9 17 7.65685 17 6V3Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 9L7 7M19 9L17 7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 9V16L8 19H16L19 16V9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Chess</h3>
              </div>

              <motion.div variants={imageVariants} className="relative w-full aspect-video overflow-hidden rounded-md">
                <Image
                  src="/images/raz-chess.jpeg"
                  alt="Raz playing chess"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEtAJJXIDTjwAAAABJRU5ErkJggg=="
                />
              </motion.div>

              <p className="text-gray-600 dark:text-gray-300">
                For over 20 years, chess has been my strategic playground. It's taught me patience, foresight, and the
                ability to see multiple steps ahead - skills that translate directly to my approach to software
                development.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3">
                <Camera className="h-5 w-5 text-gray-900 dark:text-white" />
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Photography</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <motion.div variants={imageVariants} className="relative aspect-square rounded-md overflow-hidden">
                  <Image
                    src="/images/photography_thumb2.jpeg"
                    alt="Sunset at the Hudson River"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEtAJJXIDTjwAAAABJRU5ErkJggg=="
                  />
                </motion.div>
                <motion.div variants={imageVariants} className="relative aspect-square rounded-md overflow-hidden">
                  <Image
                    src="/images/photography_thumb1.jpeg"
                    alt="Butterfly - Tiny Life"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEtAJJXIDTjwAAAABJRU5ErkJggg=="
                  />
                </motion.div>
              </div>

              <p className="text-gray-600 dark:text-gray-300">
                Photography helps me develop a keen eye for detail and composition - skills that enhance my ability to
                create visually appealing interfaces.
              </p>

              <div className="pt-2">
                <Link
                  href="https://500px.com/p/RazLifshitz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 inline-flex items-center group dark:text-blue-400 dark:hover:text-blue-300"
                  style={{ color: "rgb(75, 161, 204)" }}
                >
                  Find me on 500px
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

