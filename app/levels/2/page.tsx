"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Package, Video, Image as ImageIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Level2Page() {
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

  const handleDownloadImage = (imagePath: string) => {
    const link = document.createElement('a')
    link.href = imagePath
    link.download = imagePath.split('/').pop() || 'image'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleDownloadAllTask1Images = () => {
    const images = [
      '/Level_2_Task1_Image1.jpg',
      '/Level_2_Task1_Image2.jpg',
      '/Level_2_Task1_Image3.jpg',
      '/Level_2_Task1_Image4.png'
    ]
    images.forEach((imagePath, index) => {
      setTimeout(() => {
        const link = document.createElement('a')
        link.href = imagePath
        link.download = imagePath.split('/').pop() || `image${index + 1}`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }, index * 200)
    })
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
              <span className="text-sm font-semibold text-white">Level 2</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Intermediate Tasks
            </h1>
          </div>
          <p className="text-lg md:text-xl text-white/60 max-w-3xl">
            Advanced analysis and strategic thinking challenges. Analyze defects and create comprehensive SWOT analyses.
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
                  <Package className="w-6 h-6 text-indigo-300" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl text-white mb-2">
                    Task 1: Product Defect Analysis & SWOT
                  </CardTitle>
                  <CardDescription className="text-white/60">
                    Multi-product defect identification and strategic analysis
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-black/20 rounded-lg p-6 border border-white/[0.05]">
                <p className="text-white/80 leading-relaxed mb-4">
                  You have 4 product images: analyze and compare the products, find the most common defect (appearing in over 40% of all defect cases), 
                  and—using this insight—write a <strong className="text-white">SWOT analysis (in JSON format)</strong> for each product that focuses on its 
                  main defects and how these defects create new opportunities in the market.
                </p>
                <div className="mt-4 p-4 bg-indigo-500/[0.1] border border-indigo-500/[0.3] rounded-md">
                  <p className="text-sm text-indigo-200">
                    <strong>📋 Key Requirements:</strong>
                  </p>
                  <ul className="text-sm text-indigo-200 mt-2 space-y-1 ml-4">
                    <li>• Analyze all 4 product images</li>
                    <li>• Identify defects appearing in over 40% of cases</li>
                    <li>• Create SWOT analysis in JSON format for each product</li>
                    <li>• Focus on how defects create market opportunities</li>
                  </ul>
                </div>
              </div>

              {/* Images Section */}
              <div className="bg-black/30 rounded-lg p-6 border border-white/[0.1]">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <ImageIcon className="w-5 h-5 text-violet-300" />
                    <h3 className="text-lg font-semibold text-white">Product Images (4 images)</h3>
                  </div>
                  <Button 
                    onClick={handleDownloadAllTask1Images}
                    className="bg-white hover:bg-white/90 text-black font-semibold"
                    size="sm"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download All
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { path: '/Level_2_Task1_Image1.jpg', name: 'Product 1' },
                    { path: '/Level_2_Task1_Image2.jpg', name: 'Product 2' },
                    { path: '/Level_2_Task1_Image3.jpg', name: 'Product 3' },
                    { path: '/Level_2_Task1_Image4.png', name: 'Product 4' },
                  ].map((image, index) => (
                    <div key={index} className="bg-white/[0.05] rounded-lg p-4">
                      <div className="relative w-full aspect-video overflow-hidden rounded-lg mb-3">
                        <Image 
                          src={image.path}
                          alt={`Product image ${index + 1} for Task 1`}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-white/70">{image.name}</span>
                        <Button 
                          onClick={() => handleDownloadImage(image.path)}
                          variant="outline"
                          size="sm"
                          className="border-white/20 hover:bg-white/10 text-white text-xs"
                        >
                          <Download className="w-3 h-3 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  ))}
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
                  <Video className="w-6 h-6 text-rose-300" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl text-white mb-2">
                    Task 2: Actor Advertisement Analysis
                  </CardTitle>
                  <CardDescription className="text-white/60">
                    Multi-step research and product analysis from video screenshot
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-black/20 rounded-lg p-6 border border-white/[0.05]">
                <p className="text-white/80 leading-relaxed mb-4">
                  Given a screenshot from a YouTube video, work out who the actor is. Look up their most successful advertisement campaign. 
                  Track down which product from the main product (in ads) company has had the lowest sales or popularity, and create a 
                  <strong className="text-white"> detailed SWOT analysis</strong> for it.
                </p>
                <ul className="space-y-2 text-white/80 ml-6 mb-4">
                  <li className="list-disc">
                    <strong className="text-white">Identify the actor</strong> from the YouTube screenshot
                  </li>
                  <li className="list-disc">
                    <strong className="text-white">Research their most successful ad campaign</strong>
                  </li>
                  <li className="list-disc">
                    <strong className="text-white">Find the lowest-performing product</strong> from that company
                  </li>
                  <li className="list-disc">
                    <strong className="text-white">Create a SWOT analysis in JSON format</strong>
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-rose-500/[0.1] border border-rose-500/[0.3] rounded-md">
                  <p className="text-sm text-rose-200">
                    <strong>🎯 Focus:</strong> Present the SWOT analysis as a JSON object, with clear emphasis on the product's unique weaknesses 
                    and any market opportunities created by them.
                  </p>
                </div>
              </div>

              {/* Image Section */}
              <div className="bg-black/30 rounded-lg p-6 border border-white/[0.1]">
                <div className="flex items-center gap-2 mb-4">
                  <ImageIcon className="w-5 h-5 text-violet-300" />
                  <h3 className="text-lg font-semibold text-white">YouTube Video Screenshot</h3>
                </div>
                <div className="bg-white/[0.05] rounded-lg p-4 mb-4">
                  <div className="relative w-full aspect-video overflow-hidden rounded-lg">
                    <Image 
                      src="/Level_2_Task2_Image.png"
                      alt="YouTube screenshot for Task 2"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <Button 
                  onClick={() => handleDownloadImage('/Level_2_Task2_Image.png')}
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
              <CardTitle className="text-white font-bold text-xl">💡 Tips for Level 2</CardTitle>
            </CardHeader>
            <CardContent className="text-white space-y-3 text-base leading-relaxed">
              <p>• Use systematic analysis to identify patterns across multiple products</p>
              <p>• Consider how product defects can reveal market gaps and opportunities</p>
              <p>• Structure your SWOT analysis in valid JSON format with clear categories</p>
              <p>• For the actor task, use reverse image search and cross-reference multiple sources</p>
              <p>• Think critically about how weaknesses can translate into competitive advantages</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
