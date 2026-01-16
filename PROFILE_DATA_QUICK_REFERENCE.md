# Profile Data Quick Reference

## Quick Start

```bash
# Extract data from index.html
node extract-profile-data.js

# Run usage examples
node example-usage.js
```

## Data Structure Overview

```javascript
{
  personalInfo: {
    name, title, birthday, phone, email, city, degree, freelance, website, image
  },
  about: {
    title, description, fullDescription
  },
  skills: {
    title, description,
    skills: [{ name, level }]
  },
  education: [
    { degree, period, institution }
  ],
  experience: [
    { title, period, company, responsibilities: [] }
  ],
  portfolio: {
    title, description,
    projects: [{ image, title, description }]
  },
  services: {
    title, description,
    services: [{ title, description }]
  },
  socialLinks: {
    twitter, facebook, instagram, linkedin, skype
  },
  contact: {
    location, email, phone
  },
  extractedAt: "ISO timestamp"
}
```

## Common Use Cases

### 1. Load Data in JavaScript
```javascript
const profileData = require('./profile-data.json');
console.log(profileData.personalInfo.name);
```

### 2. Filter Skills by Level
```javascript
const highSkills = profileData.skills.skills.filter(s => 
  parseInt(s.level) >= 75
);
```

### 3. Get Recent Projects
```javascript
const recentProjects = profileData.portfolio.projects.slice(0, 3);
```

### 4. Export to API Format
```javascript
const apiResponse = {
  name: profileData.personalInfo.name,
  email: profileData.contact.email,
  skills: profileData.skills.skills.map(s => s.name)
};
```

### 5. Search Technologies
```javascript
const hasJava = profileData.skills.skills.some(s => 
  s.name.toLowerCase().includes('java')
);
```

## Files Created

1. **extract-profile-data.js** - Main extraction script
2. **profile-data.json** - Generated structured data (10 sections, ~400 lines)
3. **example-usage.js** - 14 usage examples
4. **PROFILE_DATA_README.md** - Complete documentation
5. **PROFILE_DATA_QUICK_REFERENCE.md** - This file

## Statistics

- **Personal Info**: 10 fields
- **Skills**: 10 technical skills with proficiency levels
- **Education**: 5 degrees/certifications
- **Experience**: 5 professional positions
- **Portfolio**: 6 major projects
- **Services**: 6 service categories
- **Social Links**: 3 active platforms

## Integration Examples

### REST API
```javascript
app.get('/api/profile', (req, res) => {
  res.json(require('./profile-data.json'));
});
```

### GraphQL
```graphql
type PersonalInfo {
  name: String
  title: String
  email: String
  phone: String
}
```

### Database Import
```javascript
// MongoDB
db.profiles.insertOne(profileData);

// SQL
INSERT INTO profiles (data) VALUES (JSON.stringify(profileData));
```

## Update Workflow

1. Edit `index.html` with new information
2. Run `node extract-profile-data.js`
3. Verify `profile-data.json` updated correctly
4. Deploy changes

## Benefits

✅ **Machine-readable** - Easy programmatic access  
✅ **Version controlled** - Track changes over time  
✅ **Portable** - Standard JSON format  
✅ **Complete** - All profile sections included  
✅ **Structured** - Consistent field naming  
✅ **Timestamped** - Know when data was extracted  

## Support

For detailed documentation, see [PROFILE_DATA_README.md](PROFILE_DATA_README.md)  
For usage examples, see [example-usage.js](example-usage.js)  
For extraction logic, see [extract-profile-data.js](extract-profile-data.js)
