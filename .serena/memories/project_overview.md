# MindIsGear Website Project Overview

## Project Purpose
MindIsGear is a modern marketing website for a business automation company that specializes in:
- **AI automation** and workflow optimization 
- **Data scraping** and pipeline services
- **Intelligent tools** for growing businesses
- **Learning platform** (academy) for automation education

**Tagline**: "Turn your mind into gear - We transform your ideas into working systems"

## Tech Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with utility-first approach
- **Content**: MDX (Markdown + React components)
- **Icons**: Lucide React
- **Font**: Inter (optimized with next/font)
- **Build**: Static export optimized for CDN delivery

## Project Structure
```
AA.MIG/
├── app/                    # Next.js 14 App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── blog/              # Blog system with [slug] dynamic routes
│   ├── academy/           # Learning hub with [slug] routes
│   ├── contact/           # Contact form page
│   ├── products/          # Product suite pages
│   ├── resources/         # Resource library
│   ├── sitemap.ts         # Dynamic sitemap generation
│   ├── robots.ts          # SEO robots.txt
│   └── manifest.ts        # PWA manifest
├── components/            # Reusable React components
│   ├── ui/               # Base UI components
│   ├── blog-card.tsx     # Blog post cards
│   ├── product-card.tsx  # Product showcase cards
│   ├── lesson-card.tsx   # Academy lesson cards
│   ├── contact-form.tsx  # Contact form component
│   ├── callout.tsx       # Alert/info boxes
│   └── structured-data.tsx # SEO structured data
├── content/              # MDX content files
│   ├── blog/            # Blog posts (.mdx)
│   └── academy/         # Academy lessons (.mdx)
├── data/                # Static data files
│   ├── navigation.ts    # Site navigation structure
│   └── resources.ts     # Resource library data
├── lib/                 # Utility functions
│   ├── mdx.ts          # Content management utilities
│   └── utils.ts        # Helper functions
├── public/             # Static assets
└── Configuration files (package.json, next.config.js, etc.)
```

## Current Content
- **Blog Posts**: 3 articles on automation, AI agents, and ethical web scraping
- **Academy**: 1 lesson on n8n automation basics
- **Product Pages**: MIG Flow, MIG Scout, MIG AI Desk, MIG Social
- **Business Pages**: About, Contact, Resources

## SEO & Performance Features
- Dynamic sitemap generation at `/sitemap.xml`
- Robots.txt at `/robots.txt`  
- Structured data (JSON-LD) for organization and services
- Meta tags with Open Graph and Twitter cards
- Static export for maximum performance
- Image optimization ready
- PWA manifest for app-like experience

## Build Status
✅ **Production Ready**: Build completes successfully with no errors or warnings
✅ **Code Quality**: No ESLint warnings or errors
✅ **Type Safety**: TypeScript strict mode with no type errors