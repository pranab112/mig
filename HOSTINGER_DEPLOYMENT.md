# 🚀 Hostinger Deployment Guide for MindIsGear Academy

This guide will help you deploy your Next.js Academy application to Hostinger hosting.

## ✅ Prerequisites

Your project is already configured for static export with:
- ✅ `output: 'export'` in `next.config.js`
- ✅ `trailingSlash: true` for proper routing
- ✅ `images: { unoptimized: true }` for static images
- ✅ Static export script in `package.json`

## 📋 Step-by-Step Deployment Process

### Step 1: Build Your Application for Production

```bash
# Navigate to your project directory
cd "/Users/apple/ofiice works/AA.MIG"

# Install dependencies (if not already done)
npm install

# Build the application for production
npm run build
```

This will create an `out/` directory with all static files ready for deployment.

### Step 2: Prepare Files for Upload

After running `npm run build`, you'll have an `out/` folder containing:
- `index.html` (your homepage)
- `academy/` folder with your course pages
- `_next/` folder with optimized assets
- All other static files

### Step 3: Access Hostinger Control Panel

1. **Log into Hostinger**: Go to [hpanel.hostinger.com](https://hpanel.hostinger.com)
2. **Select your hosting plan**: Choose the hosting account you want to deploy to
3. **Access File Manager**: Go to "Files" → "File Manager"

### Step 4: Upload Files to Hostinger

#### Option A: Using File Manager (Recommended for beginners)

1. **Navigate to public_html**:
   - Click on `public_html` folder (this is your website's root directory)

2. **Clear existing files** (if any):
   - Select all files in `public_html`
   - Delete them (make sure to backup if needed)

3. **Upload your built files**:
   - Click "Upload" button in File Manager
   - Drag and drop ALL contents from your `out/` folder
   - **Important**: Upload the CONTENTS of the `out/` folder, not the folder itself

4. **Verify upload**:
   - Your `public_html` should now contain:
     - `index.html`
     - `academy/` folder
     - `_next/` folder
     - Other static assets

#### Option B: Using FTP (Advanced users)

1. **Get FTP credentials** from Hostinger control panel
2. **Use FTP client** (FileZilla, WinSCP, etc.)
3. **Connect to your hosting account**
4. **Upload contents of `out/` folder** to `/public_html/`

### Step 5: Configure Domain and Access

1. **Domain Setup**:
   - If using a custom domain, make sure it's pointed to your Hostinger hosting
   - DNS changes can take 24-48 hours to propagate

2. **Test Your Website**:
   - Visit your domain (e.g., `https://yourdomain.com`)
   - Navigate to academy section: `https://yourdomain.com/academy/`
   - Test the curriculum page: `https://yourdomain.com/academy/fullstack-7-days/`

### Step 6: Verify Deployment

Check these important pages:
- ✅ Homepage loads correctly
- ✅ Academy page shows course information
- ✅ Full curriculum page displays with tabbed navigation
- ✅ All images and styles load properly
- ✅ Mobile responsiveness works

## 🔧 Troubleshooting Common Issues

### Issue 1: 404 Errors on Page Refresh
**Problem**: Direct URLs like `/academy/fullstack-7-days/` show 404 error

**Solution**: This is already handled by `trailingSlash: true` in your config, but if issues persist:
1. Check if all folders were uploaded correctly
2. Ensure the `academy/` folder contains the proper `index.html` files

### Issue 2: Missing Styles or Images
**Problem**: Website looks unstyled or images don't load

**Solutions**:
1. **Verify upload**: Ensure `_next/` folder was uploaded completely
2. **Check paths**: All asset paths should be relative (already configured)
3. **Clear cache**: Clear browser cache and try again

### Issue 3: JavaScript Not Working
**Problem**: Interactive features (tabs, buttons) don't work

**Solutions**:
1. **Check console**: Open browser dev tools for JavaScript errors
2. **Verify files**: Ensure all `.js` files in `_next/static/` were uploaded
3. **HTTPS**: Make sure you're accessing via HTTPS if SSL is enabled

### Issue 4: Slow Loading
**Problem**: Website loads slowly

**Solutions**:
1. **Optimize images**: Already configured with `unoptimized: true`
2. **Enable compression**: Check Hostinger's gzip compression settings
3. **Use CDN**: Consider Hostinger's CDN service

## 📁 File Structure After Deployment

Your `public_html` folder should look like this:
```
public_html/
├── index.html                 # Homepage
├── academy/
│   ├── index.html            # Academy main page
│   └── fullstack-7-days/
│       └── index.html        # Course curriculum page
├── _next/
│   ├── static/
│   │   ├── css/             # Stylesheets
│   │   ├── js/              # JavaScript files
│   │   └── media/           # Optimized images
│   └── ...
├── 404.html                  # Custom 404 page
└── favicon.ico              # Website icon
```

## 🚀 Automation Tips for Future Updates

### Quick Update Script
Create a script for easy updates:

```bash
#!/bin/bash
# update-website.sh

echo "🔄 Building website..."
npm run build

echo "📦 Creating deployment package..."
cd out
zip -r ../website-update.zip .
cd ..

echo "✅ Ready for upload! Upload website-update.zip to Hostinger and extract in public_html"
```

### Git Integration
Consider setting up a Git repository:
1. **Initialize Git**: `git init` in your project
2. **Add remote**: Connect to GitHub/GitLab
3. **Create workflow**: Use GitHub Actions for automated deployments

## 📞 Support Resources

- **Hostinger Help**: [support.hostinger.com](https://support.hostinger.com)
- **File Manager Guide**: Hostinger's File Manager documentation
- **Next.js Static Export**: [Next.js documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

## ✨ Post-Deployment Checklist

After successful deployment:
- [ ] Test all pages and navigation
- [ ] Verify contact forms work (if any)
- [ ] Check mobile responsiveness
- [ ] Test loading speed
- [ ] Set up Google Analytics (if needed)
- [ ] Configure SEO settings
- [ ] Enable SSL certificate in Hostinger panel
- [ ] Set up domain redirects (www vs non-www)

---

**Need help?** If you encounter any issues during deployment, the most common solution is ensuring all files from the `out/` directory are properly uploaded to the `public_html` folder in Hostinger.