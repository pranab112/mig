# 🚀 Hostinger Git Deployment Guide for AA.MIG

## Prerequisites

1. **Hostinger Account** with hosting plan that supports:
   - Git deployment (Business/Premium plans)
   - Node.js hosting
   - Custom domains

2. **GitHub Account** (for hosting the repository)

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and create a new repository
2. Name it `aa-mig-website` (or your preferred name)
3. Make it **Public** (recommended for easier deployment)
4. Don't initialize with README (we already have one)

## Step 2: Push Code to GitHub

```bash
# Add GitHub as origin remote
git remote add origin https://github.com/YOUR_USERNAME/aa-mig-website.git

# Push to GitHub
git push -u origin main
```

## Step 3: Hostinger Deployment Setup

### A. Access Hostinger Panel
1. Log into your Hostinger account
2. Go to **Hosting** → **Manage**
3. Navigate to **Git** section in the control panel

### B. Connect Repository
1. Click **Create New Repository**
2. Enter your GitHub repository URL:
   ```
   https://github.com/YOUR_USERNAME/aa-mig-website.git
   ```
3. Select **main** branch
4. Set deployment path: `/public_html` (for main domain) or `/public_html/subdomain`

### C. Configure Build Settings
1. **Build Command**: `npm run build`
2. **Install Command**: `npm install`
3. **Output Directory**: `out` (Next.js static export folder)
4. **Node.js Version**: 18.x or higher

## Step 4: Hostinger-Specific Configuration

### A. Create .htaccess for Clean URLs
Create `/public_html/.htaccess`:

```apache
RewriteEngine On

# Handle trailing slashes
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^([^/]+)/$ $1.html [L]

# Handle clean URLs without .html
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^([^/]+)$ $1.html [L]

# Security headers
Header always set X-Content-Type-Options nosniff
Header always set X-Frame-Options DENY
Header always set Referrer-Policy "origin-when-cross-origin"

# Cache static assets
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
</IfModule>
```

### B. Environment Variables (if needed)
1. In Hostinger panel, go to **Advanced** → **Environment Variables**
2. Add any required variables (currently none needed for this project)

## Step 5: Deploy

1. **Trigger Deployment**:
   - In Hostinger Git panel, click **Deploy Now**
   - Or push changes to GitHub (auto-deploy if configured)

2. **Monitor Deployment**:
   - Check build logs in Hostinger panel
   - Ensure no errors during `npm install` and `npm run build`

## Step 6: Verification

### Test These URLs:
```
https://yourdomain.com/                    # Home page
https://yourdomain.com/products/           # Products
https://yourdomain.com/academy/            # Academy
https://yourdomain.com/blog/               # Blog
https://yourdomain.com/academy/fullstack-7-days/  # Curriculum (the fixed one!)
https://yourdomain.com/robots.txt          # SEO
https://yourdomain.com/sitemap.xml         # SEO
```

### Expected Results:
- ✅ All pages load with 200 status
- ✅ "View Full Curriculum" works without errors
- ✅ No React JSX runtime errors
- ✅ Responsive design on mobile/desktop
- ✅ Fast loading (static files)

## Step 7: Custom Domain (Optional)

1. **Update DNS**:
   - Point your domain to Hostinger servers
   - Add A record or CNAME as provided by Hostinger

2. **SSL Certificate**:
   - Enable free SSL in Hostinger panel
   - Force HTTPS redirects

## Maintenance Commands

### Update Deployment:
```bash
# Make changes to your code
git add .
git commit -m "Update: description of changes"
git push origin main

# Hostinger will auto-deploy (if configured) or manually trigger in panel
```

### Rollback (if needed):
1. Go to Hostinger Git panel
2. Select previous commit hash
3. Click "Deploy"

## Troubleshooting

### Build Fails?
- Check Node.js version (needs 18+)
- Verify all dependencies in package.json
- Check build logs for specific errors

### 404 Errors?
- Verify .htaccess file is properly uploaded
- Check file permissions (should be 644)
- Ensure trailing slashes are handled

### Performance Issues?
- Enable Hostinger CDN
- Optimize images (already configured)
- Check cache headers

## Success Indicators

✅ **Build Status**: Green in Hostinger Git panel
✅ **Page Speed**: <3 seconds load time
✅ **SEO**: sitemap.xml and robots.txt accessible
✅ **Security**: Headers properly configured
✅ **Functionality**: All buttons and links work
✅ **Mobile**: Responsive on all devices

Your AA.MIG website should now be live and fully functional on Hostinger! 🎉

## Support

If you encounter issues:
1. Check Hostinger knowledge base
2. Contact Hostinger support (24/7 chat)
3. Review build logs for specific error messages

---

**Generated for**: AA.MIG Project v1.0
**Last Updated**: November 2024
**Compatible**: Hostinger Business/Premium plans