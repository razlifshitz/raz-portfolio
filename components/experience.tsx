"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

export function Experience() {
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
    <section id="experience" ref={ref} className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={containerVariants} initial="hidden" animate={mainControls} className="space-y-20">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900">Experience</h2>
          </motion.div>

          <motion.div variants={itemVariants} className="grid gap-16">
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
              <div>
                <h3 className="text-xl font-medium text-gray-900">Appsflyer</h3>
                <p className="text-gray-500 mt-1">2022 - Present</p>
                <p className="text-gray-500 mt-1">Software Engineer</p>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Frontend developer in the Design System team, delivering high-quality, reusable components that
                  improved the efficiency of the development process across the organization.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Led the upgrade to React 18 and MUI 6, modernizing the codebase</li>
                  <li>Led strategic projects collaborating with product teams</li>
                  <li>Part of the frontend interviewers team</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
              <div>
                <h3 className="text-xl font-medium text-gray-900">WAVE BL</h3>
                <p className="text-gray-500 mt-1">2018 - 2022</p>
                <p className="text-gray-500 mt-1">Frontend Developer</p>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Developed a blockchain-based digital courier platform using React and other modern web technologies.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Built application infrastructure as part of a two-person team</li>
                  <li>Led the migration from AngularJS to React</li>
                  <li>Became the go-to expert on React and modern JavaScript</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
              <div>
                <h3 className="text-xl font-medium text-gray-900">IDF & Ness</h3>
                <p className="text-gray-500 mt-1">2014 - 2017</p>
                <p className="text-gray-500 mt-1">Fullstack Web Developer</p>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Developed and maintained a national-level defense system for headquarters to handle wartime scenarios.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Implemented complex logic with web technologies</li>
                  <li>Built critical applications for defense purposes</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

