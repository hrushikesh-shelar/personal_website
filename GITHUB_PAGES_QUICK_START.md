# 🚀 GitHub Pages Quick Start Guide

## ⚡ Super Quick Setup (5 minutes)

### 1. Create GitHub Repository
- Go to [github.com](https://github.com)
- Click "New repository"
- Name: `yourusername.github.io` (replace with your GitHub username)
- Make it **Public**
- Click "Create repository"

### 2. Upload Your Files
- Click "Add file" → "Upload files"
- Drag and drop ALL files from your portfolio folder
- Commit message: "Initial portfolio upload"
- Click "Commit changes"

### 3. Enable GitHub Pages
- Go to repository **Settings** → **Pages**
- Source: "Deploy from a branch"
- Branch: "main"
- Folder: "/ (root)"
- Click "Save"

### 4. Wait & Test
- Wait 2-5 minutes
- Visit: `https://yourusername.github.io`
- Your portfolio is live! 🎉

## 🌐 Add Custom Domain (Optional)

### 1. Configure GitHub
- Repository Settings → Pages → Custom domain
- Enter: `www.hrushikeshshelar.com`
- Click "Save"

### 2. Configure DNS (In your domain provider)
```
Type: CNAME
Name: www
Target: yourusername.github.io

Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

**For your domain `hrushikeshshelar.com`:**
- The CNAME file is already configured with `www.hrushikeshshelar.com`
- Just add the DNS records above in your domain provider's control panel

### 3. Wait & Enable HTTPS
- Wait 30-60 minutes for DNS propagation
- Go back to GitHub Pages settings
- Check "Enforce HTTPS"

## 📧 Contact Form Setup

Since GitHub Pages is static, you need a third-party service:

### Formspree (Easiest)
1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update form action in `index.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

## 🔄 Making Updates

1. Edit files in GitHub web editor OR
2. Use Git commands:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```
3. Changes go live automatically in 2-5 minutes

## 🎯 That's It!

Your portfolio is now:
- ✅ Hosted for FREE
- ✅ Available worldwide
- ✅ HTTPS secured
- ✅ Custom domain ready
- ✅ Automatically updated

**Total cost: $0** (except domain registration if you use a custom domain)

---

**Need help?** Check the full [GITHUB_PAGES_DEPLOYMENT.md](GITHUB_PAGES_DEPLOYMENT.md) guide for detailed instructions and troubleshooting.
