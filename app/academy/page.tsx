import { Hero } from '@/components/ui/hero'
import { Section } from '@/components/ui/section'
// ClassCard import removed - using single featured class layout
import { BookOpen, Clock, Users, Calendar, Video } from 'lucide-react'

export const metadata = {
  title: 'MIG Learn Academy - MindIsGear',
  description: 'Master automation, data scraping, and AI development through live online classes. Interactive learning with real-world projects.'
}

export default function AcademyPage() {
  const featuredClass = {
    title: 'Full Stack Development Using Claude AI',
    description: 'Build a complete web application from backend to frontend using Claude AI as your development partner. Master AI-powered coding with Node.js/Express backend, then React frontend.',
    format: 'Live Online' as const,
    duration: '7 days',
    schedule: 'Mon-Sun, 9:00 AM - 11:00 AM EST',
    startDate: 'December 2, 2024',
    instructor: 'MindIsGear Team',
    price: 25000,
    enrolled: 23,
    maxCapacity: 30,
    slug: 'fullstack-7-days'
  }

  const highlights = [
    {
      title: 'Backend-First Approach',
      description: 'Start with Node.js and Express to build solid foundations',
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      title: 'Live Coding Sessions',
      description: 'Real-time instruction with immediate feedback and Q&A',
      icon: <Video className="w-8 h-8" />
    },
    {
      title: 'Complete Project',
      description: 'Build a production-ready SaaS application in just 7 days',
      icon: <Calendar className="w-8 h-8" />
    },
    {
      title: 'Small Cohort',
      description: 'Maximum 30 students for personalized attention',
      icon: <Users className="w-8 h-8" />
    }
  ]

  return (
    <div className="space-y-0">
      <Hero
        title="Full Stack Development Using Claude AI"
        subtitle="Master AI-powered web development from backend to frontend"
        description="Live online intensive course leveraging Claude AI for accelerated development. Learn Node.js backend and React frontend with AI assistance. Build production-ready applications faster than ever."
        primaryCTA={{
          text: "Enroll Now - NPR 25,000 + Claude Subscription",
          href: "#featured-class"
        }}
        secondaryCTA={{
          text: "Schedule Info Call",
          href: "/contact"
        }}
      />

      {/* Course Highlights */}
      <Section title="What Makes This Course Special">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight) => (
            <div key={highlight.title} className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-primary-600">
                  {highlight.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
              <p className="text-slate-600 text-sm">{highlight.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Featured Class */}
      <Section title="Next Cohort Starting Soon" id="featured-class" className="bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-8 text-white">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Video className="w-8 h-8" />
                <span className="bg-white/20 text-white text-lg px-4 py-2 rounded-full font-semibold">Live Online Intensive</span>
              </div>
              <h2 className="text-4xl font-bold mb-4">{featuredClass.title}</h2>
              <p className="text-primary-100 mb-6 text-xl max-w-3xl mx-auto">
                {featuredClass.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">📅</div>
                <div className="text-sm text-primary-100">Starts</div>
                <div className="font-semibold">{featuredClass.startDate}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">⏰</div>
                <div className="text-sm text-primary-100">Schedule</div>
                <div className="font-semibold">{featuredClass.schedule}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">👥</div>
                <div className="text-sm text-primary-100">Enrolled</div>
                <div className="font-semibold">{featuredClass.enrolled}/{featuredClass.maxCapacity} students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">💰</div>
                <div className="text-sm text-primary-100">Investment</div>
                <div className="font-semibold">NPR {featuredClass.price.toLocaleString()} + Claude Sub</div>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-50 transition-colors"
                >
                  Enroll Now - NPR {featuredClass.price.toLocaleString()}
                </a>
                <a
                  href={`/academy/${featuredClass.slug}`}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
                >
                  View Full Curriculum
                </a>
              </div>
              <p className="mt-4 text-sm text-primary-100">
                💯 100% Satisfaction Guarantee - Full refund after Day 1 if not satisfied
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Learning Approach */}
      <Section title="Why Live Online Classes?">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Video className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Live Instruction</h3>
            <p className="text-slate-600">Real-time coding with immediate feedback. Ask questions and get instant answers.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Small Cohorts</h3>
            <p className="text-slate-600">Limited class sizes ensure personal attention and collaborative learning.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Project-Based</h3>
            <p className="text-slate-600">Build complete systems from start to finish. Graduate with portfolio projects.</p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to join our next cohort?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Limited spots available. Classes fill up fast due to our focus on personalized instruction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-primary-600 font-semibold hover:bg-slate-50 transition-colors"
            >
              Reserve Your Spot
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Schedule Info Call
            </a>
          </div>
        </div>
      </Section>
    </div>
  )
}