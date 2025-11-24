import Link from 'next/link'
import { Hero } from '@/components/ui/hero'
import { Section } from '@/components/ui/section'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Callout } from '@/components/callout'
import { ArrowRight, CheckCircle, Cog, Zap, Shield, BarChart3, Users, Clock } from 'lucide-react'

export const metadata = {
  title: 'MIG Flow - Workflow Automation | MindIsGear',
  description: 'Automate your workflows with MIG Flow. Turn repetitive tasks into smooth, reliable systems using n8n, Make, and custom integrations.'
}

export default function MigFlowPage() {
  return (
    <div className="space-y-0">
      <Hero
        title="Your workflow ideas. Our automation systems."
        subtitle="MIG Flow transforms repetitive tasks into smooth, reliable automated workflows."
        description="Stop doing the same tasks over and over. We build workflow automation that connects your tools and handles the routine work."
        primaryCTA={{
          text: "Start your automation project",
          href: "/contact",
          icon: <ArrowRight className="w-4 h-4" />
        }}
        secondaryCTA={{
          text: "View automation examples",
          href: "#examples"
        }}
      />

      <Section title="Who MIG Flow is for">
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Users className="w-8 h-8 text-primary-600 mb-3" />
              <h3 className="text-xl font-semibold">Growing businesses</h3>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">Teams drowning in manual processes who need to scale operations without hiring more people.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <BarChart3 className="w-8 h-8 text-primary-600 mb-3" />
              <h3 className="text-xl font-semibold">Operations teams</h3>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">Teams managing complex workflows across multiple tools and platforms who want seamless integration.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Zap className="w-8 h-8 text-primary-600 mb-3" />
              <h3 className="text-xl font-semibold">Efficiency-focused founders</h3>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">Founders who want to automate repetitive work so they can focus on growing their business.</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section title="Common workflow automations" id="examples" className="bg-slate-50">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">E-commerce & Retail</h3>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Inventory Sync Automation</h4>
                  <p className="text-slate-600 text-sm">Automatically sync inventory levels across Shopify, Amazon, eBay, and your warehouse management system.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Order Processing Pipeline</h4>
                  <p className="text-slate-600 text-sm">Route orders to fulfillment centers, generate shipping labels, and send tracking notifications automatically.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Customer Review Management</h4>
                  <p className="text-slate-600 text-sm">Monitor reviews across platforms, flag negative feedback, and trigger follow-up sequences automatically.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Professional Services</h3>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Client Onboarding Automation</h4>
                  <p className="text-slate-600 text-sm">Create projects, send welcome emails, schedule kickoff calls, and set up tracking automatically when contracts are signed.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Time Tracking & Invoicing</h4>
                  <p className="text-slate-600 text-sm">Sync time entries from tracking apps to your invoicing system and send automated payment reminders.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Lead Qualification Pipeline</h4>
                  <p className="text-slate-600 text-sm">Score leads, route qualified prospects to sales, and nurture others with targeted email sequences.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      <Section title="How MIG Flow engagements work">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-primary-600 font-semibold text-sm">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Process Discovery (1-2 weeks)</h3>
                <p className="text-slate-600 mb-4">We map your current workflow, identify bottlenecks, and design the optimal automation architecture. You'll get a clear project scope and timeline.</p>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <strong className="text-sm">Deliverables:</strong> Process map, automation design, project timeline, cost estimate
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-primary-600 font-semibold text-sm">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Prototype Development (1-3 weeks)</h3>
                <p className="text-slate-600 mb-4">We build a working prototype of your automation using tools like n8n, Make, or custom scripts. You can test and provide feedback before full deployment.</p>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <strong className="text-sm">Deliverables:</strong> Working prototype, testing environment, integration documentation
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-primary-600 font-semibold text-sm">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Production Rollout (1-2 weeks)</h3>
                <p className="text-slate-600 mb-4">We deploy your automation to production, set up monitoring and alerts, train your team, and provide documentation for ongoing management.</p>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <strong className="text-sm">Deliverables:</strong> Production system, monitoring dashboard, team training, support documentation
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="What makes MIG Flow different" className="bg-slate-50">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="text-center p-6">
              <Shield className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">You own everything</h4>
              <p className="text-slate-600 text-sm">Your workflows run on your infrastructure. No vendor lock-in, ever.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="text-center p-6">
              <Cog className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Proven tools</h4>
              <p className="text-slate-600 text-sm">We use established platforms like n8n and Make, not experimental software.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="text-center p-6">
              <Clock className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Fast implementation</h4>
              <p className="text-slate-600 text-sm">Most automations are live within 2-4 weeks, not months.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="text-center p-6">
              <BarChart3 className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Clear ROI tracking</h4>
              <p className="text-slate-600 text-sm">We help you measure time savings and cost reductions from day one.</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section title="Frequently asked questions">
        <div className="max-w-3xl mx-auto space-y-6">
          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold mb-2">What types of tools can you integrate?</h4>
              <p className="text-slate-600">We work with virtually any tool that has an API or webhook capability. Common integrations include CRMs (HubSpot, Salesforce), e-commerce platforms (Shopify, WooCommerce), project management tools (Asana, Monday), accounting software (QuickBooks, Xero), and hundreds of others.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold mb-2">How much does workflow automation cost?</h4>
              <p className="text-slate-600">Projects typically range from $2,500 for simple automations to $15,000+ for complex multi-system workflows. We provide fixed-price estimates after the discovery phase so you know exactly what you'll pay.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold mb-2">What if my workflow changes after implementation?</h4>
              <p className="text-slate-600">We build flexible systems that can be modified as your business grows. We also offer ongoing maintenance and enhancement packages to keep your automations current with your needs.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold mb-2">Do you provide training for my team?</h4>
              <p className="text-slate-600">Yes, we include team training in all projects. We'll show your team how to monitor the automation, handle exceptions, and make basic modifications. We also provide comprehensive documentation.</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section title="Ready to automate your workflows?" className="bg-primary-50">
        <div className="text-center max-w-2xl mx-auto">
          <Callout type="info" title="Free workflow assessment" className="mb-8">
            <p>Send us a description of your current process (even just a voice note!) and we'll provide a free assessment of automation opportunities and potential ROI.</p>
          </Callout>

          <div className="space-y-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary-600 px-8 py-3 text-base font-medium text-white hover:bg-primary-700 transition-colors"
            >
              Start your automation project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <div className="text-sm text-slate-600">
              <p>Typical response time: 24 hours • Free consultation included</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}