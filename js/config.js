// ===== PORTFOLIO CONFIGURATION =====
// Centralized configuration for all dynamic content

const PORTFOLIO_CONFIG = {
    // Personal Information
    personal: {
        name: "Hrushikesh",
        fullName: "Hrushikesh Shelar",
        title: "Software Engineer",
        email: "hrushikesh@example.com",
        phone: "+1 (555) 123-4567",
        location: "San Francisco, CA",
        bio: "Software Engineer with 3+ years of experience building scalable web applications. Specializing in React, Node.js, and cloud technologies.",
        resumeUrl: "https://example.com/resume.pdf"
    },

    // Social Media Links
    social: {
        linkedin: "https://linkedin.com/in/hrushikesh-shelar",
        github: "https://github.com/hrushikesh-shelar",
        twitter: "https://twitter.com/hrushikesh",
        instagram: "https://instagram.com/hrushikesh",
        facebook: "https://facebook.com/hrushikesh",
        youtube: "https://youtube.com/@hrushikesh",
        medium: "https://medium.com/@hrushikesh",
        dribbble: "https://dribbble.com/hrushikesh",
        behance: "https://behance.net/hrushikesh"
    },

    // Contact Information
    contact: {
        email: "hrushikesh@example.com",
        phone: "+1 (555) 123-4567",
        address: "San Francisco, CA",
        website: "https://hrushikeshshelar.com"
    },

    // Professional Information
    professional: {
        currentRole: "Software Engineer",
        company: "Tech Company",
        experience: "3+ years",
        skills: ["React", "Node.js", "JavaScript", "Python", "AWS", "Docker"],
        availability: "Available for freelance work"
    },

    // SEO and Meta Information
    seo: {
        title: "Hrushikesh - Software Engineer Portfolio",
        description: "Software Engineer with 3+ years of experience building scalable web applications. Specializing in React, Node.js, and cloud technologies.",
        keywords: "software engineer, web developer, react, node.js, javascript, portfolio",
        author: "Hrushikesh Shelar",
        ogImage: "https://hrushikeshshelar.com/assets/og-image.jpg"
    },

    // External Services
    services: {
        contactForm: "https://formspree.io/f/YOUR_FORM_ID", // Replace with your Formspree ID
        analytics: "GA_TRACKING_ID", // Replace with your Google Analytics ID
        mapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY" // Replace with your Google Maps API key
    }
};

// ===== UTILITY FUNCTIONS =====

// Function to update all social links on the page
function updateSocialLinks() {
    const socialLinks = document.querySelectorAll('[data-social]');
    
    socialLinks.forEach(link => {
        const platform = link.getAttribute('data-social');
        const url = PORTFOLIO_CONFIG.social[platform];
        
        if (url) {
            link.href = url;
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
}

// Function to update personal information
function updatePersonalInfo() {
    // Update name and title
    const nameElements = document.querySelectorAll('[data-name]');
    nameElements.forEach(el => {
        el.textContent = PORTFOLIO_CONFIG.personal.name;
    });

    const titleElements = document.querySelectorAll('[data-title]');
    titleElements.forEach(el => {
        el.textContent = PORTFOLIO_CONFIG.personal.title;
    });

    const fullNameElements = document.querySelectorAll('[data-full-name]');
    fullNameElements.forEach(el => {
        el.textContent = PORTFOLIO_CONFIG.personal.fullName;
    });

    // Update email links
    const emailLinks = document.querySelectorAll('[data-email]');
    emailLinks.forEach(link => {
        link.href = `mailto:${PORTFOLIO_CONFIG.contact.email}`;
        link.textContent = PORTFOLIO_CONFIG.contact.email;
    });

    // Update phone links
    const phoneLinks = document.querySelectorAll('[data-phone]');
    phoneLinks.forEach(link => {
        link.href = `tel:${PORTFOLIO_CONFIG.contact.phone}`;
        link.textContent = PORTFOLIO_CONFIG.contact.phone;
    });

    // Update bio
    const bioElements = document.querySelectorAll('[data-bio]');
    bioElements.forEach(el => {
        el.textContent = PORTFOLIO_CONFIG.personal.bio;
    });
}

// Function to update contact form action
function updateContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm && PORTFOLIO_CONFIG.services.contactForm) {
        contactForm.action = PORTFOLIO_CONFIG.services.contactForm;
    }
}

// Function to update meta tags
function updateMetaTags() {
    // Update page title
    document.title = PORTFOLIO_CONFIG.seo.title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.content = PORTFOLIO_CONFIG.seo.description;
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
        metaKeywords.content = PORTFOLIO_CONFIG.seo.keywords;
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
        ogTitle.content = PORTFOLIO_CONFIG.seo.title;
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
        ogDescription.content = PORTFOLIO_CONFIG.seo.description;
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
        ogImage.content = PORTFOLIO_CONFIG.seo.ogImage;
    }
}

// Initialize all updates when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    updateSocialLinks();
    updatePersonalInfo();
    updateContactForm();
    updateMetaTags();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PORTFOLIO_CONFIG;
}
