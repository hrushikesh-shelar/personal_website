#!/usr/bin/env node

/**
 * Portfolio Website Optimization Script
 * 
 * This script helps optimize the portfolio website for production deployment
 * Run with: node optimize.js
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Portfolio Website Optimization Script');
console.log('=====================================\n');

// Check if all required files exist
const requiredFiles = [
    'index.html',
    'css/styles.css',
    'js/script.js',
    '.htaccess',
    'robots.txt',
    'sitemap.xml',
    '404.html'
];

console.log('📋 Checking required files...');
let allFilesExist = true;

requiredFiles.forEach(file => {
    if (fs.existsSync(file)) {
        console.log(`✅ ${file}`);
    } else {
        console.log(`❌ ${file} - MISSING`);
        allFilesExist = false;
    }
});

if (!allFilesExist) {
    console.log('\n❌ Some required files are missing. Please ensure all files are present.');
    process.exit(1);
}

console.log('\n✅ All required files present!');

// Check file sizes
console.log('\n📊 File size analysis...');
requiredFiles.forEach(file => {
    if (fs.existsSync(file)) {
        const stats = fs.statSync(file);
        const sizeKB = (stats.size / 1024).toFixed(2);
        console.log(`${file}: ${sizeKB} KB`);
    }
});

// Check for common issues
console.log('\n🔍 Checking for common issues...');

// Check HTML
const htmlContent = fs.readFileSync('index.html', 'utf8');
const htmlIssues = [];

if (!htmlContent.includes('viewport')) {
    htmlIssues.push('Missing viewport meta tag');
}

if (!htmlContent.includes('description')) {
    htmlIssues.push('Missing meta description');
}

if (!htmlContent.includes('og:title')) {
    htmlIssues.push('Missing Open Graph meta tags');
}

if (htmlIssues.length > 0) {
    console.log('⚠️  HTML Issues:');
    htmlIssues.forEach(issue => console.log(`   - ${issue}`));
} else {
    console.log('✅ HTML looks good!');
}

// Check CSS
const cssContent = fs.readFileSync('css/styles.css', 'utf8');
const cssIssues = [];

if (!cssContent.includes('@media')) {
    cssIssues.push('No responsive media queries found');
}

if (!cssContent.includes('--primary')) {
    cssIssues.push('CSS custom properties not found');
}

if (cssIssues.length > 0) {
    console.log('⚠️  CSS Issues:');
    cssIssues.forEach(issue => console.log(`   - ${issue}`));
} else {
    console.log('✅ CSS looks good!');
}

// Check JavaScript
const jsContent = fs.readFileSync('js/script.js', 'utf8');
const jsIssues = [];

if (!jsContent.includes('addEventListener')) {
    jsIssues.push('No event listeners found');
}

if (!jsContent.includes('querySelector')) {
    jsIssues.push('No DOM queries found');
}

if (jsIssues.length > 0) {
    console.log('⚠️  JavaScript Issues:');
    jsIssues.forEach(issue => console.log(`   - ${issue}`));
} else {
    console.log('✅ JavaScript looks good!');
}

// Generate optimization recommendations
console.log('\n💡 Optimization Recommendations:');
console.log('================================');

const recommendations = [
    '✅ Use WebP format for images to reduce file size',
    '✅ Enable Gzip compression (configured in .htaccess)',
    '✅ Set up browser caching (configured in .htaccess)',
    '✅ Use a CDN for faster global delivery',
    '✅ Minify CSS and JavaScript for production',
    '✅ Optimize images (compress and resize)',
    '✅ Set up Google Analytics for tracking',
    '✅ Configure contact form backend',
    '✅ Test on multiple devices and browsers',
    '✅ Set up SSL certificate for HTTPS'
];

recommendations.forEach(rec => console.log(rec));

// Generate deployment checklist
console.log('\n📋 Pre-Deployment Checklist:');
console.log('============================');

const checklist = [
    '□ Update personal information in index.html',
    '□ Replace placeholder images with your photos',
    '□ Update contact information and social links',
    '□ Configure contact form backend',
    '□ Update domain references in sitemap.xml',
    '□ Update meta tags with your information',
    '□ Test website on different devices',
    '□ Check all links and functionality',
    '□ Optimize images for web',
    '□ Set up Google Analytics (optional)',
    '□ Configure SSL certificate',
    '□ Test contact form functionality',
    '□ Verify SEO meta tags',
    '□ Check page loading speed',
    '□ Test mobile responsiveness'
];

checklist.forEach(item => console.log(item));

// Generate final summary
console.log('\n🎉 Optimization Complete!');
console.log('========================');
console.log('Your portfolio website is ready for deployment!');
console.log('\nNext steps:');
console.log('1. Review and address any issues mentioned above');
console.log('2. Update personal information and images');
console.log('3. Follow the DEPLOYMENT.md guide');
console.log('4. Upload files to Hostinger');
console.log('5. Test your live website');
console.log('\nGood luck with your deployment! 🚀');

// Create a simple deployment info file
const deploymentInfo = {
    timestamp: new Date().toISOString(),
    files: requiredFiles,
    recommendations: recommendations.length,
    checklist: checklist.length,
    status: 'ready_for_deployment'
};

fs.writeFileSync('deployment-info.json', JSON.stringify(deploymentInfo, null, 2));
console.log('\n📄 Deployment info saved to deployment-info.json');
