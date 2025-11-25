# 🚀 Hostinger Deployment Guide for MindIsGear

## Quick Deploy (30 seconds)

```bash
# Run this single command to create deployment package
./hostinger-deploy.sh
```

Then upload `deployment.zip` to Hostinger and extract it.

---

## 📋 Table of Contents
1. [Initial Setup](#initial-setup)
2. [Deployment Process](#deployment-process)
3. [Updating Content](#updating-content)
4. [Troubleshooting](#troubleshooting)
5. [Automation Tips](#automation-tips)

---

## Initial Setup

### Prerequisites
- Hostinger hosting account with domain configured
- Node.js 18+ installed locally
- Access to Hostinger File Manager or FTP

### First-Time Configuration
1. Ensure your domain is pointing to Hostinger nameservers
2. SSL certificate should be enabled (usually automatic)
3. Your website files go in `public_html` directory

---

## Deployment Process

### Method 1: Using Automated Script (Recommended)

```bash
# 1. Make script executable (first time only)
chmod +x hostinger-deploy.sh

# 2. Run deployment script
./hostinger-deploy.sh

# 3. Upload to Hostinger
# The script will create deployment.zip
```

### Method 2: Manual Deployment

```bash
# 1. Install dependencies
npm install

# 2. Build the project
npm run build

# 3. Export static files
npm run export

# 4. Create deployment package
cd out
zip -r ../deployment.zip .
cd ..
```

### Uploading to Hostinger

1. **Log in to Hostinger Control Panel**
   - Go to hPanel (https://hpanel.hostinger.com)
   - Select your domain

2. **Access File Manager**
   - Navigate to Files → File Manager
   - Open `public_html` directory

3. **Clean Previous Deployment** (Optional but recommended)
   - Select all files in public_html
   - Click Delete (or backup first)

4. **Upload New Package**
   - Click "Upload Files" button
   - Select `deployment.zip`
   - Wait for upload to complete

5. **Extract Files**
   - Right-click on `deployment.zip`
   - Select "Extract"
   - Choose `public_html` as destination
   - Click "Extract"

6. **Clean Up**
   - Delete `deployment.zip` after extraction
   - Verify `.htaccess` file exists

7. **Verify Deployment**
   - Visit https://mindisgear.com
   - Check all pages load correctly

---

## Updating Content

### Quick Content Updates

For content changes (MDX files, text updates):

```bash
# 1. Make your changes in content/ directory
# Edit MDX files as needed

# 2. Run deployment script
./hostinger-deploy.sh

# 3. Upload new deployment.zip to Hostinger
```

### Component Updates

For React component or style changes:

```bash
# 1. Test locally first
npm run dev
# Make sure everything works

# 2. Build and deploy
./hostinger-deploy.sh

# 3. Upload to Hostinger
```

---

## Important Files

### `.htaccess` Configuration
The deployment script automatically creates `.htaccess` with:
- HTTPS enforcement
- URL rewriting for Next.js routes
- Security headers
- Caching rules
- Compression settings

### Directory Structure on Hostinger
```
public_html/
├── index.html
├── .htaccess
├── 404.html
├── _next/
│   ├── static/
│   └── data/
├── academy/
├── about/
├── contact/
└── [other pages]/
```

---

## Troubleshooting

### Common Issues and Solutions

#### 1. 404 Errors on Routes
**Problem**: Pages show 404 when accessed directly
**Solution**: Ensure `.htaccess` file exists and has proper rewrite rules

#### 2. Styles Not Loading
**Problem**: CSS not applying
**Solution**: Check that `_next/static` directory was uploaded completely

#### 3. Images Not Showing
**Problem**: Images return 404
**Solution**: Verify images are in `public/` directory and paths are correct

#### 4. Build Fails Locally
**Problem**: `npm run build` shows errors
**Solution**:
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

#### 5. Large File Upload Issues
**Problem**: Deployment.zip too large for Hostinger uploader
**Solution**: Use FTP client like FileZilla instead:
```
Host: Your domain or IP
Username: Your Hostinger username
Password: Your Hostinger password
Port: 21
```

---

## Automation Tips

### Create Deployment Alias
Add to your `~/.zshrc` or `~/.bashrc`:
```bash
alias deploy-mig="cd '/Users/apple/ofiice works/AA.MIG' && ./hostinger-deploy.sh"
```

### Version Control for Deployments
The script automatically creates backups in `backups/` directory with timestamps.

### Quick Rollback
Keep previous deployment packages:
```bash
# List all backups
ls -la backups/

# To rollback, upload a previous backup
# Example: backups/deployment_20241125_143022.zip
```

---

## Performance Optimization

### Before Deployment
1. **Optimize Images**
   ```bash
   # Install image optimization tool
   npm install -g imagemin-cli

   # Optimize images
   imagemin public/images/* --out-dir=public/images
   ```

2. **Check Bundle Size**
   ```bash
   # Analyze bundle
   npm run analyze
   ```

### After Deployment
1. Test page speed at https://pagespeed.web.dev
2. Check mobile responsiveness
3. Verify all forms and interactions work

---

## Security Checklist

- [x] HTTPS is enforced via .htaccess
- [x] Security headers are configured
- [x] No sensitive data in repository
- [x] API keys are in environment variables
- [x] File permissions are correct on server

---

## Quick Commands Reference

```bash
# Build and create deployment
./hostinger-deploy.sh

# Just build without deployment
npm run build && npm run export

# Test locally before deployment
npm run dev

# Clean everything and start fresh
rm -rf .next out node_modules
npm install
./hostinger-deploy.sh
```

---

## Support

For deployment issues:
1. Check Hostinger's error logs in hPanel
2. Verify all files uploaded correctly
3. Ensure domain DNS is properly configured
4. Contact Hostinger support if server-related

---

## Next Steps

After successful deployment:
1. Set up Google Analytics
2. Submit sitemap to Google Search Console
3. Configure email forwarding for contact forms
4. Set up regular backups in Hostinger
5. Monitor site performance

---

**Last Updated**: November 25, 2024
**Deployment Script Version**: 1.0.0