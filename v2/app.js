/* Portfolio v2 – Salim Taha Yacine (vanilla JS, no dependencies) */
(function () {
  "use strict";

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const GITHUB_USER = "salimtahayacine";

  /* ---------- English translations (French is the HTML source) ---------- */
  const EN = {
    "skip": "Skip to content",
    "nav.about": "About", "nav.experience": "Experience", "nav.projects": "Projects", "nav.skills": "Skills", "nav.contact": "Contact",
    "hero.badge": "Open to opportunities · Full-time &amp; freelance",
    "hero.role": "Full-Stack Developer <strong>Java / Spring Boot</strong> &amp; <strong>Angular</strong>",
    "hero.pitch": "I design and build business web applications end to end, from the API to the user interface. 4+ years of experience on public-sector platforms: NARSA, Ministry of Housing, Hassan II University, Ministry of Equipment and Water.",
    "hero.cta1": "Get in touch", "hero.cta2": "Download my resume",
    "stats.years": "years of development experience", "stats.projects": "professional projects",
    "stats.gov": "public-sector clients", "stats.tech": "certifications (IBM, Google…)",
    "about.title": "About",
    "about.p1": "I've been passionate about the web since 2014, when I started building pages and forums with HTML/CSS. After a specialised technician diploma (ISTA NTIC) and a professional bachelor's degree in mobile application engineering (FST Settat), I specialised in Java Full-Stack development. I'm now studying for a Master's degree in Software Engineering and Information Systems Management (ILMSI).",
    "about.p2": "I've worked on very different products: a collaborative project management tool, a company qualification system with electronic signature, a mapping application, moped registration management for NARSA and, today, maintaining and securing Hassan II University's digital workspace. What drives me: understanding the client's business and shipping reliable software that genuinely makes its users' work easier.",
    "about.v1.t": "Business applications", "about.v1.d": "Workflows, document generation (reports, certificates), electronic signature, dashboards.",
    "about.v2.t": "Autonomous Full-Stack", "about.v2.d": "Spring Boot APIs, Angular or Vue.js front ends, databases and production deployment.",
    "about.v3.t": "Public &amp; sensitive contexts", "about.v3.d": "Used to public-sector requirements: security, traceability, role management.",
    "exp.title": "Experience",
    "exp.role.fs": "Full-Stack Web Developer", "exp.role.fs2": "Full-Stack Developer", "exp.role.sales": "Sales &amp; IT assistant", "exp.role.intern": "Full-Stack Developer (internship)",
    "exp.1.date": "Jan 2025 - present", "exp.2.date": "Sep 2023 - Dec 2024", "exp.3.date": "Sep 2022 - Aug 2023", "exp.4.date": "Jan 2018 - Sep 2020", "exp.5.date": "Jan 2017 - Apr 2017",
    "exp.1.b4": "<strong>ENT – Hassan II University</strong> (Jun 2026 - present): maintenance of the university's digital workspace and security vulnerability fixes.",
    "exp.1.b3": "<strong>MATNUHPV</strong> (since Jan 2026): maintenance of the Ministry of Housing's Qualification and Tahssine applications.",
    "exp.1.b2": "<strong>NARSA – Mopeds</strong> (Sep 2025 - Jan 2026): moped registration certificate platform: registration, transfer and duplicate requests, oppositions, plate number reservation, French / Arabic interface.",
    "exp.1.b1": "<strong>SGIA</strong> (2025): Investment and Procurement Management System for the Ministry of Equipment and Water.",
    "exp.2.b1": "Designed and built an application tracking company qualification requests for the “Habitat” sector, with automatic generation of official reports and certificates.",
    "exp.2.b2": "Built an electronic signature API integrated into the certification process.",
    "exp.2.b3": "Built a mapping application to track projects geographically, with filters, calculations and charts (OpenLayers, Apache ECharts).",
    "exp.3.b1": "Built a Kanban-style collaborative project management app: team workspaces, lists and task cards.",
    "exp.3.b2": "Reactive back end with Vert.x and Spring Boot, Vue.js 3 and Tailwind CSS front end, containerised with Docker.",
    "exp.4.b1": "Invoicing, customer portfolio and sales follow-up: field experience that helps me understand business users' needs today.",
    "exp.5.b1": "Java 8, object-oriented programming and first back-end services with Spring Boot.",
    "proj.title": "Projects",
    "proj.intro": "Projects built in a professional context. They are confidential, but I'm happy to walk through their architecture and technical choices in an interview.",
    "proj.k.gov": "Government platform", "proj.k.web": "Web application", "proj.k.saas": "Collaboration tool", "proj.k.sec": "Security",
    "proj.k.maint": "Maintenance &amp; security", "proj.k.maint2": "Maintenance",
    "proj.n.t": "NARSA – Moped registration certificates",
    "proj.n.d": "National Road Safety Agency: registration, transfer and duplicate requests, oppositions, plate number reservation, roles and permissions, bilingual French / Arabic interface (RTL).",
    "proj.e.t": "ENT – Hassan II University", "proj.e.d": "Maintenance of the digital workspace and security vulnerability fixes.",
    "proj.m.t": "MATNUHPV – Qualification &amp; Tahssine", "proj.m.d": "Maintenance of the Qualification and Tahssine applications of the Ministry of Territorial Planning, Urban Planning and Housing.", "proj.m.tag": "Public sector",
    "proj.1.d": "Investment and Procurement Management System for the Ministry of Equipment and Water: managing spending and public contracts.",
    "proj.2.t": "“Habitat” company qualification", "proj.2.d": "Qualification request tracking, automatic generation of reports and certificates, electronic signature.",
    "proj.3.t": "Electronic signature API", "proj.3.d": "Signing service for the official documents produced by the qualification platform.",
    "proj.4.t": "Project mapping", "proj.4.d": "Projects on an interactive map with multi-criteria filters, calculations and charts.",
    "proj.5.t": "Kanban project management", "proj.5.d": "Team workspaces, lists and task cards by status (to do, in progress, done).",
    "proj.6.t": "JWT authentication", "proj.6.d": "Token-based authentication, roles and permissions with Spring Security.",
    "proj.gh": "On GitHub", "proj.ghlink": "See my public repositories on GitHub ↗",
    "skills.title": "Skills", "skills.data": "Data", "skills.tools": "Tools &amp; DevOps", "skills.soft": "Soft skills",
    "skills.s1": "Business understanding", "skills.s2": "Autonomy", "skills.s3": "Teamwork", "skills.s4": "Continuous learning",
    "edu.title": "Education",
    "edu.0": "Master's degree ILMSI – Software Engineering and Information Systems Management", "edu.0d": "In progress · 2025-2027",
    "edu.1": "Professional bachelor's degree – Mobile application engineering",
    "edu.2": "Vocational training – Software development",
    "edu.3": "Specialised technician diploma – Software development",
    "edu.4": "Baccalaureate – Physics and chemistry",
    "cert.title": "Certifications",
    "contact.title": "Contact",
    "contact.lead": "Hiring a Java Full-Stack developer or have a project in mind? Send me a message and I'll get back to you quickly.",
    "contact.email": "Email", "contact.phone": "Phone", "contact.place": "Location", "contact.city": "Temara / Rabat, Morocco",
    "form.name": "Name", "form.email": "Email", "form.message": "Message", "form.send": "Send",
    "footer": "Hosted on GitHub Pages.", "footer.top": "Back to top ↑"
  };

  const UI = {
    fr: { sending: "Envoi en cours…", sent: "Merci ! Votre message a bien été envoyé.", error: "Échec de l'envoi. Écrivez-moi directement à salimtahayacine@gmail.com.",
          langBtn: "EN", langLabel: "Switch to English", theme: "Changer de thème", updated: "Mis à jour", noDesc: "Pas de description." },
    en: { sending: "Sending…", sent: "Thanks! Your message has been sent.", error: "Sending failed. Email me directly at salimtahayacine@gmail.com.",
          langBtn: "FR", langLabel: "Passer en français", theme: "Toggle theme", updated: "Updated", noDesc: "No description." }
  };

  /* ---------- Language ---------- */
  const FR = {};
  $$("[data-i18n]").forEach(el => { FR[el.dataset.i18n] = el.innerHTML; });
  const frTitle = document.title;
  let lang = localStorage.getItem("lang") || "fr";

  function applyLang(l) {
    lang = l;
    document.documentElement.lang = l;
    $$("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      const value = l === "en" ? EN[key] : FR[key];
      if (value !== undefined) el.innerHTML = value;
    });
    document.title = l === "en" ? "Salim Taha Yacine | Full-Stack Developer Java / Spring Boot & Angular" : frTitle;
    const btn = $("#lang-toggle");
    btn.textContent = UI[l].langBtn;
    btn.setAttribute("aria-label", UI[l].langLabel);
    $("#theme-toggle").setAttribute("aria-label", UI[l].theme);
    localStorage.setItem("lang", l);
    renderRepos();
  }
  $("#lang-toggle").addEventListener("click", () => applyLang(lang === "fr" ? "en" : "fr"));

  /* ---------- Theme ---------- */
  $("#theme-toggle").addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });

  /* ---------- Mobile menu ---------- */
  const nav = $("#nav");
  const menuBtn = $("#menu-toggle");
  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  $$("a", nav).forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  }));

  /* ---------- Sticky header border + active link ---------- */
  const topbar = $(".topbar");
  const links = $$("a", nav);
  const sections = links.map(a => $(a.getAttribute("href"))).filter(Boolean);
  function onScroll() {
    topbar.classList.toggle("scrolled", window.scrollY > 10);
    let current = null;
    sections.forEach(s => { if (s.getBoundingClientRect().top < 140) current = s.id; });
    links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Reveal on scroll ---------- */
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    $$(".reveal").forEach(el => io.observe(el));
  } else {
    $$(".reveal").forEach(el => el.classList.add("visible"));
  }

  /* ---------- GitHub repositories ---------- */
  let repos = null;
  const escapeHtml = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function renderRepos() {
    const box = $("#repos");
    if (!repos || !repos.length) return;
    const fmt = new Intl.DateTimeFormat(lang === "en" ? "en-GB" : "fr-FR", { month: "short", year: "numeric" });
    box.innerHTML = repos.map(r => `
      <a class="card repo" href="${escapeHtml(r.html_url)}" target="_blank" rel="noopener">
        <h4>${escapeHtml(r.name)}</h4>
        <p>${escapeHtml(r.description || UI[lang].noDesc)}</p>
        <div class="repo-meta">
          ${r.language ? `<span>${escapeHtml(r.language)}</span>` : ""}
          ${r.stargazers_count ? `<span>★ ${r.stargazers_count}</span>` : ""}
          <span>${UI[lang].updated} ${fmt.format(new Date(r.pushed_at))}</span>
        </div>
      </a>`).join("") +
      `<p class="repos-fallback"><a href="https://github.com/${GITHUB_USER}?tab=repositories" target="_blank" rel="noopener">${lang === "en" ? EN["proj.ghlink"] : FR["proj.ghlink"]}</a></p>`;
  }

  fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=pushed&per_page=30`)
    .then(r => (r.ok ? r.json() : Promise.reject(r.status)))
    .then(list => {
      repos = list
        .filter(r => !r.fork && !r.archived && r.name.toLowerCase() !== `${GITHUB_USER}.github.io`)
        .sort((a, b) => (b.stargazers_count - a.stargazers_count) || (new Date(b.pushed_at) - new Date(a.pushed_at)))
        .slice(0, 6);
      renderRepos();
    })
    .catch(() => { /* keep the static fallback link */ });

  /* ---------- Contact form (FormSubmit, GitHub Pages has no backend) ---------- */
  const form = $("#contact-form");
  const status = $(".form-status", form);
  form.addEventListener("submit", async e => {
    e.preventDefault();
    const btn = $("button[type=submit]", form);
    btn.disabled = true;
    status.className = "form-status";
    status.textContent = UI[lang].sending;
    try {
      const res = await fetch(form.action.replace("formsubmit.co/", "formsubmit.co/ajax/"), {
        method: "POST", headers: { Accept: "application/json" }, body: new FormData(form)
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || String(data.success) === "false") throw new Error();
      status.textContent = UI[lang].sent;
      status.classList.add("ok");
      form.reset();
    } catch (_) {
      status.textContent = UI[lang].error;
      status.classList.add("err");
    } finally {
      btn.disabled = false;
    }
  });

  /* ---------- Year ---------- */
  $("#year").textContent = new Date().getFullYear();

  if (lang !== "fr") applyLang(lang);
})();
