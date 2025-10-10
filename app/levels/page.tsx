"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lock, CheckCircle2, ArrowRight, Home } from "lucide-react"
import Link from "next/link"

const levels = [
  {
    id: 1,
    title: "Level 1: Foundation",
    description: "Master basic prompt engineering with data filtering and product search tasks",
    status: "available",
    tasks: 2,
  },
  {
    id: 2,
    title: "Level 2: Intermediate",
    description: "Advanced analysis with defect identification and strategic SWOT analysis tasks",
    status: "available",
    tasks: 2,
  },
  {
    id: 3,
    title: "Level 3: Advanced",
    description: "Complex data analysis with web scraping, statistical analysis, and hypothesis testing",
    status: "available",
    tasks: 2,
  },
  {
    id: 4,
    title: "Level 4: Expert",
    description: "Master-level creative challenges with cinematic reconstruction and brand content creation",
    status: "available",
    tasks: 2,
  },
]

export default function LevelsPage() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
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
          <Link href="/">
            <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10 mb-6">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Challenge Levels
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-3xl">
            Progress through four levels of increasing difficulty. Each level tests different aspects of prompt engineering mastery.
          </p>
        </motion.div>

        {/* Levels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">
          {levels.map((level, index) => (
            <motion.div
              key={level.id}
              custom={index + 1}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <Card className={`bg-white/[0.03] border-white/[0.1] backdrop-blur-sm hover:bg-white/[0.05] transition-all duration-300 ${
                level.status === "locked" ? "opacity-60" : ""
              }`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-white mb-2">
                        {level.title}
                      </CardTitle>
                      <CardDescription className="text-white/60">
                        {level.description}
                      </CardDescription>
                    </div>
                    <div className="ml-4">
                      {level.status === "locked" ? (
                        <Lock className="w-6 h-6 text-white/40" />
                      ) : (
                        <CheckCircle2 className="w-6 h-6 text-green-400" />
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/50">
                      {level.tasks > 0 ? `${level.tasks} Tasks` : "Coming Soon"}
                    </span>
                    {level.status === "available" ? (
                      <Link href={`/levels/${level.id}`}>
                        <Button 
                          size="sm"
                          className="bg-white hover:bg-white/90 text-black"
                        >
                          Start Level
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    ) : (
                      <Button 
                        size="sm"
                        disabled
                        className="bg-white/10 text-white/40"
                      >
                        Locked
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Info Section */}
        <motion.div
          custom={5}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mt-12 max-w-3xl"
        >
          <Card className="bg-black/80 border-white/[0.3] backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-white font-bold text-xl">How It Works</CardTitle>
            </CardHeader>
            <CardContent className="text-white space-y-3 text-base leading-relaxed">
              <p>• Complete tasks in each level to progress to the next</p>
              <p>• Each task requires you to craft effective prompts for AI agents</p>
              <p>• Your solutions will be evaluated based on accuracy and efficiency</p>
              <p>• Remember: Simply copying the task description won't work!</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

