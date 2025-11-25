#!/bin/bash

# Hostinger Deployment Script for MindIsGear
# This script automates the deployment process to Hostinger

echo "🚀 Starting Hostinger Deployment Process..."

# Configuration
PROJECT_NAME="mindisgear"
BUILD_DIR="out"
DEPLOY_DIR="hostinger-deploy"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✓${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

# Step 1: Clean previous builds
print_status "Cleaning previous builds..."
rm -rf $BUILD_DIR
rm -rf $DEPLOY_DIR
rm -f deployment.zip

# Step 2: Install dependencies
print_status "Installing dependencies..."
npm install --quiet

# Step 3: Build the project
print_status "Building Next.js project..."
npm run build

if [ $? -ne 0 ]; then
    print_error "Build failed! Please fix errors and try again."
    exit 1
fi

# Step 4: Export static files
print_status "Exporting static files..."
npm run export

if [ $? -ne 0 ]; then
    print_error "Export failed! Please fix errors and try again."
    exit 1
fi

# Step 5: Prepare deployment directory
print_status "Preparing deployment directory..."
mkdir -p $DEPLOY_DIR

# Copy all files from out directory
cp -r $BUILD_DIR/* $DEPLOY_DIR/

# Step 6: Create/Update .htaccess for proper routing
print_status "Creating .htaccess file..."
cat > $DEPLOY_DIR/.htaccess << 'EOF'
RewriteEngine On

# Force HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Handle Next.js static export URLs
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} !\.html$
RewriteRule ^([^/]+)/?$ $1.html [L]

# Handle nested routes
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^([^/]+)/([^/]+)/?$ $1/$2.html [L]

# Security headers
Header always set X-Content-Type-Options "nosniff"
Header always set X-Frame-Options "DENY"
Header always set X-XSS-Protection "1; mode=block"
Header always set Referrer-Policy "strict-origin-when-cross-origin"

# Cache control for static assets
<FilesMatch "\.(jpg|jpeg|png|gif|ico|css|js|woff|woff2|ttf|eot|svg)$">
    Header set Cache-Control "max-age=31536000, public"
</FilesMatch>

# Compress text files
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>
EOF

# Step 7: Create deployment zip
print_status "Creating deployment package..."
cd $DEPLOY_DIR
zip -r ../deployment.zip . -q
cd ..

# Step 8: Create backup
print_status "Creating backup..."
mkdir -p backups
cp deployment.zip "backups/deployment_${TIMESTAMP}.zip"

# Step 9: Display deployment instructions
echo ""
echo "=========================================="
echo "  DEPLOYMENT PACKAGE CREATED SUCCESSFULLY  "
echo "=========================================="
echo ""
print_status "Deployment package: deployment.zip"
print_status "Backup created: backups/deployment_${TIMESTAMP}.zip"
echo ""
echo "📋 HOSTINGER DEPLOYMENT STEPS:"
echo ""
echo "1. Log in to Hostinger Control Panel"
echo "2. Go to File Manager → public_html"
echo "3. Delete all existing files (or backup first)"
echo "4. Upload deployment.zip"
echo "5. Extract the zip file"
echo "6. Delete the deployment.zip file after extraction"
echo ""
echo "🔗 Your site will be live at: https://mindisgear.com"
echo ""

# Optional: Show file size
FILE_SIZE=$(du -h deployment.zip | cut -f1)
print_status "Package size: $FILE_SIZE"

echo ""
echo "✅ Deployment package ready for upload!"