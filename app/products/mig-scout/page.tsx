import Link from 'next/link'
import { Hero } from '@/components/ui/hero'
import { Section } from '@/components/ui/section'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Callout } from '@/components/callout'
import { ArrowRight, Database, Globe, TrendingUp, Shield, Search, BarChart3, Clock, Zap } from 'lucide-react'

export const metadata = {
  title: 'MIG Scout - Data Scraping & Pipelines | MindIsGear',
  description: 'Ethical web scraping and data pipelines with MIG Scout. Gather, structure, and monitor the data your business needs to make better decisions.'
}

export default function MigScoutPage() {
  return (
    <div className="space-y-0">
      <Hero
        title="Your data needs. Our scraping systems."
        subtitle="MIG Scout gathers and structures the data you need with ethical scraping and intelligent pipelines."
        description="Stop manually collecting data. We build scalable systems that gather, clean, and deliver the information your business needs to make better decisions."
        primaryCTA={{
          text: "Start your data project",
          href: "/contact",
          icon: <ArrowRight className="w-4 h-4" />
        }}
        secondaryCTA={{
          text: "View data examples",
          href: "#examples"
        }}
      />

      <Section title="Types of data we collect">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <TrendingUp className="w-8 h-8 text-primary-600 mb-3" />
              <h3 className="text-lg font-semibold">Market Intelligence</h3>
            </CardHeader>
            <CardContent>
              <ul className="text-slate-600 text-sm space-y-1">
                <li>• Competitor pricing</li>
                <li>• Product catalogs</li>
                <li>• Market trends</li>
                <li>• Industry news</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Search className="w-8 h-8 text-primary-600 mb-3" />
              <h3 className="text-lg font-semibold">Lead Generation</h3>
            </CardHeader>
            <CardContent>
              <ul className="text-slate-600 text-sm space-y-1">
                <li>• Business directories</li>
                <li>• Contact information</li>
                <li>• Social media profiles</li>
                <li>• Company databases</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <BarChart3 className="w-8 h-8 text-primary-600 mb-3" />
              <h3 className="text-lg font-semibold">Research Data</h3>
            </CardHeader>
            <CardContent>
              <ul className="text-slate-600 text-sm space-y-1">
                <li>• Academic publications</li>
                <li>• Patent databases</li>
                <li>• Government records</li>
                <li>• Survey responses</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Globe className="w-8 h-8 text-primary-600 mb-3" />
              <h3 className="text-lg font-semibold">Content Monitoring</h3>
            </CardHeader>
            <CardContent>
              <ul className="text-slate-600 text-sm space-y-1">
                <li>• Brand mentions</li>
                <li>• Review monitoring</li>
                <li>• Job postings</li>
                <li>• News coverage</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section title="Example data pipelines" id="examples" className="bg-slate-50">
        <div className="space-y-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold">E-commerce Price Intelligence</h3>
                <p className="text-slate-600">Monitor competitor pricing across multiple marketplaces in real-time.</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <strong className="text-sm block mb-2">Data Sources:</strong>
                    <p className="text-sm text-slate-600">Amazon, eBay, competitor websites, marketplace APIs</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <strong className="text-sm block mb-2">Deliverables:</strong>
                    <p className="text-sm text-slate-600">Daily pricing reports, alert system for price changes, competitive analysis dashboard</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold">Lead Research Automation</h3>
                <p className="text-slate-600">Build qualified prospect lists from multiple business directories and databases.</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <strong className="text-sm block mb-2">Data Sources:</strong>
                    <p className="text-sm text-slate-600">LinkedIn, industry directories, company websites, funding databases</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <strong className="text-sm block mb-2">Deliverables:</strong>
                    <p className="text-sm text-slate-600">Qualified lead lists, contact enrichment, CRM integration, lead scoring</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold">Market Research Dashboard</h3>
                <p className="text-slate-600">Track industry trends, news, and competitor activities in one place.</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <strong className="text-sm block mb-2">Data Sources:</strong>
                    <p className="text-sm text-slate-600">Industry publications, news sites, social media, government data</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <strong className="text-sm block mb-2">Deliverables:</strong>
                    <p className="text-sm text-slate-600">Weekly market reports, trend analysis, competitor intelligence, custom alerts</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold">Brand Monitoring System</h3>
                <p className="text-slate-600">Track mentions of your brand, products, or key executives across the web.</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <strong className="text-sm block mb-2">Data Sources:</strong>
                    <p className="text-sm text-slate-600">Social media platforms, review sites, news outlets, forums, blogs</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <strong className="text-sm block mb-2">Deliverables:</strong>
                    <p className="text-sm text-slate-600">Real-time alerts, sentiment analysis, response recommendations, PR dashboard</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Section title="Our ethical scraping approach">
        <div className="max-w-4xl mx-auto">
          <Callout type="info" title="We prioritize ethical and sustainable data collection" className="mb-8">
            <p>We respect websites' terms of service, implement proper rate limiting, and use anti-detection strategies to ensure long-term reliability without disrupting target sites.</p>
          </Callout>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <Shield className="w-8 h-8 text-primary-600 mb-3" />
                <h3 className="text-xl font-semibold">Respectful collection</h3>
              </CardHeader>
              <CardContent>
                <ul className="text-slate-600 space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Honor robots.txt and terms of service</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Implement proper delays and rate limiting</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Use legitimate user agents and headers</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Avoid scraping personal or sensitive data</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="w-8 h-8 text-primary-600 mb-3" />
                <h3 className="text-xl font-semibold">Anti-detection strategies</h3>
              </CardHeader>
              <CardContent>
                <ul className="text-slate-600 space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Rotate IP addresses and user agents</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Use headless browsers when needed</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Handle CAPTCHAs and anti-bot measures</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Monitor for blocks and adapt automatically</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Section title="Technology stack" className="bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="text-center p-6">
                <h4 className="font-semibold mb-3">Scraping Tools</h4>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>Python (Scrapy, Beautiful Soup)</li>
                  <li>Playwright & Selenium</li>
                  <li>Proxy rotation services</li>
                  <li>Custom scrapers</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="text-center p-6">
                <h4 className="font-semibold mb-3">Data Processing</h4>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>Pandas for data cleaning</li>
                  <li>Custom validation rules</li>
                  <li>Duplicate detection</li>
                  <li>Data enrichment APIs</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="text-center p-6">
                <h4 className="font-semibold mb-3">Data Delivery</h4>
                <ul className="text-slate-600 text-sm space-y-1">
                  <li>PostgreSQL & MongoDB</li>
                  <li>CSV, JSON, Excel export</li>
                  <li>API endpoints</li>
                  <li>Real-time dashboards</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Section title="How MIG Scout projects work">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
              <span className="text-primary-600 font-semibold text-sm">1</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Data Requirements Analysis (3-5 days)</h3>
              <p className="text-slate-600 mb-4">We identify data sources, define collection requirements, assess technical challenges, and create a project plan with clear deliverables.</p>
              <div className="bg-slate-50 p-4 rounded-lg">
                <strong className="text-sm">Deliverables:</strong> Data specification, source analysis, technical approach, project timeline
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
              <span className="text-primary-600 font-semibold text-sm">2</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Scraper Development & Testing (1-3 weeks)</h3>
              <p className="text-slate-600 mb-4">We build custom scrapers, implement data validation, test against target sites, and create sample datasets for your review.</p>
              <div className="bg-slate-50 p-4 rounded-lg">
                <strong className="text-sm">Deliverables:</strong> Working scrapers, sample data, validation reports, performance metrics
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
              <span className="text-primary-600 font-semibold text-sm">3</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Production Deployment & Monitoring (1 week)</h3>
              <p className="text-slate-600 mb-4">We deploy your data pipeline, set up monitoring and alerts, create delivery systems, and provide documentation for ongoing management.</p>
              <div className="bg-slate-50 p-4 rounded-lg">
                <strong className="text-sm">Deliverables:</strong> Production pipeline, monitoring dashboard, data delivery system, maintenance documentation
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Frequently asked questions">
        <div className="max-w-3xl mx-auto space-y-6">
          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold mb-2">Is web scraping legal?</h4>
              <p className="text-slate-600">Web scraping publicly available data is generally legal, but we always review terms of service and applicable laws. We only collect data that's publicly accessible and avoid personal or copyrighted information.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold mb-2">How do you handle websites that block scrapers?</h4>
              <p className="text-slate-600">We use various anti-detection techniques including proxy rotation, user agent randomization, and rate limiting. For heavily protected sites, we may recommend alternative data sources or APIs.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold mb-2">What data formats can you deliver?</h4>
              <p className="text-slate-600">We can deliver data in any format you need: CSV, JSON, Excel, direct database insertion, or through API endpoints. We also provide real-time dashboards and automated reports.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold mb-2">How often can data be updated?</h4>
              <p className="text-slate-600">Update frequency depends on your needs and the target website's capacity. We can collect data in real-time, hourly, daily, or on custom schedules while respecting rate limits.</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section title="Ready to gather better data?" className="bg-primary-50">
        <div className="text-center max-w-2xl mx-auto">
          <Callout type="info" title="Free data assessment" className="mb-8">
            <p>Tell us what data you need and we'll provide a free assessment of collection feasibility, estimated timelines, and potential challenges.</p>
          </Callout>

          <div className="space-y-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary-600 px-8 py-3 text-base font-medium text-white hover:bg-primary-700 transition-colors"
            >
              Start your data project
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