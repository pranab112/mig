import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {
  Calendar,
  Clock,
  Users,
  Target,
  Zap,
  BookOpen,
  Trophy,
  ChevronRight,
  Star,
  CheckCircle,
  Brain,
  Code,
  Rocket,
  ArrowLeft,
  Shield,
  ChevronUp,
  Menu,
  ArrowUp
} from 'lucide-react'
import Link from 'next/link'
import CurriculumTabs from '@/components/curriculum-tabs'

interface CoursePageProps {
  params: Promise<{
    slug: string
  }>
}

async function getCourseContent(slug: string) {
  try {
    const filePath = path.join(process.cwd(), 'content', 'academy', `${slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { content, data } = matter(fileContent)

    return {
      content,
      frontmatter: data
    }
  } catch (error) {
    return null
  }
}

export async function generateMetadata({ params }: CoursePageProps) {
  const { slug } = await params
  const course = await getCourseContent(slug)

  if (!course) {
    return {
      title: 'Course Not Found - MIG Learn Academy',
    }
  }

  return {
    title: `${course.frontmatter.title} - MIG Learn Academy`,
    description: course.frontmatter.description,
  }
}

// Day icon mapping
const getDayIcon = (dayNumber: number) => {
  const icons = [Brain, Code, Shield, Zap, Star, Rocket, Trophy]
  const IconComponent = icons[(dayNumber - 1) % icons.length] || Brain
  return IconComponent
}

// Custom MDX components for enhanced styling
const mdxComponents = {
  h1: ({ children }: any) => (
    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
      {children}
    </h1>
  ),
  h2: ({ children }: any) => {
    const isDaySection = children?.toString().includes('Day ')
    const dayNumber = isDaySection ? parseInt(children?.toString().match(/Day (\d+)/)?.[1] || '1') : null

    if (isDaySection && dayNumber) {
      const IconComponent = getDayIcon(dayNumber)
      const dayColors = [
        'from-blue-500 to-indigo-600',
        'from-purple-500 to-pink-600',
        'from-green-500 to-emerald-600',
        'from-yellow-500 to-orange-600',
        'from-red-500 to-rose-600',
        'from-cyan-500 to-blue-600',
        'from-violet-500 to-purple-600'
      ]
      const bgColor = dayColors[(dayNumber - 1) % dayColors.length]

      return (
        <div className={`mt-16 mb-12 bg-gradient-to-r ${bgColor} rounded-3xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-300`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <IconComponent className="w-8 h-8 text-white" />
            </div>
            <div>
              <div className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full inline-block mb-2">
                Day {dayNumber}
              </div>
              <h2 className="text-3xl font-bold">{children}</h2>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="mt-16 mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
            <Rocket className="w-5 h-5 text-white" />
          </div>
          {children}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"></div>
      </div>
    )
  },
  h3: ({ children }: any) => {
    const isLearningObjectives = children?.toString().includes('Learning Objectives')
    const isAISkills = children?.toString().includes('AI Collaboration Skills')
    const isTechnical = children?.toString().includes('Technical Implementation')
    const isDeliverables = children?.toString().includes('Deliverables')

    let icon = Target
    let bgColor = 'bg-primary-100'
    let iconColor = 'text-primary-600'

    if (isLearningObjectives) {
      icon = Target
      bgColor = 'bg-blue-100'
      iconColor = 'text-blue-600'
    } else if (isAISkills) {
      icon = Brain
      bgColor = 'bg-purple-100'
      iconColor = 'text-purple-600'
    } else if (isTechnical) {
      icon = Code
      bgColor = 'bg-green-100'
      iconColor = 'text-green-600'
    } else if (isDeliverables) {
      icon = CheckCircle
      bgColor = 'bg-orange-100'
      iconColor = 'text-orange-600'
    }

    const IconComponent = icon

    return (
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 mt-8 mb-6">
        <h3 className="text-2xl font-semibold text-slate-800 flex items-center gap-3">
          <div className={`w-8 h-8 ${bgColor} rounded-xl flex items-center justify-center`}>
            <IconComponent className={`w-5 h-5 ${iconColor}`} />
          </div>
          {children}
        </h3>
      </div>
    )
  },
  p: ({ children }: any) => (
    <p className="text-slate-600 leading-relaxed mb-6 text-lg">{children}</p>
  ),
  ul: ({ children }: any) => (
    <ul className="space-y-3 mb-8 bg-slate-50 rounded-xl p-6">{children}</ul>
  ),
  li: ({ children }: any) => (
    <li className="flex items-start gap-3 text-slate-700">
      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
      <span className="leading-relaxed font-medium">{children}</span>
    </li>
  ),
  strong: ({ children }: any) => (
    <strong className="text-slate-900 font-bold">{children}</strong>
  ),
  blockquote: ({ children }: any) => (
    <blockquote className="border-l-4 border-primary-500 bg-primary-50 p-6 rounded-r-xl my-8 italic text-slate-700">
      {children}
    </blockquote>
  ),
  hr: () => (
    <hr className="border-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent my-16" />
  )
}

// Split content into sections
function splitContentIntoSections(content: string) {
  const sections = content.split(/(?=## 📅|## 🎓|## 🎯|## 💰)/g)

  return {
    overview: sections[0] || '',
    curriculum: sections.find(s => s.includes('📅')) || '',
    outcomes: sections.find(s => s.includes('🎓')) || '',
    audience: sections.find(s => s.includes('🎯')) || '',
    investment: sections.find(s => s.includes('💰')) || ''
  }
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params
  const course = await getCourseContent(slug)

  if (!course) {
    notFound()
  }

  const { frontmatter } = course
  const sections = splitContentIntoSections(course.content)

  // Pass raw sections to client component for rendering
  const renderedSections = {
    overview: sections.overview || '',
    curriculum: sections.curriculum || '',
    outcomes: sections.outcomes || '',
    audience: sections.audience || '',
    investment: sections.investment || '',
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Back Button */}
          <Link
            href="/academy"
            className="inline-flex items-center gap-2 text-primary-100 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Academy
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Course Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="px-4 py-2 bg-white/20 rounded-full">
                  <span className="text-sm font-semibold">🤖 AI-Powered Course</span>
                </div>
                <div className="px-4 py-2 bg-white/20 rounded-full">
                  <span className="text-sm font-semibold">{frontmatter.format}</span>
                </div>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                {frontmatter.title}
              </h1>

              <p className="text-xl text-primary-100 mb-8 leading-relaxed">
                {frontmatter.description}
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <Calendar className="w-8 h-8 mx-auto mb-2 text-primary-200" />
                  <div className="text-2xl font-bold">{frontmatter.duration}</div>
                  <div className="text-primary-200 text-sm">Duration</div>
                </div>
                <div className="text-center">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-primary-200" />
                  <div className="text-2xl font-bold">2hrs</div>
                  <div className="text-primary-200 text-sm">Daily</div>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 mx-auto mb-2 text-primary-200" />
                  <div className="text-2xl font-bold">{frontmatter.maxCapacity}</div>
                  <div className="text-primary-200 text-sm">Max Students</div>
                </div>
                <div className="text-center">
                  <Trophy className="w-8 h-8 mx-auto mb-2 text-primary-200" />
                  <div className="text-2xl font-bold">NPR {frontmatter.price.toLocaleString()}</div>
                  <div className="text-primary-200 text-sm">Investment</div>
                </div>
              </div>
            </div>

            {/* Course Highlights */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">🚀 What Makes This Special</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Brain className="w-6 h-6 text-primary-200" />
                  <span>AI Pair Programming Mastery</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-6 h-6 text-primary-200" />
                  <span>3x Faster Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <Code className="w-6 h-6 text-primary-200" />
                  <span>Production SaaS Project</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-6 h-6 text-primary-200" />
                  <span>Portfolio-Ready Application</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-primary-200">Enrollment</span>
                  <span>{frontmatter.enrolled}/{frontmatter.maxCapacity} enrolled</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                  <div
                    className="bg-white rounded-full h-2 transition-all"
                    style={{ width: `${(frontmatter.enrolled / frontmatter.maxCapacity) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content with Tabbed Navigation */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex gap-12">
          {/* Main Content */}
          <div className="flex-1">
            <CurriculumTabs renderedSections={renderedSections} />

            {/* Final CTA Section */}
            <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-3xl p-8 lg:p-12 text-center">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">Transform Your Career in 7 Days</h3>
                <p className="text-lg lg:text-xl text-primary-100 mb-8">
                  Join the AI-first development revolution. Build production applications faster than ever before.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-bold text-base lg:text-lg hover:bg-slate-50 transition-colors"
                  >
                    Start Your Journey - NPR {frontmatter.price.toLocaleString()}
                    <Rocket className="w-5 h-5 lg:w-6 lg:h-6" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold text-base lg:text-lg hover:bg-white/10 transition-colors"
                  >
                    Schedule Info Call
                    <Calendar className="w-5 h-5 lg:w-6 lg:h-6" />
                  </Link>
                </div>

                <div className="text-sm text-primary-200">
                  💯 100% Satisfaction Guarantee • Limited Time Pricing • {frontmatter.maxCapacity - frontmatter.enrolled} Spots Left
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar - Only on Large Screens */}
          <div className="w-80 hidden xl:block">
            <div className="sticky top-8 space-y-6">
              {/* Quick Stats */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-4">Course Overview</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-slate-500" />
                      <span className="text-sm text-slate-600">Duration</span>
                    </div>
                    <span className="font-semibold">{frontmatter.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-slate-500" />
                      <span className="text-sm text-slate-600">Daily Time</span>
                    </div>
                    <span className="font-semibold">2 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-slate-500" />
                      <span className="text-sm text-slate-600">Class Size</span>
                    </div>
                    <span className="font-semibold">Max {frontmatter.maxCapacity}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-slate-500" />
                      <span className="text-sm text-slate-600">Investment</span>
                    </div>
                    <span className="font-semibold">NPR {frontmatter.price.toLocaleString()}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-slate-600">Enrollment Progress</span>
                    <span className="font-semibold">{Math.round((frontmatter.enrolled / frontmatter.maxCapacity) * 100)}% full</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-full h-2 transition-all"
                      style={{ width: `${(frontmatter.enrolled / frontmatter.maxCapacity) * 100}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-slate-500 mt-2">
                    {frontmatter.maxCapacity - frontmatter.enrolled} spots remaining
                  </div>
                </div>
              </div>

              {/* Quick Access CTA */}
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-6 rounded-2xl">
                <h4 className="font-bold mb-2">Ready to Start?</h4>
                <p className="text-primary-100 text-sm mb-4">
                  Secure your spot in the next cohort starting December 2nd.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-4 py-3 rounded-lg font-semibold text-sm hover:bg-slate-50 transition-colors w-full"
                >
                  Enroll Now
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Features Highlight */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-4">🎯 Key Benefits</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-slate-700">Build production SaaS app</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <Brain className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-slate-700">Master AI-assisted coding</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                      <Zap className="w-4 h-4 text-purple-600" />
                    </div>
                    <span className="text-slate-700">3x faster development</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-orange-600" />
                    </div>
                    <span className="text-slate-700">Portfolio-worthy project</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  // Generate static params for all course files
  try {
    const contentDir = path.join(process.cwd(), 'content', 'academy')
    const files = fs.readdirSync(contentDir)

    return files
      .filter(file => file.endsWith('.mdx'))
      .map(file => ({
        slug: file.replace('.mdx', '')
      }))
  } catch (error) {
    return []
  }
}
