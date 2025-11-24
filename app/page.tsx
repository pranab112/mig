import { Hero } from '@/components/ui/hero'
import { Section } from '@/components/ui/section'
import { ProductCard } from '@/components/product-card'
import { BlogCard } from '@/components/blog-card'
import { LessonCard } from '@/components/lesson-card'
import { ArrowRight, Cog, Database, Bot, Megaphone, Users, Zap, Shield, Target } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <Hero
        title="Turn your mind into gear."
        subtitle="We transform your ideas into working systems — from brainwave to bot."
        primaryCTA={{
          text: "Explore MIG Products",
          href: "/products",
          icon: <ArrowRight className="w-4 h-4" />
        }}
        secondaryCTA={{
          text: "Talk to us",
          href: "/contact"
        }}
      />

      {/* What We Build Section */}
      <Section title="What we build" className="bg-slate-50">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProductCard
            icon={<Cog className="w-8 h-8 text-primary-600" />}
            title="MIG Flow"
            description="Workflow automation that turns repetitive tasks into smooth, reliable systems."
            features={["n8n & Make workflows", "Custom integrations", "Process mapping"]}
            href="/products/mig-flow"
          />
          <ProductCard
            icon={<Database className="w-8 h-8 text-primary-600" />}
            title="MIG Scout"
            description="Data scraping and pipelines that gather the information you need, when you need it."
            features={["Web scraping", "Data pipelines", "Clean datasets"]}
            href="/products/mig-scout"
          />
          <ProductCard
            icon={<Bot className="w-8 h-8 text-primary-600" />}
            title="MIG AI Desk"
            description="AI agents and chatbots that understand your business and work alongside your team."
            features={["Custom AI agents", "Knowledge retrieval", "Voice & chat bots"]}
            href="/products/mig-ai-desk"
          />
          <ProductCard
            icon={<Megaphone className="w-8 h-8 text-primary-600" />}
            title="MIG Social"
            description="Social media marketing automation with AI-powered content creation and scheduling."
            features={["AI content creation", "Smart scheduling", "Performance analytics"]}
            href="/products/mig-social"
          />
        </div>
      </Section>

      {/* Why MindIsGear Section */}
      <Section title="Why MindIsGear?">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6">
            <Zap className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Working Systems</h3>
            <p className="text-slate-600">We build working systems, not just slides. You get tools that actually solve problems.</p>
          </div>
          <div className="text-center p-6">
            <Shield className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">You Own Everything</h3>
            <p className="text-slate-600">Your data and infrastructure belong to you. No vendor lock-in, ever.</p>
          </div>
          <div className="text-center p-6">
            <Target className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Ship Fast</h3>
            <p className="text-slate-600">We ship fast and iterate with you. See results in weeks, not months.</p>
          </div>
          <div className="text-center p-6">
            <Users className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Clear Communication</h3>
            <p className="text-slate-600">Clear communication and documentation. You understand what we build.</p>
          </div>
        </div>
      </Section>

      {/* Use Cases Section */}
      <Section title="Use cases" className="bg-slate-50">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border">
            <h3 className="text-lg font-semibold mb-2">Wholesalers & Distributors</h3>
            <p className="text-slate-600">Automate inventory sync, price monitoring, and order processing across multiple platforms.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border">
            <h3 className="text-lg font-semibold mb-2">Travel & Tours</h3>
            <p className="text-slate-600">Connect booking systems, automate customer communication, and sync availability calendars.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border">
            <h3 className="text-lg font-semibold mb-2">Online Platforms</h3>
            <p className="text-slate-600">Build data pipelines, automate content workflows, and integrate third-party services.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border">
            <h3 className="text-lg font-semibold mb-2">Internal Operations</h3>
            <p className="text-slate-600">Streamline team workflows, automate reporting, and build custom business tools.</p>
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section title="From idea to system">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary-600 font-bold text-xl">1</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Map your process</h3>
            <p className="text-slate-600">We understand your current workflow and identify automation opportunities.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary-600 font-bold text-xl">2</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Design the system</h3>
            <p className="text-slate-600">We design the technical architecture and user experience for your automation.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary-600 font-bold text-xl">3</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Build & integrate</h3>
            <p className="text-slate-600">We build your system and integrate it with your existing tools and workflows.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary-600 font-bold text-xl">4</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Monitor & improve</h3>
            <p className="text-slate-600">We monitor performance and continuously improve your systems over time.</p>
          </div>
        </div>
      </Section>

      {/* Blog & Academy Teasers */}
      <Section title="Learn with us" className="bg-slate-50">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Blog Teaser */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Latest from our blog</h3>
            <div className="space-y-4">
              <BlogCard
                title="How to turn a messy process into an automation workflow"
                excerpt="A step-by-step guide to identifying automation opportunities and building your first workflow."
                date="2024-01-15"
                slug="messy-process-to-automation"
                tags={["automation", "workflow"]}
              />
              <BlogCard
                title="Scraping ethically and safely for your business"
                excerpt="Best practices for web scraping that respect websites and protect your business."
                date="2024-01-10"
                slug="ethical-web-scraping"
                tags={["scraping", "ethics"]}
              />
            </div>
          </div>

          {/* Academy Teaser */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Top academy lessons</h3>
            <div className="space-y-4">
              <LessonCard
                title="n8n Automation Basics"
                description="Learn the fundamentals of building workflows with n8n."
                category="Automation"
                slug="n8n-automation-basics"
              />
              <LessonCard
                title="Web Scraping Fundamentals"
                description="Master the basics of ethical web scraping and data extraction."
                category="Scraping"
                slug="scraping-fundamentals"
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}