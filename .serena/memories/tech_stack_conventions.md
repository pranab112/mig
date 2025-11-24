# MindIsGear Tech Stack & Conventions

## Core Technologies
- **Next.js 14**: App Router, static export, TypeScript integration
- **React 18**: Latest features with TypeScript interfaces
- **TypeScript 5.2**: Strict mode enabled for type safety
- **Tailwind CSS 3.3**: Utility-first styling with responsive design
- **MDX**: Markdown with React components for rich content

## Code Style & Conventions

### TypeScript Standards
- **Strict mode**: All type checking enabled
- **Interface-driven**: Use TypeScript interfaces for component props
- **Explicit typing**: Avoid `any`, prefer specific types
- **Import aliases**: Use `@/` prefix for absolute imports from root

### Component Patterns
```typescript
// Standard component structure
import { generateMetadata } from '@/lib/utils'

export const metadata = generateMetadata({
  title: 'Page Title - MindIsGear',
  description: 'SEO description',
  url: '/page-url'
})

interface ComponentProps {
  title: string
  children: React.ReactNode
}

export default function ComponentName({ title, children }: ComponentProps) {
  return (
    <div className="responsive-class">
      {/* Component content */}
    </div>
  )
}
```

### Styling Conventions
- **Mobile-first**: Start with mobile, use `md:`, `lg:` for larger screens
- **Utility classes**: Prefer Tailwind utilities over custom CSS
- **Consistent spacing**: Use Tailwind spacing scale (p-4, m-6, etc.)
- **Color system**: Use custom primary/neutral palette defined in config
- **Typography**: Inter font family with semantic heading scales

### File Naming
- **Components**: PascalCase (e.g., `ProductCard.tsx`)
- **Pages**: lowercase with hyphens (e.g., `about/page.tsx`)
- **Utilities**: camelCase (e.g., `utils.ts`)
- **Content**: kebab-case (e.g., `ai-agents-teammates.mdx`)

## Content Management

### MDX Structure
- **Frontmatter**: YAML metadata at top of each .mdx file
- **File location**: `content/blog/` or `content/academy/`
- **Naming**: kebab-case filenames matching URL slugs

### Blog Post Template
```markdown
---
title: "Article Title"
excerpt: "Brief description for listings"
date: "2024-01-15"
tags: ["automation", "workflow"]
readTime: "8 min read"
author: "MindIsGear Team"
---

# Content here...
```

### Academy Lesson Template
```markdown
---
title: "Lesson Title"
description: "What you'll learn"
category: "Automation"
difficulty: "Beginner"
duration: "45 min"
tags: ["n8n", "workflow"]
---

# Lesson content...
```

## Configuration
- **Static Export**: Configured for maximum hosting compatibility
- **Image Optimization**: Disabled for static export compatibility
- **Trailing Slash**: Enabled for better SEO
- **MDX Support**: Integrated with remarkPlugins/rehypePlugins ready
- **PWA Ready**: Manifest configured for app-like experience