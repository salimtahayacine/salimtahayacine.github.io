# Salim Taha Yacine - Portfolio Website

Personal portfolio website showcasing professional experience, skills, projects, and contact information.

## 🌐 Live Website

Visit: [salimtahayacine.github.io](https://salimtahayacine.github.io)

## 👨‍💻 About

This is a professional portfolio website for **Salim Taha Yacine**, a Full-Stack Web and Mobile Developer specializing in:
- Frontend Development (React.js, Vue.js, Angular)
- Backend Development (Java, Spring Boot, Vert.x)
- Mobile Development (React Native, Android Studio)
- UI/UX Design

## ✨ Features

- **Responsive Design** - Works on all devices (desktop, tablet, mobile)
- **Modern UI/UX** - Clean and professional interface
- **Multiple Sections**:
  - About Me
  - Skills with proficiency levels
  - Education history
  - Professional experience
  - Portfolio/Projects showcase
  - Services offered
  - Contact form
  - Testimonials
- **Animated Elements** - Smooth scrolling and transitions
- **Social Media Integration** - Links to professional profiles

## 🆕 Profile Data Extraction

This repository now includes tools to extract and structure profile information from the HTML into machine-readable JSON format.

### Quick Start

```bash
# Extract data from index.html
node extract-profile-data.js

# View usage examples
node example-usage.js
```

### What Gets Extracted?

- ✅ Personal information (name, contact, location)
- ✅ Professional titles and roles
- ✅ Skills with proficiency percentages
- ✅ Education history (5 entries)
- ✅ Work experience (5 positions)
- ✅ Portfolio projects (6 projects)
- ✅ Services offered
- ✅ Social media links
- ✅ Contact information

### Generated Files

1. **profile-data.json** - Complete structured data
2. **PROFILE_DATA_README.md** - Full documentation
3. **PROFILE_DATA_QUICK_REFERENCE.md** - Quick reference guide
4. **example-usage.js** - 14 usage examples

### Use Cases

- 📊 Export to different formats (CSV, PDF)
- 🔌 Create REST/GraphQL APIs
- 💾 Import into databases
- 🔍 Enable search and filtering
- 📱 Build mobile apps with same data
- 🤖 Power chatbots and AI assistants
- 📄 Auto-generate resumes

See [PROFILE_DATA_README.md](PROFILE_DATA_README.md) for detailed documentation.

## 🛠️ Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5
- AOS (Animate On Scroll)
- Typed.js
- Swiper.js

### Backend (Projects)
- Java / Spring Boot
- Node.js / Express.js
- PostgreSQL / MongoDB
- Vue.js 3
- Angular
- React.js

### Tools & Platforms
- Git/GitHub
- IntelliJ IDEA
- VS Code
- Docker
- GitLab CI/CD

## 📂 Project Structure

```
.
├── index.html                          # Main portfolio page
├── portfolio-details.html              # Portfolio details page
├── extract-profile-data.js            # Data extraction script
├── profile-data.json                  # Generated structured data
├── example-usage.js                   # Usage examples
├── assets/
│   ├── css/
│   │   └── style.css                  # Custom styles
│   ├── js/
│   │   └── main.js                    # Main JavaScript
│   ├── img/                           # Images and portfolio screenshots
│   └── vendor/                        # Third-party libraries
├── forms/
│   └── contact.php                    # Contact form handler
└── README.md                          # This file
```

## 🚀 Getting Started

### View Locally

1. Clone the repository
```bash
git clone https://github.com/salimtahayacine/salimtahayacine.github.io.git
cd salimtahayacine.github.io
```

2. Open in browser
```bash
# Simple HTTP server with Python
python -m http.server 8000

# Or with Node.js
npx http-server
```

3. Visit `http://localhost:8000`

### Extract Profile Data

```bash
# Requires Node.js
node extract-profile-data.js
```

## 📊 Profile Statistics

- **Skills**: 10+ technical skills
- **Experience**: 5+ professional positions
- **Projects**: 6+ major projects completed
- **Education**: 5 degrees and certifications
- **Languages**: HTML, CSS, JavaScript, Java, Kotlin
- **Frameworks**: Spring Boot, Vue.js, React, Angular, React Native

## 💼 Professional Experience

### Current Position
**Full-Stack Developer** @ Attime Technologie (Jan 2025 - Present)
- Working on SGIA - Government investment and procurement management platform

### Recent Experience
- **I2S Ingénierie** - Full-Stack Developer (Sept 2023 - Dec 2024)
- **DEVOX** - Full-Stack Developer (Sept 2022 - Aug 2023)

See [profile-data.json](profile-data.json) for complete work history.

## 📫 Contact

- **Email**: Salimtahayacine@gmail.com
- **Phone**: +212 708044605
- **Location**: Temara, Morocco
- **LinkedIn**: [Taha Yacine Salim](https://www.linkedin.com/in/taha-yacine-salim-4606a8225)
- **Facebook**: [tahayacine.salim](https://www.facebook.com/tahayacine.salim)
- **Instagram**: [@stronglover](https://www.instagram.com/stronglover)
- **Freelance**: Fiverr, UpWork

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Template: MyResume by BootstrapMade
- Icons: Bootstrap Icons, Boxicons
- Animations: AOS Library
- Fonts: Google Fonts

## 🔄 Updates

This portfolio is regularly updated with new projects and experiences.
Last data extraction: Check `extractedAt` field in `profile-data.json`

---

⭐ **Looking for opportunities!** Feel free to reach out if you're interested in collaboration or have job opportunities.

Made with ❤️ by Salim Taha Yacine
