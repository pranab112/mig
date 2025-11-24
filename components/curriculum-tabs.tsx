'use client'

import { useState, useEffect } from 'react'
import {
  Calendar,
  Clock,
  Users,
  Target,
  Zap,
  BookOpen,
  Trophy,
  Star,
  CheckCircle,
  Brain,
  Code,
  Rocket,
  Shield,
  ArrowUp,
  ChevronRight
} from 'lucide-react'

interface CurriculumTabsProps {
  renderedSections: {
    overview: string
    curriculum: string
    outcomes: string
    audience: string
    investment: string
  }
}

export default function CurriculumTabs({ renderedSections }: CurriculumTabsProps) {
  const [activeTab, setActiveTab] = useState('overview')
  const [showScrollTop, setShowScrollTop] = useState(false)

  const tabs = [
    { id: 'overview', label: '📋 Overview', icon: BookOpen },
    { id: 'curriculum', label: '📅 7-Day Curriculum', icon: Calendar },
    { id: 'outcomes', label: '🎓 Learning Outcomes', icon: Trophy },
    { id: 'audience', label: '🎯 Who Is This For', icon: Target },
    { id: 'investment', label: '💰 Investment & Value', icon: Star }
  ]

  // Handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative">
      {/* Tab Navigation */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 mb-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex space-x-1 overflow-x-auto py-4">
            {tabs.map(tab => {
              const IconComponent = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'text-slate-600 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-none">
        {activeTab === 'overview' && (
          <div className="prose prose-xl max-w-none">
            <pre className="whitespace-pre-wrap font-sans">{renderedSections.overview}</pre>
          </div>
        )}

        {activeTab === 'curriculum' && (
          <div className="prose prose-xl max-w-none">
            <pre className="whitespace-pre-wrap font-sans">{renderedSections.curriculum}</pre>
          </div>
        )}

        {activeTab === 'outcomes' && (
          <div className="prose prose-xl max-w-none">
            <pre className="whitespace-pre-wrap font-sans">{renderedSections.outcomes}</pre>
          </div>
        )}

        {activeTab === 'audience' && (
          <div className="prose prose-xl max-w-none">
            <pre className="whitespace-pre-wrap font-sans">{renderedSections.audience}</pre>
          </div>
        )}

        {activeTab === 'investment' && (
          <div className="prose prose-xl max-w-none">
            <pre className="whitespace-pre-wrap font-sans">{renderedSections.investment}</pre>
          </div>
        )}
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110"
          title="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  )
}