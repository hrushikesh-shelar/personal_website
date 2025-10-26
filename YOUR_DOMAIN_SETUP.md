# 🌐 Your Domain Setup: hrushikeshshelar.com

## ✅ Domain Configuration Complete!

Your portfolio website is now configured for your domain: **hrushikeshshelar.com**

### 📁 Files Updated:
- ✅ `CNAME` → `www.hrushikeshshelar.com`
- ✅ `sitemap.xml` → All URLs updated to your domain
- ✅ `robots.txt` → Sitemap URL updated
- ✅ `_config.yml` → GitHub Pages config updated
- ✅ `index.html` → Meta tags and structured data updated

## 🚀 Next Steps for Deployment:

### 1. Create GitHub Repository
- Repository name: `yourusername.github.io` (replace with your GitHub username)
- Make it **Public**
- Upload all files

### 2. Enable GitHub Pages
- Settings → Pages → Deploy from main branch
- Your site will be live at: `https://yourusername.github.io`

### 3. Connect Your Domain
- In GitHub Pages settings, add custom domain: `www.hrushikeshshelar.com`
- GitHub will automatically create the CNAME file

### 4. Configure DNS (In your domain provider)
Add these DNS records:

```
Type: CNAME
Name: www
Target: yourusername.github.io
TTL: 3600

Type: A
Name: @
Value: 185.199.108.153
TTL: 3600

Type: A
Name: @
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @
Value: 185.199.111.153
TTL: 3600
```

### 5. Wait and Enable HTTPS
- Wait 30-60 minutes for DNS propagation
- Go back to GitHub Pages settings
- Check "Enforce HTTPS"

## 🎯 Final Result:
- **GitHub Pages URL:** `https://yourusername.github.io`
- **Custom Domain:** `https://www.hrushikeshshelar.com`
- **Root Domain:** `https://hrushikeshshelar.com` (redirects to www)

## 📧 Contact Form Setup:
Since GitHub Pages is static, you'll need a third-party service:

### Formspree (Recommended)
1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update the form action in `index.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

## 🔄 Making Updates:
1. Edit files in GitHub web editor OR
2. Use Git commands:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```
3. Changes go live automatically in 2-5 minutes

## 🎉 You're All Set!
Your portfolio will be:
- ✅ Hosted for FREE on GitHub Pages
- ✅ Available at your custom domain
- ✅ HTTPS secured
- ✅ Globally accessible
- ✅ Automatically updated

**Total cost: $0** (except your domain registration)

---

**Need help?** Check the detailed guides:
- [GITHUB_PAGES_QUICK_START.md](GITHUB_PAGES_QUICK_START.md) - 5-minute setup
- [GITHUB_PAGES_DEPLOYMENT.md](GITHUB_PAGES_DEPLOYMENT.md) - Complete guide
