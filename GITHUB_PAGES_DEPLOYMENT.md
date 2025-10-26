# 🚀 GitHub Pages Deployment Guide

This guide will walk you through deploying your portfolio website to GitHub Pages for free hosting with your custom domain.

## 🎯 Why GitHub Pages?

- ✅ **Free hosting** - No monthly fees
- ✅ **Custom domain support** - Use your own .com domain
- ✅ **HTTPS included** - Automatic SSL certificates
- ✅ **Global CDN** - Fast loading worldwide
- ✅ **Automatic deployments** - Push code, site updates automatically
- ✅ **Version control** - Track all changes with Git

## 📋 Prerequisites

- GitHub account (free)
- Your portfolio website files
- Custom domain (optional but recommended)

## 🚀 Step-by-Step Deployment

### Step 1: Create GitHub Repository

1. **Go to GitHub:**
   - Visit [github.com](https://github.com)
   - Sign up or log in to your account

2. **Create New Repository:**
   - Click the "+" icon → "New repository"
   - Repository name: `yourusername.github.io`
     - Replace `yourusername` with your actual GitHub username
     - This naming convention is important for GitHub Pages
   - Description: "Personal Portfolio Website"
   - Keep it **Public** (required for free GitHub Pages)
   - ✅ Check "Add a README file"
   - Click "Create repository"

### Step 2: Upload Your Website Files

#### Option A: Using GitHub Web Interface (Easiest)

1. **Upload Files:**
   - In your new repository, click "Add file" → "Upload files"
   - Drag and drop all your website files:
     ```
     index.html
     css/
     js/
     404.html
     CNAME
     _config.yml
     robots.txt
     sitemap.xml
     ```
   - Commit message: "Initial portfolio website upload"
   - Click "Commit changes"

#### Option B: Using Git Command Line

1. **Clone Repository:**
   ```bash
   git clone https://github.com/yourusername/yourusername.github.io.git
   cd yourusername.github.io
   ```

2. **Copy Files:**
   - Copy all your website files into the repository folder
   - Maintain the folder structure

3. **Commit and Push:**
   ```bash
   git add .
   git commit -m "Initial portfolio website upload"
   git push origin main
   ```

### Step 3: Enable GitHub Pages

1. **Go to Repository Settings:**
   - In your repository, click "Settings" tab
   - Scroll down to "Pages" section

2. **Configure Pages:**
   - Source: "Deploy from a branch"
   - Branch: "main" (or "master")
   - Folder: "/ (root)"
   - Click "Save"

3. **Wait for Deployment:**
   - GitHub will show: "Your site is being built from the main branch"
   - Wait 2-5 minutes for the first deployment
   - You'll see: "Your site is published at https://yourusername.github.io"

### Step 4: Test Your Website

1. **Visit Your Site:**
   - Go to `https://yourusername.github.io`
   - Your portfolio should be live!

2. **Check All Sections:**
   - ✅ Homepage loads correctly
   - ✅ All sections display properly
   - ✅ Navigation works
   - ✅ Images load
   - ✅ Contact form displays (functionality needs backend)

## 🌐 Step 5: Connect Custom Domain (Optional)

### 5.1: Configure GitHub Pages

1. **Add Custom Domain:**
   - Go to repository Settings → Pages
   - Under "Custom domain", enter: `www.yourdomain.com`
   - Click "Save"
   - GitHub creates a `CNAME` file automatically

2. **Enable HTTPS:**
   - After DNS propagates (30-60 minutes), check "Enforce HTTPS"
   - This ensures your site is secure

### 5.2: Configure DNS (In Your Domain Provider)

#### For www.hrushikeshshelar.com (CNAME Record):
```
Type: CNAME
Name: www
Target: yourusername.github.io
TTL: 3600 (or Auto)
```

#### For hrushikeshshelar.com (A Records):
```
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

### 5.3: Wait for DNS Propagation

- **Time:** 30-60 minutes (up to 24 hours)
- **Check:** Use [whatsmydns.net](https://whatsmydns.net) to verify
- **Test:** Visit your custom domain

## 🔧 Step 6: Configure Contact Form

GitHub Pages is static hosting, so you need a third-party service for form handling:

### Option 1: Formspree (Recommended)

1. **Sign up:** [formspree.io](https://formspree.io)
2. **Get endpoint:** Copy your form endpoint
3. **Update form:** In `index.html`, change form action:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Option 2: Netlify Forms

1. **Deploy to Netlify:** Connect your GitHub repo
2. **Add netlify attribute:** 
   ```html
   <form name="contact" method="POST" data-netlify="true">
   ```

### Option 3: EmailJS

1. **Sign up:** [emailjs.com](https://emailjs.com)
2. **Configure:** Add JavaScript integration
3. **Update:** Modify `js/script.js` with EmailJS code

## 📊 Step 7: Add Analytics (Optional)

### Google Analytics

1. **Create account:** [analytics.google.com](https://analytics.google.com)
2. **Get tracking ID:** Copy your GA4 measurement ID
3. **Add to website:** Update `index.html`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_TRACKING_ID');
   </script>
   ```

## 🔄 Step 8: Making Updates

### Update Your Website

1. **Edit files locally** or **use GitHub web editor**
2. **Commit changes:**
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```
3. **Automatic deployment:** GitHub Pages rebuilds your site automatically
4. **Wait 2-5 minutes** for changes to go live

### Update Custom Domain

1. **Edit CNAME file** in your repository
2. **Change domain** if needed
3. **Update DNS records** in your domain provider

## 🐛 Troubleshooting

### Common Issues

#### Website Not Loading
- **Check repository name:** Must be `username.github.io`
- **Verify branch:** Should be `main` or `master`
- **Check settings:** Pages must be enabled
- **Wait longer:** First deployment can take 10+ minutes

#### Custom Domain Not Working
- **DNS propagation:** Wait up to 24 hours
- **Check DNS records:** Verify A and CNAME records
- **HTTPS issues:** Wait for DNS, then enable HTTPS
- **CNAME file:** Must contain only your domain

#### Images Not Loading
- **File paths:** Use relative paths (`./images/photo.jpg`)
- **File names:** Avoid spaces and special characters
- **File size:** Optimize images for web
- **Case sensitivity:** GitHub is case-sensitive

#### Contact Form Not Working
- **Backend required:** GitHub Pages is static only
- **Use third-party:** Formspree, Netlify Forms, or EmailJS
- **Check form action:** Must point to working endpoint

### Performance Issues

#### Slow Loading
- **Optimize images:** Compress and resize
- **Minify code:** Use online tools to minify CSS/JS
- **Check file sizes:** Keep individual files under 1MB
- **Use CDN:** GitHub Pages includes global CDN

#### Mobile Issues
- **Test responsiveness:** Use browser dev tools
- **Check viewport:** Ensure meta viewport tag is present
- **Touch targets:** Make buttons large enough for mobile

## 📈 Step 9: SEO Optimization

### Update Meta Tags

1. **Edit `index.html`:**
   ```html
   <title>Your Name - Software Engineer Portfolio</title>
   <meta name="description" content="Your professional description">
   <meta name="keywords" content="software engineer, web developer, your skills">
   ```

2. **Update Open Graph tags:**
   ```html
   <meta property="og:title" content="Your Name - Software Engineer">
   <meta property="og:description" content="Your description">
   <meta property="og:image" content="https://yourdomain.com/assets/og-image.jpg">
   ```

### Update Sitemap

1. **Edit `sitemap.xml`:**
   - Replace `yourdomain.com` with your actual domain
   - Update lastmod dates
   - Add new pages as you create them

### Update robots.txt

1. **Edit `robots.txt`:**
   - Update sitemap URL
   - Add any pages you want to exclude

## 🎉 Step 10: Go Live!

### Final Checklist

- [ ] Website loads at `https://yourusername.github.io`
- [ ] Custom domain works (if configured)
- [ ] HTTPS is enabled
- [ ] All sections display correctly
- [ ] Images load properly
- [ ] Navigation works
- [ ] Contact form is functional
- [ ] Mobile responsive
- [ ] SEO meta tags updated
- [ ] Analytics configured (optional)

### Share Your Portfolio

- **LinkedIn:** Add to your profile
- **Resume:** Include website URL
- **Email signature:** Add to your emails
- **Social media:** Share on Twitter, etc.

## 🔄 Maintenance

### Regular Updates

- **Content:** Keep projects and experience current
- **Images:** Update photos and project screenshots
- **Skills:** Add new technologies you learn
- **Contact:** Keep contact information updated

### Monitoring

- **Analytics:** Check visitor statistics
- **Performance:** Monitor loading speeds
- **Broken links:** Test all links regularly
- **Mobile:** Test on different devices

## 🆘 Getting Help

### GitHub Support
- **Documentation:** [docs.github.com/pages](https://docs.github.com/pages)
- **Community:** GitHub Community Forum
- **Issues:** Create issue in your repository

### Domain Issues
- **DNS problems:** Contact your domain provider
- **Propagation:** Use DNS checker tools
- **SSL issues:** Check GitHub Pages settings

---

## 🎯 Quick Start Summary

1. **Create repo:** `yourusername.github.io`
2. **Upload files:** All website files
3. **Enable Pages:** Settings → Pages → Deploy from main branch
4. **Test site:** Visit `https://yourusername.github.io`
5. **Add domain:** Configure DNS and CNAME (optional)
6. **Go live:** Your portfolio is now online! 🚀

**Congratulations! Your portfolio is now hosted for free on GitHub Pages! 🎉**
