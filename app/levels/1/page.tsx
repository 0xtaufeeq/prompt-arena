"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Mail, ShoppingCart, Image as ImageIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Level1Page() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.15,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  const handleDownloadImage = () => {
    const link = document.createElement('a')
    link.href = '/Task2_Image.jpg'
    link.download = 'Task2_Image.jpg'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-[#030303] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-16">
        {/* Header */}
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <Link href="/levels">
            <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Levels
            </Button>
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500/[0.2] to-rose-500/[0.2] border border-white/[0.15]">
              <span className="text-sm font-semibold text-white">Level 1</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Foundation Tasks
            </h1>
          </div>
          <p className="text-lg md:text-xl text-white/60 max-w-3xl">
            Welcome to Level 1! Complete these two tasks to master the basics of prompt engineering.
          </p>
        </motion.div>

        {/* Task 1 */}
        <motion.div
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <Card className="bg-white/[0.03] border-white/[0.1] backdrop-blur-sm hover:border-indigo-500/[0.3] transition-all duration-300">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-indigo-500/[0.15] border border-indigo-500/[0.3]">
                  <Mail className="w-6 h-6 text-indigo-300" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl text-white mb-2">
                    Task 1: Email Data Filtering
                  </CardTitle>
                  <CardDescription className="text-white/60">
                    Master data filtering and summarization
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-black/20 rounded-lg p-6 border border-white/[0.05]">
                <p className="text-white/80 leading-relaxed">
                  For your inbox, you want a summary <strong className="text-white">AND</strong> a list of all emails flagged as spam, 
                  but specifically those identified as coming from sectors with <strong className="text-white">less than 10% activity in ecommerce</strong>. 
                  Use the resources at your disposal to produce this as efficiently as possible in one agent prompt.
                </p>
                <div className="mt-4 p-4 bg-rose-500/[0.1] border border-rose-500/[0.3] rounded-md">
                  <p className="text-sm text-rose-200">
                    <strong>⚠️ Note:</strong> Submitting the task wording as a prompt won't work!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Task 2 */}
        <motion.div
          custom={2}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <Card className="bg-white/[0.03] border-white/[0.1] backdrop-blur-sm hover:border-rose-500/[0.3] transition-all duration-300">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-rose-500/[0.15] border border-rose-500/[0.3]">
                  <ShoppingCart className="w-6 h-6 text-rose-300" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl text-white mb-2">
                    Task 2: Product Price Comparison
                  </CardTitle>
                  <CardDescription className="text-white/60">
                    Image analysis and intelligent price searching
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-black/20 rounded-lg p-6 border border-white/[0.05]">
                <p className="text-white/80 leading-relaxed mb-4">
                  You have an image of a product. In a single prompt, instruct your agent to:
                </p>
                <ul className="space-y-2 text-white/80 ml-6">
                  <li className="list-disc">
                    <strong className="text-white">Identify the product</strong>
                  </li>
                  <li className="list-disc">
                    <strong className="text-white">Search all major online shops</strong> for the best price where it meets the following:
                    <ul className="ml-6 mt-2 space-y-1">
                      <li className="list-circle">Rating of 4 stars or higher</li>
                      <li className="list-circle">Only from platforms with at least 999 daily active users</li>
                    </ul>
                  </li>
                  <li className="list-disc">
                    <strong className="text-white">Return your result with links and reasoning</strong>
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-rose-500/[0.1] border border-rose-500/[0.3] rounded-md">
                  <p className="text-sm text-rose-200">
                    <strong>⚠️ Reminder:</strong> Copying this task as a prompt will fail—rewrite it as an actionable, step-by-step agent instruction!
                  </p>
                </div>
              </div>

              {/* Image Section */}
              <div className="bg-black/30 rounded-lg p-6 border border-white/[0.1]">
                <div className="flex items-center gap-2 mb-4">
                  <ImageIcon className="w-5 h-5 text-violet-300" />
                  <h3 className="text-lg font-semibold text-white">Product Image</h3>
                </div>
                <div className="bg-white/[0.05] rounded-lg p-4 mb-4">
                  <div className="relative w-full aspect-video overflow-hidden rounded-lg">
                    <Image 
                      src="/Task2_Image.jpg"
                      alt="Product image for Task 2"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <Button 
                  onClick={handleDownloadImage}
                  className="w-full bg-white hover:bg-white/90 text-black font-semibold"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Image
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Tips Section */}
        <motion.div
          custom={3}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <Card className="bg-black/80 border-white/[0.3] backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-white font-bold text-xl">💡 Tips for Success</CardTitle>
            </CardHeader>
            <CardContent className="text-white space-y-3 text-base leading-relaxed">
              <p>• Break down complex tasks into clear, actionable steps</p>
              <p>• Be specific about data requirements and filtering criteria</p>
              <p>• Consider edge cases and specify expected output format</p>
              <p>• Test your prompts to ensure they produce the desired results</p>
              <p>• Think about how an AI agent would interpret your instructions</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

