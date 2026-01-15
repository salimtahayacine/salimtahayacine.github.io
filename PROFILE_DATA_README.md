# Profile Data Extraction

This repository contains tools to extract and structure profile information from HTML files into a structured JSON format.

## Overview

The `extract-profile-data.js` script parses the `index.html` file and extracts all profile information into a structured JSON format that can be easily consumed by applications, APIs, or other systems.

## Extracted Data Structure

The script extracts the following information:

### 1. Personal Information
- Name
- Professional titles/roles
- Birthday
- Phone number
- Email address
- City/Location
- Academic degree
- Freelance platforms
- Profile image URL

### 2. About Section
- Professional description
- Career focus and objectives

### 3. Skills
- Technical skills with proficiency levels (%)
- Categories include:
  - Frontend: HTML, CSS, JavaScript, React.js, Vue.js, Angular
  - Backend: Java, Spring Boot, Vert.x
  - Mobile: React Native, Android Studio (Java/Kotlin)
  - Design: Adobe Photoshop, Illustrator, Canva
  - Tools: Git, WordPress/CMS

### 4. Education
- Academic degrees and certifications
- Time periods
- Educational institutions

### 5. Professional Experience
- Job titles and positions
- Employment periods
- Companies/Organizations
- Key responsibilities and achievements
- Technologies used

### 6. Portfolio/Projects
- Project titles and descriptions
- Associated images
- Technologies and context

### 7. Services Offered
- Service categories (Frontend, Backend, Database, Deployment, Testing, Security)
- Detailed service descriptions

### 8. Social Media Links
- Facebook
- Instagram
- LinkedIn
- Twitter
- Skype

### 9. Contact Information
- Physical location
- Email address
- Phone number

## Usage

### Running the Extraction Script

```bash
node extract-profile-data.js
```

This will:
1. Parse the `index.html` file
2. Extract all structured data
3. Generate a `profile-data.json` file
4. Display a summary of extracted data in the console

### Using the Generated JSON Data

The `profile-data.json` file can be used in various ways:

#### 1. Load in JavaScript/Node.js
```javascript
const profileData = require('./profile-data.json');

console.log(profileData.personalInfo.name);
console.log(profileData.skills.skills);
console.log(profileData.experience);
```

#### 2. Use in Web Applications
```javascript
fetch('profile-data.json')
  .then(response => response.json())
  .then(data => {
    // Use the data in your application
    displayProfile(data.personalInfo);
    renderSkills(data.skills.skills);
    showProjects(data.portfolio.projects);
  });
```

#### 3. API Integration
The JSON structure is ready to be:
- Served via REST APIs
- Stored in databases (MongoDB, PostgreSQL, etc.)
- Used with GraphQL endpoints
- Integrated with CMS systems

#### 4. Generate Dynamic Content
```javascript
// Example: Generate a resume section
function generateResumeHTML(profileData) {
  let html = '<div class="resume">';
  
  profileData.experience.forEach(exp => {
    html += `
      <div class="experience-item">
        <h3>${exp.title}</h3>
        <p class="period">${exp.period}</p>
        <p class="company">${exp.company}</p>
        <ul>
          ${exp.responsibilities.map(r => `<li>${r}</li>`).join('')}
        </ul>
      </div>
    `;
  });
  
  html += '</div>';
  return html;
}
```

## Data Structure Example

```json
{
  "personalInfo": {
    "name": "Salim Taha Yacine",
    "title": "Front-end Developer, Back-end Developer, Mobile Developer, Designer",
    "email": "Salimtahayacine@gmail.com",
    "phone": "+212 708044605"
  },
  "skills": {
    "skills": [
      {"name": "HTML", "level": "90%"},
      {"name": "JavaScript", "level": "75%"}
    ]
  },
  "experience": [
    {
      "title": "Développeur Web Full-Stack",
      "period": "Janvier 2025 - Aujourd'hui",
      "company": "Attime Technologie",
      "responsibilities": [...]
    }
  ],
  "portfolio": {
    "projects": [
      {
        "title": "SGIA",
        "description": "...",
        "image": "..."
      }
    ]
  }
}
```

## Features

- **Comprehensive Extraction**: Captures all major sections of the portfolio website
- **Structured Format**: Clean JSON structure for easy programmatic access
- **Timestamp**: Includes extraction timestamp for version tracking
- **Error Handling**: Graceful handling of missing or malformed data
- **Scalable**: Easy to extend for additional data fields

## Use Cases

1. **Portfolio APIs**: Serve profile data via RESTful endpoints
2. **Dynamic Resume Generation**: Create PDF or Word documents from structured data
3. **Job Applications**: Export data to job portals in required formats
4. **Data Backup**: Maintain structured backup of profile information
5. **Analytics**: Analyze career progression and skill development
6. **Multi-platform Publishing**: Share consistent profile data across platforms
7. **Search Optimization**: Enable better indexing and searchability
8. **Integration**: Connect with CRM, ATS, or other business systems

## Maintenance

To update the profile data:
1. Make changes to `index.html`
2. Run the extraction script: `node extract-profile-data.js`
3. The `profile-data.json` file will be automatically updated

## Requirements

- Node.js (v12 or higher)
- Access to `index.html` file in the same directory

## Output Files

- **profile-data.json**: Complete structured profile data in JSON format
- Console output with extraction summary and statistics

## Benefits

✅ **Machine-Readable**: Easy to parse and process programmatically  
✅ **Version Control**: Track changes to profile data over time  
✅ **Reusable**: Use the same data across multiple platforms  
✅ **Maintainable**: Single source of truth for profile information  
✅ **Flexible**: Easy to extend with additional fields  
✅ **Portable**: Standard JSON format works everywhere  

## Future Enhancements

Possible extensions to consider:
- Add support for multiple HTML files
- Export to different formats (CSV, XML, YAML)
- Generate resume PDFs automatically
- Integrate with LinkedIn API
- Add data validation schemas
- Create REST API wrapper
- Build interactive dashboard
