# Plan: Security Hardening

## Hypothesis
The AA.MIG project has critical security vulnerabilities that must be addressed immediately before production deployment. The primary risks are XSS attacks through unsanitized HTML content and dependency vulnerabilities that could lead to command injection.

## Expected Outcomes (定量的)
- XSS Vulnerability: ELIMINATED (100% content sanitization)
- Dependency Vulnerabilities: 3 HIGH → 0 CRITICAL/HIGH
- Security Score: 7/10 → 9.5/10
- Implementation Time: ~3-4 hours

## Priority Issues & Solutions

### P0 - CRITICAL (Fix Today)
1. **XSS Vulnerability in Blog Content**
   - Location: `app/blog/[slug]/page.tsx:109`
   - Current: `<div dangerouslySetInnerHTML={{ __html: post.content }} />`
   - Solution: Implement DOMPurify sanitization
   - Risk: Complete site compromise through malicious blog content

2. **Dependency Vulnerabilities**
   - Issue: glob package command injection (3 HIGH severity)
   - Solution: `npm audit fix` + verify compatibility
   - Risk: Build-time command injection in development

### P1 - HIGH (Fix This Week)
3. **Content Security Policy**
   - Current: No CSP headers
   - Solution: Implement strict CSP in next.config.js
   - Risk: Additional XSS attack vectors

4. **Input Validation**
   - Current: Contact form lacks server-side validation
   - Solution: Implement Zod validation schema
   - Risk: Form-based attacks

## Implementation Strategy

### Phase 1: Immediate XSS Protection (2 hours)
```bash
# Install DOMPurify
npm install dompurify @types/dompurify

# Replace dangerous HTML rendering
# Before: dangerouslySetInnerHTML={{ __html: post.content }}
# After: DOMPurify.sanitize(post.content)
```

### Phase 2: Dependency Security (30 minutes)
```bash
# Fix known vulnerabilities
npm audit fix

# Verify no breaking changes
npm run build
npm run lint
```

### Phase 3: Security Headers (1 hour)
```javascript
// next.config.js additions
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; script-src 'self' 'unsafe-eval'; style-src 'self' 'unsafe-inline';"
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  }
]
```

### Phase 4: Input Validation (1 hour)
```typescript
// Contact form validation schema
const contactFormSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  company: z.string().max(100).optional(),
  message: z.string().min(10).max(1000),
  projectType: z.enum(['workflow-automation', 'data-scraping', 'ai-agents', 'custom', 'consultation'])
})
```

## Risks & Mitigation
- **Risk 1**: DOMPurify breaks existing content styling
  → **Mitigation**: Configure allowlist for safe HTML tags/attributes
- **Risk 2**: npm audit fix introduces breaking changes
  → **Mitigation**: Test build + functionality after updates
- **Risk 3**: CSP headers break external resources
  → **Mitigation**: Start with report-only mode, then enforce

## Success Criteria
- [ ] Blog content renders safely without XSS risk
- [ ] npm audit shows 0 high/critical vulnerabilities
- [ ] Security headers return correctly in browser dev tools
- [ ] Contact form validates input server-side
- [ ] Build process completes successfully
- [ ] All existing functionality preserved