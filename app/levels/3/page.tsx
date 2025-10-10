"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Globe, Database, FileText } from "lucide-react"
import Link from "next/link"

export default function Level3Page() {
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

  const handleDownloadDataset = () => {
    const files = [
      '/Task2_Dataset/bank-additional-full.csv',
      '/Task2_Dataset/bank-additional-names.txt'
    ]
    files.forEach((filePath, index) => {
      setTimeout(() => {
        const link = document.createElement('a')
        link.href = filePath
        link.download = filePath.split('/').pop() || `file${index + 1}`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }, index * 300)
    })
  }

  const handleDownloadSingleFile = (filePath: string) => {
    const link = document.createElement('a')
    link.href = filePath
    link.download = filePath.split('/').pop() || 'file'
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
            <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-violet-500/[0.2] to-amber-500/[0.2] border border-white/[0.15]">
              <span className="text-sm font-semibold text-white">Level 3</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Advanced Tasks
            </h1>
          </div>
          <p className="text-lg md:text-xl text-white/60 max-w-3xl">
            Complex data analysis and research challenges. Master web scraping, statistical analysis, and predictive modeling.
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
          <Card className="bg-white/[0.03] border-white/[0.1] backdrop-blur-sm hover:border-violet-500/[0.3] transition-all duration-300">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-violet-500/[0.15] border border-violet-500/[0.3]">
                  <Globe className="w-6 h-6 text-violet-300" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl text-white mb-2">
                    Task 1: Government Statistics Analysis & Prediction
                  </CardTitle>
                  <CardDescription className="text-white/60">
                    Web scraping, topic analysis, and trend prediction
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-black/20 rounded-lg p-6 border border-white/[0.05]">
                <p className="text-white/80 leading-relaxed mb-4">
                  You're looking at a government statistics site (
                  <a 
                    href="https://mospi.gov.in/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-violet-300 hover:text-violet-200 underline"
                  >
                    https://mospi.gov.in/
                  </a>
                  ) with hundreds of recent reports, each under different topics. How would you use an agent to discover which 
                  <strong className="text-white"> 5 topics are seeing the most new reports published each day</strong>?
                </p>
                
                <div className="my-6 p-4 bg-violet-500/[0.1] border border-violet-500/[0.3] rounded-md">
                  <p className="text-sm text-violet-200 font-semibold mb-2">
                    🎯 Your Goal:
                  </p>
                  <p className="text-sm text-violet-200">
                    Design a prompt that gets you both the top 5 topics and a structured summary describing the frequency, 
                    ready for inclusion in a Google-style data analysis report.
                  </p>
                </div>

                <div className="p-4 bg-amber-500/[0.1] border border-amber-500/[0.3] rounded-md">
                  <p className="text-sm text-amber-200 font-semibold mb-2">
                    📈 Additional Analysis:
                  </p>
                  <p className="text-sm text-amber-200">
                    Also perform a separate analysis on each topic and <strong>predict growth in the number of daily reports 
                    being published for the upcoming month</strong>.
                  </p>
                </div>
              </div>

              {/* Key Requirements */}
              <div className="bg-black/30 rounded-lg p-6 border border-white/[0.1]">
                <h3 className="text-lg font-semibold text-white mb-4">📋 Key Requirements:</h3>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-violet-400 mt-1">1.</span>
                    <span>Identify the top 5 topics with most new reports published daily</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-400 mt-1">2.</span>
                    <span>Create a structured summary with frequency data (Google-style report format)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-400 mt-1">3.</span>
                    <span>Perform separate analysis on each of the 5 topics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-400 mt-1">4.</span>
                    <span>Predict growth in daily report publications for the upcoming month (for each topic)</span>
                  </li>
                </ul>
              </div>

              {/* Resource Link */}
              <div className="bg-gradient-to-r from-violet-500/[0.15] to-indigo-500/[0.15] rounded-lg p-4 border border-white/[0.15]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold mb-1">🔗 Target Website</p>
                    <p className="text-sm text-white/70">Ministry of Statistics and Programme Implementation</p>
                  </div>
                  <Button 
                    asChild
                    className="bg-white hover:bg-white/90 text-black font-semibold"
                  >
                    <a 
                      href="https://mospi.gov.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Site
                    </a>
                  </Button>
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
          <Card className="bg-white/[0.03] border-white/[0.1] backdrop-blur-sm hover:border-amber-500/[0.3] transition-all duration-300">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-amber-500/[0.15] border border-amber-500/[0.3]">
                  <Database className="w-6 h-6 text-amber-300" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl text-white mb-2">
                    Task 2: Complete Dataset Analysis Pipeline
                  </CardTitle>
                  <CardDescription className="text-white/60">
                    End-to-end data analysis with hypothesis testing and prediction
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-black/20 rounded-lg p-6 border border-white/[0.05]">
                <p className="text-white/80 leading-relaxed mb-4">
                  A complex dataset has been mentioned above. In a <strong className="text-white">single-agent prompt</strong>, 
                  instruct the agent to perform a complete analysis pipeline:
                </p>
                
                <div className="space-y-3 ml-4 mb-4">
                  <div className="flex items-start gap-3">
                    <span className="text-amber-400 font-bold mt-1">1.</span>
                    <div>
                      <p className="text-white font-semibold">Descriptive Statistics</p>
                      <p className="text-white/70 text-sm">Summarize the main descriptive statistics</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-amber-400 font-bold mt-1">2.</span>
                    <div>
                      <p className="text-white font-semibold">Data Cleaning</p>
                      <p className="text-white/70 text-sm">Clean the data using findings from your descriptive analysis</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-amber-400 font-bold mt-1">3.</span>
                    <div>
                      <p className="text-white font-semibold">Hypothesis Research</p>
                      <p className="text-white/70 text-sm">Research and identify the most common hypotheses currently being tested with this dataset in the Kaggle community or similar platforms</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-amber-400 font-bold mt-1">4.</span>
                    <div>
                      <p className="text-white font-semibold">Hypothesis Testing</p>
                      <p className="text-white/70 text-sm">Select one hypothesis and perform step-by-step hypothesis testing—clearly outlining each stage of the process</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-amber-400 font-bold mt-1">5.</span>
                    <div>
                      <p className="text-white font-semibold">Predictive Analysis</p>
                      <p className="text-white/70 text-sm">Conclude with predictive analysis on the cleaned dataset</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-amber-500/[0.1] border border-amber-500/[0.3] rounded-md">
                  <p className="text-sm text-amber-200">
                    <strong>⚠️ Important:</strong> Your prompt should be comprehensive enough to guide the agent through all these 
                    stages in a structured, logical flow, with <strong>stepwise details for the hypothesis test</strong>.
                  </p>
                </div>
              </div>

              {/* Dataset Section */}
              <div className="bg-black/30 rounded-lg p-6 border border-white/[0.1]">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-cyan-300" />
                    <h3 className="text-lg font-semibold text-white">Dataset Files</h3>
                  </div>
                  <Button 
                    onClick={handleDownloadDataset}
                    className="bg-white hover:bg-white/90 text-black font-semibold"
                    size="sm"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download All
                  </Button>
                </div>

                <div className="space-y-3">
                  {/* Main Dataset */}
                  <div className="bg-white/[0.05] rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded bg-cyan-500/[0.2] border border-cyan-500/[0.3]">
                        <Database className="w-5 h-5 text-cyan-300" />
                      </div>
                      <div>
                        <p className="text-white font-medium">bank-additional-full.csv</p>
                        <p className="text-xs text-white/60">Main dataset file</p>
                      </div>
                    </div>
                    <Button 
                      onClick={() => handleDownloadSingleFile('/Task2_Dataset/bank-additional-full.csv')}
                      variant="outline"
                      size="sm"
                      className="border-white/20 hover:bg-white/10 text-white"
                    >
                      <Download className="w-3 h-3 mr-1" />
                      Download
                    </Button>
                  </div>

                  {/* Data Dictionary */}
                  <div className="bg-white/[0.05] rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded bg-green-500/[0.2] border border-green-500/[0.3]">
                        <FileText className="w-5 h-5 text-green-300" />
                      </div>
                      <div>
                        <p className="text-white font-medium">bank-additional-names.txt</p>
                        <p className="text-xs text-white/60">Column descriptions and metadata</p>
                      </div>
                    </div>
                    <Button 
                      onClick={() => handleDownloadSingleFile('/Task2_Dataset/bank-additional-names.txt')}
                      variant="outline"
                      size="sm"
                      className="border-white/20 hover:bg-white/10 text-white"
                    >
                      <Download className="w-3 h-3 mr-1" />
                      Download
                    </Button>
                  </div>
                </div>
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
              <CardTitle className="text-white font-bold text-xl">💡 Tips for Level 3</CardTitle>
            </CardHeader>
            <CardContent className="text-white space-y-3 text-base leading-relaxed">
              <p>• For Task 1: Think about how to systematically scrape and analyze publication patterns over time</p>
              <p>• Design your prompt to handle dynamic web content and extract structured data</p>
              <p>• For Task 2: Break down the analysis pipeline into clear, sequential steps</p>
              <p>• Ensure your hypothesis testing follows proper statistical methodology (null/alternative hypotheses, test selection, p-values, conclusions)</p>
              <p>• Consider data quality issues that typically arise in real-world datasets</p>
              <p>• Structure your single prompt with clear sections for each analysis stage</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
