#!/bin/bash

# 🔄 AA.MIG Quick Update Script
# Use this for quick updates without full rebuild

echo "🔄 Quick Update for AA.MIG"
echo "=========================="

# Check if we need to rebuild
echo "What changed? (enter number)"
echo "1) Content only (blog, text, images)"
echo "2) Code changes (components, styles, features)"
echo "3) Full rebuild needed"
read -p "Choice (1-3): " choice

case $choice in
  1)
    echo "📝 Content update - Quick build..."
    npm run build
    ;;
  2)
    echo "🔨 Code changes - Full rebuild..."
    npm install
    npm run build
    ;;
  3)
    echo "🚀 Full deployment..."
    rm -rf node_modules out
    npm install
    npm run build
    ;;
  *)
    echo "❌ Invalid choice. Running standard build..."
    npm run build
    ;;
esac

# Create deployment package
echo "📦 Creating deployment package..."
rm -rf hostinger-deploy deployment.zip
mkdir -p hostinger-deploy
cp -r out/* hostinger-deploy/
cp .htaccess hostinger-deploy/ 2>/dev/null

# Create ZIP
cd hostinger-deploy
zip -r ../deployment.zip . -q
cd ..

echo ""
echo "✅ Update package ready!"
echo "📦 Upload: deployment.zip to Hostinger"
echo ""

# Auto-open folder on Mac
if [[ "$OSTYPE" == "darwin"* ]]; then
    open .
fi