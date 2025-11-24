#!/bin/bash

# 🚀 AA.MIG Easy Deployment Script
# This script builds and prepares your site for Hostinger deployment

echo "🚀 Starting AA.MIG Deployment Process..."
echo "======================================"

# Step 1: Install dependencies
echo "📦 Installing dependencies..."
npm install

# Step 2: Build the project
echo "🔨 Building production site..."
npm run build

# Step 3: Create deployment package
echo "📁 Creating deployment package..."
rm -rf hostinger-deploy
mkdir -p hostinger-deploy

# Copy all built files to deployment folder
cp -r out/* hostinger-deploy/
cp .htaccess hostinger-deploy/ 2>/dev/null || echo "⚠️  .htaccess not found, skipping..."

# Step 4: Create a ZIP file for easy upload
echo "🗜️  Creating deployment.zip..."
cd hostinger-deploy
zip -r ../deployment.zip . -q
cd ..

# Step 5: Display deployment info
echo ""
echo "✅ Deployment package ready!"
echo "======================================"
echo "📦 Files prepared in: hostinger-deploy/"
echo "🗜️  ZIP file created: deployment.zip"
echo ""
echo "📋 Next Steps:"
echo "1. Go to Hostinger File Manager"
echo "2. Navigate to public_html"
echo "3. Upload deployment.zip"
echo "4. Extract the ZIP file"
echo "5. Delete the ZIP file after extraction"
echo ""
echo "🎉 Your site will be live immediately!"
echo "======================================"

# Optional: Open Finder to show the files
if [[ "$OSTYPE" == "darwin"* ]]; then
    open hostinger-deploy/
fi
