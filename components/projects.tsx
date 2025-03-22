"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, threshold: 0.1 })
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

  return (
    <section id="projects" ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={containerVariants} initial="hidden" animate={mainControls} className="space-y-20">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 dark:text-white">Projects</h2>
          </motion.div>

          <motion.div variants={itemVariants} className="grid gap-20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <Link
                href="https://www.ofrilifshitz.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-64 w-full overflow-hidden group block"
              >
                <Image
                  src="/images/ofri-portfolio.png"
                  alt="Ofri Lifshitz Portfolio"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEtAJJXIDTjwAAAABJRU5ErkJggg=="
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </Link>
              <div className="space-y-4">
                <h3 className="text-2xl font-medium text-gray-900 dark:text-white">ofrilifshitz.com</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  A portfolio website I designed and developed from scratch. Built with React and Gatsby, showcasing a
                  clean, minimalist design that highlights the work effectively.
                </p>
                <div className="pt-2">
                  <Link
                    href="https://www.ofrilifshitz.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 inline-flex items-center group dark:text-blue-400 dark:hover:text-blue-300"
                    style={{ color: "rgb(75, 161, 204)" }}
                  >
                    Visit site
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center md:order-2">
              <Link
                href="https://www.ofrilifshitz.com/one-of/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-64 w-full overflow-hidden group block md:order-2"
              >
                <Image
                  src="/images/one-of-project.png"
                  alt="One-of Arduino Project"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEtAJJXIDTjwAAAABJRU5ErkJggg=="
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </Link>
              <div className="space-y-4 md:order-1">
                <h3 className="text-2xl font-medium text-gray-900 dark:text-white">The "One-of" Project</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  An Arduino project that won two prestigious awards: the Dean's Excellence project and the
                  America-Israel Cultural Foundation Creative Excellence Grant.
                </p>
                <div className="pt-2">
                  <Link
                    href="https://www.ofrilifshitz.com/one-of/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 inline-flex items-center group dark:text-blue-400 dark:hover:text-blue-300"
                    style={{ color: "rgb(75, 161, 204)" }}
                  >
                    Read more
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

