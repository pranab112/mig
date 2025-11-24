#!/bin/bash

# 🚀 Hostinger Deployment Script for MindIsGear Academy
# This script builds your website and prepares it for upload to Hostinger

echo "🔄 Starting deployment preparation..."

# Step 1: Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf .next out

# Step 2: Install dependencies
echo "📦 Installing dependencies..."
npm install

# Step 3: Build the application
echo "🏗️ Building application for production..."
npm run build

# Step 4: Verify build
if [ -d "out" ]; then
    echo "✅ Build successful! Files are ready in the 'out' directory."
    echo ""
    echo "📊 Build Summary:"
    echo "📁 Total files: $(find out -type f | wc -l | xargs)"
    echo "📁 Directory size: $(du -sh out | cut -f1)"
    echo ""
    echo "📋 Next Steps for Hostinger Deployment:"
    echo "1. Go to your Hostinger control panel (hpanel.hostinger.com)"
    echo "2. Open File Manager and navigate to public_html"
    echo "3. Delete all existing files in public_html (backup first if needed)"
    echo "4. Upload ALL contents of the 'out' directory to public_html"
    echo "5. Your website will be live at your domain!"
    echo ""
    echo "📁 Important files to upload:"
    ls -la out/ | head -10
    echo ""
    echo "🎉 Deployment package ready!"
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi