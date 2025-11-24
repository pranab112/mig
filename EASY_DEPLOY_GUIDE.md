# 🚀 Easy Deployment Guide for AA.MIG

## 📋 One-Time Setup (Do this first)

### 1. Initial Deployment
```bash
# Run this command:
npm run deploy

# This will:
# ✅ Build your website
# ✅ Create deployment.zip
# ✅ Open the folder with your files
```

### 2. Upload to Hostinger
1. Go to **Hostinger → File Manager → public_html**
2. Upload `deployment.zip`
3. Right-click → **Extract**
4. Delete the ZIP file
5. ✅ Your site is live!

---

## 🔄 Future Updates (Super Easy!)

### Method 1: Quick Command
```bash
# For any update:
npm run deploy

# Then upload deployment.zip to Hostinger
```

### Method 2: Smart Update
```bash
# Run this for intelligent updates:
./update.sh

# It will ask what changed:
# 1 = Text/content only (fast)
# 2 = Code changes (medium)
# 3 = Full rebuild (complete)
```

### Method 3: Auto GitHub Deploy
```bash
# Just push your changes:
git add .
git commit -m "Update: your changes"
git push

# Then:
# 1. Go to GitHub → Actions tab
# 2. Download deployment.zip
# 3. Upload to Hostinger
```

---

## 🎯 Quick Reference Commands

| What You Want | Command |
|--------------|---------|
| Deploy first time | `npm run deploy` |
| Quick update | `./update.sh` |
| Test locally | `npm run dev` |
| Build only | `npm run build` |
| Full deploy | `npm run quick-deploy` |

---

## 📁 File Structure on Hostinger

```
public_html/
├── index.html          (home page)
├── products.html       (products)
├── academy.html        (academy)
├── blog.html          (blog)
├── _next/             (all assets)
├── favicon.ico        (site icon)
├── robots.txt         (SEO)
├── sitemap.xml        (SEO)
└── .htaccess          (routing)
```

---

## ⚡ Super Quick Update Steps

1. **Make your changes** in the code
2. **Run:** `npm run deploy`
3. **Upload:** `deployment.zip` to Hostinger
4. **Extract** and delete ZIP
5. **Done!** Site updated ✅

---

## 🆘 Troubleshooting

### Site not updating?
- Clear browser cache (Cmd+Shift+R on Mac)
- Check all files extracted properly
- Verify .htaccess is present

### 404 errors?
- Make sure .htaccess uploaded
- Check file permissions (644)

### Build errors?
```bash
# Clean install:
rm -rf node_modules out
npm install
npm run build
```

---

## 💡 Pro Tips

1. **Test before deploying:**
   ```bash
   npm run dev
   # Check at http://localhost:3000
   ```

2. **Keep backups:**
   - Save previous `deployment.zip` files
   - Name them: `deployment-2024-11-24.zip`

3. **Fast content updates:**
   - For blog posts or text: use `./update.sh` → choose option 1

4. **Automatic deploys:**
   - Every push to GitHub creates a deployment package
   - Download from GitHub Actions → Artifacts

---

## 📞 Need Help?

1. **Check build logs:** Look for errors in terminal
2. **Hostinger support:** 24/7 chat available
3. **Test locally first:** `npm run dev`

---

**That's it! Deployment is now as easy as running one command!** 🎉