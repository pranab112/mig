interface StructuredDataProps {
  data: Record<string, any>
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 2)
      }}
    />
  )
}

export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MindIsGear",
    "alternateName": "MIG",
    "description": "We transform your ideas into working systems — AI automation, data scraping, and intelligent tools for growing businesses.",
    "url": "https://mindisgear.com",
    "logo": "https://mindisgear.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hello@mindisgear.com",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://twitter.com/mindisgear",
      "https://linkedin.com/company/mindisgear",
      "https://github.com/mindisgear"
    ],
    "foundingDate": "2024",
    "founder": {
      "@type": "Person",
      "name": "MindIsGear Founder"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "areaServed": "Worldwide",
    "serviceType": [
      "Workflow Automation",
      "Data Scraping",
      "AI Agent Development",
      "Business Process Automation"
    ]
  }

  return <StructuredData data={data} />
}

export function ServiceSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Workflow Automation & AI Systems",
    "description": "Custom automation workflows, data scraping systems, and AI agents for growing businesses.",
    "provider": {
      "@type": "Organization",
      "name": "MindIsGear",
      "url": "https://mindisgear.com"
    },
    "serviceType": "Business Process Automation",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "MindIsGear Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "MIG Flow - Workflow Automation",
          "description": "Custom workflow automation using n8n, Make, and custom integrations."
        },
        {
          "@type": "OfferCatalog",
          "name": "MIG Scout - Data Scraping & Pipelines",
          "description": "Ethical web scraping and data pipeline development."
        },
        {
          "@type": "OfferCatalog",
          "name": "MIG AI Desk - AI Agents & Chatbots",
          "description": "Custom AI agents that understand your business context."
        },
        {
          "@type": "OfferCatalog",
          "name": "MIG Learn - Systems Building Academy",
          "description": "Learn to build automation and AI systems yourself."
        }
      ]
    }
  }

  return <StructuredData data={data} />
}

export function BlogPostSchema({
  title,
  description,
  author,
  publishDate,
  url,
  image
}: {
  title: string
  description: string
  author: string
  publishDate: string
  url: string
  image?: string
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "author": {
      "@type": "Organization",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "MindIsGear",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mindisgear.com/logo.png"
      }
    },
    "datePublished": publishDate,
    "dateModified": publishDate,
    "url": url,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    ...(image && {
      "image": {
        "@type": "ImageObject",
        "url": image,
        "width": 1200,
        "height": 630
      }
    })
  }

  return <StructuredData data={data} />
}

export function CourseSchema({
  name,
  description,
  provider,
  url,
  difficulty,
  duration
}: {
  name: string
  description: string
  provider: string
  url: string
  difficulty?: string
  duration?: string
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": provider,
      "url": "https://mindisgear.com"
    },
    "url": url,
    "courseMode": "online",
    "educationalLevel": difficulty,
    "timeRequired": duration,
    "inLanguage": "en",
    "isAccessibleForFree": true,
    "teaches": description
  }

  return <StructuredData data={data} />
}