# Hrushikesh - Software Engineer Portfolio

A modern, responsive portfolio website built with HTML5, CSS3, and JavaScript. Features a clean design, smooth animations, and optimized performance for showcasing software engineering skills and projects.

## 🚀 Features

- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Performance Optimized**: Fast loading times with optimized assets
- **SEO Friendly**: Proper meta tags, structured data, and sitemap
- **Accessibility**: WCAG compliant with keyboard navigation support
- **Contact Form**: Functional contact form with validation
- **Project Filtering**: Interactive project showcase with category filters
- **Dark/Light Mode**: Theme toggle support (optional)
- **Smooth Scrolling**: Enhanced navigation experience

## 📁 Project Structure

```
portfolio-website/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   └── script.js           # JavaScript functionality
├── assets/                 # Images, icons, and other assets
├── .htaccess              # Apache server configuration
├── robots.txt             # Search engine crawler instructions
├── sitemap.xml            # Site structure for search engines
├── 404.html               # Custom 404 error page
└── README.md              # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and modern web standards
- **CSS3**: Flexbox, Grid, custom properties, animations
- **JavaScript (ES6+)**: Modern JavaScript with modules
- **Google Fonts**: Poppins and Inter font families
- **Material Icons**: Google Material Design icons

## 🚀 Deployment Options

### Option 1: GitHub Pages (Recommended - FREE!)

**Perfect for:** Personal portfolios, static websites, free hosting

**Benefits:**
- ✅ Completely free hosting
- ✅ Custom domain support
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Version control with Git

**Quick Start:**
1. Create repository: `yourusername.github.io`
2. Upload all files to the repository
3. Enable GitHub Pages in Settings
4. Your site is live at `https://yourusername.github.io`

**Full Guide:** See [GITHUB_PAGES_DEPLOYMENT.md](GITHUB_PAGES_DEPLOYMENT.md) for detailed instructions.

### Option 2: Hostinger (Paid Hosting)

**Perfect for:** When you need server-side features, databases, or prefer traditional hosting

**Prerequisites:**
- Hostinger hosting account
- Domain name (optional)
- FTP client or File Manager access

**Quick Steps:**
1. Download all project files
2. Upload to `public_html` folder via File Manager or FTP
3. Configure domain and SSL certificate
4. Test your website

**Full Guide:** See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed Hostinger instructions.

## ⚙️ Configuration

### Update Personal Information
1. **index.html**: Update name, title, and meta information
2. **Contact Details**: Update email, location, and social links
3. **Experience**: Update work experience and education
4. **Projects**: Update project information and links
5. **Images**: Replace placeholder images with your photos

### Customize Styling
1. **Colors**: Update CSS custom properties in `:root`
2. **Fonts**: Change font families in CSS
3. **Layout**: Modify grid and flexbox layouts
4. **Animations**: Adjust animation durations and effects

### SEO Optimization
1. **Meta Tags**: Update title, description, and keywords
2. **Open Graph**: Update social media sharing tags
3. **Structured Data**: Update JSON-LD schema
4. **Sitemap**: Update URLs in `sitemap.xml`

## 📱 Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Performance Features

- **Image Optimization**: WebP format support
- **CSS Minification**: Compressed stylesheets
- **JavaScript Optimization**: Minified and optimized code
- **Caching**: Browser caching headers
- **Compression**: Gzip compression enabled
- **Lazy Loading**: Images load as needed

## 🎨 Customization Guide

### Changing Colors
```css
:root {
    --primary: #5E8C6A;        /* Main brand color */
    --secondary: #A7C7E7;      /* Secondary color */
    --accent: #64FFDA;         /* Accent color */
    --bg-light: #F8F7F4;       /* Light background */
    --bg-dark: #101922;        /* Dark background */
}
```

### Adding New Sections
1. Add HTML structure in `index.html`
2. Add corresponding CSS in `styles.css`
3. Update navigation links
4. Add scroll reveal animations

### Contact Form Backend
The contact form is currently frontend-only. To make it functional:

1. **PHP Backend:**
```php
<?php
if ($_POST) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    
    // Send email or save to database
    mail('your@email.com', $subject, $message, "From: $email");
}
?>
```

2. **Third-party Services:**
   - Formspree
   - Netlify Forms
   - EmailJS

## 🐛 Troubleshooting

### Common Issues

1. **Images not loading:**
   - Check file paths are correct
   - Ensure images are uploaded to correct folder
   - Verify file permissions

2. **CSS not applying:**
   - Clear browser cache
   - Check CSS file path
   - Verify file upload

3. **JavaScript errors:**
   - Check browser console for errors
   - Verify JavaScript file path
   - Ensure all dependencies are loaded

4. **Contact form not working:**
   - Set up backend processing
   - Check form action URL
   - Verify form validation

### Performance Issues
1. **Slow loading:**
   - Optimize images (compress, use WebP)
   - Enable caching
   - Minify CSS/JS files

2. **Mobile issues:**
   - Test on actual devices
   - Check viewport meta tag
   - Verify responsive breakpoints

## 📈 Analytics Setup

### Google Analytics
1. Create Google Analytics account
2. Get tracking ID
3. Add to `index.html`:
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

## 🔒 Security Considerations

- Keep software updated
- Use HTTPS
- Validate all form inputs
- Sanitize user data
- Regular backups
- Monitor for vulnerabilities

## 📞 Support

For issues or questions:
- Check this README first
- Review browser console for errors
- Test on different devices/browsers
- Contact hosting provider for server issues

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from Google Material Design
- Fonts from Google Fonts
- Images from various sources (replace with your own)

---

**Happy coding! 🚀**
