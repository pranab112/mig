# MindIsGear Website Deployment Guide

This guide covers deploying the MindIsGear website to various hosting platforms with optimal performance and SEO.

## 🚀 Quick Deployment

### Prerequisites Checklist

- [ ] Node.js 18+ installed
- [ ] All dependencies installed (`npm install`)
- [ ] Build completes successfully (`npm run build`)
- [ ] No TypeScript or linting errors
- [ ] Environment variables configured (if needed)

### Build and Export

```bash
# Install dependencies
npm install

# Build the application
npm run build

# Export static files (recommended for most hosting)
npm run export
```

The `out/` directory contains your complete static website.

## 🌐 Hosting Platform Setup

### Vercel (Recommended)

**Why Vercel:**
- Zero-config deployment for Next.js
- Automatic optimizations (images, fonts, etc.)
- Global CDN with excellent performance
- Preview deployments for testing

**Deployment Steps:**

1. **Connect Repository**
   ```bash
   # Option 1: Vercel CLI
   npm i -g vercel
   vercel

   # Option 2: GitHub Integration
   # Connect your repo at vercel.com
   ```

2. **Configure Build Settings** (usually auto-detected)
   - Build Command: `npm run build`
   - Output Directory: `out`
   - Install Command: `npm install`

3. **Environment Variables** (if needed)
   ```bash
   NEXT_PUBLIC_SITE_URL=https://mindisgear.com
   ```

4. **Custom Domain**
   - Add your domain in Vercel dashboard
   - Update DNS records as instructed
   - SSL automatically provisioned

### Netlify

**Deployment Steps:**

1. **Site Configuration**
   - Build command: `npm run build && npm run export`
   - Publish directory: `out`
   - Node version: 18

2. **netlify.toml** (optional, add to project root)
   ```toml
   [build]
     command = "npm run build && npm run export"
     publish = "out"

   [build.environment]
     NODE_VERSION = "18"

   [[headers]]
     for = "/*"
     [headers.values]
       X-Frame-Options = "DENY"
       X-XSS-Protection = "1; mode=block"
       X-Content-Type-Options = "nosniff"

   [[redirects]]
     from = "/sitemap.xml"
     to = "/sitemap.xml"
     status = 200
   ```

### GitHub Pages

**Deployment Steps:**

1. **Create Workflow** (`.github/workflows/deploy.yml`)
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest

       steps:
         - name: Checkout
           uses: actions/checkout@v3

         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: '18'
             cache: 'npm'

         - name: Install dependencies
           run: npm install

         - name: Build and export
           run: |
             npm run build
             npm run export
             touch out/.nojekyll

         - name: Deploy
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./out
   ```

2. **Repository Settings**
   - Enable GitHub Pages
   - Source: Deploy from branch `gh-pages`

### Custom Server/VPS

**Requirements:**
- Node.js 18+
- PM2 or similar process manager
- Nginx or Apache (recommended)

**Setup Steps:**

1. **Server Setup**
   ```bash
   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs

   # Install PM2
   npm install -g pm2
   ```

2. **Deploy Application**
   ```bash
   # Clone repository
   git clone <your-repo-url> /var/www/mindisgear
   cd /var/www/mindisgear

   # Install and build
   npm install
   npm run build
   npm run export
   ```

3. **Nginx Configuration**
   ```nginx
   server {
       listen 80;
       server_name mindisgear.com www.mindisgear.com;
       root /var/www/mindisgear/out;
       index index.html;

       location / {
           try_files $uri $uri.html $uri/ =404;
       }

       # Gzip compression
       gzip on;
       gzip_types text/css application/javascript text/javascript application/json;

       # Security headers
       add_header X-Frame-Options DENY;
       add_header X-Content-Type-Options nosniff;
       add_header X-XSS-Protection "1; mode=block";

       # Cache static assets
       location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }
   }
   ```

## 🔒 Security Configuration

### Headers and SSL

**Required Security Headers:**
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Strict-Transport-Security: max-age=31536000; includeSubDomains
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'
```

**SSL Certificate:**
- Use Let's Encrypt for free SSL
- Most hosting platforms provide automatic SSL
- Verify HTTPS redirects work correctly

### Content Security Policy

Add to hosting platform headers:
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com;
```

## 📊 Performance Optimization

### Pre-Deployment Checklist

- [ ] **Lighthouse audit score 95+**
- [ ] **Core Web Vitals pass**
- [ ] **Images optimized and compressed**
- [ ] **Unused CSS removed**
- [ ] **JavaScript bundles minimized**
- [ ] **GZIP compression enabled**
- [ ] **CDN configured (if applicable)**

### Testing Performance

```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Test your deployed site
lighthouse https://mindisgear.com --output html --output-path lighthouse-report.html

# Check Core Web Vitals
lighthouse https://mindisgear.com --only-categories=performance
```

### Performance Monitoring

**Google PageSpeed Insights:**
- Test: https://pagespeed.web.dev/
- Target: 95+ score on mobile and desktop

**WebPageTest:**
- Test: https://www.webpagetest.org/
- Monitor loading waterfall and optimization opportunities

## 🔍 SEO Deployment

### Search Console Setup

1. **Verify Domain Ownership**
   - Add property to Google Search Console
   - Use DNS verification method

2. **Submit Sitemap**
   - URL: `https://mindisgear.com/sitemap.xml`
   - Monitor indexing status

3. **Monitor Performance**
   - Track click-through rates
   - Monitor keyword rankings
   - Check for crawl errors

### Analytics Setup

**Google Analytics 4:**
```javascript
// Add to environment variables
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**Structured Data Validation:**
- Test with Google Rich Results Test
- Verify Organization and Service schemas

## 🚀 Post-Deployment Checklist

### Functional Testing

- [ ] **All pages load correctly**
- [ ] **Navigation works on mobile and desktop**
- [ ] **Contact form submits (if connected to backend)**
- [ ] **Links to external resources work**
- [ ] **Blog posts and academy lessons display properly**
- [ ] **Search functionality works (if implemented)**

### SEO Validation

- [ ] **Sitemap accessible at `/sitemap.xml`**
- [ ] **Robots.txt accessible at `/robots.txt`**
- [ ] **Meta descriptions on all pages**
- [ ] **Open Graph images display in social shares**
- [ ] **Structured data validates without errors**

### Performance Validation

- [ ] **Lighthouse score 95+ across all metrics**
- [ ] **Page load time under 3 seconds**
- [ ] **Images load with proper optimization**
- [ ] **Fonts load without flash of unstyled text**
- [ ] **Mobile experience smooth and responsive**

## 🔄 Continuous Deployment

### GitHub Actions (Recommended)

```yaml
name: Build and Deploy

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm run lint

      - name: Build application
        run: npm run build

      - name: Export static files
        run: npm run export

      - name: Deploy to production
        if: github.ref == 'refs/heads/main'
        # Add your deployment step here
        run: echo "Deploy to production"
```

## 📝 Backup and Maintenance

### Content Backup

- **Git repository** contains all content and code
- **Content files** in `content/` directory are version controlled
- **Database backups** not needed (static site)

### Regular Maintenance

**Monthly:**
- Update dependencies (`npm update`)
- Security audit (`npm audit`)
- Performance testing
- Content review and updates

**Quarterly:**
- SEO audit and optimization
- Analytics review
- User experience improvements
- Accessibility testing

## 🆘 Troubleshooting

### Common Deployment Issues

**Build Failures:**
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

**404 Errors:**
- Check file paths in static export
- Verify routing configuration
- Ensure all pages have proper exports

**Performance Issues:**
- Optimize images before deployment
- Enable GZIP compression on server
- Configure CDN caching headers

### Emergency Procedures

**Rollback Deployment:**
- Revert to previous Git commit
- Redeploy from stable branch
- Update DNS if needed

**Content Updates:**
- Edit MDX files in `content/` directory
- Commit changes to Git
- Automatic deployment will update site

---

## 🎯 Go-Live Checklist

Final checklist before making the site live:

- [ ] **Domain configured and SSL active**
- [ ] **All content reviewed and approved**
- [ ] **Contact forms tested and working**
- [ ] **Analytics and tracking configured**
- [ ] **Social media links updated**
- [ ] **Search Console verified**
- [ ] **Performance tests passed**
- [ ] **Mobile experience verified**
- [ ] **Accessibility standards met**
- [ ] **Team trained on content updates**

🚀 **Ready to launch!** Your MindIsGear website is production-ready and optimized for performance, SEO, and user experience.