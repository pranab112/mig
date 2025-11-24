# 📂 Hostinger Manual Deployment Guide

## 🎯 **This Method Works on ALL Hostinger Plans**

Since you don't see "Configure Build Settings", we'll use the direct upload method.

## Step 1: Build Locally ✅ **ALREADY DONE**

Your project has already been built successfully with:
- ✅ Production build completed
- ✅ Static files generated in `/out` folder
- ✅ All optimizations applied

## Step 2: Access File Manager

1. **Log into Hostinger**
2. Go to **Hosting** → **Manage**
3. Look for **File Manager** (should be visible on all plans)
4. Click **File Manager**

## Step 3: Navigate to Website Root

1. In File Manager, go to: **public_html**
   - This is where your website files go
   - For subdomain: go to **public_html/subdomain_name**

## Step 4: Upload Your Website

### Option A: Upload Built Files (Recommended)

1. **On your computer**, navigate to:
   ```
   /Users/apple/ofiice works/AA.MIG/out/
   ```

2. **Select ALL files** in the `out` folder:
   - All `.html` files
   - `_next` folder
   - `favicon.ico`
   - Any other files

3. **Upload to Hostinger**:
   - In File Manager, click **Upload**
   - Drag and drop all files from `out` folder
   - Wait for upload to complete

### Option B: ZIP Upload (Faster)

1. **Create ZIP file**:
   - On Mac: Go to `out` folder, select all files, right-click → "Compress"
   - Name it: `website.zip`

2. **Upload ZIP**:
   - In Hostinger File Manager, upload `website.zip`
   - Right-click the ZIP → **Extract**
   - Delete the ZIP file after extraction

## Step 5: Set Up Clean URLs

Create `.htaccess` file in `public_html`:

```apache
RewriteEngine On

# Handle Next.js trailing slashes
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} !(.*)/$
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI}/ [L,R=301]

# Handle clean URLs
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^([^/]+)/$ $1.html [L]

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
</IfModule>
```

## Step 6: Test Your Website

Visit your domain:
- `https://yourdomain.com/` - Home page
- `https://yourdomain.com/products/` - Products
- `https://yourdomain.com/academy/` - Academy
- `https://yourdomain.com/academy/fullstack-7-days/` - Curriculum (fixed!)

## 🔧 **If You Need Node.js Support**

Some Hostinger plans support Node.js. If you see:
- **Node.js** section in control panel
- **App Manager**
- **Node.js Selector**

Then you can try this advanced method:

### Advanced: Node.js Deployment

1. **Enable Node.js** in Hostinger panel
2. **Clone repository**:
   ```bash
   git clone https://github.com/pranab112/mig.git
   cd mig
   npm install
   npm run build
   ```
3. **Point to `out` folder** in hosting settings

## ⚡ **Quick Start Summary**

1. ✅ Download files from: `/Users/apple/ofiice works/AA.MIG/out/`
2. ✅ Upload to: **Hostinger File Manager** → **public_html**
3. ✅ Create `.htaccess` file
4. ✅ Test website

**Your website will be live immediately after upload! 🎉**

## 🆘 **Still Need Help?**

Tell me what you see in your Hostinger panel:
- What sections/options are available?
- What's your hosting plan name?
- Any error messages?

I'll provide specific instructions for your setup!