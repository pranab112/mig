import { resources, getResourcesByCategory } from '@/data/resources'
import { Hero } from '@/components/ui/hero'
import { Section } from '@/components/ui/section'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Download, ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'Resources - Templates & Tools | MindIsGear',
  description: 'Free templates, checklists, and tools for automation projects, data scraping, AI agents, and systems building.'
}

export default function ResourcesPage() {
  const resourcesByCategory = getResourcesByCategory()
  const categories = Object.keys(resourcesByCategory)

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'template':
        return '📋'
      case 'checklist':
        return '✅'
      case 'guide':
        return '📖'
      case 'tool':
        return '🛠️'
      case 'article':
        return '📄'
      default:
        return '📎'
    }
  }

  return (
    <div className="space-y-0">
      <Hero
        title="Templates, tools, and guides"
        subtitle="Free resources to help you build better systems."
        description="Checklists, templates, and tools we use for automation projects, data collection, and AI agent development."
      />

      <Section title="All resources">
        {categories.map((category) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">{category}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resourcesByCategory[category].map((resource) => (
                <Card key={resource.id} hover>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-2xl">{getTypeIcon(resource.type)}</span>
                      <span className="inline-flex items-center rounded-md bg-slate-50 px-2 py-1 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-600/10 capitalize">
                        {resource.type}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900">{resource.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{resource.description}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-1">
                      {resource.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-md bg-primary-50 px-2 py-1 text-xs font-medium text-primary-700 ring-1 ring-inset ring-primary-600/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter>
                    {resource.downloadUrl && (
                      <a
                        href={resource.downloadUrl}
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
                        download
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </a>
                    )}
                    {resource.externalUrl && (
                      <a
                        href={resource.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View resource
                      </a>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {resources.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600">Resources coming soon!</p>
          </div>
        )}
      </Section>
    </div>
  )
}