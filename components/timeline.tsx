"use client"

import { motion } from "framer-motion"

export function Timeline() {
  const timelineItems = [
    {
      year: "2025 - Present",
      title: "Self-employed Entrepreneur",
      description: "Working on my next cool thing. Stay tuned.",
    },
    {
      year: "2022 - 2025",
      title: "Appsflyer",
      description: "Software Engineer",
    },
    {
      year: "2018 - 2022",
      title: "WAVE BL",
      description: "Frontend Developer",
    },
    {
      year: "2015 - 2017",
      title: "The College Of Management Academic Studies",
      description: "BSc. Computer Science",
    },
    {
      year: "2014 - 2017",
      title: "IDF & Ness Digital Engineering",
      description: "Fullstack Web Developer",
    },
    {
      year: "2014",
      title: "Mamram",
      description: "Software Development Course",
    },
  ]

  return (
    <div className="relative">
      {/* Timeline */}
      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 dark:before:via-gray-700 before:to-transparent">
        {timelineItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-gray-800 bg-gray-100 dark:bg-gray-800 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <span
                className="w-3 h-3 bg-blue-500 rounded-full"
                style={{ backgroundColor: "rgb(75, 161, 204)" }}
              ></span>
            </div>

            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-gray-800 p-4 rounded shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <h3 className="font-medium text-gray-900 dark:text-white">{item.title}</h3>
                <time className="text-xs font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap">
                  {item.year}
                </time>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

