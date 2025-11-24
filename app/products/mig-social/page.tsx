import { Hero } from '@/components/ui/hero'
import { Section } from '@/components/ui/section'
import { Card } from '@/components/ui/card'
import {
  Megaphone,
  Users,
  TrendingUp,
  Calendar,
  BarChart3,
  Target,
  Clock,
  Zap,
  CheckCircle,
  ArrowRight,
  Instagram,
  Twitter,
  Linkedin,
  Facebook
} from 'lucide-react'

export const metadata = {
  title: 'MIG Social - Social Media Marketing Automation - MindIsGear',
  description: 'Automate your social media marketing with AI-powered content creation, scheduling, and engagement tracking. Turn social media into a growth engine for your business.'
}

export default function MIGSocialPage() {
  const features = [
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: 'AI Content Creation',
      description: 'Generate engaging posts, captions, and hashtags that match your brand voice and audience preferences.'
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Smart Scheduling',
      description: 'Automatically post at optimal times across all platforms when your audience is most active.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Audience Targeting',
      description: 'AI-powered audience analysis to create content that resonates with your ideal customers.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Performance Analytics',
      description: 'Track engagement, reach, and conversions with automated reporting and insights.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Community Management',
      description: 'Automated responses to comments and DMs, with smart escalation to human team members.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Trend Monitoring',
      description: 'Stay on top of industry trends and viral content opportunities with AI-powered alerts.'
    }
  ]

  const platforms = [
    { name: 'Instagram', icon: <Instagram className="w-8 h-8" />, color: 'text-pink-500' },
    { name: 'Facebook', icon: <Facebook className="w-8 h-8" />, color: 'text-blue-600' },
    { name: 'Twitter/X', icon: <Twitter className="w-8 h-8" />, color: 'text-sky-500' },
    { name: 'LinkedIn', icon: <Linkedin className="w-8 h-8" />, color: 'text-blue-700' }
  ]

  const useCases = [
    {
      title: 'E-commerce Brands',
      description: 'Product showcases, user-generated content campaigns, and sales-driven social strategies.',
      results: ['40% increase in social traffic', 'Enhanced brand awareness', 'Automated customer service']
    },
    {
      title: 'Service Businesses',
      description: 'Thought leadership content, client testimonials, and lead generation campaigns.',
      results: ['3x more qualified leads', 'Improved online reputation', 'Automated appointment booking']
    },
    {
      title: 'Content Creators',
      description: 'Consistent posting schedules, audience growth strategies, and engagement optimization.',
      results: ['2x follower growth', 'Higher engagement rates', 'More brand partnerships']
    },
    {
      title: 'B2B Companies',
      description: 'Industry insights, LinkedIn automation, and professional network building.',
      results: ['5x more LinkedIn connections', 'Increased thought leadership', 'Pipeline growth']
    }
  ]

  const workflow = [
    {
      step: 1,
      title: 'Brand Voice Analysis',
      description: 'We analyze your existing content and brand guidelines to create an AI model that matches your unique voice.'
    },
    {
      step: 2,
      title: 'Content Strategy Development',
      description: 'Build a comprehensive content calendar with themes, campaigns, and optimization strategies.'
    },
    {
      step: 3,
      title: 'Automation Setup',
      description: 'Configure AI content creation, scheduling systems, and engagement automation across all platforms.'
    },
    {
      step: 4,
      title: 'Performance Monitoring',
      description: 'Track results, optimize performance, and continuously improve your social media ROI.'
    }
  ]

  return (
    <div className="space-y-0">
      <Hero
        title="MIG Social"
        subtitle="Social Media Marketing on Autopilot"
        description="Turn social media into a growth engine with AI-powered content creation, smart scheduling, and automated engagement. Focus on your business while we grow your online presence."
        primaryCTA={{
          text: "Start Growing",
          href: "/contact",
          icon: <ArrowRight className="w-4 h-4" />
        }}
        secondaryCTA={{
          text: "See Examples",
          href: "#use-cases"
        }}
      />

      {/* Platform Support */}
      <Section title="Works Across All Major Platforms" className="bg-slate-50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {platforms.map((platform) => (
            <div key={platform.name} className="text-center">
              <div className={`${platform.color} mb-3 flex justify-center`}>
                {platform.icon}
              </div>
              <h3 className="font-medium text-slate-900">{platform.name}</h3>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-slate-600">
            Unified management across all platforms. One system, complete social media presence.
          </p>
        </div>
      </Section>

      {/* Features */}
      <Section title="What MIG Social Does">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="p-6">
              <div className="text-primary-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Use Cases */}
      <Section title="Perfect for Every Business Type" id="use-cases" className="bg-slate-50">
        <div className="grid lg:grid-cols-2 gap-8">
          {useCases.map((useCase) => (
            <div key={useCase.title} className="bg-white rounded-xl p-6 border">
              <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
              <p className="text-slate-600 mb-4">{useCase.description}</p>
              <div className="space-y-2">
                <h4 className="font-medium text-slate-900">Typical Results:</h4>
                {useCase.results.map((result, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-slate-600">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section title="How We Build Your Social Media Engine">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workflow.map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold">{item.step}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section title="Why Choose MIG Social?" className="bg-slate-50">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <Clock className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Save 10+ Hours Weekly</h3>
            <p className="text-slate-600">Automated content creation and scheduling frees up your time for strategic work.</p>
          </div>
          <div className="text-center p-6">
            <TrendingUp className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Consistent Growth</h3>
            <p className="text-slate-600">Regular, optimized posting drives steady follower and engagement growth.</p>
          </div>
          <div className="text-center p-6">
            <Zap className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Better Performance</h3>
            <p className="text-slate-600">AI optimization delivers higher engagement rates than manual posting.</p>
          </div>
        </div>
      </Section>

      {/* Technology Stack */}
      <Section title="Powered by Advanced Technology">
        <div className="bg-white rounded-xl p-8 border">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">AI & Automation Tools</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• GPT-4 for content generation</li>
                <li>• Computer vision for image optimization</li>
                <li>• Natural language processing for engagement</li>
                <li>• Predictive analytics for optimal timing</li>
                <li>• Sentiment analysis for brand monitoring</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Platform Integrations</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Meta Business API (Facebook/Instagram)</li>
                <li>• Twitter/X API for automated posting</li>
                <li>• LinkedIn Marketing API</li>
                <li>• Google Analytics for performance tracking</li>
                <li>• Custom webhook integrations</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Pricing Tiers */}
      <Section title="Choose Your Growth Plan" className="bg-slate-50">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Starter</h3>
            <p className="text-slate-600 mb-4">Perfect for small businesses</p>
            <div className="text-2xl font-bold mb-4">$497/month</div>
            <ul className="space-y-2 text-sm text-slate-600 mb-6">
              <li>• 2 social media platforms</li>
              <li>• 30 posts per month</li>
              <li>• Basic analytics reporting</li>
              <li>• Community management</li>
            </ul>
            <a href="/contact" className="block w-full bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors">
              Get Started
            </a>
          </Card>

          <Card className="p-6 text-center border-2 border-primary-600 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">Most Popular</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Growth</h3>
            <p className="text-slate-600 mb-4">For growing businesses</p>
            <div className="text-2xl font-bold mb-4">$997/month</div>
            <ul className="space-y-2 text-sm text-slate-600 mb-6">
              <li>• 4 social media platforms</li>
              <li>• 60 posts per month</li>
              <li>• Advanced analytics & insights</li>
              <li>• AI-powered engagement</li>
              <li>• Trend monitoring</li>
            </ul>
            <a href="/contact" className="block w-full bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors">
              Get Started
            </a>
          </Card>

          <Card className="p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Enterprise</h3>
            <p className="text-slate-600 mb-4">For large organizations</p>
            <div className="text-2xl font-bold mb-4">Custom</div>
            <ul className="space-y-2 text-sm text-slate-600 mb-6">
              <li>• Unlimited platforms</li>
              <li>• Custom posting volume</li>
              <li>• White-label options</li>
              <li>• Dedicated account manager</li>
              <li>• Custom integrations</li>
            </ul>
            <a href="/contact" className="block w-full border border-primary-600 text-primary-600 py-2 px-4 rounded-lg hover:bg-primary-50 transition-colors">
              Contact Sales
            </a>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Automate Your Social Media?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have transformed their social media presence with MIG Social.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-white text-primary-600 font-semibold hover:bg-slate-50 transition-colors"
            >
              Start Your Free Strategy Session
            </a>
            <a
              href="/academy"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Learn Social Media Automation
            </a>
          </div>
        </div>
      </Section>
    </div>
  )
}