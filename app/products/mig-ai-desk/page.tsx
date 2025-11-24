import Link from 'next/link'
import { Hero } from '@/components/ui/hero'
import { Section } from '@/components/ui/section'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Callout } from '@/components/callout'
import { ArrowRight, Bot, MessageCircle, Headphones, FileText, Settings, Brain, Users, Zap, Shield } from 'lucide-react'

export const metadata = {
  title: 'MIG AI Desk - AI Agents & Chatbots | MindIsGear',
  description: 'From brainwave to bot. Build AI agents that understand your business with MIG AI Desk - custom chatbots, voice agents, and process assistants.'
}

export default function MigAiDeskPage() {
  return (
    <div className="space-y-0">
      <Hero
        title="From brainwave to bot."
        subtitle="MIG AI Desk creates AI agents that understand your business context and work alongside your team."
        description="Stop dealing with generic chatbots. We build custom AI agents that know your products, processes, and customers."
        primaryCTA={{
          text: "Build your AI agent",
          href: "/contact",
          icon: <ArrowRight className="w-4 h-4" />
        }}
        secondaryCTA={{
          text: "See AI agent examples",
          href: "#examples"
        }}
      />

      <Section title="Types of AI agents we build">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <MessageCircle className="w-8 h-8 text-primary-600 mb-3" />
              <h3 className="text-lg font-semibold">Customer Support Bots</h3>
            </CardHeader>
            <CardContent>
              <ul className="text-slate-600 text-sm space-y-1">
                <li>• Answer common questions</li>
                <li>• Product recommendations</li>
                <li>• Order status & tracking</li>
                <li>• Escalation to humans</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <FileText className="w-8 h-8 text-primary-600 mb-3" />
              <h3 className="text-lg font-semibold">Knowledge Assistants</h3>
            </CardHeader>
            <CardContent>
              <ul className="text-slate-600 text-sm space-y-1">
                <li>• Internal documentation Q&A</li>
                <li>• Policy & procedure lookup</li>
                <li>• Training & onboarding</li>
                <li>• Research assistance</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Settings className="w-8 h-8 text-primary-600 mb-3" />
              <h3 className="text-lg font-semibold">Process Assistants</h3>
            </CardHeader>
            <CardContent>
              <ul className="text-slate-600 text-sm space-y-1">
                <li>• Workflow guidance</li>
                <li>• Form completion help</li>
                <li>• Approval routing</li>
                <li>• Task automation</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Headphones className="w-8 h-8 text-primary-600 mb-3" />
              <h3 className="text-lg font-semibold">Voice Agents</h3>
            </CardHeader>
            <CardContent>
              <ul className="text-slate-600 text-sm space-y-1">
                <li>• Phone support automation</li>
                <li>• Appointment scheduling</li>
                <li>• Lead qualification</li>
                <li>• Survey & feedback</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section title="Example AI agent implementations" id="examples" className="bg-slate-50">
        <div className="space-y-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold">E-commerce Support Bot</h3>
                <p className="text-slate-600">AI agent trained on product catalog, order system, and support policies.</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <strong className="text-sm block mb-2">Capabilities:</strong>
                    <p className="text-sm text-slate-600">Product search, size/fit guidance, order tracking, return policy explanations, shipping info</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <strong className="text-sm block mb-2">Integration:</strong>
                    <p className="text-sm text-slate-600">Shopify API, customer database, knowledge base, escalation to human agents</p>
                  </div>
                  <div className="bg-primary-50 p-4 rounded-lg">
                    <strong className="text-sm block mb-2">Results:</strong>
                    <p className="text-sm text-primary-700">65% reduction in support tickets, 24/7 availability, improved customer satisfaction</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold">Internal Knowledge Assistant</h3>
                <p className="text-slate-600">Company wiki chatbot for HR policies, procedures, and onboarding.</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <strong className="text-sm block mb-2">Capabilities:</strong>
                    <p className="text-sm text-slate-600">HR policy lookup, benefit explanations, PTO requests, org chart navigation</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <strong className="text-sm block mb-2">Integration:</strong>
                    <p className="text-sm text-slate-600">Confluence, HRIS system, Slack, document repositories</p>
                  </div>
                  <div className="bg-primary-50 p-4 rounded-lg">
                    <strong className="text-sm block mb-2">Results:</strong>
                    <p className="text-sm text-primary-700">80% faster onboarding, reduced HR workload, consistent policy application</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold">Lead Qualification Voice Agent</h3>
                <p className="text-slate-600">Phone bot that qualifies leads and schedules appointments for sales team.</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <strong className="text-sm block mb-2">Capabilities:</strong>
                    <p className="text-sm text-slate-600">Lead qualification, needs assessment, calendar booking, CRM updates</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <strong className="text-sm block mb-2">Integration:</strong>
                    <p className="text-sm text-slate-600">Phone system, CRM, calendar, lead scoring system</p>
                  </div>
                  <div className="bg-primary-50 p-4 rounded-lg">
                    <strong className="text-sm block mb-2">Results:</strong>
                    <p className="text-sm text-primary-700">3x more qualified leads, 24/7 lead capture, higher conversion rates</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold">Technical Documentation Bot</h3>
                <p className="text-slate-600">Developer-focused assistant for API docs, code examples, and troubleshooting.</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <strong className="text-sm block mb-2">Capabilities:</strong>
                    <p className="text-sm text-slate-600">Code examples, API reference, troubleshooting guides, implementation help</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <strong className="text-sm block mb-2">Integration:</strong>
                    <p className="text-sm text-slate-600">GitHub, documentation site, Stack Overflow, code repositories</p>
                  </div>
                  <div className="bg-primary-50 p-4 rounded-lg">
                    <strong className="text-sm block mb-2">Results:</strong>
                    <p className="text-sm text-primary-700">50% faster developer onboarding, reduced support tickets, improved documentation usage</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Section title="What makes our AI agents different">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <Brain className="w-8 h-8 text-primary-600 mb-3" />
                <h3 className="text-xl font-semibold">Business context understanding</h3>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">We train agents on your specific products, processes, and policies - not just generic responses.</p>
                <ul className="text-slate-600 space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Custom training on your data</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Domain-specific knowledge</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Contextual conversation flow</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="w-8 h-8 text-primary-600 mb-3" />
                <h3 className="text-xl font-semibold">Human-AI collaboration</h3>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">Our agents know when to escalate to humans and provide context for seamless handoffs.</p>
                <ul className="text-slate-600 space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Smart escalation rules</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Conversation context transfer</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Human-in-the-loop workflows</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="w-8 h-8 text-primary-600 mb-3" />
                <h3 className="text-xl font-semibold">Multi-channel deployment</h3>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">Deploy the same agent across chat, voice, email, and messaging platforms.</p>
                <ul className="text-slate-600 space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Website chat widgets</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Slack/Teams integration</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Phone & voice systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="w-8 h-8 text-primary-600 mb-3" />
                <h3 className="text-xl font-semibold">Privacy & security first</h3>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">Your data stays secure with on-premises deployment options and strict privacy controls.</p>
                <ul className="text-slate-600 space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                    <span>On-premises deployment available</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Data encryption & access controls</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Compliance-ready architecture</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Section title="AI agent development process" className="bg-slate-50">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
              <span className="text-primary-600 font-semibold text-sm">1</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Requirements & Training Data (1-2 weeks)</h3>
              <p className="text-slate-600 mb-4">We define agent capabilities, collect training data from your knowledge base, and create conversation flows.</p>
              <div className="bg-white p-4 rounded-lg">
                <strong className="text-sm">Deliverables:</strong> Agent specification, training dataset, conversation design, integration plan
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
              <span className="text-primary-600 font-semibold text-sm">2</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Agent Training & Testing (2-4 weeks)</h3>
              <p className="text-slate-600 mb-4">We train the AI model, implement conversation logic, integrate with your systems, and conduct extensive testing.</p>
              <div className="bg-white p-4 rounded-lg">
                <strong className="text-sm">Deliverables:</strong> Trained AI model, conversation engine, system integrations, test results
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
              <span className="text-primary-600 font-semibold text-sm">3</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Deployment & Optimization (1 week)</h3>
              <p className="text-slate-600 mb-4">We deploy your AI agent, set up monitoring and analytics, train your team, and continuously optimize performance.</p>
              <div className="bg-white p-4 rounded-lg">
                <strong className="text-sm">Deliverables:</strong> Production agent, admin dashboard, team training, optimization reports
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Frequently asked questions">
        <div className="max-w-3xl mx-auto space-y-6">
          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold mb-2">What AI models do you use?</h4>
              <p className="text-slate-600">We use the best model for each use case, including OpenAI GPT, Claude, and open-source alternatives. We can also run models on your infrastructure for maximum privacy.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold mb-2">How accurate are the AI responses?</h4>
              <p className="text-slate-600">Accuracy depends on training data quality and use case complexity. We typically achieve 85-95% accuracy for well-defined domains with proper training data and continuous optimization.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold mb-2">Can the agent learn from conversations?</h4>
              <p className="text-slate-600">Yes, we can implement learning systems that improve responses over time based on user feedback and conversation outcomes, while maintaining privacy and security standards.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold mb-2">What about hallucinations and wrong answers?</h4>
              <p className="text-slate-600">We implement multiple safety measures including confidence scoring, fact-checking against your knowledge base, and clear escalation paths when the agent is uncertain.</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section title="Ready to build your AI agent?" className="bg-primary-50">
        <div className="text-center max-w-2xl mx-auto">
          <Callout type="info" title="Free AI agent consultation" className="mb-8">
            <p>Describe your use case and we'll provide a free assessment of AI agent feasibility, training requirements, and expected performance.</p>
          </Callout>

          <div className="space-y-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary-600 px-8 py-3 text-base font-medium text-white hover:bg-primary-700 transition-colors"
            >
              Build your AI agent
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