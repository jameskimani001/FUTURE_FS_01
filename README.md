# 🌐 Techie Kim's Personal Portfolio Website

Welcome to my responsive and SEO-optimized personal portfolio website! I'm **Techie Kim**, a passionate software engineering student and full-stack developer based in Nairobi, Kenya. This portfolio showcases my skills, projects, experience, and blog posts in a clean, modern interface.

Live Site: [🔗 View Portfolio on Netlify](https://your-netlify-link.netlify.app)

  ## 🎯 Objective

The aim of this project is to build a **production-ready, mobile-first** portfolio website that:

- Represents my personal brand as a software engineer.
- Showcases my resume, projects, and technical journey.
- Offers dynamic blog and contact capabilities.
- Ensures fast performance and search engine visibility.

## 🛠️ Tech Stack

### Frontend
- **React.js** (SPA Architecture)
- **HTML5, CSS3, JavaScript (ES6+)**
- **Tailwind CSS** (with SCSS/CSS-in-JS support)
- **TypeScript**
- **AOS** (scroll animations)
- **Dark Mode Toggle**

### Backend *(optional)*
- **Node.js + Express.js**
- **Nodemailer** for contact form
- **MySQL** for blog or contact data (optional)

### Deployment
- **Frontend**: [Netlify](https://www.netlify.com/)
- **Domain**: (optional, via Namecheap/Cloudflare)

## ✨ Key Features

### 🔹 Homepage
- Hero section with greeting, tagline, and profile image
- Call-to-action buttons (View Resume, Projects, Contact)

### 🔹 About Me
- Personal background, education, and mission
- Key skills with icons and progress indicators
- Downloadable Resume (PDF)

### 🔹 Projects
- Grid/list of featured projects
- Each with image, title, description, tech tags, live link, and GitHub repo

### 🔹 Experience
- Timeline format: Education, Internships, Work Experience
- Roles with description, timeline, and location

### 🔹 Contact
- Functional contact form (Netlify or Node.js backend)
- Real-time validation
- Email notifications
- Netlify form handling + success/error messages

### 🔹 Blog *(optional)*
- Dynamic blog system powered by MySQL
- Admin panel for blog entry (future feature)

### 🔹 SEO & Performance
- Meta & OpenGraph tags
- Sitemap.xml & robots.txt
- Lazy-loading images, clean semantic HTML
- Optimized build & mobile-first responsiveness

## 🧾 Real Experience

### 💼 Work Experience
- **Future Interns** (Full Stack Developer Intern) – Present
- **Olkalou Dairy Ltd** – IT Department Intern (Mar 2024 - Jul 2024)
- **Chili’s Cyber-Shop** – IT Assistant (2020)
- **Tunza Mazingira Club** – Volunteer IT Technician (2019)

### 🎓 Education & Certifications
- **Moringa School** – Software Engineering (Expected Mar 2025)
- Generative AI – LinkedIn Learning
- Full Stack Internship Program – Edureka
- JavaScript for Web Dev – Coursera
- React Native for Beginners – Udemy


## 📄 File Structure Overview
src/
│
├── components/
│ ├── Header.tsx
│ ├── Hero.tsx
│ ├── About.tsx
│ ├── Skills.tsx
│ ├── Projects.tsx
│ ├── Experience.tsx
│ ├── Contact.tsx
│ └── Footer.tsx
│
├── contexts/
│ └── ThemeContext.tsx
│
├── App.tsx
├── index.html
├── tailwind.config.js
├── netlify.toml
└── public/_redirects


---

## 🚀 Deployment Guide (Netlify)

### 1. **Connect Your GitHub Repo**
Push your code to GitHub.

### 2. **Deploy to Netlify**
- Go to [Netlify](https://app.netlify.com/)
- Link your GitHub repository
- Set build command: `npm run build`
- Publish directory: `dist` or `build` (based on framework)

### 3. **Netlify Configuration**
Make sure the following files exist:
- `netlify.toml` (custom build settings)
- `public/_redirects` (SPA fallback routing)

---

## 📬 Contact Info

- **Email**: [jameskim092t@gmail.com](mailto:jameskim092t@gmail.com)
- **Phone**: +254 792 423 483
- **Location**: Nairobi, Kenya

---

## 📌 Future Enhancements

- Dynamic admin dashboard to manage blog/posts
- Google reCAPTCHA on contact form
- Full internationalization (i18n)
- PWA support and service worker integration

## 🙌 Acknowledgements

- UI inspired by modern design principles and developer portfolios
- Learning resources from Moringa School, LinkedIn Learning, Coursera, and Edureka

## 📃 License

This project is open source and available under the [MIT License](LICENSE).

**Made with 💻 by Techie Kim**
