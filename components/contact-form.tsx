'use client'

import { useState } from 'react'
import { Send, Mail, MessageCircle } from 'lucide-react'

interface ContactFormProps {
  className?: string
}

export function ContactForm({ className = '' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    projectType: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission logic
    // This could be connected to a service like Formspree, Netlify Forms, or a custom API
    alert('Thank you for your message! We\'ll get back to you soon.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className={`max-w-2xl mx-auto ${className}`}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-slate-900">
              Name *
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                placeholder="Your name"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-900">
              Email *
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                placeholder="you@company.com"
              />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium leading-6 text-slate-900">
            Company
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="company"
              id="company"
              value={formData.company}
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
              placeholder="Your company"
            />
          </div>
        </div>

        <div>
          <label htmlFor="projectType" className="block text-sm font-medium leading-6 text-slate-900">
            What are you interested in?
          </label>
          <div className="mt-2">
            <select
              name="projectType"
              id="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
            >
              <option value="">Select a project type</option>
              <option value="workflow-automation">MIG Flow - Workflow Automation</option>
              <option value="data-scraping">MIG Scout - Data Scraping & Pipelines</option>
              <option value="ai-agents">MIG AI Desk - AI Agents & Chatbots</option>
              <option value="custom">Custom Project</option>
              <option value="consultation">Just want to chat</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium leading-6 text-slate-900">
            Tell us about your idea *
          </label>
          <div className="mt-2">
            <textarea
              name="message"
              id="message"
              rows={6}
              required
              value={formData.message}
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
              placeholder="Describe your current process, what you want to automate, or any questions you have. Feel free to send us a voice note or Loom video instead!"
            />
          </div>
          <p className="mt-2 text-sm text-slate-500">
            Prefer to talk? Record a voice note or Loom video and send it to hello@mindisgear.com
          </p>
        </div>

        <div>
          <button
            type="submit"
            className="inline-flex items-center justify-center w-full rounded-md bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors"
          >
            Send message
            <Send className="ml-2 h-4 w-4" />
          </button>
        </div>
      </form>

      <div className="mt-10 border-t border-slate-200 pt-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="flex items-start space-x-3">
            <Mail className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-sm font-semibold text-slate-900">Email us directly</h3>
              <p className="mt-1 text-sm text-slate-600">
                <a href="mailto:hello@mindisgear.com" className="text-primary-600 hover:text-primary-700">
                  hello@mindisgear.com
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <MessageCircle className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-sm font-semibold text-slate-900">Quick chat</h3>
              <p className="mt-1 text-sm text-slate-600">
                Send us a voice note or Loom video explaining your idea
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}