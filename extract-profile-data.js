/**
 * Profile Data Extractor
 * Extracts structured information from index.html
 * This script parses the HTML and creates a structured JSON object with all profile information
 */

const fs = require('fs');
const path = require('path');

// Read the HTML file
const htmlPath = path.join(__dirname, 'index.html');
const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

// Helper function to extract text content from HTML section
function extractTextBetweenTags(html, startTag, endTag) {
    const startIndex = html.indexOf(startTag);
    if (startIndex === -1) return '';
    const endIndex = html.indexOf(endTag, startIndex);
    if (endIndex === -1) return '';
    return html.substring(startIndex, endIndex + endTag.length);
}

// Helper function to clean HTML tags and get text
function cleanHtmlText(html) {
    return html
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

// Helper function to extract attributes
function extractAttribute(html, attribute) {
    const regex = new RegExp(`${attribute}=["']([^"']+)["']`, 'i');
    const match = html.match(regex);
    return match ? match[1] : '';
}

// Extract Personal Information
function extractPersonalInfo(html) {
    const info = {
        name: 'Salim Taha Yacine',
        title: '',
        birthday: '',
        phone: '',
        email: '',
        city: '',
        degree: '',
        freelance: '',
        website: '',
        image: ''
    };

    // Extract typed roles
    const typedMatch = html.match(/data-typed-items="([^"]+)"/);
    if (typedMatch) {
        info.title = typedMatch[1];
    }

    // Extract contact details
    const birthdayMatch = html.match(/<strong>Birthday:<\/strong>\s*<span>([^<]+)<\/span>/i);
    if (birthdayMatch) info.birthday = birthdayMatch[1].trim();

    const phoneMatch = html.match(/<strong>Phone:<\/strong>\s*<span>([^<]+)<\/span>/i);
    if (phoneMatch) info.phone = phoneMatch[1].trim();

    const emailMatch = html.match(/<strong>Email:<\/strong>\s*<span>([^<]+)<\/span>/i);
    if (emailMatch) info.email = emailMatch[1].trim();

    const cityMatch = html.match(/<strong>City:<\/strong>\s*<span>([^<]+)<\/span>/i);
    if (cityMatch) info.city = cityMatch[1].trim();

    const degreeMatch = html.match(/<strong>Degree:<\/strong>\s*<span>([^<]+)<\/span>/i);
    if (degreeMatch) info.degree = degreeMatch[1].trim();

    const freelanceMatch = html.match(/<strong>Freelance:<\/strong>\s*<span>([^<]+)<\/span>/i);
    if (freelanceMatch) info.freelance = freelanceMatch[1].trim();

    // Extract image
    const imgMatch = html.match(/<img src="([^"]+)"[^>]*alt="me"/i);
    if (imgMatch) info.image = imgMatch[1];

    return info;
}

// Extract About Section
function extractAbout(html) {
    const aboutSection = extractTextBetweenTags(html, '<section id="about"', '</section>');
    const about = {
        title: 'About',
        description: '',
        fullDescription: ''
    };

    // Extract main description
    const descMatch = aboutSection.match(/<h2>About<\/h2>\s*<p>([^<]+)<\/p>/i);
    if (descMatch) {
        about.description = descMatch[1].trim();
    }

    // Extract full description
    const fullDescStart = aboutSection.indexOf('<h3>UI/UX Designer');
    if (fullDescStart !== -1) {
        const fullDescEnd = aboutSection.indexOf('</div>', fullDescStart);
        const fullDescHtml = aboutSection.substring(fullDescStart, fullDescEnd);
        about.fullDescription = cleanHtmlText(fullDescHtml);
    }

    return about;
}

// Extract Skills
function extractSkills(html) {
    const skillsSection = extractTextBetweenTags(html, '<section id="skills"', '</section>');
    const skills = [];

    const skillRegex = /<span class="skill">([^<]+)<i class="val">(\d+%)<\/i><\/span>/g;
    let match;

    while ((match = skillRegex.exec(skillsSection)) !== null) {
        skills.push({
            name: match[1].trim(),
            level: match[2].trim()
        });
    }

    return {
        title: 'Skills',
        description: 'Experienced full-stack web/mobile developer with a passion for creating dynamic and user-centered applications.',
        skills: skills
    };
}

// Extract Education
function extractEducation(html) {
    const resumeSection = extractTextBetweenTags(html, '<h3 class="resume-title">Education</h3>', '<h3 class="resume-title">Professional Experience</h3>');
    const education = [];

    const eduRegex = /<div class="resume-item">\s*<h4>([^<]+)<\/h4>\s*<h5>([^<]+)<\/h5>\s*(?:<p><em>([^<]+)<\/em><\/p>)?/g;
    let match;

    while ((match = eduRegex.exec(resumeSection)) !== null) {
        education.push({
            degree: match[1].trim(),
            period: match[2].trim(),
            institution: match[3] ? match[3].trim() : ''
        });
    }

    return education;
}

// Extract Professional Experience
function extractExperience(html) {
    const experienceSection = extractTextBetweenTags(html, '<h3 class="resume-title">Professional Experience</h3>', '</div>\n          </div>');
    const experiences = [];

    // Split by resume-item divs
    const itemRegex = /<div class="resume-item">([\s\S]*?)<\/div>\s*(?=<div class="resume-item">|$)/g;
    let match;

    while ((match = itemRegex.exec(experienceSection)) !== null) {
        const itemHtml = match[1];
        
        const titleMatch = itemHtml.match(/<h4>([^<]+)<\/h4>/);
        const periodMatch = itemHtml.match(/<h5>([^<]+)<\/h5>/);
        const companyMatch = itemHtml.match(/<p><em>([^<]+)<\/em><\/p>/);
        
        const responsibilities = [];
        const liRegex = /<li>([^<]+)<\/li>/g;
        let liMatch;
        while ((liMatch = liRegex.exec(itemHtml)) !== null) {
            responsibilities.push(liMatch[1].trim());
        }

        if (titleMatch) {
            experiences.push({
                title: titleMatch[1].trim(),
                period: periodMatch ? periodMatch[1].trim() : '',
                company: companyMatch ? companyMatch[1].trim() : '',
                responsibilities: responsibilities
            });
        }
    }

    return experiences;
}

// Extract Portfolio/Projects
function extractPortfolio(html) {
    const portfolioSection = extractTextBetweenTags(html, '<section id="portfolio"', '</section>');
    const projects = [];

    const projectRegex = /<div class="col-lg-4 col-md-6 portfolio-item[^"]*">\s*<div class="portfolio-wrap">\s*<img src="([^"]+)"[^>]*>\s*<div class="portfolio-info">\s*<h4>([^<]+)<\/h4>\s*<p>([^<]+)<\/p>/g;
    let match;

    while ((match = projectRegex.exec(portfolioSection)) !== null) {
        projects.push({
            image: match[1].trim(),
            title: match[2].trim(),
            description: match[3].trim()
        });
    }

    return {
        title: 'Portfolio',
        description: 'Voici mes projets de développement web et applications réalisés au cours de mes expériences professionnelles.',
        projects: projects
    };
}

// Extract Services
function extractServices(html) {
    const servicesSection = extractTextBetweenTags(html, '<section id="services"', '</section>');
    const services = [];

    const serviceRegex = /<h4><a[^>]*>([^<]+)<\/a><\/h4>\s*<p>([^<]+)<\/p>/g;
    let match;

    while ((match = serviceRegex.exec(servicesSection)) !== null) {
        services.push({
            title: match[1].trim(),
            description: match[2].trim()
        });
    }

    return {
        title: 'Services',
        description: 'A web/mobile full stack developer offers a range of services related to building and maintaining both front-end and back-end components of web and mobile applications.',
        services: services
    };
}

// Extract Social Links
function extractSocialLinks(html) {
    const socialLinks = {
        twitter: '',
        facebook: '',
        instagram: '',
        linkedin: '',
        skype: ''
    };

    const heroSection = extractTextBetweenTags(html, '<section id="hero"', '</section>');

    const facebookMatch = heroSection.match(/<a href="([^"]+)"[^>]*class="facebook"/i);
    if (facebookMatch) socialLinks.facebook = facebookMatch[1];

    const instagramMatch = heroSection.match(/<a href="([^"]+)"[^>]*class="instagram"/i);
    if (instagramMatch) socialLinks.instagram = instagramMatch[1];

    const linkedinMatch = heroSection.match(/<a href="([^"]+)"[^>]*class="linkedin"/i);
    if (linkedinMatch) socialLinks.linkedin = linkedinMatch[1];

    return socialLinks;
}

// Extract Contact Information
function extractContact(html) {
    const contactSection = extractTextBetweenTags(html, '<section id="contact"', '</section>');
    
    const locationMatch = contactSection.match(/<div class="address">[\s\S]*?<p>([^<]+)<\/p>/i);
    const emailMatch = contactSection.match(/<div class="email">[\s\S]*?<p>([^<]+)<\/p>/i);
    const phoneMatch = contactSection.match(/<div class="phone">[\s\S]*?<p>([^<]+)<\/p>/i);

    return {
        location: locationMatch ? locationMatch[1].trim() : '',
        email: emailMatch ? emailMatch[1].trim() : '',
        phone: phoneMatch ? phoneMatch[1].trim() : ''
    };
}

// Main extraction function
function extractAllData() {
    const profileData = {
        personalInfo: extractPersonalInfo(htmlContent),
        about: extractAbout(htmlContent),
        skills: extractSkills(htmlContent),
        education: extractEducation(htmlContent),
        experience: extractExperience(htmlContent),
        portfolio: extractPortfolio(htmlContent),
        services: extractServices(htmlContent),
        socialLinks: extractSocialLinks(htmlContent),
        contact: extractContact(htmlContent),
        extractedAt: new Date().toISOString()
    };

    return profileData;
}

// Execute extraction
try {
    const data = extractAllData();
    
    // Write to JSON file
    const outputPath = path.join(__dirname, 'profile-data.json');
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2), 'utf-8');
    
    console.log('✓ Profile data extracted successfully!');
    console.log(`✓ Data saved to: ${outputPath}`);
    console.log('\nExtracted Data Summary:');
    console.log(`- Personal Info: ${data.personalInfo.name}`);
    console.log(`- Skills: ${data.skills.skills.length} skills`);
    console.log(`- Education: ${data.education.length} entries`);
    console.log(`- Experience: ${data.experience.length} positions`);
    console.log(`- Portfolio: ${data.portfolio.projects.length} projects`);
    console.log(`- Services: ${data.services.services.length} services`);
    
    // Also output the data
    console.log('\n' + '='.repeat(50));
    console.log('EXTRACTED PROFILE DATA:');
    console.log('='.repeat(50));
    console.log(JSON.stringify(data, null, 2));
    
} catch (error) {
    console.error('Error extracting profile data:', error.message);
    process.exit(1);
}
