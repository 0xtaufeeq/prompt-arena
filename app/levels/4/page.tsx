"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Film, Video, Image as ImageIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Level4Page() {
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

  const task1Images = [
    { path: '/Task1_Image1.png', name: 'Scene Image 1' },
    { path: '/Task1_Image2.png', name: 'Scene Image 2' },
  ]

  const handleDownloadImage = (imagePath: string) => {
    const link = document.createElement('a')
    link.href = imagePath
    link.download = imagePath.split('/').pop() || 'image'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleDownloadAllTask1Images = () => {
    task1Images.forEach((image, index) => {
      setTimeout(() => {
        const link = document.createElement('a')
        link.href = image.path
        link.download = image.path.split('/').pop() || `image${index + 1}`
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
            <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-amber-500/[0.2] to-cyan-500/[0.2] border border-white/[0.15]">
              <span className="text-sm font-semibold text-white">Level 4</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Expert Tasks
            </h1>
          </div>
          <p className="text-lg md:text-xl text-white/60 max-w-3xl">
            Master-level creative challenges. Digital reconstruction and content creation with cinematic precision.
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
          <Card className="bg-white/[0.03] border-white/[0.1] backdrop-blur-sm hover:border-amber-500/[0.3] transition-all duration-300">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-amber-500/[0.15] border border-amber-500/[0.3]">
                  <Film className="w-6 h-6 text-amber-300" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl text-white mb-2">
                    Task 1: Cinematic Scene Reconstruction
                  </CardTitle>
                  <CardDescription className="text-white/60">
                    Digital reconstruction of movie scenes with precision
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-black/20 rounded-lg p-6 border border-white/[0.05]">
                <p className="text-white/80 leading-relaxed mb-4">
                  Given the set of images from a specific movie scene, your challenge is to use these images to 
                  <strong className="text-white"> digitally reconstruct the original cinematic scene</strong> as accurately as possible.
                </p>
                
                <div className="my-6 p-4 bg-amber-500/[0.1] border border-amber-500/[0.3] rounded-md">
                  <p className="text-sm text-amber-200 font-semibold mb-2">
                    🎬 Final Output Requirements:
                  </p>
                  <p className="text-sm text-amber-200">
                    Your final output should visually match the key elements of the movie sequence:
                  </p>
                  <ul className="text-sm text-amber-200 mt-2 space-y-1 ml-6">
                    <li>• <strong>Mood</strong> - Capture the emotional tone and atmosphere</li>
                    <li>• <strong>Character Placement</strong> - Accurate positioning and composition</li>
                    <li>• <strong>Lighting</strong> - Replicate lighting setup and shadows</li>
                    <li>• <strong>Props</strong> - Include all key objects and set pieces</li>
                  </ul>
                </div>
              </div>

              {/* Images Section */}
              <div className="bg-black/30 rounded-lg p-6 border border-white/[0.1]">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <ImageIcon className="w-5 h-5 text-cyan-300" />
                    <h3 className="text-lg font-semibold text-white">Movie Scene Images</h3>
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
                  {task1Images.map((image, index) => (
                    <div key={index} className="bg-white/[0.05] rounded-lg p-4">
                      <div className="relative w-full aspect-video overflow-hidden rounded-lg mb-3">
                        <Image 
                          src={image.path}
                          alt={`Movie scene image ${index + 1}`}
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

              {/* Key Considerations */}
              <div className="bg-gradient-to-r from-amber-500/[0.15] to-orange-500/[0.15] rounded-lg p-4 border border-white/[0.15]">
                <h3 className="text-white font-semibold mb-2">🎯 Key Considerations:</h3>
                <ul className="text-sm text-white/80 space-y-1">
                  <li>• Analyze each image carefully for contextual clues</li>
                  <li>• Maintain cinematic quality and artistic direction</li>
                  <li>• Pay attention to color grading and visual style</li>
                  <li>• Consider camera angles and perspective</li>
                </ul>
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
          <Card className="bg-white/[0.03] border-white/[0.1] backdrop-blur-sm hover:border-cyan-500/[0.3] transition-all duration-300">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-cyan-500/[0.15] border border-cyan-500/[0.3]">
                  <Video className="w-6 h-6 text-cyan-300" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl text-white mb-2">
                    Task 2: Brand Rivalry Social Media Reel
                  </CardTitle>
                  <CardDescription className="text-white/60">
                    Coca-Cola vs Pepsi: Ronaldo vs Messi themed content creation
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-black/20 rounded-lg p-6 border border-white/[0.05]">
                <p className="text-white/80 leading-relaxed mb-4">
                  Imagine you are creating a <strong className="text-white">30-second social media reel</strong> in which 
                  <strong className="text-cyan-300"> Coca-Cola</strong> and <strong className="text-rose-300"> Pepsi</strong> each 
                  sponsor rival football teams themed around the legendary competition between <strong className="text-white">Ronaldo and Messi</strong>.
                </p>

                <div className="my-6 p-4 bg-cyan-500/[0.1] border border-cyan-500/[0.3] rounded-md">
                  <p className="text-sm text-cyan-200 font-semibold mb-2">
                    🎥 Your Mission:
                  </p>
                  <p className="text-sm text-cyan-200 mb-3">
                    Devise a storyboard and detailed reel plan that visually and narratively expresses the rivalry, 
                    highlights both brands, and creatively merges elements of:
                  </p>
                  <ul className="text-sm text-cyan-200 space-y-1 ml-4">
                    <li>• Celebrity endorsement (Ronaldo & Messi)</li>
                    <li>• Brand colors (Coca-Cola red vs Pepsi blue)</li>
                    <li>• Iconic football moments</li>
                  </ul>
                </div>
              </div>

              {/* Deliverables */}
              <div className="bg-black/30 rounded-lg p-6 border border-white/[0.1]">
                <h3 className="text-lg font-semibold text-white mb-4">📋 Required Deliverables:</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold mt-1">1.</span>
                    <div>
                      <p className="text-white font-semibold">Storyboard</p>
                      <p className="text-white/70 text-sm">Visual sequence of shots with frame-by-frame breakdown</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold mt-1">2.</span>
                    <div>
                      <p className="text-white font-semibold">Intended Shots</p>
                      <p className="text-white/70 text-sm">Camera angles, movements, and composition for each scene</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold mt-1">3.</span>
                    <div>
                      <p className="text-white font-semibold">Transitions & Effects</p>
                      <p className="text-white/70 text-sm">Visual effects, cuts, and transition styles between shots</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold mt-1">4.</span>
                    <div>
                      <p className="text-white font-semibold">Music Selection</p>
                      <p className="text-white/70 text-sm">Audio track choices that enhance the rivalry narrative</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold mt-1">5.</span>
                    <div>
                      <p className="text-white font-semibold">Digital Storytelling Best Practices</p>
                      <p className="text-white/70 text-sm">Justification grounded in social media content strategy</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Creative Guidelines */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-red-500/[0.15] to-red-600/[0.15] rounded-lg p-4 border border-red-400/[0.3]">
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    Coca-Cola Team
                  </h4>
                  <p className="text-sm text-white/80">Consider Coca-Cola's brand identity: classic, timeless, and emotionally resonant</p>
                </div>
                <div className="bg-gradient-to-br from-blue-500/[0.15] to-blue-600/[0.15] rounded-lg p-4 border border-blue-400/[0.3]">
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    Pepsi Team
                  </h4>
                  <p className="text-sm text-white/80">Consider Pepsi's brand identity: bold, youthful, and energetic</p>
                </div>
              </div>

              {/* Important Note */}
              <div className="p-4 bg-purple-500/[0.1] border border-purple-500/[0.3] rounded-md">
                <p className="text-sm text-purple-200">
                  <strong>⚠️ Note:</strong> Your submission must outline all elements in detail. Think like a director, 
                  cinematographer, and brand strategist combined. Show how each creative decision serves both the rivalry 
                  narrative and brand positioning.
                </p>
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
              <CardTitle className="text-white font-bold text-xl">💡 Tips for Level 4</CardTitle>
            </CardHeader>
            <CardContent className="text-white space-y-3 text-base leading-relaxed">
              <p>• For Task 1: Use AI tools that can analyze and replicate visual styles, lighting, and composition</p>
              <p>• Pay attention to cinematic details like depth of field, color grading, and atmospheric effects</p>
              <p>• For Task 2: Study successful brand rivalry campaigns and viral sports content</p>
              <p>• Consider the 30-second constraint - every second must serve the narrative</p>
              <p>• Think about how colors, music, and pacing can build tension and excitement</p>
              <p>• Ground your creative choices in real social media performance metrics and best practices</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
