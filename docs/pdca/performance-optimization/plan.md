# Plan: Performance Optimization

## Hypothesis
The AA.MIG project is currently well-optimized for a static site but has disabled key Next.js optimizations and lacks modern performance best practices. Re-enabling optimizations and implementing performance patterns will improve Core Web Vitals and user experience.

## Expected Outcomes (定量的)
- Image Loading: 362KB → <100KB (WebP + optimization)
- First Load JS: 96.2KB → <85KB
- Largest Contentful Paint: Unmeasured → <2.5s
- Cumulative Layout Shift: Unmeasured → <0.1
- Implementation Time: ~4-5 hours

## Current Performance Status
```javascript
// next.config.js - Performance limitations
const nextConfig = {
  output: 'export',        // ✅ Good: Static export
  trailingSlash: true,     // ✅ Good: CDN compatible
  images: {
    unoptimized: true      // ❌ Problem: Disabled optimization
  }
}
```

**Asset Analysis:**
- `logo.png`: 279KB (unoptimized)
- `textlogo.png`: 83KB (unoptimized)
- No lazy loading for below-fold content
- No code splitting for dynamic components

## Optimization Strategy

### Phase 1: Image Optimization (2 hours)
**Problem**: 362KB of unoptimized images
**Solution**: Multi-format optimization with fallbacks

```typescript
// 1. Convert to modern formats
// logo.png (279KB) → logo.webp (~50KB) + logo.avif (~30KB)
// textlogo.png (83KB) → textlogo.webp (~20KB) + textlogo.avif (~15KB)

// 2. Implement responsive images
interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  priority?: boolean
}

// 3. Custom image component for static export
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src, alt, width, height, priority = false
}) => (
  <picture>
    <source srcSet={`${src}.avif`} type="image/avif" />
    <source srcSet={`${src}.webp`} type="image/webp" />
    <img
      src={`${src}.png`}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  </picture>
)
```

### Phase 2: Code Splitting & Lazy Loading (1.5 hours)
**Problem**: No dynamic imports for heavy components
**Solution**: Strategic code splitting

```typescript
// 1. Lazy load heavy components
const ContactForm = lazy(() => import('@/components/contact-form'))
const CurriculumTabs = lazy(() => import('@/components/curriculum-tabs'))

// 2. Dynamic imports for routes
// app/academy/[slug]/page.tsx - Split MDX components
const MDXComponents = {
  // Load heavy components only when needed
  InteractiveDemo: dynamic(() => import('@/components/interactive-demo')),
  VideoEmbed: dynamic(() => import('@/components/video-embed'))
}

// 3. Intersection Observer for below-fold content
const LazySection: React.FC<{children: ReactNode}> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.disconnect()
      }
    })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref}>
      {isVisible ? children : <div style={{ minHeight: '400px' }} />}
    </div>
  )
}
```

### Phase 3: Bundle Optimization (1 hour)
**Problem**: No bundle analysis or tree-shaking verification
**Solution**: Bundle analysis and optimization

```bash
# 1. Install bundle analyzer
npm install -D @next/bundle-analyzer

# 2. Add analysis scripts
# package.json
{
  "scripts": {
    "analyze": "ANALYZE=true npm run build",
    "build:analyze": "npm run build && npx @next/bundle-analyzer"
  }
}

# 3. Optimize imports
// Before: import { format, parseISO, formatDistanceToNow } from 'date-fns'
// After: import format from 'date-fns/format'
//        import parseISO from 'date-fns/parseISO'
```

### Phase 4: Critical Resource Hints (30 minutes)
**Problem**: No resource hints for critical assets
**Solution**: Preload/prefetch optimization

```typescript
// app/layout.tsx improvements
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/inter-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Preload critical images */}
        <link rel="preload" href="/logo.avif" as="image" />

        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />

        <OrganizationSchema />
        <ServiceSchema />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<LoadingSpinner />}>
              {children}
            </Suspense>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
```

## Implementation Phases

### Day 1: Image Pipeline Setup
1. **Asset Conversion** (60 min)
   - Convert PNG → WebP + AVIF using Sharp/Squoosh
   - Generate multiple sizes (1x, 2x, 3x)
   - Update public/ directory structure

2. **Component Implementation** (60 min)
   - Create `OptimizedImage` component
   - Replace all image usages
   - Test visual regression

### Day 2: Code Splitting Implementation
1. **Component Analysis** (30 min)
   - Identify heavy components for splitting
   - Map component dependency tree
   - Plan loading boundaries

2. **Lazy Loading Implementation** (90 min)
   - Implement dynamic imports
   - Add Suspense boundaries
   - Create loading states

### Day 3: Bundle Optimization & Monitoring
1. **Bundle Analysis** (30 min)
   - Run bundle analyzer
   - Identify optimization opportunities
   - Document current baseline

2. **Resource Hints** (30 min)
   - Add critical resource preloads
   - Implement DNS prefetching
   - Configure service worker (if needed)

## Performance Monitoring Setup

```typescript
// lib/performance.ts
export const reportWebVitals = (metric: Metric) => {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Web Vital:', metric)
  }

  // Send to analytics in production
  if (process.env.NODE_ENV === 'production') {
    // Example: Send to Google Analytics 4
    gtag('event', metric.name, {
      custom_parameter_1: metric.value,
      custom_parameter_2: metric.id,
      custom_parameter_3: metric.name
    })
  }
}

// app/layout.tsx
import { reportWebVitals } from '@/lib/performance'

export { reportWebVitals }
```

## Quality Gates
- [ ] Largest Contentful Paint <2.5s
- [ ] First Input Delay <100ms
- [ ] Cumulative Layout Shift <0.1
- [ ] Bundle size reduction ≥15%
- [ ] Image payload reduction ≥60%
- [ ] Lighthouse Performance Score ≥90

## Risks & Mitigation
- **Risk 1**: Static export limits Next.js Image optimization
  → **Mitigation**: Custom image component with modern formats
- **Risk 2**: Code splitting breaks functionality
  → **Mitigation**: Gradual implementation with fallback loading states
- **Risk 3**: Bundle analyzer shows unexpected large dependencies
  → **Mitigation**: Tree-shaking analysis and selective imports

## Success Criteria
- Image payload reduced from 362KB to <100KB
- Bundle size optimized without functionality loss
- Core Web Vitals in "Good" range
- No visual regression in components
- Performance monitoring integrated
- Static export compatibility maintained