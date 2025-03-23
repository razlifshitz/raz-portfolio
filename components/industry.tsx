"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Briefcase } from "lucide-react"
import Image from "next/image"

export function Industry() {
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

  return (
    <section id="industry" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={containerVariants} initial="hidden" animate={mainControls} className="space-y-16">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 dark:text-white">Industry</h2>
          </motion.div>

          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-lg">
              <Image
                src="/images/appsflyer.jpeg"
                alt="Raz at AppsFlyer"
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEtAJJXIDTjwAAAABJRU5ErkJggg=="
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-blue-500" style={{ color: "rgb(75, 161, 204)" }} />
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">A Decade of Web Development</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                For over a decade, I've been crafting web applications that blend functionality with intuitive design.
                From startups to established companies, I've helped build digital experiences that make a difference.
              </p>
              <div className="pt-2">
                <Link
                  href="/experience"
                  className="text-blue-500 hover:text-blue-600 inline-flex items-center group dark:text-blue-400 dark:hover:text-blue-300"
                  style={{ color: "rgb(75, 161, 204)" }}
                >
                  See my full journey
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8 items-center md:order-2">
            <div className="space-y-4 md:order-1">
              <div className="flex items-center gap-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-blue-500"
                  style={{ color: "rgb(75, 161, 204)" }}
                >
                  <path
                    d="M4 19V5C4 3.89543 4.89543 3 6 3H19.4C19.7314 3 20 3.26863 20 3.6V16.7143"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path d="M6 17L20 17" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M6 21L20 21" stroke="currentColor" strokeWidth="1.5" />
                  <path
                    d="M6 21C4.89543 21 4 20.1046 4 19C4 17.8954 4.89543 17 6 17"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path d="M9 7L15 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Hackathon Enthusiast</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                There's nothing quite like the creative energy of a hackathon. At AppsFlyer, I participated in two R&D
                hackathons, finishing in 2nd and 3rd place. These intense coding sprints are where innovation meets
                teamwork, and I thrive in that environment.
              </p>
            </div>
            <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-lg md:order-2">
              <Image
                src="/images/hackathon.jpeg"
                alt="Raz at a hackathon with team"
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEtAJJXIDTjwAAAABJRU5ErkJggg=="
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-blue-500"
                style={{ color: "rgb(75, 161, 204)" }}
              >
                <path
                  d="M19.5 12.572L12 20L4.5 12.572C3.5 11.572 3 10.286 3 9C3 6.5 5 4.5 7.5 4.5C8.786 4.5 10.071 5 11.071 6L12 7L12.929 6C13.929 5 15.214 4.5 16.5 4.5C19 4.5 21 6.5 21 9C21 10.286 20.5 11.572 19.5 12.572Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">Volunteering & Mentorship</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Giving back is a core part of who I am. I love mentoring and helping others achieve greatness. For the
              past two years, I've mentored at "Be-Safe" hackathons, which focus on creating safer web experiences for
              women. Most recently, my team of talented young women achieved 2nd place!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6">
              <div className="md:col-span-7 overflow-hidden rounded-lg shadow-md">
                <div className="relative w-full h-[300px]">
                  <Image
                    src="/images/besafe2024.jpeg"
                    alt="Raz with BeSafe hackathon team in 2024"
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEtAJJXIDTjwAAAABJRU5ErkJggg=="
                  />
                </div>
              </div>

              <div className="md:col-span-5 overflow-hidden rounded-lg shadow-md">
                <div className="relative w-full h-[300px]">
                  <Image
                    src="/images/besafe1.jpeg"
                    alt="Raz mentoring at BeSafe hackathon in 2023"
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEtAJJXIDTjwAAAABJRU5ErkJggg=="
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

