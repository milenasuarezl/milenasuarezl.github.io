export type Job = {
  role: string;
  company: string;
  companyType: string;
  period: string;
  summary: string;
  achievements: string[];
  stack: string[];
};

export const jobs: Job[] = [
  {
    role: "Design system and Frontend Engineer",
    company: "Babbel",
    companyType: "Language learning platform",
    period: "Feb 2023 – Present",
    summary:
      "Building Babbel's design system and leading its accessibility work, close to product design and across product surfaces.",
    achievements: [
      "Led accessibility improvements across the design system: WCAG 2.2 audits and fixes across 30+ components for keyboard, screen reader, and assistive technology users.",
      "Designed and built scalable design system components with React, TypeScript, Styled Components, and Vanilla Extract.",
      "Partnered with product designers to define component APIs, interaction patterns, and interactive prototypes.",
      "Contributed to design token architecture and workflows with Figma, Supernova, Style Dictionary, and Storybook.",
      "Improved developer experience through CDN-based font delivery, CI/CD workflows, and cost-effective visual regression testing.",
      "Shared practices on accessibility and design systems in Frontend Chapter meetings and at design conferences.",
    ],
    stack: ["TypeScript", "React", "Next.js", "Storybook", "Vanilla Extract", "Design Tokens", "GitHub Actions", "AWS"],
  },
  {
    role: "Senior Web Developer",
    company: "Huge",
    companyType: "Digital agency",
    period: "Nov 2021 – Sep 2022",
    summary: "Frontend lead on Google projects including Think with Google, Google Pay, and Wallet.",
    achievements: [
      "Prioritized and resolved technical debt across Think with Google, Google Pay, and Wallet.",
      "Mentored junior, mid, and senior developers through code reviews and knowledge-sharing sessions.",
      "Guided stakeholders and product management to build roadmaps aligned with business goals.",
      "Defined frontend architecture and technical decisions with the team.",
    ],
    stack: ["JavaScript", "React", "Contentful", "Jest", "WCAG", "SEO"],
  },
  {
    role: "Senior Web UI Developer",
    company: "Globant",
    companyType: "Digital agency",
    period: "Nov 2019 – Nov 2021",
    summary: "Feature and UI library work for Rockwell Automation and American Century Investments.",
    achievements: [
      "Designed and built highly reusable features for shared UI and design system libraries.",
      "Mentored junior and mid-level developers.",
      "Conducted technical interviews and reviewed code tests for hiring.",
      "Created monitoring and deployment pipelines on OpenShift.",
    ],
    stack: ["React", "Vue", "Angular", "TypeScript", "Storybook", "GraphQL", "Jenkins", "OpenShift"],
  },
  {
    role: "Senior Frontend Engineer",
    company: "Addi",
    companyType: "Fintech startup",
    period: "Nov 2018 – Nov 2019",
    summary: "First frontend engineer at the startup, owning the architecture of its first loan-request web app.",
    achievements: [
      "Built the company's first loan-request web application from scratch.",
      "Designed a micro frontends architecture based on Domain-Driven Design, enabling independent product areas.",
      "Led frontend technical decisions, code reviews, and hiring interviews as the team scaled.",
    ],
    stack: ["TypeScript", "Angular", "RxJS", "React", "Storybook", "Monorepo", "DDD"],
  },
  {
    role: "Frontend Engineer",
    company: "Scotiabank Colpatria Digital Factory",
    companyType: "Banking",
    period: "Jul 2017 – Nov 2018",
    summary: "Rebuilt core banking dashboards and started the bank's first design system.",
    achievements: [
      "Redesigned and rebuilt the User Products and Transaction dashboards used for daily transactions.",
      "Designed and created the first version of a design system using Atomic Design.",
    ],
    stack: ["TypeScript", "Angular", "SASS", "BEM", "Serenity.js", "Jasmine"],
  },
  {
    role: "Frontend Engineer",
    company: "Rappi",
    companyType: "Delivery services",
    period: "Nov 2016 – Jul 2017",
    summary: "Frontend work on the core delivery app and a new supplier-facing retail app.",
    achievements: [
      "Developed and maintained the main app connecting riders with end users.",
      "Built from scratch a retail app that lets suppliers offer their products in the main app.",
    ],
    stack: ["TypeScript", "Angular", "Ember.js", "RxJS", "REST"],
  },
  {
    role: "Software Engineer",
    company: "Banco de Occidente",
    companyType: "Banking",
    period: "Apr 2016 – Nov 2017",
    summary: "Designed and developed a data warehouse for a BI project aimed at financial entities.",
    achievements: [],
    stack: ["OBIEE", "SQL Server"],
  },
  {
    role: "Software Engineer",
    company: "Quasar Software",
    companyType: "Digital agency",
    period: "May 2015 – Apr 2016",
    summary: "Designed and developed a Trello-like task management tool.",
    achievements: [],
    stack: ["Java", "Vaadin", "JavaScript", "Google Drive API"],
  },
  {
    role: "Software Engineer",
    company: "Universidad Distrital Francisco José de Caldas",
    companyType: "Academic services",
    period: "Feb 2011 – May 2015",
    summary: "Designed and developed the web application used to book lab spaces.",
    achievements: [],
    stack: ["PHP", "JavaScript", "PostgreSQL", "WordPress"],
  },
];

export const volunteering = [
  { name: "JSConf Colombia", role: "Co-organizer", period: "2019" },
  { name: "BogotaJS", role: "Organizer, speaker & mentor", period: "2016 – 2019" },
  { name: "Rails Girls Bogotá", role: "Co-organizer", period: "2016 – 2018" },
  { name: "Python Colombia", role: "Volunteer", period: "2016 – 2018" },
  { name: "Front-End Foxes Colombia", role: "Mentor", period: "2019" },
  { name: "AngelHack", role: "Ambassador", period: "2017" },
];

export const skills = [
  { group: "Frontend", items: ["TypeScript", "JavaScript", "React", "Next.js", "Vue", "Angular", "HTML", "CSS"] },
  { group: "Architecture", items: ["Design Systems", "Component Libraries", "Micro Frontends", "Domain-Driven Design", "Atomic Design", "Monorepos"] },
  { group: "Accessibility", items: ["WCAG 2.1 / 2.2", "ARIA", "Screen readers", "Accessibility audits"] },
  { group: "Styling", items: ["CSS-in-JS", "Styled Components", "Vanilla Extract", "SASS", "BEM", "Design Tokens"] },
  { group: "Testing & DX", items: ["Jest", "Testing Library", "Playwright", "Percy", "Storybook", "GitHub Actions"] },
  { group: "Leadership", items: ["Mentorship", "Technical decisions", "Hiring interviews", "Stakeholder collaboration"] },
];

export const education = {
  degree: "BS, Telematic Engineering",
  school: "Universidad Distrital Francisco José de Caldas, Bogotá",
  period: "2008 – 2014",
};
