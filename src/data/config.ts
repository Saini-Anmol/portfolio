/**
 * SITE CONFIG — single source of truth.
 * Edit any value here and the entire site updates.
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
  highlight?: string;
};

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  location?: string;
  bullets: string[];
  tech?: string[];
  current?: boolean;
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
    title: "Data Scientist",
    company: "Algo8 AI",
    tagline:
      "Data Scientist at Algo8 AI building production-grade ML systems.",
    location: "India",
    email: "anmolsaini87.40@gmail.com",
    secondaryEmail: "22mc3006@rgipt.ac.in",
    phone: "+91 7849979009",
    resumeUrl: "/resume.pdf",
    profileImage: "/profile.jpeg",
    available: false, // currently working at Algo8 AI
  },

  /* -------------------- HERO -------------------- */
  hero: {
    greeting: "Hi, I'm",
    rotatingTitles: [
      "Data Scientist",
      "ML Engineer",
      "AI Builder",
      "Problem Solver",
    ],
    bio:
      "Building production AI systems at Algo8 AI. Previously: PMO India, SIH 2024 Winner. B.Tech Mathematics & Computing, RGIPT.",
    cta: {
      primary: { label: "View Work", href: "#projects" },
      secondary: { label: "Download CV", href: "/resume.pdf" },
    },
    stats: [
      { value: "10+", label: "Projects" },
      { value: "20+", label: "Tech Stack" },
      { value: "4", label: "Awards" },
    ],
  },

  /* -------------------- ABOUT -------------------- */
  about: {
    heading: "About",
    paragraphs: [
      "Data Scientist at Algo8 AI, focused on shipping production-grade ML systems. Final-year B.Tech in Mathematics & Computing at RGIPT.",
      "I enjoy turning research-grade ideas into deployed products — RAG-based pentesting frameworks, image optimization pipelines, and LLM-driven analytics tools.",
    ],
    quickFacts: [
      { label: "Currently", value: "Data Scientist · Algo8 AI" },
      { label: "Focus", value: "Applied AI · ML · NLP" },
      { label: "Education", value: "B.Tech, RGIPT (2026)" },
    ],
  },

  /* -------------------- EXPERIENCE -------------------- */
  experience: [
    {
      role: "Data Scientist",
      org: "Algo8 AI",
      period: "Present",
      location: "Remote",
      current: true,
      bullets: [
        "Building production-grade ML systems and data pipelines.",
        "Working across model development, evaluation, and deployment.",
      ],
      tech: ["Python", "ML", "Deep Learning", "MLOps"],
    },
    {
      role: "AI Security Researcher",
      org: "PMO India",
      period: "Jun – Aug 2025",
      location: "Remote",
      bullets: [
        "Built an AI pentesting framework with RAG, FAISS embeddings, and Unsloth-QLoRA fine-tuning for CVE mapping.",
        "Shipped a conversational chatbot for attack-chain analysis and remediation.",
        "Ran red-team scans on multiple production websites.",
      ],
      tech: ["Python", "RAG", "FAISS", "QLoRA", "LLMs"],
    },
  ] as ExperienceItem[],

  /* -------------------- PROJECTS -------------------- */
  projects: [
    {
      title: "Smart Image Optimization Suite",
      period: "Apr – May 2025",
      summary:
        "Content-aware compression engine with deep super-resolution.",
      bullets: [
        "Random Forest predicts optimal SVD rank + JPEG quality from image entropy — 95% SSIM.",
        "FSRCNN super-resolution upscales low-quality images 2× — file sizes cut 60–80%.",
      ],
      tech: ["Python", "OpenCV", "Scikit-learn", "TensorFlow", "Streamlit"],
      links: [{ label: "View Project", href: "#" }],
      highlight: "Featured",
    },
    {
      title: "Dark Pattern Detector",
      period: "Jan – Feb 2024",
      summary:
        "Browser extension flagging deceptive UX on e-commerce sites.",
      bullets: [
        "Fine-tuned DistilBERT on 3K+ labeled snippets — 93% multi-class accuracy.",
        "Lightweight Flask API for real-time inference and DOM highlighting.",
      ],
      tech: ["PyTorch", "Transformers", "Flask", "JavaScript"],
      links: [{ label: "View Project", href: "#" }],
    },
    {
      title: "ChatLens",
      period: "Jul – Aug 2025",
      summary:
        "Multilingual chat-export → stakeholder insights pipeline.",
      bullets: [
        "Translates and prioritizes messages via keyword scoring; T5 for threshold summarization.",
        "Outputs HTML stakeholder summary + JSON debug log via Flask API.",
      ],
      tech: ["Python", "Flask", "T5", "Translate API"],
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
      items: ["Node.js", "Express", "React", "Next.js", "Flask", "REST"],
    },
    {
      category: "Databases",
      items: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      category: "Data Science & AI",
      items: ["Pandas", "NumPy", "Scikit-learn", "PyTorch", "TensorFlow"],
    },
    {
      category: "NLP & LLMs",
      items: ["Transformers", "LangChain", "LlamaIndex", "RAG", "SpaCy"],
    },
    {
      category: "Deployment",
      items: ["Git", "AWS EC2", "MLflow", "Docker", "HF Spaces"],
    },
    {
      category: "Fundamentals",
      items: ["DSA", "OOP", "System Design"],
    },
  ] as SkillGroup[],

  /* -------------------- ACHIEVEMENTS -------------------- */
  achievements: [
    {
      title: "Smart India Hackathon 2024 — Winner",
      detail: "Among 71 teams across India.",
      date: "2024",
      href: "#",
    },
    {
      title: "DPBH '23 Finalist — IIT BHU",
      detail: "Ministry of Consumer Affairs, GOI.",
      date: "2023",
      href: "#",
    },
    {
      title: "RBI90 Quiz — State Finalist",
      detail: "Reserve Bank of India.",
      date: "2023",
      href: "#",
    },
    {
      title: "IIT JEE Advanced — Qualified",
      detail: "AIR-bracket qualifier.",
      date: "2022",
    },
  ] as Achievement[],

  /* -------------------- EDUCATION -------------------- */
  education: [
    {
      degree: "B.Tech, Mathematics & Computing",
      institution: "RGIPT",
      location: "Jais, Amethi",
      period: "2022 – 2026",
      score: "CGPA: 8.42 / 10",
    },
    {
      degree: "Senior Secondary",
      institution: "UCSKM Public School",
      location: "Bhiwadi, Rajasthan",
      period: "2019 – 2021",
      score: "94.4% (XII) · 87.4% (X)",
    },
  ] as EducationItem[],

  /* -------------------- ROLES & ACTIVITIES -------------------- */
  roles: [
    {
      title: "Head & Mentor (Chemistry)",
      org: "Gyanarpan Project, Amethi",
      detail: "Led 150 volunteers; 80+ classes for underprivileged students.",
    },
    {
      title: "Teaching Assistant",
      org: "RGIPT",
      detail: "Electronics Engineering & Thermodynamics.",
    },
    {
      title: "R&D Executive",
      org: "Astronomy Club, RGIPT",
      detail: "Research initiatives in Sci & Tech Council.",
    },
    {
      title: "Event Management",
      org: "OWASP RGIPT",
      detail: "Cybersecurity events & workshops.",
    },
  ] as RoleItem[],

  /* -------------------- SOCIAL LINKS -------------------- */
  social: [
    { label: "GitHub", href: "https://github.com/Saini-Anmol", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/anmol-saini-326456257/", icon: "linkedin" },
    { label: "LeetCode", href: "https://leetcode.com/u/anmolsaini_07/", icon: "leetcode" },
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
    title: "Anmol Saini — Data Scientist & ML Engineer",
    description:
      "Data Scientist at Algo8 AI building production-grade ML systems. SIH 2024 winner. B.Tech Math & Computing, RGIPT.",
    keywords: [
      "Anmol Saini",
      "Portfolio",
      "Data Scientist",
      "Machine Learning",
      "Algo8 AI",
      "RGIPT",
    ],
    ogImage: "/og.png",
  },

  /* -------------------- THEME (cosmetic toggles) -------------------- */
  theme: {
    accent: "violet",
    showRotatingTitle: true,
    showStats: true,
    showQuickFacts: true,
  },
};

export type SiteConfig = typeof config;
