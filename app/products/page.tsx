import { Hero } from '@/components/ui/hero'
import { Section } from '@/components/ui/section'
import { ProductCard } from '@/components/product-card'
import { Cog, Database, Bot, Megaphone, GraduationCap, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Products - MindIsGear',
  description: 'Your ideas. Our systems. Explore MIG Flow, MIG Scout, MIG AI Desk, MIG Social, and MIG Learn - tools that turn your mind into gear.'
}

export default function ProductsPage() {
  return (
    <div className="space-y-0">
      <Hero
        title="Your ideas. Our systems."
        subtitle="Every MIG tool turns your mind into gear. Choose the right system for your needs."
        description="From workflow automation to AI agents, we build working systems that solve real problems."
        primaryCTA={{
          text: "Talk to us",
          href: "/contact",
          icon: <ArrowRight className="w-4 h-4" />
        }}
      />

      <Section title="MIG Product Suite" className="bg-slate-50">
        <div className="grid lg:grid-cols-2 gap-8">
          <ProductCard
            icon={<Cog className="w-8 h-8 text-primary-600" />}
            title="MIG Flow"
            description="Transform repetitive tasks into smooth, reliable automated workflows. Connect your tools and let the system handle the routine work."
            features={[
              "n8n & Make workflow automation",
              "Custom API integrations",
              "Process mapping & optimization",
              "Real-time monitoring & alerts",
              "Scalable cloud infrastructure"
            ]}
            href="/products/mig-flow"
          />

          <ProductCard
            icon={<Database className="w-8 h-8 text-primary-600" />}
            title="MIG Scout"
            description="Gather the data you need with ethical scraping and intelligent pipelines. From web scraping to data transformation."
            features={[
              "Ethical web scraping at scale",
              "Custom data pipelines",
              "Real-time data monitoring",
              "Anti-detection strategies",
              "Clean, structured datasets"
            ]}
            href="/products/mig-scout"
          />

          <ProductCard
            icon={<Bot className="w-8 h-8 text-primary-600" />}
            title="MIG AI Desk"
            description="AI agents that understand your business context and work alongside your team. From support bots to process assistants."
            features={[
              "Custom trained AI agents",
              "Knowledge base integration",
              "Multi-channel deployment",
              "Voice & chat capabilities",
              "Human handoff workflows"
            ]}
            href="/products/mig-ai-desk"
          />

          <ProductCard
            icon={<Megaphone className="w-8 h-8 text-primary-600" />}
            title="MIG Social"
            description="Social media marketing on autopilot with AI-powered content creation, smart scheduling, and automated engagement."
            features={[
              "AI content generation",
              "Cross-platform scheduling",
              "Performance analytics",
              "Community management",
              "Trend monitoring & alerts"
            ]}
            href="/products/mig-social"
          />

          <ProductCard
            icon={<GraduationCap className="w-8 h-8 text-primary-600" />}
            title="MIG Learn"
            description="Learn to build systems like we do. Deep dives, templates, and hands-on guides for technical founders and teams."
            features={[
              "System building playbooks",
              "Code templates & examples",
              "Video walkthroughs",
              "Community access",
              "1:1 implementation support"
            ]}
            href="/academy"
          />
        </div>
      </Section>

      <Section title="How we work">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Discovery & Design</h3>
              <p className="text-slate-600">We map your current process, identify bottlenecks, and design the optimal system architecture.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Build & Integrate</h3>
              <p className="text-slate-600">We build your system using proven tools and frameworks, integrating with your existing infrastructure.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Deploy & Support</h3>
              <p className="text-slate-600">We deploy your system, train your team, and provide ongoing support to ensure long-term success.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Which MIG tool is right for you?" className="bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border">
              <h3 className="text-lg font-semibold mb-2">Choose MIG Flow if you need to:</h3>
              <ul className="text-slate-600 space-y-1">
                <li>• Automate repetitive business processes</li>
                <li>• Connect multiple tools and platforms</li>
                <li>• Reduce manual data entry and routing</li>
                <li>• Scale operations without hiring more people</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border">
              <h3 className="text-lg font-semibold mb-2">Choose MIG Scout if you need to:</h3>
              <ul className="text-slate-600 space-y-1">
                <li>• Collect data from websites or APIs</li>
                <li>• Monitor competitor pricing or market changes</li>
                <li>• Build datasets for analysis or ML</li>
                <li>• Automate research and lead generation</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border">
              <h3 className="text-lg font-semibold mb-2">Choose MIG AI Desk if you need to:</h3>
              <ul className="text-slate-600 space-y-1">
                <li>• Automate customer support or internal Q&A</li>
                <li>• Build AI assistants for specific tasks</li>
                <li>• Process and understand documents at scale</li>
                <li>• Create conversational interfaces for your systems</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border">
              <h3 className="text-lg font-semibold mb-2">Choose MIG Social if you need to:</h3>
              <ul className="text-slate-600 space-y-1">
                <li>• Automate social media content creation</li>
                <li>• Schedule posts across multiple platforms</li>
                <li>• Grow your social media presence consistently</li>
                <li>• Track social media ROI and performance</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border">
              <h3 className="text-lg font-semibold mb-2">Choose MIG Learn if you want to:</h3>
              <ul className="text-slate-600 space-y-1">
                <li>• Build systems yourself with our guidance</li>
                <li>• Learn our proven methodologies</li>
                <li>• Access templates and code examples</li>
                <li>• Get 1:1 support for implementation</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}