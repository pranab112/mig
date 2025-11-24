# MindIsGear Website

> Turn your mind into gear. We transform ideas into working systems.

A modern, performance-optimized marketing website built with Next.js, TypeScript, and Tailwind CSS. Features comprehensive content management, SEO optimization, and responsive design.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mindisgear
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
mindisgear/
├── app/                          # Next.js 14 App Router
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Home page
│   ├── products/                # Product pages
│   ├── blog/                    # Blog system
│   ├── academy/                 # Learning hub
│   ├── resources/               # Resource library
│   ├── about/                   # About page
│   ├── contact/                 # Contact form
│   ├── sitemap.ts              # Dynamic sitemap
│   ├── robots.ts               # SEO robots.txt
│   └── manifest.ts             # PWA manifest
├── components/                  # Reusable components
│   ├── ui/                     # Base UI components
│   ├── product-card.tsx        # Product showcase cards
│   ├── blog-card.tsx           # Blog post cards
│   ├── lesson-card.tsx         # Academy lesson cards
│   ├── contact-form.tsx        # Contact form
│   ├── callout.tsx             # Alert/info boxes
│   └── structured-data.tsx     # SEO structured data
├── content/                    # MDX content files
│   ├── blog/                   # Blog posts
│   └── academy/                # Academy lessons
├── data/                       # Static data
│   ├── navigation.ts           # Site navigation
│   └── resources.ts            # Resource library data
├── lib/                        # Utilities
│   ├── mdx.ts                  # Content management
│   └── utils.ts                # Helper functions
├── public/                     # Static assets
└── styles/                     # Global styles
```

## 🎨 Design System

### Colors

- **Primary**: Blue palette (`primary-50` to `primary-900`)
- **Neutral**: Slate palette for text and backgrounds
- **Accent**: Used sparingly for CTAs and highlights

### Typography

- **Headings**: Inter font, semibold weights
- **Body**: Inter font, regular weight
- **Code**: JetBrains Mono for code blocks

### Components

All components use Tailwind CSS with consistent spacing, shadows, and responsive patterns. See `components/ui/` for base components.

## 📝 Content Management

### Blog Posts

Blog posts are written in MDX format and stored in `content/blog/`. Each post includes frontmatter metadata:

```markdown
---
title: "Your Post Title"
excerpt: "A brief description of the post"
date: "2024-01-15"
tags: ["automation", "workflow"]
readTime: "8 min read"
author: "MindIsGear Team"
---

# Your content here...
```

**Adding a new blog post:**

1. Create a new `.mdx` file in `content/blog/`
2. Add frontmatter metadata
3. Write content in Markdown/MDX
4. The post will automatically appear in the blog index

### Academy Lessons

Academy lessons follow a similar pattern in `content/academy/`:

```markdown
---
title: "Lesson Title"
description: "What you'll learn in this lesson"
category: "Automation"
difficulty: "Beginner"
duration: "45 min"
tags: ["n8n", "workflow"]
---

# Lesson content...
```

### Resources

Resources are managed in `data/resources.ts` as a TypeScript array. Add new resources by extending the array:

```typescript
{
  id: 'unique-id',
  title: 'Resource Title',
  description: 'What this resource provides',
  type: 'template' | 'checklist' | 'guide' | 'tool' | 'article',
  category: 'Category Name',
  tags: ['tag1', 'tag2'],
  downloadUrl: '/path/to/file.pdf' // or externalUrl for links
}
```

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run export       # Export static site
```

### Environment Variables

Create a `.env.local` file for local development:

```bash
# Optional: Analytics and tracking
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_HOTJAR_ID=your-hotjar-id

# Optional: Contact form backend
CONTACT_FORM_WEBHOOK=your-webhook-url
```

### Code Style

- **TypeScript**: Strict mode enabled
- **ESLint**: Next.js configuration
- **Prettier**: Recommended for formatting
- **Components**: Use TypeScript interfaces for props
- **Imports**: Absolute imports with `@/` prefix

### Adding New Pages

1. Create page file in appropriate `app/` directory
2. Add metadata export for SEO
3. Update navigation in `data/navigation.ts`
4. Add to sitemap in `app/sitemap.ts`

Example page structure:

```typescript
import { generateMetadata } from '@/lib/utils'

export const metadata = generateMetadata({
  title: 'Page Title - MindIsGear',
  description: 'Page description for SEO',
  url: '/page-url'
})

export default function PageName() {
  return (
    <div>
      {/* Page content */}
    </div>
  )
}
```

## 🚀 Deployment

### Static Export (Recommended)

The site is configured for static export to work with any hosting provider:

```bash
npm run build
npm run export
```

This generates a `out/` directory with static files ready for deployment.

### Deployment Platforms

**Vercel (Recommended)**
```bash
# Connect GitHub repository to Vercel
# Automatic deployments on push to main
```

**Netlify**
```bash
# Build command: npm run build && npm run export
# Publish directory: out
```

**GitHub Pages**
```bash
# Build and deploy with GitHub Actions
# Use the generated static files in out/
```

### Performance Optimization

- **Images**: Use Next.js Image component with optimization
- **Fonts**: Self-hosted fonts for better performance
- **Code splitting**: Automatic with Next.js App Router
- **Static generation**: All pages pre-rendered at build time

## 📊 SEO Features

### Automatic SEO

- **Sitemap**: Dynamically generated at `/sitemap.xml`
- **Robots.txt**: Generated at `/robots.txt`
- **Meta tags**: Open Graph and Twitter cards on all pages
- **Structured data**: JSON-LD for organization and services
- **Canonical URLs**: Prevent duplicate content issues

### Content SEO

- **Blog posts**: Automatic meta descriptions and social sharing
- **Academy lessons**: Course structured data for rich snippets
- **Resource pages**: Proper categorization and tagging

## 🔍 Analytics & Monitoring

### Recommended Tools

- **Google Analytics 4**: Traffic and user behavior
- **Google Search Console**: Search performance and indexing
- **Hotjar**: User experience and heatmaps
- **Lighthouse**: Performance monitoring

### Performance Targets

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Green scores for LCP, FID, CLS
- **Page Load**: Under 2 seconds on 3G networks

## 🐛 Troubleshooting

### Common Issues

**MDX files not loading**
- Check frontmatter syntax
- Ensure file extension is `.mdx`
- Verify file path in `content/` directory

**Build errors**
- Run `npm run lint` to check for TypeScript errors
- Ensure all imports use correct paths
- Check that all required metadata is present

**Styling issues**
- Verify Tailwind classes are correct
- Check responsive breakpoints
- Ensure component props match TypeScript interfaces

### Debug Mode

Enable debug logging:

```bash
DEBUG=true npm run dev
```

## 🤝 Contributing

### Content Contributions

1. **Blog posts**: Create MDX files with proper frontmatter
2. **Academy lessons**: Include code examples and clear explanations
3. **Resources**: Add valuable templates and tools

### Code Contributions

1. Follow TypeScript and ESLint guidelines
2. Test responsive design on multiple devices
3. Ensure accessibility standards are met
4. Update documentation for new features

## 📄 License

This project is proprietary to MindIsGear. All rights reserved.

---

## 🏗️ Technical Architecture

### Stack Choices

**Next.js 14**: Latest features, App Router, excellent performance
**TypeScript**: Type safety and better developer experience
**Tailwind CSS**: Utility-first styling, responsive design
**MDX**: Rich content with React components
**Static Export**: Maximum performance and hosting flexibility

### Key Features

- **Performance**: Static generation, image optimization, code splitting
- **SEO**: Comprehensive meta tags, structured data, sitemaps
- **Accessibility**: ARIA labels, keyboard navigation, semantic HTML
- **Responsive**: Mobile-first design, works on all devices
- **Maintainable**: Clean code structure, TypeScript, component library

---

For questions or support, contact the development team or refer to the MindIsGear documentation.