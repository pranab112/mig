# Plan: Code Quality Improvements

## Hypothesis
The AA.MIG project has solid foundations but suffers from type safety issues and incomplete features that reduce maintainability and developer confidence. Addressing these will improve long-term codebase health and reduce bugs.

## Expected Outcomes (定量的)
- Type Safety: 90% → 98% (eliminate `any` types)
- Contact Form: Non-functional → Fully implemented
- Test Coverage: 0% → 60%+ critical path coverage
- ESLint Warnings: 0 → 0 (maintain clean state)
- Implementation Time: ~6-8 hours

## Priority Issues & Solutions

### P1 - Type Safety Improvements (3 hours)
**Current Issues:**
- 10+ `any` type usages in MDX components
- Untyped props in academy page components
- Generic Record<string, any> in structured data

**Target Files:**
```typescript
// app/academy/[slug]/page.tsx
h1: ({ children }: any) => // 8 occurrences
// components/structured-data.tsx
data: Record<string, any>
// components/curriculum-tabs.tsx
overview: any, curriculum: any, outcomes: any // 5 occurrences
```

**Solutions:**
```typescript
// Create proper MDX component interfaces
interface MDXComponentProps {
  children: React.ReactNode
}

interface StructuredDataProps {
  data: {
    "@context": string
    "@type": string
    name: string
    url?: string
    description?: string
    // ... specific schema properties
  }
}

interface CurriculumContent {
  overview: {
    title: string
    description: string
    duration: string
  }
  curriculum: Array<{
    module: string
    topics: string[]
    duration: string
  }>
  // ... proper typing for all sections
}
```

### P1 - Contact Form Implementation (2-3 hours)
**Current State:**
- Form UI exists but TODO placeholder for submission
- No backend integration
- No validation beyond HTML5

**Implementation Plan:**
```typescript
// 1. Server Action for form processing
// app/contact/actions.ts
export async function submitContactForm(formData: ContactFormData) {
  // Validate with Zod
  // Send email via Resend/SendGrid
  // Store in database (optional)
  // Return success/error response
}

// 2. Client-side integration
// Use React Server Actions or API route
// Add loading states and error handling
// Success confirmation flow
```

### P2 - Testing Infrastructure (2-3 hours)
**Current State:** No tests exist

**Implementation Strategy:**
```bash
# Install testing dependencies
npm install -D vitest @testing-library/react jsdom

# Priority test coverage:
1. Contact form validation
2. MDX component rendering
3. Blog post content processing
4. Security-related functions (DOMPurify)
5. API routes (when implemented)
```

## Implementation Phases

### Phase 1: Type Safety Foundation (Day 1)
1. **Create Type Definitions** (45 min)
   - Create `types/index.ts` with comprehensive interfaces
   - Define MDX component prop types
   - Create structured data schema types

2. **Replace Any Types** (90 min)
   - Update `app/academy/[slug]/page.tsx` MDX components
   - Fix `components/structured-data.tsx` typing
   - Update `components/curriculum-tabs.tsx` props

3. **Validation** (15 min)
   - Run `npm run build` - should complete with no type errors
   - Verify functionality unchanged

### Phase 2: Contact Form Backend (Day 1-2)
1. **Server Action Implementation** (60 min)
   - Create form processing server action
   - Add Zod validation schema
   - Email sending integration (Resend recommended)

2. **Client Integration** (45 min)
   - Replace TODO with actual form submission
   - Add loading/success/error states
   - Form reset after successful submission

3. **Testing & Validation** (30 min)
   - Test form submission end-to-end
   - Verify email delivery (test mode)
   - Error handling validation

### Phase 3: Testing Infrastructure (Day 2-3)
1. **Setup Testing Environment** (30 min)
   - Configure Vitest with React Testing Library
   - Setup jsdom for DOM testing
   - Create test utilities and mocks

2. **Write Critical Tests** (90 min)
   - Contact form validation tests
   - MDX component rendering tests
   - Security function tests (DOMPurify integration)

3. **CI Integration** (30 min)
   - Add test command to package.json
   - Update build process to include tests

## Quality Gates
- [ ] TypeScript strict mode passes with no `any` types
- [ ] Contact form successfully sends test emails
- [ ] Test coverage ≥60% for new/critical code
- [ ] All existing functionality preserved
- [ ] Build time remains <2 minutes
- [ ] Bundle size increase <5KB

## Risks & Mitigation
- **Risk 1**: Type changes break existing MDX content
  → **Mitigation**: Gradual migration, test each component individually
- **Risk 2**: Contact form backend requires infrastructure setup
  → **Mitigation**: Use serverless solutions (Resend + Vercel Functions)
- **Risk 3**: Testing setup conflicts with Next.js build
  → **Mitigation**: Use Vitest (Vite-compatible) instead of Jest

## Success Criteria
- Zero TypeScript `any` types in application code
- Functional contact form with email delivery
- Comprehensive test suite for critical functionality
- Maintained build performance and bundle size
- Documentation updated for new features