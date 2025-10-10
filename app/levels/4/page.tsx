"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Lock } from "lucide-react"
import Link from "next/link"

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
        </motion.div>

        {/* Coming Soon Card */}
        <motion.div
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl mx-auto"
        >
          <Card className="bg-white/[0.03] border-white/[0.1] backdrop-blur-sm">
            <CardHeader className="text-center pb-8 pt-12">
              <div className="flex justify-center mb-6">
                <div className="p-6 rounded-full bg-white/[0.05] border border-white/[0.1]">
                  <Lock className="w-16 h-16 text-white/40" />
                </div>
              </div>
              <CardTitle className="text-3xl text-white mb-4">
                Coming Soon
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center pb-12">
              <p className="text-white/60 text-lg mb-8">
                Level 4 challenges are currently being prepared. Complete Level 1 and stay tuned for the ultimate prompt engineering challenges!
              </p>
              <Link href="/levels/1">
                <Button className="bg-white hover:bg-white/90 text-black">
                  Go to Level 1
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

