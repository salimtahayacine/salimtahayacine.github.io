/**
 * Example Usage of Profile Data
 * This file demonstrates various ways to use the extracted profile data
 */

// Load the profile data
const profileData = require('./profile-data.json');

// Example 1: Display Personal Information
function displayPersonalInfo() {
    console.log('\n=== PERSONAL INFORMATION ===');
    console.log(`Name: ${profileData.personalInfo.name}`);
    console.log(`Title: ${profileData.personalInfo.title}`);
    console.log(`Email: ${profileData.personalInfo.email}`);
    console.log(`Phone: ${profileData.personalInfo.phone}`);
    console.log(`Location: ${profileData.personalInfo.city}`);
    console.log(`Degree: ${profileData.personalInfo.degree}`);
    console.log(`Freelance: ${profileData.personalInfo.freelance}`);
}

// Example 2: List All Skills
function listSkills() {
    console.log('\n=== TECHNICAL SKILLS ===');
    profileData.skills.skills.forEach(skill => {
        console.log(`${skill.name.padEnd(40, '.')} ${skill.level}`);
    });
}

// Example 3: Display Work Experience
function displayExperience() {
    console.log('\n=== PROFESSIONAL EXPERIENCE ===');
    profileData.experience.forEach((exp, index) => {
        console.log(`\n${index + 1}. ${exp.title}`);
        console.log(`   ${exp.company}`);
        console.log(`   ${exp.period}`);
        if (exp.responsibilities.length > 0) {
            console.log('   Key Responsibilities:');
            exp.responsibilities.forEach(resp => {
                console.log(`   - ${resp}`);
            });
        }
    });
}

// Example 4: Show Education History
function displayEducation() {
    console.log('\n=== EDUCATION ===');
    profileData.education.forEach((edu, index) => {
        console.log(`\n${index + 1}. ${edu.degree}`);
        console.log(`   ${edu.institution}`);
        console.log(`   ${edu.period}`);
    });
}

// Example 5: List Portfolio Projects
function listProjects() {
    console.log('\n=== PORTFOLIO PROJECTS ===');
    profileData.portfolio.projects.forEach((project, index) => {
        console.log(`\n${index + 1}. ${project.title}`);
        console.log(`   ${project.description}`);
    });
}

// Example 6: Show Services Offered
function displayServices() {
    console.log('\n=== SERVICES OFFERED ===');
    profileData.services.services.forEach((service, index) => {
        console.log(`\n${index + 1}. ${service.title}`);
        console.log(`   ${service.description.substring(0, 100)}...`);
    });
}

// Example 7: Get Contact Information
function getContactInfo() {
    console.log('\n=== CONTACT INFORMATION ===');
    console.log(`Email: ${profileData.contact.email}`);
    console.log(`Phone: ${profileData.contact.phone}`);
    console.log(`Location: ${profileData.contact.location}`);
    console.log('\nSocial Media:');
    if (profileData.socialLinks.facebook) console.log(`Facebook: ${profileData.socialLinks.facebook}`);
    if (profileData.socialLinks.instagram) console.log(`Instagram: ${profileData.socialLinks.instagram}`);
    if (profileData.socialLinks.linkedin) console.log(`LinkedIn: ${profileData.socialLinks.linkedin}`);
}

// Example 8: Generate Summary Statistics
function generateStatistics() {
    console.log('\n=== PROFILE STATISTICS ===');
    console.log(`Total Skills: ${profileData.skills.skills.length}`);
    console.log(`Education Entries: ${profileData.education.length}`);
    console.log(`Work Experiences: ${profileData.experience.length}`);
    console.log(`Portfolio Projects: ${profileData.portfolio.projects.length}`);
    console.log(`Services Offered: ${profileData.services.services.length}`);
    console.log(`Data Last Updated: ${new Date(profileData.extractedAt).toLocaleString()}`);
}

// Example 9: Filter Skills by Level
function getHighLevelSkills(minLevel = 75) {
    console.log(`\n=== SKILLS WITH ${minLevel}% OR HIGHER ===`);
    const highLevelSkills = profileData.skills.skills.filter(skill => {
        const level = parseInt(skill.level);
        return level >= minLevel;
    });
    
    highLevelSkills.forEach(skill => {
        console.log(`${skill.name}: ${skill.level}`);
    });
    
    return highLevelSkills;
}

// Example 10: Get Recent Experience
function getRecentExperience(years = 3) {
    console.log(`\n=== RECENT EXPERIENCE (Last ${years} years) ===`);
    const currentYear = new Date().getFullYear();
    
    const recentExperience = profileData.experience.filter(exp => {
        // Simple check if period contains recent years
        const periodText = exp.period.toLowerCase();
        return periodText.includes('2024') || periodText.includes('2025') || 
               periodText.includes('2023') || periodText.includes('aujourd\'hui');
    });
    
    recentExperience.forEach(exp => {
        console.log(`\n${exp.title} at ${exp.company}`);
        console.log(`Period: ${exp.period}`);
    });
    
    return recentExperience;
}

// Example 11: Export to CSV format
function exportSkillsToCSV() {
    console.log('\n=== SKILLS CSV EXPORT ===');
    console.log('Skill,Level');
    profileData.skills.skills.forEach(skill => {
        console.log(`"${skill.name}","${skill.level}"`);
    });
}

// Example 12: Generate Simple HTML Resume Section
function generateHTMLResume() {
    let html = '<div class="resume-section">\n';
    html += `  <h1>${profileData.personalInfo.name}</h1>\n`;
    html += `  <h2>${profileData.personalInfo.title}</h2>\n`;
    html += `  <p>${profileData.about.description}</p>\n\n`;
    
    html += '  <h3>Experience</h3>\n';
    profileData.experience.forEach(exp => {
        html += `  <div class="experience-item">\n`;
        html += `    <h4>${exp.title}</h4>\n`;
        html += `    <p>${exp.company} | ${exp.period}</p>\n`;
        html += `  </div>\n`;
    });
    
    html += '</div>';
    
    console.log('\n=== GENERATED HTML ===');
    console.log(html);
    return html;
}

// Example 13: Search for specific technology/keyword
function searchTechnology(keyword) {
    console.log(`\n=== SEARCHING FOR: "${keyword}" ===`);
    
    // Search in skills
    const matchingSkills = profileData.skills.skills.filter(skill => 
        skill.name.toLowerCase().includes(keyword.toLowerCase())
    );
    
    if (matchingSkills.length > 0) {
        console.log('\nFound in Skills:');
        matchingSkills.forEach(skill => console.log(`- ${skill.name}: ${skill.level}`));
    }
    
    // Search in experience
    const matchingExperience = profileData.experience.filter(exp => 
        exp.responsibilities.some(resp => 
            resp.toLowerCase().includes(keyword.toLowerCase())
        )
    );
    
    if (matchingExperience.length > 0) {
        console.log('\nFound in Experience:');
        matchingExperience.forEach(exp => console.log(`- ${exp.title} at ${exp.company}`));
    }
    
    return { skills: matchingSkills, experience: matchingExperience };
}

// Example 14: Generate JSON API Response
function generateAPIResponse() {
    const apiResponse = {
        status: 'success',
        data: {
            profile: {
                name: profileData.personalInfo.name,
                title: profileData.personalInfo.title,
                contact: {
                    email: profileData.contact.email,
                    phone: profileData.contact.phone
                }
            },
            summary: {
                totalSkills: profileData.skills.skills.length,
                totalProjects: profileData.portfolio.projects.length,
                yearsOfExperience: profileData.experience.length
            }
        },
        timestamp: new Date().toISOString()
    };
    
    console.log('\n=== API RESPONSE FORMAT ===');
    console.log(JSON.stringify(apiResponse, null, 2));
    return apiResponse;
}

// Run all examples
function runAllExamples() {
    console.log('\n' + '='.repeat(60));
    console.log('PROFILE DATA USAGE EXAMPLES');
    console.log('='.repeat(60));
    
    displayPersonalInfo();
    listSkills();
    displayExperience();
    displayEducation();
    listProjects();
    displayServices();
    getContactInfo();
    generateStatistics();
    getHighLevelSkills(75);
    getRecentExperience();
    exportSkillsToCSV();
    searchTechnology('java');
    generateAPIResponse();
    
    console.log('\n' + '='.repeat(60));
    console.log('Examples completed successfully!');
    console.log('='.repeat(60) + '\n');
}

// Execute all examples if run directly
if (require.main === module) {
    runAllExamples();
}

// Export functions for use in other modules
module.exports = {
    displayPersonalInfo,
    listSkills,
    displayExperience,
    displayEducation,
    listProjects,
    displayServices,
    getContactInfo,
    generateStatistics,
    getHighLevelSkills,
    getRecentExperience,
    exportSkillsToCSV,
    generateHTMLResume,
    searchTechnology,
    generateAPIResponse,
    profileData
};
