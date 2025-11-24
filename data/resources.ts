export interface Resource {
  id: string
  title: string
  description: string
  type: 'template' | 'checklist' | 'guide' | 'tool' | 'article'
  category: string
  downloadUrl?: string
  externalUrl?: string
  tags: string[]
  featured?: boolean
}

export const resources: Resource[] = [
  {
    id: 'automation-project-brief',
    title: 'Automation Project Brief Template',
    description: 'A comprehensive template to map out your automation project requirements, scope, and success metrics before you start building.',
    type: 'template',
    category: 'Planning',
    tags: ['automation', 'planning', 'template'],
    featured: true,
    downloadUrl: '/resources/automation-project-brief.pdf'
  },
  {
    id: 'pre-scraping-checklist',
    title: 'Pre-Scraping Checklist',
    description: 'Essential checks to perform before starting any web scraping project to ensure ethical and effective data collection.',
    type: 'checklist',
    category: 'Data Scraping',
    tags: ['scraping', 'ethics', 'checklist'],
    featured: true,
    downloadUrl: '/resources/pre-scraping-checklist.pdf'
  },
  {
    id: 'ai-agent-requirements',
    title: 'AI Agent Requirements Checklist',
    description: 'Define the scope, capabilities, and limitations of your AI agent project with this detailed requirements checklist.',
    type: 'checklist',
    category: 'AI Agents',
    tags: ['ai', 'agents', 'requirements'],
    featured: true,
    downloadUrl: '/resources/ai-agent-requirements.pdf'
  },
  {
    id: 'workflow-mapping-guide',
    title: 'Visual Workflow Mapping Guide',
    description: 'Learn how to map your current processes visually to identify the best automation opportunities.',
    type: 'guide',
    category: 'Process Design',
    tags: ['workflow', 'mapping', 'process'],
    downloadUrl: '/resources/workflow-mapping-guide.pdf'
  },
  {
    id: 'data-pipeline-architecture',
    title: 'Data Pipeline Architecture Template',
    description: 'A technical template for designing scalable data pipelines from collection to storage and processing.',
    type: 'template',
    category: 'Data Engineering',
    tags: ['data', 'pipeline', 'architecture'],
    downloadUrl: '/resources/data-pipeline-architecture.pdf'
  },
  {
    id: 'automation-roi-calculator',
    title: 'Automation ROI Calculator',
    description: 'Calculate the potential return on investment for your automation projects with this Excel template.',
    type: 'tool',
    category: 'Business Planning',
    tags: ['roi', 'calculator', 'business'],
    downloadUrl: '/resources/automation-roi-calculator.xlsx'
  },
  {
    id: 'api-integration-checklist',
    title: 'API Integration Security Checklist',
    description: 'Ensure your API integrations are secure and follow best practices with this comprehensive checklist.',
    type: 'checklist',
    category: 'Integration',
    tags: ['api', 'security', 'integration'],
    downloadUrl: '/resources/api-security-checklist.pdf'
  },
  {
    id: 'bot-training-dataset',
    title: 'Chatbot Training Dataset Template',
    description: 'Structure your chatbot training data effectively with this template and best practices guide.',
    type: 'template',
    category: 'AI Training',
    tags: ['chatbot', 'training', 'dataset'],
    downloadUrl: '/resources/bot-training-template.csv'
  }
]

export function getResourcesByCategory(): Record<string, Resource[]> {
  const categories: Record<string, Resource[]> = {}

  resources.forEach(resource => {
    if (!categories[resource.category]) {
      categories[resource.category] = []
    }
    categories[resource.category].push(resource)
  })

  return categories
}

export function getFeaturedResources(): Resource[] {
  return resources.filter(resource => resource.featured)
}

export function getResourcesByType(type: Resource['type']): Resource[] {
  return resources.filter(resource => resource.type === type)
}