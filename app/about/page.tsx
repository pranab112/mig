import { Hero } from '@/components/ui/hero'
import { Section } from '@/components/ui/section'
import { Card, CardContent } from '@/components/ui/card'
import { Zap, Shield, Target, Users, Heart, Code } from 'lucide-react'

export const metadata = {
  title: 'About - MindIsGear Story',
  description: 'The story behind MindIsGear - why "mind is gear" and how we turn ideas into working systems for growing businesses.'
}

export default function AboutPage() {
  return (
    <div className="space-y-0">
      <Hero
        title="Mind is gear."
        subtitle="The story behind MindIsGear and why we believe your mind is the most powerful gear in your business."
      />

      <Section title="Why 'Mind is Gear'?">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg text-slate-600 leading-relaxed">
            <p>
              Every business has two types of work: the <strong>thinking work</strong> that requires human creativity and judgment, 
              and the <strong>execution work</strong> that follows predictable patterns and rules.
            </p>
            <p>
              Your mind should be focused on the thinking work—strategy, creativity, problem-solving, building relationships. 
              But too often, brilliant minds get stuck doing repetitive execution work that could be automated.
            </p>
            <p>
              At MindIsGear, we believe <strong>your mind is gear</strong>—the most important component in your business machine. 
              Our job is to build the other gears (automation, AI agents, data systems) so your mind can do what only minds can do.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Our values" className="bg-slate-50">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardContent className="text-center p-6">
              <Zap className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Working systems, not slides</h3>
              <p className="text-slate-600">We ship systems that actually work in your business, not impressive demos that gather dust.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="text-center p-6">
              <Shield className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">You own everything</h3>
              <p className="text-slate-600">Your data, your systems, your infrastructure. No vendor lock-in, no dependencies on our continued existence.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="text-center p-6">
              <Target className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Simplicity over cleverness</h3>
              <p className="text-slate-600">We choose boring, proven solutions over cutting-edge complexity. Reliable beats clever every time.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="text-center p-6">
              <Users className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Clear communication</h3>
              <p className="text-slate-600">No jargon, no technical mystification. You understand what we're building and why it matters.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="text-center p-6">
              <Heart className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Human-first automation</h3>
              <p className="text-slate-600">We automate to make humans more effective, not to replace them. Better work, not just less work.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="text-center p-6">
              <Code className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Teaching by building</h3>
              <p className="text-slate-600">We share our knowledge through real examples, code, and hands-on guidance. Learning by doing.</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section title="The founder story">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg text-slate-600 leading-relaxed">
            <p>
              MindIsGear started from a simple observation: brilliant business minds spending hours every day on tasks 
              a computer could do in minutes.
            </p>
            <p>
              After building hundreds of automations, scrapers, and AI systems for businesses ranging from solo founders 
              to enterprise teams, we noticed a pattern. The most successful implementations weren't the most technically 
              impressive—they were the ones that freed up human creativity for work that actually mattered.
            </p>
            <p>
              We're not here to build the most advanced AI or the most complex automation. We're here to turn your mind 
              into the most effective gear in your business by handling everything else automatically.
            </p>
          </div>
        </div>
      </Section>

      <Section title="How we work" className="bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Discovery-driven development</h3>
              <p className="text-slate-600 mb-6">
                We start by understanding your current process, not by pitching our favorite technology. 
                The best automation is invisible—it just makes your work flow better.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Iterative implementation</h3>
              <p className="text-slate-600">
                We build in small, testable pieces. You see results in weeks, not months, and can provide 
                feedback that shapes the final system.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Knowledge transfer</h3>
              <p className="text-slate-600 mb-6">
                Every project includes documentation, training, and knowledge transfer. You understand how 
                your systems work and can maintain them independently.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Long-term partnership</h3>
              <p className="text-slate-600">
                We're here when you need us, but you're not dependent on us. Our goal is to make you more 
                capable, not more reliant.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}