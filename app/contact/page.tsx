import { Hero } from '@/components/ui/hero'
import { Section } from '@/components/ui/section'
import { ContactForm } from '@/components/contact-form'

export const metadata = {
  title: 'Contact - MindIsGear',
  description: 'Ready to turn your mind into gear? Get in touch to discuss your automation, AI, or data project. Free consultation included.'
}

export default function ContactPage() {
  return (
    <div className="space-y-0">
      <Hero
        title="Ready to turn your mind into gear?"
        subtitle="Let's discuss how we can transform your ideas into working systems."
        description="Send us a message, voice note, or Loom video explaining your idea. We'll provide a free consultation and project assessment."
      />

      <Section>
        <ContactForm />
      </Section>
    </div>
  )
}