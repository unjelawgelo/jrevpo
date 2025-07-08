"use client"

import React from "react"
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Facebook,
  Instagram,
  ArrowRight,
  Users,
  Mic,
  Settings,
  UserCheck,
  Video,
  Heart,
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  Edit3,
  Eye,
  HelpCircle,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  ArrowUp,
  Play,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState, useEffect } from "react"

const ministries = [
  {
    id: "worship",
    name: "Worship Team",
    description:
      "Use your musical talents to uplift hearts and create an atmosphere of worship that draws people closer to God.",
    icon: Mic,
    color: "from-purple-500 to-pink-500",
    media: [
      { type: 'image', src: "/ministries/worship/DSC00059.jpg" },
      // { type: 'image', src: "/ministries/worship/DSC00059.jpg" },
      // { type: 'image', src: "/ministries/worship/DSC00131.jpg" },
      // { type: 'image', src: "/ministries/worship/DSC00143.jpg" },
      { type: 'image', src: "/ministries/worship/IMG_0296.jpg" },
      { type: 'image', src: "/ministries/worship/IMG_0209.JPG" },
      { type: 'image', src: "/ministries/worship/IMG_1132.JPG" },
      { type: 'image', src: "/ministries/worship/IMG_0279.JPG" },
      // { type: 'image', src: "/ministries/worship/IMG_0325.JPG" },
      { type: 'image', src: "/ministries/worship/IMG_8906.jpg" },
      { type: 'image', src: "/ministries/worship/IMG_0592.jpg" },
      { type: 'image', src: "/ministries/worship/IMG_0616.jpg" },
      { type: 'image', src: "/ministries/worship/DSC01285.jpg" },
      { type: 'image', src: "/ministries/worship/IMG_0082 (1).jpg" },
      { type: 'image', src: "/ministries/worship/IMG_0722.jpg" },

    ],
    stats: { members: "45+", events: "120+" },
    highlights: ["Live Worship", "Recording Studio", "Music Training", "Songwriting"],
    testimonials: [
      {
        text: "Being part of the worship team has transformed my relationship with God and music. Every Sunday feels like a divine appointment.",
        author: "Mike David Molina",
      },
      {
        text: "The worship team became my second family. We don't just make music; we create moments where heaven touches earth.",
        author: "JjjJ",
      },
      {
        text: "Through worship ministry, I discovered that my voice isn't just for singing—it's for leading others into God's presence.",
        author: "Laravel Viern",
      },
    ],
  },
  {
    id: "technical",
    name: "Technical Team",
    description:
      "Serve behind the scenes with sound, lighting, and technical excellence to support every service and event.",
    icon: Settings,
    color: "from-blue-500 to-cyan-500",
    media: [
      { type: 'image', src: "/ministries/technical/DSC00056.jpg" },
      { type: 'image', src: "/ministries/technical/IMG_0965.JPG" },
      { type: 'image', src: "/ministries/technical/IMG_7214.jpg" },
      { type: 'image', src: "/ministries/technical/IMG_9130.jpg" },
      // { type: 'image', src: "/ministries/technical/IMG_9873.CR3" },
      // { type: 'image', src: "/ministries/technical/IMG_9882.CR3" },
      { type: 'image', src: "/ministries/technical/IMG_9931.jpg" }
    ],
    stats: { members: "25+", events: "200+" },
    highlights: ["Sound Engineering", "Lighting Design", "Live Streaming", "Equipment Setup"],
    testimonials: [
      {
        text: "Every Sunday, we create the perfect atmosphere for worship through technology. It's incredible to serve God behind the scenes.",
        author: "Andrei the Great",
      },
      {
        text: "The technical team taught me that excellence in small things leads to excellence in big things. God deserves our best.",
        author: "Kuya Macs",
      },
    ],
  },
  {
    id: "ushering",
    name: "Ushering Team",
    description:
      "Be the welcoming face that greets everyone with love, ensuring every visitor feels at home in our community.",
    icon: UserCheck,
    color: "from-green-500 to-emerald-500",
    media: [
      { type: 'video', src: "/ministries/ushering/GOPR4706.MP4" },
      { type: 'image', src: "/ministries/ushering/DSC01211.jpg" },
      { type: 'image', src: "/ministries/ushering/IMG_0251.JPG" },
      { type: 'image', src: "/ministries/ushering/IMG_0254.jpg" },
      { type: 'image', src: "/ministries/ushering/IMG_0487 (1).jpg" }
    ],
    stats: { members: "60+", visitors: "500+" },
    highlights: ["First Impressions", "Guest Services", "Event Coordination", "Community Care"],
    testimonials: [
      {
        text: "Every smile we share plants a seed of God's love in someone's heart. Being an usher means being God's welcoming committee.",
        author: "Paul Angelo Villuan",
      },
      {
        text: "I've seen visitors become family members, all because someone took the time to make them feel welcome. That's the power of ushering.",
        author: "Revv Gautane",
      },
      {
        text: "Ushering taught me that hospitality is a spiritual gift. When we welcome others, we're welcoming Jesus himself.",
        author: "Cyrus Cruz",
      },
    ],
  },
  {
    id: "comms",
    name: "Comms & Creatives",
    description:
      "Share God's message through creative content, social media, and visual storytelling that inspires and connects.",
    icon: Users,
    color: "from-orange-500 to-red-500",
    media: [
      { type: 'image', src: "/ministries/comms&creatives/IMG_0408.JPG" },
      { type: 'image', src: "/ministries/comms&creatives/IMG_0433.JPG" },
      { type: 'image', src: "/ministries/comms&creatives/IMG_0408.JPG" },
      { type: 'image', src: "/ministries/comms&creatives/IMG_0456.JPG" },
      { type: 'image', src: "/ministries/comms&creatives/IMG_2388.JPG" },
      { type: 'image', src: "/ministries/comms&creatives/IMG_9768.JPG" }
    ],
    stats: { members: "30+", posts: "1000+" },
    highlights: ["Social Media", "Graphic Design", "Photography", "Content Strategy"],
    testimonials: [
      {
        text: "We turn God's message into visual stories that touch hearts worldwide. Every post is a chance to share His love.",
        author: "Jack Joseph Deniel",
      },
      {
        text: "Creative ministry showed me that God is the ultimate artist, and we get to be His paintbrush in the digital world.",
        author: "Direct Pao",
      },
    ],
  },
  {
    id: "production",
    name: "Production Team",
    description:
      "Capture and broadcast God's work through video production, streaming, and multimedia content creation.",
    icon: Video,
    color: "from-indigo-500 to-purple-500",
    media: [
      { type: 'image', src: "/ministries/production/IMG_0008.jpg" },
      // { type: 'image', src: "/ministries/production/IMG_0298.CR3" },
      { type: 'image', src: "/ministries/production/IMG_0626 (1).jpg" },
      { type: 'image', src: "/ministries/production/IMG_0972.jpg" },
      { type: 'image', src: "/ministries/production/IMG_7012.jpg" },
      { type: 'image', src: "/ministries/production/IMG_9372.jpg" },
      { type: 'image', src: "/ministries/production/drei.jpg" }
    ],
    stats: { members: "20+", videos: "300+" },
    highlights: ["Live Streaming", "Video Editing", "Multi-Camera Setup", "Post Production"],
    testimonials: [
      {
        text: "We capture God's moments and share them with the world through film. Every frame tells a story of His goodness.",
        author: "Thomas Wilson",
      },
      {
        text: "Production ministry taught me that behind every great moment is a team dedicated to preserving it for eternity.",
        author: "Lisa Anderson",
      },
      {
        text: "Through video production, we extend the reach of our church beyond four walls to touch lives around the globe.",
        author: "Kevin Park",
      },
    ],
  },
]

// Helper function to shuffle array (Fisher-Yates algorithm)
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// Base questions without randomization
const baseAssessmentQuestions = [
  {
    id: 1,
    question: "What aspect of church service excites you the most?",
    options: [
      { text: "Leading worship through music and song", ministry: "worship", weight: 3 },
      { text: "Ensuring smooth technical operations", ministry: "technical", weight: 3 },
      { text: "Welcoming and assisting attendees", ministry: "ushering", weight: 3 },
      { text: "Creating engaging content and visuals", ministry: "comms", weight: 3 },
      { text: "Capturing and producing video content", ministry: "production", weight: 3 },
    ],
  },
  {
    id: 2,
    question: "Which of these skills comes most naturally to you?",
    options: [
      { text: "Musical ability and leading others in worship", ministry: "worship", weight: 3 },
      { text: "Technical problem-solving with equipment", ministry: "technical", weight: 3 },
      { text: "Making people feel welcome and valued", ministry: "ushering", weight: 3 },
      { text: "Creative design and visual communication", ministry: "comms", weight: 3 },
      { text: "Videography and visual storytelling", ministry: "production", weight: 3 },
    ],
  },
  {
    id: 3,
    question: "How do you most enjoy serving in ministry?",
    options: [
      { text: "Leading worship through music and song", ministry: "worship", weight: 2 },
      { text: "Operating technical equipment smoothly", ministry: "technical", weight: 2 },
      { text: "Creating a welcoming environment for all", ministry: "ushering", weight: 2 },
      { text: "Designing engaging visual content", ministry: "comms", weight: 2 },
      { text: "Documenting special moments through video", ministry: "production", weight: 2 },
    ],
  },
  {
    id: 4,
    question: "Where do you feel most comfortable serving?",
    options: [
      { text: "On stage leading worship", ministry: "worship", weight: 2 },
      { text: "In the tech booth managing equipment", ministry: "technical", weight: 2 },
      { text: "At the entrance greeting people", ministry: "ushering", weight: 2 },
      { text: "Creating digital or print materials", ministry: "comms", weight: 2 },
      { text: "Behind the camera capturing moments", ministry: "production", weight: 2 },
    ],
  },
  {
    id: 5,
    question: "Which activity brings you the most fulfillment?",
    options: [
      { text: "Leading worship through music", ministry: "worship", weight: 2 },
      { text: "Ensuring technical excellence", ministry: "technical", weight: 2 },
      { text: "Helping newcomers feel at home", ministry: "ushering", weight: 2 },
      { text: "Designing impactful visuals", ministry: "comms", weight: 2 },
      { text: "Producing meaningful video content", ministry: "production", weight: 2 },
    ],
  },
  {
    id: 6,
    question: "What role do you typically play in team settings?",
    options: [
      { text: "The worship leader who inspires through music", ministry: "worship", weight: 1 },
      { text: "The technical expert who keeps things running", ministry: "technical", weight: 1 },
      { text: "The welcoming face who connects with people", ministry: "ushering", weight: 1 },
      { text: "The creative mind who designs our message", ministry: "comms", weight: 1 },
      { text: "The visual storyteller who captures moments", ministry: "production", weight: 1 },
    ],
  },
  {
    id: 7,
    question: "Which biblical calling speaks most to your heart?",
    options: [
      { text: "Leading God's people in worship with skill and gladness (1 Chronicles 15:22)", ministry: "worship", weight: 2 },
      { text: "Serving faithfully behind the scenes as a worker who needs not be ashamed (2 Timothy 2:15)", ministry: "technical", weight: 2 },
      { text: "Welcoming strangers as you would welcome Christ Himself (Matthew 25:35)", ministry: "ushering", weight: 2 },
      { text: "Making the most of every opportunity to share God's truth (Colossians 4:5-6)", ministry: "comms", weight: 2 },
      { text: "Telling the next generation the praiseworthy deeds of the Lord (Psalm 78:4)", ministry: "production", weight: 2 },
    ]
  }
];

// Ministry Assessment Component
const MinistryAssessment = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<{ [key: string]: number }>({})
  const [showResults, setShowResults] = useState(false)
  const [results, setResults] = useState<{ ministry: string; percentage: number }[]>([])
  const [assessmentQuestions, setAssessmentQuestions] = useState(() => 
    shuffleArray([...baseAssessmentQuestions]).map(q => ({
      ...q,
      options: shuffleArray(q.options)
    }))
  )

  // Handle escape key press and body scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      // Randomize questions and their options when opening the assessment
      setAssessmentQuestions(
        shuffleArray([...baseAssessmentQuestions]).map(q => ({
          ...q,
          options: shuffleArray(q.options)
        }))
      )
      document.body.style.overflow = "hidden"
      document.addEventListener("keydown", handleEscape)
    } else {
      document.body.style.overflow = "unset"
      document.removeEventListener("keydown", handleEscape)
      // Reset assessment when closed
      setCurrentQuestion(0)
      setAnswers({})
      setShowResults(false)
      setResults([])
    }

    return () => {
      document.body.style.overflow = "unset"
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, onClose])

  const handleAnswer = (option: any) => {
    const newAnswers = { ...answers }
    if (!newAnswers[option.ministry]) {
      newAnswers[option.ministry] = 0
    }
    newAnswers[option.ministry] += option.weight
    setAnswers(newAnswers)

    if (currentQuestion < assessmentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculateResults(newAnswers)
    }
  }

  const calculateResults = (finalAnswers: { [key: string]: number }) => {
    const maxPossibleScore = assessmentQuestions.reduce((total, question) => {
      return total + Math.max(...question.options.map((option) => option.weight))
    }, 0)

    const ministryResults = Object.entries(finalAnswers).map(([ministry, score]) => ({
      ministry,
      percentage: Math.round((score / maxPossibleScore) * 100),
    }))

    // Sort by percentage (highest first)
    ministryResults.sort((a, b) => b.percentage - a.percentage)
    setResults(ministryResults)
    setShowResults(true)
  }

  const getMinistryData = (ministryId: string) => {
    return ministries.find((m) => m.id === ministryId)
  }

  const resetAssessment = () => {
    // Re-randomize questions and their options when resetting
    setAssessmentQuestions(
      shuffleArray([...baseAssessmentQuestions]).map(q => ({
        ...q,
        options: shuffleArray(q.options)
      }))
    )
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
    setResults([])
  }

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        <div className="relative max-w-2xl w-full mx-4">
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="absolute -top-12 -right-2 z-10 text-white hover:bg-white/20 p-2 rounded-full"
          >
            <X className="h-6 w-6" />
          </Button>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl w-full shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 sm:p-8">
              {!showResults ? (
                <>
                  {/* Progress Bar */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Ministry Assessment</h2>
                      <span className="text-sm text-gray-500">
                        {currentQuestion + 1} of {assessmentQuestions.length}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${((currentQuestion + 1) / assessmentQuestions.length) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Question */}
                  <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 leading-relaxed">
                      {assessmentQuestions[currentQuestion].question}
                    </h3>

                    <div className="space-y-3">
                      {assessmentQuestions[currentQuestion].options.map((option, index) => (
                        <motion.button
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2, delay: index * 0.1 }}
                          onClick={() => handleAnswer(option)}
                          className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-200 border border-gray-200 hover:border-purple-300 hover:shadow-md group"
                        >
                          <span className="text-gray-800 group-hover:text-purple-700 font-medium">{option.text}</span>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                </>
              ) : (
                /* Results */
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                  <div className="text-center">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Assessment Complete!</h2>
                    <p className="text-gray-600">Here are your ministry matches based on your responses:</p>
                  </div>

                  <div className="space-y-4">
                    {results.map((result, index) => {
                      const ministryData = getMinistryData(result.ministry)
                      if (!ministryData) return null

                      return (
                        <motion.div
                          key={result.ministry}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: index * 0.1,
                            type: "spring",
                            stiffness: 100
                          }}
                          className={`rounded-xl border-2 transition-all duration-300 ${
                            index === 0 
                              ? "scale-105 border-purple-300 bg-gradient-to-br from-purple-50 to-white shadow-lg p-6 mb-6" 
                              : "scale-95 border-gray-200 bg-white p-4 mb-3 opacity-90 hover:opacity-100 hover:shadow-md"
                          }`}
                        >
                          <div className={`flex items-start ${index === 0 ? 'flex-col sm:flex-row' : 'flex-row'} gap-4`}>
                            <div className={`flex-none ${index === 0 ? 'w-16 h-16' : 'w-12 h-12'} rounded-xl bg-gradient-to-r ${ministryData.color} flex items-center justify-center shadow-md`}>
                              <ministryData.icon className={`${index === 0 ? 'h-7 w-7' : 'h-5 w-5'} text-white`} />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <div>
                                  <h3 className={`font-bold ${index === 0 ? 'text-2xl text-gray-900' : 'text-lg text-gray-800'}`}>
                                    {ministryData.name}
                                  </h3>
                                  {index === 0 && (
                                    <span className="inline-block mt-1 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                                      Best Match
                                    </span>
                                  )}
                                </div>
                                <div className={`text-right ${index === 0 ? 'ml-4' : ''}`}>
                                  <div className={`font-bold ${index === 0 ? 'text-3xl' : 'text-2xl'} bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent`}>
                                    {result.percentage}%
                                  </div>
                                  <div className="text-sm text-gray-500">Match</div>
                                </div>
                              </div>
                              <p className={`${index === 0 ? 'text-base' : 'text-sm'} text-gray-600 mb-4`}>
                                {ministryData.description}
                              </p>
                              <div className="w-full bg-gray-100 rounded-full h-2.5">
                                <div
                                  className={`h-2.5 rounded-full transition-all duration-700 ${ministryData.color}`}
                                  style={{ 
                                    width: `${result.percentage}%`,
                                    backgroundImage: `linear-gradient(90deg, ${ministryData.color.split(' ')[3] || '#8b5cf6'}, ${ministryData.color.split(' ')[5] || '#ec4899'})`
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button onClick={resetAssessment} variant="outline" className="flex-1 py-3 bg-transparent">
                      Retake Assessment
                    </Button>
                    <Button
                      onClick={onClose}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3"
                    >
                      Explore Ministries
                    </Button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// Image Lightbox Modal Component
const ImageLightbox = ({
  isOpen,
  onClose,
  mediaItem,
  alt,
}: {
  isOpen: boolean
  onClose: () => void
  mediaItem: MediaItem
  alt: string
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              onClick={onClose}
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 z-10 text-white hover:bg-white/20 h-10 w-10"
            >
              <X className="h-6 w-6" />
            </Button>

            {mediaItem.type === 'video' ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                controls
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl"
              >
                <source src={mediaItem.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src={mediaItem.src || "/placeholder.svg"}
                alt={alt}
                width={800}
                height={600}
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Badge Preview Modal Component
const BadgePreview = ({
  isOpen,
  onClose,
  ministry,
  name,
}: {
  isOpen: boolean
  onClose: () => void
  ministry: any
  name: string
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              onClick={onClose}
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </Button>

            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Badge Preview</h3>

              {/* Badge Preview */}
              <div
                className={`relative bg-gradient-to-br ${ministry.color} rounded-2xl p-8 text-white text-center shadow-lg transform scale-110`}
              >
                <div className="space-y-4">
                  <div className="text-xl font-bold">JRev Ministries</div>
                  <div className={`w-16 h-16 mx-auto rounded-xl bg-white/20 flex items-center justify-center`}>
                    <ministry.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold">{ministry.name}</div>
                  <div className="text-3xl font-bold">{name}</div>
                  <div className="text-base opacity-90">Ministry Team Member</div>
                </div>
              </div>

              <Button onClick={onClose} className="w-full bg-gradient-to-r from-gray-600 to-gray-700 text-white">
                Close Preview
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Testimonial Carousel Component
const TestimonialCarousel = ({ testimonials, ministry }: { testimonials: any[]; ministry: any }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) nextTestimonial()
    if (isRightSwipe) prevTestimonial()
  }

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <div
        className="overflow-hidden rounded-2xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <motion.div
          className="flex"
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-gradient-to-b from-purple-500 to-pink-500 mx-2">
                <div className="flex items-start space-x-4">
                  <Heart className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 italic mb-3 leading-relaxed">"{testimonial.text}"</p>
                    <p className="text-sm font-semibold text-gray-900">- {testimonial.author}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-4">
        <Button onClick={prevTestimonial} variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900">
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? `bg-gradient-to-r ${ministry.color}` : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <Button onClick={nextTestimonial} variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900">
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

// Join Team Flow Component
const JoinTeamFlow = ({
  ministry,
  isOpen,
  onClose,
}: {
  ministry: any
  isOpen: boolean
  onClose: () => void
}) => {
  const [step, setStep] = useState(1)
  const [userName, setUserName] = useState("")
  const [savedName, setSavedName] = useState("")
  const [previewOpen, setPreviewOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      const saved = localStorage.getItem(`jrev-ministry-${ministry.id}-name`)
      if (saved) {
        setSavedName(saved)
        setUserName(saved)
      }
    }
  }, [isOpen, ministry.id])

  const handleNameSubmit = () => {
    if (userName.trim()) {
      localStorage.setItem(`jrev-ministry-${ministry.id}-name`, userName.trim())
      setSavedName(userName.trim())
      setStep(3)
    }
  }

  const downloadBadge = async () => {
    // Create a canvas element for the badge
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 400
    canvas.height = 250

    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
    gradient.addColorStop(
      0,
      ministry.id === "worship"
        ? "#8b5cf6"
        : ministry.id === "technical"
          ? "#3b82f6"
          : ministry.id === "ushering"
            ? "#10b981"
            : ministry.id === "comms"
              ? "#f97316"
              : "#6366f1",
    )
    gradient.addColorStop(
      1,
      ministry.id === "worship"
        ? "#ec4899"
        : ministry.id === "technical"
          ? "#06b6d4"
          : ministry.id === "ushering"
            ? "#059669"
            : ministry.id === "comms"
              ? "#ef4444"
              : "#8b5cf6",
    )

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Add text
    ctx.fillStyle = "white"
    ctx.font = "bold 24px Arial"
    ctx.textAlign = "center"
    ctx.fillText("JRev Ministries", canvas.width / 2, 60)

    ctx.font = "bold 20px Arial"
    ctx.fillText(ministry.name, canvas.width / 2, 100)

    ctx.font = "18px Arial"
    ctx.fillText(savedName, canvas.width / 2, 140)

    ctx.font = "14px Arial"
    ctx.fillText("Ministry Team Member", canvas.width / 2, 180)

    // Download the image
    const link = document.createElement("a")
    link.download = `${ministry.name.replace(/\s+/g, "-").toLowerCase()}-badge.png`
    link.href = canvas.toDataURL()
    link.click()
  }

  const resetFlow = () => {
    setStep(1)
    setUserName("")
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
      resetFlow()
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                onClick={onClose}
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </Button>

              {/* Step 1: Convince Card */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center space-y-6"
                >
                  <div
                    className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${ministry.color} flex items-center justify-center`}
                  >
                    <ministry.icon className="h-8 w-8 text-white" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Join Our {ministry.name}!</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We'd love to have you in the {ministry.name}! Ready to take the next step and be part of something
                      greater?
                    </p>
                  </div>

                  <Button
                    onClick={() => setStep(2)}
                    className={`w-full bg-gradient-to-r ${ministry.color} text-white py-3 rounded-xl font-semibold`}
                  >
                    Yes, I'm Interested!
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              )}

              {/* Step 2: Name Input */}
              {step === 2 && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Almost There!</h3>
                    <p className="text-gray-600">Enter your name to create your ministry badge</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Enter your full name"
                        className="w-full"
                        onKeyPress={(e) => e.key === "Enter" && handleNameSubmit()}
                      />
                    </div>

                    <div className="flex space-x-3">
                      <Button onClick={() => setStep(1)} variant="outline" className="flex-1">
                        Back
                      </Button>
                      <Button
                        onClick={handleNameSubmit}
                        disabled={!userName.trim()}
                        className={`flex-1 bg-gradient-to-r ${ministry.color} text-white`}
                      >
                        Proceed
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Badge Generation */}
              {step === 3 && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Your Ministry Badge</h3>
                    <p className="text-gray-600">Congratulations! Here's your official ministry badge.</p>
                  </div>

                  {/* Badge Preview */}
                  <div
                    className={`relative bg-gradient-to-br ${ministry.color} rounded-2xl p-6 text-white text-center shadow-lg`}
                  >
                    <div className="space-y-3">
                      <div className="text-lg font-bold">JRev Ministries</div>
                      <div className={`w-12 h-12 mx-auto rounded-xl bg-white/20 flex items-center justify-center`}>
                        <ministry.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-xl font-bold">{ministry.name}</div>
                      <div className="text-2xl font-bold">{savedName}</div>
                      <div className="text-sm opacity-90">Ministry Team Member</div>
                    </div>
                  </div>

                  <div className="text-center text-sm text-gray-600 mb-4">
                    You can screenshot or download this card as your ministry badge.
                  </div>

                  <div className="space-y-3">
                    <Button
                      onClick={() => setPreviewOpen(true)}
                      variant="outline"
                      className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300"
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      Preview Badge
                    </Button>

                    <Button onClick={downloadBadge} className={`w-full bg-gradient-to-r ${ministry.color} text-white`}>
                      <Download className="mr-2 h-4 w-4" />
                      Download Badge
                    </Button>

                    <Button onClick={() => setStep(2)} variant="outline" className="w-full">
                      <Edit3 className="mr-2 h-4 w-4" />
                      Edit Name
                    </Button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <BadgePreview isOpen={previewOpen} onClose={() => setPreviewOpen(false)} ministry={ministry} name={savedName} />
    </>
  )
}

const ParallaxSection = ({ children, offset = 50 }: { children: React.ReactNode; offset?: number }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, offset])

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  )
}

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  poster?: string;
}

interface ImageGalleryProps {
  media: MediaItem[];
  ministry: {
    name: string;
    color: string;
    [key: string]: any;
  };
}

const ImageGallery = ({ media, ministry, onShowLess }: ImageGalleryProps & { onShowLess?: () => void }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<MediaItem>({ type: 'image', src: '/placeholder.svg' });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showNavButtons, setShowNavButtons] = useState(false);
  const [showAllImages, setShowAllImages] = useState(false);
  
  // Set mobile state on mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Set initial value
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  
  // Mobile-optimized settings
  const maxVisibleThumbnails = isMobile ? 3 : 5;
  const hasMoreImages = media.length - 1 > maxVisibleThumbnails;
  const visibleThumbnails = showAllImages ? media.slice(1) : media.slice(1, maxVisibleThumbnails + 1);
  
  // Auto-advance slides
  useEffect(() => {
    if (media.length <= 1 || isHovered) return;
    
    const timer = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % media.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [media.length, isHovered]);
  
  // Optimize image loading based on device
  const getImageQuality = (index: number) => {
    if (isMobile) return index === 0 ? 75 : 60
    return index === 0 ? 90 : 75
  }

  const openLightbox = (mediaItem: MediaItem) => {
    // Only open lightbox if explicitly called (e.g., from a dedicated button)
    // Not from the main slideshow click
    setLightboxImage(mediaItem);
    setLightboxOpen(true);
  };

  const handleThumbnailClick = (index: number) => {
    setActiveImage(index);
    setIsHovered(false);
    // Hide navigation buttons when clicking thumbnails
    setShowNavButtons(false);
  };

  const goToSlide = (index: number) => {
    setActiveImage(index);
  };

  const goToNextSlide = () => {
    setActiveImage((prev) => (prev + 1) % media.length);
  };

  const goToPrevSlide = () => {
    setActiveImage((prev) => (prev - 1 + media.length) % media.length);
  };

  return (
    <div className="space-y-6">
      {/* Main Featured Image with Slideshow */}
      <div 
        className="relative h-96 w-full rounded-2xl overflow-hidden cursor-pointer"
        onMouseEnter={() => setShowNavButtons(true)}
        onMouseLeave={() => setShowNavButtons(false)}
        onClick={(e) => {
          e.stopPropagation();
          // Toggle navigation buttons on click for better mobile experience
          setShowNavButtons(prev => !prev);
        }}
      >
        {/* Slideshow Container */}
        <div className="relative w-full h-full">
          {media.map((item, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{
                opacity: index === activeImage ? 1 : 0,
                transition: { duration: 0.5 }
              }}
            >
              {item.type === 'video' ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  onClick={(e) => {
                    e.stopPropagation();
                    openLightbox(item);
                  }}
                >
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={`${ministry.name} featured ${index + 1}`}
                  fill
                  className="object-cover cursor-pointer transition-all duration-500 hover:scale-105"
                  onClick={() => openLightbox(media[activeImage] || { type: 'image', src: '/placeholder.svg' })}
                  priority={index === 0}
                />
              )}
            </motion.div>
          ))}
          
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t ${ministry.color} opacity-30`} />
          <div className="absolute inset-0 bg-black/20" />
          
          {/* Navigation Arrows - Only show on hover/click of main slideshow */}
          {showNavButtons && media.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImage((prev) => (prev - 1 + media.length) % media.length);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImage((prev) => (prev + 1) % media.length);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
          
          {/* Slide Indicators */}
          {media.length > 1 && (
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
              {media.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    goToSlide(index);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === activeImage 
                      ? 'w-8 bg-white' 
                      : 'w-2 bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
          
          {/* Caption */}
          <div className="absolute bottom-6 left-6 text-white">
            <h4 className="text-2xl font-bold mb-2">{ministry.name} in Action</h4>
            <p className="text-lg opacity-90">See our ministry in action</p>
          </div>
        </div>
      </div>

      {/* Image Grid */}
      <div className="relative">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 overflow-hidden">
          {visibleThumbnails.map((item, index) => {
            const mediaIndex = index + 1; // +1 because we're slicing from index 1
            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
              onClick={() => {
                setActiveImage(mediaIndex);
                if (media[mediaIndex]) {
                  openLightbox(media[mediaIndex]);
                }
              }}
            >
              {item.type === 'video' ? (
                <div className="relative w-full h-full">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/50 rounded-full p-2">
                      <Play className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
              ) : (
                <motion.div 
                  className="w-full h-full relative overflow-hidden rounded-xl"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { 
                      duration: 0.3,
                      ease: [0.4, 0, 0.2, 1]
                    }
                  }}
                >
                  <Image
                    src={item.src || "/placeholder.svg"}
                    alt={`${ministry.name} ${index + 1}`}
                    fill
                    className="object-cover transition-all duration-300 hover:brightness-110"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmNWY1ZjUiLz48L3N2Zz4="
                    loading={index > (isMobile ? 1 : 2) ? "lazy" : "eager"}
                    quality={getImageQuality(index)}
                    priority={index <= (isMobile ? 1 : 2)}
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300" />
                  <div className="absolute inset-0 border-2 border-transparent hover:border-white/50 rounded-xl transition-all duration-300" />
                </motion.div>
              )}
            </motion.div>
            );
          })}
        </div>
        
        {/* Premium Show More/Less Experience */}
        {hasMoreImages && (
          <div className="relative w-full mt-8">
            {/* Fade out effect when collapsed */}
            {!showAllImages && (
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-900 to-transparent pointer-events-none z-10" />
            )}
            
            <div className="relative z-20 flex justify-center pt-16 -mt-12">
              <motion.button
                id={`${ministry.id}-show-more`}
                onClick={() => {
                  const newShowAllImages = !showAllImages;
                  setShowAllImages(newShowAllImages);
                  
                  if (newShowAllImages) {
                    // When showing more, scroll to the button
                    const button = document.getElementById(`${ministry.id}-show-more`);
                    button?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  } else if (onShowLess) {
                    // When showing less, use the parent's onShowLess handler
                    onShowLess();
                    // Scroll to the ministry section when Show Less is clicked
                    const ministrySection = document.getElementById(ministry.id);
                    ministrySection?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }}
                className={`group relative px-6 py-2.5 rounded-full bg-transparent
                  transition-all duration-300 flex items-center gap-2.5
{{ ... }}
                  ${showAllImages ? 'text-gray-600 dark:text-gray-300' : ''}`}
                whileHover={{ 
                  y: -2,
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
                }}
                whileTap={{ 
                  scale: 0.98,
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                  opacity: { duration: 0.2 }
                }}
              >
                <span className="relative z-10 flex items-center gap-2 text-sm font-medium text-sky-500 dark:text-sky-400">
                  {showAllImages ? (
                    <>
                      <span>Show Less</span>
                      <ChevronUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                    </>
                  ) : (
                    <>
                      <span>Show More</span>
                      <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                    </>
                  )}
                </span>
                
                {/* Subtle hover effect */}
                <motion.span 
                  className="absolute inset-0 rounded-full bg-gray-100 dark:bg-gray-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  initial={{ opacity: 0 }}
                />
              </motion.button>
            </div>
          </div>
        )}
      </div>

      {lightboxImage && lightboxOpen && (
        <ImageLightbox
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          mediaItem={lightboxImage}
          alt={`${ministry.name} image`}
        />
      )}
    </div>
  )
}

const MinistrySection = ({ ministry, index }: { ministry: any; index: number }) => {
  const handleShowLess = () => {
    // Scroll to the ministry section with a small offset from the top
    const element = document.getElementById(ministry.id);
    if (element) {
      const yOffset = -20; // pixels from the top
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const isEven = index % 2 === 0
  const [joinFlowOpen, setJoinFlowOpen] = useState(false)

  return (
    <section ref={ref} className="py-20 relative overflow-hidden" id={ministry.id}>
      {/* Background with parallax */}
      <ParallaxSection offset={30}>
        <div className={`absolute inset-0 bg-gradient-to-br ${ministry.color} opacity-5`} />
      </ParallaxSection>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isEven ? "" : "lg:grid-flow-col-dense"}`}
        >
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`space-y-8 ${isEven ? "" : "lg:col-start-2"}`}
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${ministry.color} flex items-center justify-center shadow-lg`}
                >
                  <ministry.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900">{ministry.name}</h2>
                </div>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed">{ministry.description}</p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-3">
                {ministry.highlights.map((highlight: string, idx: number) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                    className="flex items-center space-x-2 bg-gray-50 rounded-lg p-3"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${ministry.color}`} />
                    <span className="text-gray-800 font-medium">{highlight}</span>
                  </motion.div>
                ))}
              </div>

              {/* Testimonial Carousel */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <TestimonialCarousel testimonials={ministry.testimonials} ministry={ministry} />
              </motion.div>

              <Button
                onClick={() => setJoinFlowOpen(true)}
                size="lg"
                className={`bg-gradient-to-r ${ministry.color} hover:shadow-2xl transition-all duration-300 text-white font-semibold py-4 px-8 rounded-2xl transform hover:scale-105`}
              >
                Join {ministry.name}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>

          {/* Images Side */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`${isEven ? "" : "lg:col-start-1 lg:row-start-1"}`}
          >
            <ImageGallery 
            media={ministry.media} 
            ministry={ministry} 
            onShowLess={handleShowLess}
          />
          </motion.div>
        </div>
      </div>

      <JoinTeamFlow ministry={ministry} isOpen={joinFlowOpen} onClose={() => setJoinFlowOpen(false)} />
    </section>
  )
}

export default function Page() {
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const [assessmentOpen, setAssessmentOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [ministriesDropdownOpen, setMinistriesDropdownOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Add click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMinistriesDropdownOpen(false);
      }
    };

    // Add event listener when dropdown is open
    if (ministriesDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Clean up
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ministriesDropdownOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight
      const winHeight = window.innerHeight
      const scrollPercent = scrollTop / (docHeight - winHeight)

      setShowBackToTop(scrollPercent > 0.9)
      
      const sections = ['home', 'about', 'ministries', 'ministry-assessment', 'join-us']
      const scrollPosition = window.scrollY + 100 // Add offset for fixed header
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const smoothScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90; // Account for fixed header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMinistriesDropdownOpen(false);
  };
  
  const scrollToMinistries = () => {
    setActiveSection('ministries');
    document.getElementById('ministries')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault()
    setActiveSection(section)
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm"
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="flex items-center"
            >
              <Link 
                href="#home" 
                onClick={(e) => handleNavClick(e, 'home')}
                className="font-bold text-2xl text-black hover:opacity-80 transition-opacity"
              >
                JRev
              </Link>
            </motion.div>

            {/* Navigation - Always visible */}
            <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, 'home')}
                className={`${activeSection === 'home' ? 'text-purple-600' : 'text-gray-700'} hover:text-purple-600 transition-colors font-medium text-sm sm:text-base cursor-pointer`}
              >
                Home
              </a>

              <a
                href="#about"
                onClick={(e) => handleNavClick(e, 'about')}
                className={`${activeSection === 'about' ? 'text-purple-600' : 'text-gray-700'} hover:text-purple-600 transition-colors font-medium text-sm sm:text-base cursor-pointer`}
              >
                About
              </a>

              {/* Ministries Dropdown */}
              <div className="relative ministries-dropdown" ref={dropdownRef}>
                <button
                  onClick={() => setMinistriesDropdownOpen(!ministriesDropdownOpen)}
                  className={`flex items-center space-x-1 ${activeSection.startsWith('ministry-') || activeSection === 'ministries' ? 'text-purple-600' : 'text-gray-700'} hover:text-purple-600 transition-colors font-medium text-sm sm:text-base`}
                >
                  Ministries
                  <ChevronDown
                    className={`ml-1 h-3 w-3 sm:h-4 sm:w-4 transition-transform ${ministriesDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {ministriesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full right-0 sm:left-0 mt-2 w-56 sm:w-64 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50"
                    >
                      {ministries.map((ministry) => (
                        <button
                          key={ministry.id}
                          onClick={() => {
                            smoothScrollTo(ministry.id);
                          }}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 text-left hover:bg-gray-50 transition-colors flex items-center space-x-2 sm:space-x-3"
                        >
                          <div
                            className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-r ${ministry.color} flex items-center justify-center`}
                          >
                            <ministry.icon className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                          </div>
                          <span className="text-gray-700 font-medium text-sm sm:text-base">{ministry.name}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Button
                onClick={() => document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" })}
                className="hidden sm:flex bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full px-4 sm:px-3 lg:px-4 text-sm sm:text-base py-2"
              >
                Visit Us
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group px-4 py-3"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="h-5 w-5 group-hover:-translate-y-0.5 transition-transform mr-2" />
            <span className="text-sm font-medium">Back to top</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Enhanced Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 w-full h-full overflow-hidden"
        >
          {/* Video Background Container */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                //Dev1 Testing Comment
                // Increased size to ensure full coverage on all screens
                minWidth: '150%',
                minHeight: '150%',
                width: 'auto',
                height: 'auto',
                // Center the video
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) scale(1.1)', // Slight zoom to ensure coverage
                // Ensure the video is always covered, even if it needs to be cropped
                objectFit: 'cover',
                // Prevent any potential gaps
                margin: 0,
                padding: 0
              }}
            >
              <source src="/videos/jrc.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          {/* Enhanced overlay for better text readability with stronger bottom gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80"></div>
          
          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
            className="absolute top-20 left-20 w-20 h-20 bg-white/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
            className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"
          />
          <motion.div
            animate={{ y: [0, 10, 0], rotate: [0, 3, 0] }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-center px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto"
        >
          <motion.div className="text-center space-y-2">
            {/* Animated Church Name */}
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-2 leading-tight text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.span className="relative inline-block">
                <span className="relative z-10">JRev Campus Ministries</span>
                <motion.span 
                  className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-transparent via-white/90 to-transparent pointer-events-none"
                  style={{
                    backgroundSize: '200% 100%',
                    backgroundPosition: '200% 0',
                  }}
                  animate={{
                    backgroundPosition: ['200% 0', '-100% 0'],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'linear',
                  }}
                >
                  JRev Campus Ministries
                </motion.span>
              </motion.span>
            </motion.h1>


          </motion.div>

          {/* Enhanced CTA Button */}
          <motion.div
            className="flex justify-center items-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
            }}
            transition={{ 
              duration: 0.8, 
              delay: 1.5,
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative"
            >
              {/* Pulsing glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-70 blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'easeInOut',
                }}
              />
              <Button
                onClick={scrollToMinistries}
                size="lg"
                className="relative z-10 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-6 text-xl font-semibold rounded-full shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 transform"
              >
                <span className="relative z-10 flex items-center">
                  Explore Now
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                    className="ml-3"
                  >
                    <ArrowRight className="h-6 w-6" />
                  </motion.span>
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Service Schedule - Below Button */}
          <motion.div 
            className="w-full mt-8 text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 bg-white/10 backdrop-blur-sm p-4 rounded-lg w-full max-w-2xl mx-auto">
              {/* Friday Service */}
              <div className="flex items-center space-x-3 px-2 py-1">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div className="text-left min-w-[120px]">
                  <div className="text-sm font-medium text-white/80">Fridays</div>
                  <div className="text-lg font-semibold">5:15 PM</div>
                  <div className="text-xs text-white/60">On-site & Livestream</div>
                </div>
              </div>
              
              {/* Sunday Service */}
              <div className="flex items-center space-x-3 px-2 py-1">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div className="text-left min-w-[120px]">
                  <div className="text-sm font-medium text-white/80">Sundays</div>
                  <div className="text-lg font-semibold">8:30 AM</div>
                  <div className="text-xs text-white/60">On-site & Livestream</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Mobile-only Animated Chevron */}
          {/* <motion.div 
            className="mt-16 mb-4 sm:hidden flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0, duration: 0.6 }}
          >
            <a 
              // href="#ministry-interest" 
              className="block"
              aria-label="Scroll to next section"
            >
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ 
                  duration: 2, 
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut"
                }}
                className="flex items-center justify-center"
              >
                <ChevronDown className="h-8 w-8 text-white/80" />
              </motion.div>
            </a>
          </motion.div> */}
        </motion.div>

        {/* Enhanced scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center cursor-pointer hover:border-white/60 transition-colors"
            onClick={scrollToMinistries}
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-1.5 h-4 bg-white/70 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="relative overflow-hidden py-20 md:py-28 lg:py-36 bg-gradient-to-b from-white to-gray-50">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
            className="text-center mb-24 md:mb-28"
          >
            <motion.div 
              className="relative inline-block"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
            >
              <span className="inline-block text-sm font-medium bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent tracking-wider uppercase mb-5">
                About
              </span>
              {/* <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400/50 to-indigo-400/50 rounded-full"></span> */}
            </motion.div>
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="relative">
                <span className="absolute -left-6 -top-4 text-purple-100 text-5xl"> </span>
                <span className="relative font-serif text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                  Empowering Students
                </span>
                {/* <span className="text-purple-100 text-5xl"></span> */}
              </span>
            </motion.h2>
            <motion.div 
              // className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8 rounded-full"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.div className="relative max-w-2xl mx-auto">
              <motion.p 
                className="text-xl text-gray-600 leading-relaxed relative z-10"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6, ease: "easeOut" }}
              >
                to grow in faith, build community, and make an impact for Christ on campus and beyond.
              </motion.p>
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl -z-10 opacity-70 blur-xl"></div>
            </motion.div>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Mission Section */}
            <motion.section 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
              className="relative py-20 md:py-28"
            >
              <div className="absolute -top-20 left-1/4 w-48 h-48 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
              <div className="absolute -bottom-20 right-1/4 w-48 h-48 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
              
              <div className="relative text-center">
                <motion.div 
                  className="relative inline-block mb-8"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
                >
                  <span className="inline-block text-sm font-medium bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent tracking-wider uppercase">
                    Mission
                  </span>
                  {/* <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400/50 to-indigo-400/50 rounded-full"></span> */}
                </motion.div>
                <motion.h3 
                  className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="relative">
                    <span className="absolute -left-6 -top-4 text-purple-100 text-5xl">"</span>
                    <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                      Go and make disciples
                    </span>
                    <span className="text-purple-100 text-5xl">"</span>
                  </span>
                </motion.h3>
                <motion.p 
                  className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.6, ease: "easeOut" }}
                >
                  of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.
                </motion.p>
                <motion.p 
                  className="text-sm text-gray-400 mt-8"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.6, ease: "easeOut" }}
                >
                  — Matthew 28:19
                </motion.p>
              </div>
            </motion.section>

            {/* Divider */}
            <motion.div 
              className="relative py-8 md:py-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-100"></div>
              </div>
              {/* <div className="relative flex justify-center">
                <span className="px-6 bg-white text-gray-300">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </div> */}
            </motion.div>

            {/* Vision Section */}
            <motion.section 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
              className="relative pt-16 pb-24 md:pt-20 md:pb-32"
            >
              <div className="absolute -top-20 right-1/4 w-48 h-48 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
              
              <div className="relative text-center">
                <motion.div 
                  className="relative inline-block mb-8"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
                >
                  <span className="inline-block text-sm font-medium bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent tracking-wider uppercase">
                    Vision
                  </span>
                  {/* <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-400/50 to-pink-400/50 rounded-full"></span> */}
                </motion.div>
                <div className="w-full max-w-4xl mx-auto">
                  {/* Mobile View - All words stacked */}
                  <div className="md:hidden space-y-1 text-center">
                    <motion.div 
                      className="text-5xl sm:text-6xl font-serif font-bold leading-tight"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                    <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                    Loving God, People, Church
                      </span>
                    </motion.div>
                    <motion.div 
                      className="text-4xl sm:text-5xl font-serif font-bold mt-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">God,</span> */}
                    </motion.div>
                    <motion.div 
                      className="text-4xl sm:text-5xl font-serif font-bold mt-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">People,</span> */}
                    </motion.div>
                    <motion.div 
                      className="text-4xl sm:text-5xl font-serif font-bold mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500">Church</span> */}
                    </motion.div>
                  </div>
                  
                  {/* Desktop View - Side by side */}
                  <div className="hidden md:flex flex-row items-center justify-center gap-10 w-full">
                    <motion.div 
                      className="text-8xl lg:text-9xl font-serif font-bold leading-none"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                    <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                    Loving
                      </span>
                    </motion.div>
                    
                    <div className="space-y-7 text-left">
                      <motion.div 
                        className="text-6xl font-serif font-bold"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">God</span>
                      </motion.div>
                      <motion.div 
                        className="text-6xl font-serif font-bold"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">People</span>
                      </motion.div>
                      <motion.div 
                        className="text-6xl font-serif font-bold"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500">Church</span>
                      </motion.div>
                    </div>
                  </div>
                </div>
                <motion.div 
                  className="mt-12"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                >
                  <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                    Building a community that reflects God's love in everything we do.
                  </p>
                </motion.div>
              </div>
            </motion.section>
          </div>
        </div>
      </section>

      {/* Ministry Interest Section */}
      <section id="ministry-interest" className="py-16 md:py-24 bg-gradient-to-br from-indigo-500 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="block">Feel Called to Serve?</span>
              <span className="text-indigo-100">Explore Our Ministries</span>
            </h2>
            
            <p className="text-lg md:text-xl text-indigo-100/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Discover how you can use your gifts to make an impact. Scroll down to learn about our different ministry teams and find where you belong.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <motion.div 
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="w-full sm:w-auto"
              >
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScrollTo('ministries');
                  }}
                  className="w-full px-4 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-center text-indigo-600 bg-white rounded-full hover:bg-indigo-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  View All Ministries
                </button>
              </motion.div>
              <motion.div 
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="w-full sm:w-auto"
              >
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScrollTo('ministry-assessment');
                  }}
                  className="w-full px-4 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-center text-white border-2 border-white/30 rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  Help Me Choose
                </button>
              </motion.div>
            </div>

            <motion.div 
              className="mt-12"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <ChevronDown className="h-8 w-8 text-white/70 mx-auto" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Ministry Assessment Section */}
      <section id="ministry-assessment" className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-indigo-50 to-purple-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-6 sm:mb-8"
          >
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg"
            >
              <HelpCircle className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
            </motion.div>
          </motion.div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <div>Know Your Hidden</div>
              <div className="text-indigo-600">Ministry Potential</div>
            </h2>
{/* asdddfad */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Unsure where to serve? Our 2-minute assessment suggests ministries that match your gifts and passions. The final choice is always yours.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => setAssessmentOpen(true)}
                size="lg"
                className="px-8 py-6 text-lg font-semibold rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
              >
                Take the Assessment
                <HelpCircle className="ml-3 h-6 w-6" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Ministry Sections */}
      <div id="ministries">
        {ministries.map((ministry, index) => (
          <MinistrySection key={ministry.id} ministry={ministry} index={index} />
        ))}
      </div>

      {/* Bible Verse Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.3 },
              },
            }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            {/* Bible Verse */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="space-y-4"
            >
              <blockquote className="text-lg md:text-xl text-gray-700 font-light leading-relaxed italic">
                "Don't let anyone look down on you because you are young, but set an example for the believers in
                speech, in conduct, in love, in faith and in purity."
              </blockquote>
              <cite className="text-base md:text-lg text-purple-600 font-semibold">1 Timothy 4:12</cite>
            </motion.div>

            {/* Encouragement Card */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200"
            >
              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Your youth is not a limitation—it's your superpower! God has equipped you with unique gifts, fresh
                  perspectives, and boundless energy to make a difference in His kingdom.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Step into your calling today. Your generation has the power to transform the world through faithful
                  service and passionate worship.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer id="footer" className="bg-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">JR</span>
                </div>
                <span className="font-bold text-2xl">JRev Ministries</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Building a community where everyone can find their calling and serve with purpose.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold">Quick Links</h3>
              <div className="space-y-3">
                {["Home", "Ministries", "Join Us", "Contact"].map((link) => (
                  <Link
                    key={link}
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="block text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold">Connect With Us</h3>
              <div className="flex items-center space-x-6">
                <Link
                  href="https://www.facebook.com/jrevcampus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 transition-all duration-300 transform hover:scale-110"
                  aria-label="Visit our Facebook page"
                >
                  <Facebook className="h-8 w-8" />
                </Link>
                <Link
                  href="https://www.instagram.com/jrev.fam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-600 transition-all duration-300 transform hover:scale-110"
                  aria-label="Visit our Instagram page"
                >
                  <Instagram className="h-8 w-8" />
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0"> 2025 JRev Ministries. All rights reserved.</p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Ministry Assessment Modal */}
      {assessmentOpen && (
        <MinistryAssessment 
          isOpen={assessmentOpen} 
          onClose={() => setAssessmentOpen(false)} 
        />
      )}
    </div>
  )
}
