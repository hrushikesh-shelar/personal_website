# 📝 Portfolio Configuration Usage Guide

## 🎯 **How to Use the Centralized Configuration**

### **1. Update Your Information**

Edit the `js/config.js` file to update your personal information:

```javascript
const PORTFOLIO_CONFIG = {
    personal: {
        name: "Your Name",
        fullName: "Your Full Name",
        title: "Your Job Title",
        email: "your.email@example.com",
        // ... other personal info
    },
    
    social: {
        linkedin: "https://linkedin.com/in/your-profile",
        github: "https://github.com/your-username",
        twitter: "https://twitter.com/your-username",
        // ... other social links
    }
};
```

### **2. HTML Data Attributes**

Use these data attributes in your HTML to automatically populate content:

#### **Social Links:**
```html
<!-- LinkedIn -->
<a href="#" data-social="linkedin" class="social-link">LinkedIn</a>

<!-- GitHub -->
<a href="#" data-social="github" class="social-link">GitHub</a>

<!-- Twitter -->
<a href="#" data-social="twitter" class="social-link">Twitter</a>
```

#### **Personal Information:**
```html
<!-- Name -->
<h1 data-name>Your Name</h1>

<!-- Full Name -->
<h2 data-full-name>Your Full Name</h2>

<!-- Job Title -->
<h3 data-title>Your Job Title</h3>

<!-- Email -->
<a href="#" data-email>your.email@example.com</a>

<!-- Phone -->
<a href="#" data-phone>+1 (555) 123-4567</a>

<!-- Bio -->
<p data-bio>Your bio text here...</p>
```

### **3. Available Social Platforms**

The configuration supports these social platforms:

- `linkedin` - LinkedIn profile
- `github` - GitHub profile
- `twitter` - Twitter profile
- `instagram` - Instagram profile
- `facebook` - Facebook profile
- `youtube` - YouTube channel
- `medium` - Medium profile
- `dribbble` - Dribbble profile
- `behance` - Behance profile

### **4. How It Works**

1. **Automatic Updates:** When the page loads, the config script automatically:
   - Updates all social links with `data-social` attributes
   - Populates personal information with `data-*` attributes
   - Updates meta tags for SEO
   - Configures the contact form

2. **Single Source of Truth:** Change your LinkedIn URL once in `config.js`, and it updates everywhere automatically.

### **5. Example: Adding a New Social Link**

#### **Step 1:** Add to config.js
```javascript
social: {
    linkedin: "https://linkedin.com/in/your-profile",
    github: "https://github.com/your-username",
    // Add new platform
    instagram: "https://instagram.com/your-username"
}
```

#### **Step 2:** Add to HTML
```html
<a href="#" data-social="instagram" class="social-link">
    <span class="material-symbols-outlined">photo_camera</span>
    <span>Instagram</span>
</a>
```

### **6. Benefits**

✅ **Easy Updates:** Change URLs in one place  
✅ **Consistent:** All links stay in sync  
✅ **Maintainable:** No more hunting for hardcoded URLs  
✅ **Scalable:** Easy to add new social platforms  
✅ **SEO Friendly:** Automatic meta tag updates  

### **7. Contact Form Integration**

The config also handles your contact form:

```javascript
services: {
    contactForm: "https://formspree.io/f/YOUR_FORM_ID"
}
```

Just replace `YOUR_FORM_ID` with your actual Formspree form ID.

### **8. Future-Proof**

When you need to update your information:
1. Edit `js/config.js`
2. Save the file
3. All references update automatically
4. No need to search through HTML files

**That's it! Your portfolio is now centrally managed and easy to maintain!** 🚀
