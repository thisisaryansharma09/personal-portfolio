/**
 * PORTFOLIO DATA STORE
 * ====================
 * All personal information, skills, projects, and social links are managed here.
 * You can easily update your photo, links, or details anytime by editing this file!
 */

export const personalInfo = {
  name: "Aryan Sharma",
  roleTitle: "First-Year B.Tech CSE Student | Excel Enthusiast | Aspiring Entrepreneur",
  email: "thisisaryansharma09@gmail.com",
  college: "JECRC University, Jaipur, Rajasthan",
  degree: "B.Tech in Computer Science and Engineering",
  currentYear: "First Year (2026 - 2030)",
  expectedGraduation: "2030",
  location: "Jaipur, Rajasthan, India",
  typingSpeed: "30 WPM",
  
  /**
   * PROFILE PHOTO INSTRUCTIONS:
   * 1. Place your photo inside the `public/` folder (e.g. `public/profile.jpg`).
   * 2. Change the string below from "/profile-placeholder.svg" to "/profile.jpg".
   */
  photoUrl: "/profile-placeholder.svg",

  /**
   * SOCIAL PROFILE LINKS:
   * Replace the `#` placeholders with your actual LinkedIn and GitHub profile URLs.
   */
  socialLinks: {
    linkedin: "https://linkedin.com/in/aryan-sharma-placeholder", // REPLACE WITH YOUR LINKEDIN URL
    github: "https://github.com/aryansharma-placeholder", // REPLACE WITH YOUR GITHUB URL
    email: "mailto:thisisaryansharma09@gmail.com",
  },

  heroIntro:
    "I am a first-year Computer Science student at JECRC University, passionate about technology, problem-solving, and learning new skills. I enjoy working with Excel and developing my programming knowledge. I am always looking for opportunities to learn, contribute, and grow.",

  aboutNarrative: [
    "I am currently stepping into the foundational world of engineering as a first-year Computer Science and Engineering student at JECRC University in Jaipur. My journey began with an inquisitive interest in understanding how digital tools and data systems work under the hood.",
    "Rather than waiting for advanced semesters, I have actively invested my time in mastering productivity engines like Microsoft Excel and building core algorithmic foundations through C programming. Through structured workbook modeling and logical coding exercises, I've developed a deep appreciation for systematic thinking and clean data organization.",
    "Looking forward, my ultimate career ambition is rooted in technology entrepreneurship — building impactful software and data solutions that solve tangible problems for businesses and everyday users. I am a lifelong learner, driven by curiosity, discipline, and a strong work ethic."
  ],

  careerInterests: [
    { title: "Computer Science", desc: "Core algorithms, programming architecture, and software design." },
    { title: "Microsoft Excel", desc: "Advanced formula modeling, data organization, analysis, and validation." },
    { title: "Data Entry & Curation", desc: "High-accuracy data entry, record validation, and administrative pipelines." },
    { title: "Data Science", desc: "Descriptive statistics, pattern recognition, and future analytical modeling." },
    { title: "Entrepreneurship", desc: "Creating viable tech ventures, problem-solving, and business operations." },
  ],
};

export const skillsData = {
  technical: [
    {
      name: "Microsoft Excel",
      level: "Intermediate",
      percentage: 70,
      description: "VLOOKUP, IF/SUMIF logical formulas, conditional formatting, data validation, and clean tabular reporting.",
      icon: "FileSpreadsheet",
      badgeColor: "emerald",
    },
    {
      name: "C Programming",
      level: "Basic",
      percentage: 45,
      description: "Syntax fundamentals, conditional branching, loops, arrays, functions, and algorithmic problem solving.",
      icon: "Code",
      badgeColor: "blue",
    },
    {
      name: "Microsoft Word",
      level: "Working Knowledge",
      percentage: 80,
      description: "Professional document formatting, technical reporting, structured layouts, and typography.",
      icon: "FileText",
      badgeColor: "indigo",
    },
    {
      name: "Microsoft PowerPoint",
      level: "Working Knowledge",
      percentage: 75,
      description: "Slide deck creation, visual data presentation, structured storytelling, and clear layouts.",
      icon: "Presentation",
      badgeColor: "amber",
    },
  ],
  soft: [
    {
      name: "Communication",
      level: "Proficient",
      description: "Clear and respectful correspondence, structured written reports, and active interpersonal listening.",
      icon: "MessageSquare",
    },
    {
      name: "Teamwork & Collaboration",
      level: "Proficient",
      description: "Collaborative problem-solving in college groups, mutual accountability, and goal sharing.",
      icon: "Users",
    },
    {
      name: "Time Management",
      level: "Proficient",
      description: "Disciplined scheduling balancing university coursework, technical practice, and typing drills.",
      icon: "Clock",
    },
    {
      name: "Typing Speed",
      level: "30 WPM (Active Practice)",
      description: "Consistent 30 words per minute touch typing accuracy, continuously improving through daily drills.",
      icon: "Keyboard",
    },
  ],
};

export const projectsData = [
  {
    id: "project-mgmt-sheet",
    title: "Project Management Sheet",
    category: "Microsoft Excel",
    isPractice: true,
    badge: "Practice Project",
    tools: ["Microsoft Excel", "Conditional Formatting", "Formulas", "Status Visualizer"],
    shortDescription: "A structured spreadsheet designed to track project deliverables, deadlines, assignees, and real-time status percentages.",
    purpose: "To provide an organized overview of multi-step academic and team projects, preventing missed deadlines through dynamic visual status indicators.",
    keyFeatures: [
      "Dynamic task status tracking (Pending, In Progress, Completed)",
      "Automated progress bar calculations based on milestone completion",
      "Color-coded conditional formatting for overdue and upcoming deadlines",
      "Clean dashboard view summarizing completed vs remaining tasks"
    ],
    detailsUrl: "#", // Add your Google Sheet or OneDrive view link here if available
    downloadLabel: "View Sheet Model",
  },
  {
    id: "budget-tracker-sheet",
    title: "Budget Tracker",
    category: "Microsoft Excel",
    isPractice: true,
    badge: "Practice Project",
    tools: ["Microsoft Excel", "SUMIF / SUM", "Data Validation", "Chart Modeling"],
    shortDescription: "A personal finance and monthly expense tracking workbook with categorized spending and automated balance summaries.",
    purpose: "To systematically record daily inflows and outflows, group expenses by category, and visualize budget variances to foster financial discipline.",
    keyFeatures: [
      "Dropdown category selection using Excel Data Validation",
      "Automated totals and remaining budget metrics using SUM and SUMIF",
      "Expense breakdown chart for quick visual interpretation",
      "Monthly savings and variance alerts"
    ],
    detailsUrl: "#",
    downloadLabel: "View Sheet Model",
  },
  {
    id: "salary-mgmt-sheet",
    title: "Salary Management Sheet",
    category: "Microsoft Excel",
    isPractice: true,
    badge: "Practice Project",
    tools: ["Microsoft Excel", "Arithmetic Modeling", "Conditional Logic", "Tabular Design"],
    shortDescription: "A practical payroll calculation model designed to compute basic pay, allowances (HRA, DA), deductions, and net compensation.",
    purpose: "To simulate a small-business payroll workflow where employee compensation details are dynamically calculated without manual arithmetic errors.",
    keyFeatures: [
      "Standard formula-driven calculations for allowances (HRA, DA, Special)",
      "Deduction computations including Provident Fund (PF) and Tax brackets",
      "Automated Net Pay calculation for multiple employee rows",
      "Formatted printable pay-slip template summary"
    ],
    detailsUrl: "#",
    downloadLabel: "View Sheet Model",
  },
  {
    id: "id-card-data-mgmt",
    title: "ID Card Data Management with VLOOKUP",
    category: "Microsoft Excel",
    isPractice: true,
    badge: "Practice Project",
    tools: ["Microsoft Excel", "VLOOKUP", "Data Validation", "Dynamic Retrieval"],
    shortDescription: "A dynamic database system where entering a student or employee ID instantly pulls their complete profile using VLOOKUP.",
    purpose: "To streamline identity verification and badge issuance by eliminating manual searching in large student databases.",
    keyFeatures: [
      "Master student database with ID, Name, Department, Contact, and Blood Group",
      "Instant query interface driven by Excel VLOOKUP formulas",
      "Error handling with IFERROR to prevent unsightly #N/A outputs",
      "Search-and-populate digital ID badge template"
    ],
    detailsUrl: "#",
    downloadLabel: "View Sheet Model",
  },
  {
    id: "c-programming-exercises",
    title: "Basic C Programming Exercises",
    category: "Computer Science / C",
    isPractice: true,
    badge: "Practice Project",
    tools: ["C Language", "GCC Compiler", "Standard I/O", "VS Code"],
    shortDescription: "A collection of core C programs demonstrating fundamental computational thinking, loops, conditions, and array operations.",
    purpose: "To build a strong foundation in low-level programming, algorithmic problem solving, and memory understanding as a first-year CSE student.",
    keyFeatures: [
      "Mathematical logic & number theory (Prime check, Fibonacci, Factorial)",
      "Loop control structures and nested pattern printing",
      "Single and multi-dimensional array operations (Searching, Matrix Addition)",
      "Basic modular programming with custom user-defined functions"
    ],
    detailsUrl: "#", // Add your GitHub repository link here when you push your C exercises
    downloadLabel: "View Code Snippets",
  },
];

export const educationData = {
  degree: "Bachelor of Technology (B.Tech)",
  major: "Computer Science and Engineering",
  university: "JECRC University",
  location: "Jaipur, Rajasthan",
  period: "2026 — 2030 (Expected)",
  status: "First Year Student",
  highlights: [
    "Building foundational knowledge in Programming (C), Computational Logic, and Mathematics.",
    "Active participant in technical student clubs and campus learning forums.",
    "Focused on practical application through self-directed projects and spreadsheet modeling."
  ],
  certification: {
    title: "RS-CIT (Rajasthan State Certificate in Information Technology)",
    issuingBody: "Vardhman Mahaveer Open University (VMOU), Kota & RKCL",
    score: "90%",
    grade: "Grade A / Distinction",
    status: "Verified Official",
    description:
      "A high-scoring government-recognized IT literacy certification covering operating system operations, office productivity suites (Excel, Word, PowerPoint), internet safety, and digital data handling.",
    /**
     * CERTIFICATE IMAGE INSTRUCTIONS:
     * 1. Place a scan of your RS-CIT certificate in `public/certificate.jpg`.
     * 2. Update imageUrl below to "/certificate.jpg".
     */
    imageUrl: "/certificate-placeholder.svg",
  },
};

export const opportunitiesData = {
  statement:
    "As a motivated first-year Computer Science student with practical proficiency in Excel, data organization, and foundational programming, I am actively seeking entry-level, remote, or part-time opportunities where I can deliver reliable value while learning from real-world workflows.",
  roles: [
    {
      title: "Data Entry Internships",
      badge: "High Accuracy",
      description: "Accurate, disciplined data entry, digital cataloging, document verification, and database record keeping.",
      icon: "FileSpreadsheet",
    },
    {
      title: "Excel-Related Work",
      badge: "Spreadsheet Modeling",
      description: "Formulas, VLOOKUP queries, tabular formatting, budget/payroll sheets, and cleanup of unstructured sheets.",
      icon: "Table",
    },
    {
      title: "Remote Internships",
      badge: "Flexible Hours",
      description: "Dedicated remote support for data analysis, administrative assistance, and basic software research.",
      icon: "Laptop",
    },
    {
      title: "Part-Time Work",
      badge: "Student-Friendly",
      description: "Consistent weekly contributions that pair with academic scheduling, delivering high-quality deliverables on time.",
      icon: "CalendarCheck",
    },
    {
      title: "Freelance Projects",
      badge: "Task-Based",
      description: "Custom Excel sheets, ID card lookup tables, project trackers, and basic office document preparation.",
      icon: "Briefcase",
    },
  ],
};
