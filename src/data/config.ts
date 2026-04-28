/**
 * SITE CONFIG — single source of truth.
 * Edit any value here and the entire site updates.
 *
 * Sections you can toggle on/off, reorder, or extend:
 *  - personal, hero, about, experience, projects,
 *    skills, achievements, education, contact, social
 *
 * To rebuild after editing: `npm run dev` (auto-reloads)
 */

export type SocialLink = {
  label: string;
  href: string;
  icon:
    | "github"
    | "linkedin"
    | "leetcode"
    | "twitter"
    | "mail"
    | "phone"
    | "external";
};

export type Project = {
  title: string;
  period: string;
  summary: string;
  bullets: string[];
  tech: string[];
  links?: { label: string; href: string }[];
  highlight?: string; // e.g. "Featured"
};

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  location?: string;
  bullets: string[];
  tech?: string[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Achievement = {
  title: string;
  detail: string;
  href?: string;
  date?: string;
};

export type EducationItem = {
  degree: string;
  institution: string;
  location?: string;
  period: string;
  score?: string;
};

export type RoleItem = {
  title: string;
  org: string;
  detail: string;
};

export const config = {
  /* -------------------- PERSONAL -------------------- */
  personal: {
    name: "Anmol Saini",
    firstName: "Anmol",
    lastName: "Saini",
    title: "AI Engineer & Full-Stack Developer",
    tagline:
      "Mathematics & Computing undergrad building intelligent systems — from LLM-powered security tools to end-to-end ML pipelines.",
    location: "Amethi, India",
    email: "anmolsaini87.40@gmail.com",
    secondaryEmail: "22mc3006@rgipt.ac.in",
    phone: "+91 7849979009",
    resumeUrl: "/resume.pdf", // place your PDF in /public as resume.pdf
    profileImage: "", // optional: e.g. "/profile.jpg" placed in /public
    available: true, // shows "Available for opportunities" pill in hero
  },

  /* -------------------- HERO -------------------- */
  hero: {
    greeting: "Hi, I'm",
    rotatingTitles: [
      "AI Engineer",
      "Full-Stack Developer",
      "ML Researcher",
      "Problem Solver",
    ],
    bio:
      "B.Tech in Mathematics & Computing at RGIPT. I build AI-powered systems — from RAG-based pentesting frameworks to image optimization pipelines and NLP tools. Smart India Hackathon 2024 winner.",
    cta: {
      primary: { label: "View Projects", href: "#projects" },
      secondary: { label: "Download Resume", href: "/resume.pdf" },
    },
    stats: [
      { value: "8.42", label: "CGPA" },
      { value: "10+", label: "Projects" },
      { value: "1", label: "SIH Win" },
    ],
  },

  /* -------------------- ABOUT -------------------- */
  about: {
    heading: "About Me",
    paragraphs: [
      "I'm a final-year B.Tech student in Mathematics and Computing at Rajiv Gandhi Institute of Petroleum Technology, with a strong focus on applied AI, machine learning, and full-stack engineering.",
      "Most recently, I worked as an AI Security Researcher at PMO India, where I built an AI-powered pentesting framework using RAG, FAISS embeddings, and Unsloth-QLoRA fine-tuning for CVE mapping and remediation.",
      "I enjoy turning research-grade ideas into shipped products — whether that's a content-aware image optimizer, a privacy-focused browser extension, or an LLM-driven analytics pipeline.",
    ],
    quickFacts: [
      { label: "Currently", value: "Final-year B.Tech, RGIPT" },
      { label: "Focus", value: "Applied AI · ML · NLP" },
      { label: "Looking for", value: "SDE / ML Engineer roles" },
    ],
  },

  /* -------------------- EXPERIENCE -------------------- */
  experience: [
    {
      role: "AI Security Researcher",
      org: "PMO India",
      period: "Jun 2025 – Aug 2025",
      location: "Remote",
      bullets: [
        "Built an AI-powered vulnerability analysis & pentesting framework integrating RAG, FAISS embeddings, and few-shot learning; fine-tuned with Unsloth-QLoRA for CVE mapping and remediation guidance.",
        "Developed a conversational chatbot for penetration testing queries, attack-chain analysis, and defensive strategies.",
        "Conducted red-team vulnerability scanning on multiple websites to identify exploitable risks and recommend mitigation measures.",
      ],
      tech: ["Python", "RAG", "FAISS", "Unsloth", "QLoRA", "LLMs"],
    },
  ] as ExperienceItem[],

  /* -------------------- PROJECTS -------------------- */
  projects: [
    {
      title: "AI-Driven Smart Image Optimization Suite",
      period: "Apr 2025 – May 2025",
      summary:
        "Content-aware image compression engine combining classical ML and deep learning super-resolution.",
      bullets: [
        "Built a compression engine using Random Forest to predict optimal SVD rank and JPEG quality from image entropy — achieving 95% SSIM.",
        "Implemented smart presets (Passport, Social) and WebP support, reducing file sizes by ~60–80% while preserving perceptual fidelity.",
        "Integrated FSRCNN deep super-resolution to upscale and restore low-quality images by 2×.",
      ],
      tech: ["Python", "OpenCV", "Scikit-learn", "TensorFlow", "Streamlit"],
      links: [{ label: "View Project", href: "#" }],
      highlight: "Featured",
    },
    {
      title: "Dark Pattern Detector (DigiCom)",
      period: "Jan 2024 – Feb 2024",
      summary:
        "Privacy-focused browser extension detecting deceptive UX patterns on e-commerce sites.",
      bullets: [
        "Detects dark patterns (false urgency, scarcity, etc.) on live e-commerce pages.",
        "Fine-tuned DistilBERT on 3,000+ labeled snippets — 93% multi-class accuracy.",
        "Built a lightweight Flask API for fast inference and dynamic UI highlighting.",
      ],
      tech: ["PyTorch", "Transformers", "Flask", "JavaScript", "HTML/CSS"],
      links: [{ label: "View Project", href: "#" }],
    },
    {
      title: "ChatLens: Intelligent Insight Extractor",
      period: "Jul 2025 – Aug 2025",
      summary:
        "Pipeline that turns multilingual chat exports into stakeholder-ready insight summaries.",
      bullets: [
        "Parses multilingual chat exports, translates to English, and prioritizes messages via keyword scoring.",
        "Uses Google T5 for threshold-based summarization to extract key insights and reduce noise.",
        "Generates structured frequency logs and produces both an HTML stakeholder summary and a JSON debug file.",
      ],
      tech: ["Python", "Flask", "T5", "Google Translate API", "BeautifulSoup"],
      links: [{ label: "View Project", href: "#" }],
    },
  ] as Project[],

  /* -------------------- SKILLS -------------------- */
  skills: [
    {
      category: "Programming",
      items: ["Python", "C++", "R", "JavaScript", "TypeScript"],
    },
    {
      category: "Backend & Web",
      items: ["Node.js", "Express.js", "React.js", "Next.js", "REST APIs", "Flask"],
    },
    {
      category: "Databases",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Query Optimization"],
    },
    {
      category: "Data Science & AI",
      items: ["Pandas", "NumPy", "SciPy", "Scikit-learn", "PyTorch", "TensorFlow", "CNNs", "RNNs"],
    },
    {
      category: "NLP & LLMs",
      items: [
        "Hugging Face Transformers",
        "BERT / GPT",
        "LangChain",
        "LlamaIndex",
        "RAG",
        "SpaCy",
        "NLTK",
      ],
    },
    {
      category: "Deployment & Tools",
      items: ["Git/GitHub", "AWS EC2", "MLflow", "Streamlit", "Hugging Face Spaces", "Docker"],
    },
    {
      category: "Fundamentals",
      items: ["DSA", "OOP", "System Design", "Time/Space Complexity"],
    },
  ] as SkillGroup[],

  /* -------------------- ACHIEVEMENTS -------------------- */
  achievements: [
    {
      title: "Smart India Hackathon 2024 — Winner",
      detail: "Winner among 71 participating teams from across India.",
      date: "2024",
      href: "#",
    },
    {
      title: "DPBH '23 Finalist — IIT BHU",
      detail: "Finalist at DPBH 2023 organized by Ministry of Consumer Affairs, GOI.",
      date: "2023",
      href: "#",
    },
    {
      title: "RBI90 Quiz — State Finalist",
      detail: "State Finalist of the RBI90 Quiz Competition organized by RBI.",
      date: "2023",
      href: "#",
    },
    {
      title: "IIT JEE Advanced Qualified",
      detail: "Qualified IIT JEE Advanced 2022.",
      date: "2022",
    },
  ] as Achievement[],

  /* -------------------- EDUCATION -------------------- */
  education: [
    {
      degree: "B.Tech in Mathematics and Computing",
      institution: "Rajiv Gandhi Institute of Petroleum Technology",
      location: "Jais, Amethi",
      period: "2022 – 2026",
      score: "CGPA: 8.42 / 10",
    },
    {
      degree: "Senior Secondary (CBSE)",
      institution: "UCSKM Public School, Bhiwadi",
      location: "Rajasthan",
      period: "2019 – 2021",
      score: "94.4% (XII) · 87.4% (X)",
    },
  ] as EducationItem[],

  /* -------------------- ROLES & ACTIVITIES -------------------- */
  roles: [
    {
      title: "Head & Mentor (Chemistry)",
      org: "Gyanarpan Project, Amethi",
      detail:
        "Led 150 volunteers; taught Math & Chemistry to underprivileged Class 11–12 students; conducted 80+ classes.",
    },
    {
      title: "Teaching Assistant",
      org: "RGIPT",
      detail:
        "Assisted 1st & 2nd-year students in Fundamentals of Electronics Engineering & Engineering Thermodynamics.",
    },
    {
      title: "R&D Executive",
      org: "Astronomy Club — Science & Tech Council, RGIPT",
      detail: "Drove research initiatives within the Astronomy Club.",
    },
    {
      title: "Event Management Executive",
      org: "OWASP RGIPT",
      detail: "Organized cybersecurity events and workshops.",
    },
  ] as RoleItem[],

  /* -------------------- SOCIAL LINKS -------------------- */
  social: [
    { label: "GitHub", href: "https://github.com/", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
    { label: "LeetCode", href: "https://leetcode.com/", icon: "leetcode" },
    { label: "Email", href: "mailto:anmolsaini87.40@gmail.com", icon: "mail" },
  ] as SocialLink[],

  /* -------------------- NAV -------------------- */
  nav: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ],

  /* -------------------- META / SEO -------------------- */
  meta: {
    siteUrl: "https://anmolsaini.vercel.app",
    title: "Anmol Saini — AI Engineer & Full-Stack Developer",
    description:
      "Portfolio of Anmol Saini — Mathematics & Computing undergrad at RGIPT building AI systems, ML pipelines, and full-stack apps.",
    keywords: [
      "Anmol Saini",
      "Portfolio",
      "AI Engineer",
      "Machine Learning",
      "Full Stack Developer",
      "RGIPT",
    ],
    ogImage: "/og.png", // optional
  },

  /* -------------------- THEME (cosmetic toggles) -------------------- */
  theme: {
    accent: "violet", // visual accent — currently informational; colors live in tailwind.config
    showRotatingTitle: true,
    showStats: true,
    showQuickFacts: true,
  },
};

export type SiteConfig = typeof config;
