export const personalInfo = {
    name: "Sahil Kochar",
    title: "Hi, I'm Sahil Kochar",
    tagline: "Program Operations & Product Enthusiast",
    subtitle: "Data-Driven Problem Solver",
    description: "End-to-End Program Execution • Process Optimization • Data Analytics & AI Automation",
    aboutSummary: "Operations professional with proven experience managing end-to-end program execution in the EdTech and higher-education sector. Led cross-functional coordination across Product, Engineering, and Operations teams to deliver the National Scaler Entrance Test (NSET), achieving a 97.54% process completion rate. Proficient in SQL, Python, and Google Sheets for dashboard reporting, metrics tracking, and performance analysis. Skilled in Agile methodology, PRD documentation, UAT, and requirement gathering.",
    avatar: "/profile.png",
    status: "Final Semester MCA AI/ML (CGPA: 7.8)",
    resumeUrl: "/resume.pdf",
    location: "India / Bangalore",
    phone: "+91 9352994726",
    email: "Sahilkochar08@gmail.com",
    linkedin: "https://www.linkedin.com/in/sahilkochar08",
    github: "https://github.com/sahil-008-ops",
    portfolioUrl: "https://sahil-008-ops-sahil-portfolio.vercel.app"
};

export const aboutHighlights = [
    {
        title: "Program Execution",
        desc: "Owned NSET execution at Scaler, delivering a 97.54% process completion rate."
    },
    {
        title: "Product & Data Ops",
        desc: "Cross-functional specs, UAT testing, SQL funnel analysis & Metabase/Power BI reporting."
    },
    {
        title: "Process Automation",
        desc: "Achieved ~20% gain in operational efficiency through AI-driven automation & process improvement."
    }
];

export const skillCategories = [
    {
        title: "Program & Operations",
        skills: [
            "Program Execution",
            "End-to-End Process Ownership",
            "Cross-Functional Coordination",
            "Stakeholder Management",
            "SOP & Workflow Standardization",
            "Process Optimization & Root Cause Analysis",
            "KPI & OKR Management",
            "Agile & Sprint Backlog Management"
        ]
    },
    {
        title: "Data Analysis & Reporting",
        skills: [
            "SQL & Database Querying",
            "Python",
            "Funnel Analysis",
            "Dashboard Reporting & Metabase",
            "Metrics & SLA Tracking",
            "Data-Driven Decision Making",
            "Google Sheets & Advanced Excel"
        ]
    },
    {
        title: "Product & Requirements",
        skills: [
            "PRD Writing & User Stories",
            "Business Requirement Gathering",
            "UAT (User Acceptance Testing)",
            "Feature Specification",
            "Edge-Case Identification",
            "Process-Flow Documentation"
        ]
    },
    {
        title: "Tools & Ecosystem",
        skills: [
            "Google Workspace",
            "Excel & PowerPoint",
            "Metabase",
            "Analytics & Dashboard Tools",
            "Git & Postman"
        ]
    }
];

export const experiences = [
    {
        company: "Next Nation",
        role: "Founder's Office Intern",
        period: "Sept 2026 – Present",
        points: [
            "Working directly with the Founder's Office on strategic initiatives, business growth, and operations scaling.",
            "Driving cross-functional execution across product expansion, key partnerships, and process optimization.",
            "Analyzing operational bottlenecks and implementing data-driven frameworks to improve organizational throughput."
        ]
    },
    {
        company: "Interviewbit Software Services Pvt. Ltd. (Scaler)",
        role: "Program Operations Intern",
        period: "12/2025 – 08/2026",
        points: [
            "Owned end-to-end execution of the National Scaler Entrance Test (NSET), coordinating across Product, Engineering, and Operations to improve candidate experience and achieve a record 97.54% process completion rate.",
            "Supported Product Managers on internal platforms including Drona (Interview Platform) and Companion Mode — gathering requirements, writing specs, and validating feature behavior through sprint cycles, UAT, and edge-case testing.",
            "Analyzed user journeys, funnel drop-offs, and engagement metrics using SQL and Google Sheets, building dashboards and reports that powered weekly product reviews and data-driven prioritization.",
            "Partnered with Product Managers and Engineers to identify friction points across the admissions journey, improving interview-stage completion by 15–20% through iterative experimentation and feedback analysis.",
            "Authored PRDs, user stories, and process-flow documentation; drove Agile sprint planning and backlog management while researching AI-driven automation (including AI-powered interview evaluation), contributing to a ~20% gain in operational efficiency."
        ]
    }
];

export const projects = [
    {
        title: "ApexForge",
        subtitle: "AI Forensic Auditing & Fraud Detection Platform",
        problem: "Manual financial fraud detection is slow and struggles to track complex multi-hop transaction flows.",
        approach: "Built an AI-powered forensic auditing platform with Neo4j graph analytics, LangChain multi-agent reasoning, OCR, and spaCy NLP.",
        tech: ["Python", "Neo4j", "LangChain", "Tesseract OCR", "spaCy", "Streamlit"],
        outcome: "Achieved 90.2% anomaly detection F1-score, 97.3% OCR accuracy, 94.1% NLP entity extraction F1-score, and reduced investigation time by 80% with a SHA-256 cryptographic ledger.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        color: "from-blue-600 to-indigo-600",
        github: "https://github.com/sahil-008-ops",
        link: ""
    },
    {
        title: "Blinklytics",
        subtitle: "Blinkit Sales Data Analytics & BI Dashboard",
        problem: "Raw sales data lacks actionable insights for stakeholder-ready decision making.",
        approach: "Queried and transformed raw sales data using PostgreSQL and built an interactive Power BI dashboard to surface sales trends and regional metrics.",
        tech: ["Power BI", "PostgreSQL", "SQL", "Data Analytics"],
        outcome: "Delivered structured, stakeholder-ready insights supporting data-backed decision-making across operations.",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800",
        color: "from-amber-500 to-orange-500",
        github: "",
        link: ""
    },
    {
        title: "AI in Supply Chain Management",
        subtitle: "Demand Forecasting (Published in IJCRT - ISSN: 2320-2882)",
        problem: "Supply chain inefficiencies leading to overstocking, delays, and inventory misalignment.",
        approach: "Analyzed operational data across 6+ units to identify inefficiencies and build predictive time-series forecasting models and KPI dashboards.",
        tech: ["Python", "Pandas", "Scikit-Learn", "Power BI", "Research"],
        outcome: "Improved forecast accuracy by 18% and reduced operational delays by 22%.",
        image: "/Ai Driven SCM.png",
        color: "from-emerald-500 to-teal-500",
        github: "",
        link: ""
    },
    {
        title: "PulmoScan",
        subtitle: "Lung Cancer Classification",
        problem: "Early detection of lung cancer is challenging and prone to human error.",
        approach: "Built a deep learning model to classify lung CT scans with high accuracy.",
        tech: ["Python", "TensorFlow", "Keras", "OpenCV"],
        outcome: "Achieved 95% accuracy in classifying benign vs malignant nodules.",
        image: "/pulmoscan.png",
        color: "from-blue-500 to-indigo-500",
        github: "https://github.com/sahil-008-ops/PULMO-SCAN",
        link: ""
    },
    {
        title: "CodeGuardian-AI",
        subtitle: "AI-Powered Code Review & Quality Analysis",
        problem: "Manual code reviews are time-consuming and often miss bugs, security issues, and quality flaws.",
        approach: "Built an AI-powered tool analyzing source code via static analysis and pattern detection to generate automated improvement suggestions.",
        tech: ["Python", "AI / ML", "Static Analysis", "NLP"],
        outcome: "Improved code quality consistency, reduced review effort, and enabled early bug detection.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
        color: "from-purple-500 to-pink-500",
        github: "https://github.com/sahil-008-ops/CodeGuardian-AI",
        link: ""
    }
];

export const educations = [
    {
        degree: "Master of Computer Applications (MCA) in AI/ML",
        institution: "Jain (Deemed-to-be University)",
        location: "Bangalore",
        duration: "08/2024 – 06/2026",
        status: "CGPA: 7.8",
        yearNode: "2024 - 2026",
        active: true,
        focusAreas: ["Machine Learning", "Deep Learning", "NLP", "Data Analytics", "Program Operations"],
        learnings: [
            "Applied AI/ML models practically to build scalable forensic and predictive systems",
            "Developed strong data analytics, SQL, and system-thinking capabilities",
            "Gained cross-functional product and operations execution skills"
        ],
        highlights: {
            projects: "ApexForge, AI in Supply Chain Management",
            tools: "Python, SQL, TensorFlow, Power BI, Neo4j, LangChain"
        }
    },
    {
        degree: "Bachelor of Computer Applications (BCA)",
        institution: "Maharaja Ganga Singh University",
        location: "Bikaner",
        duration: "08/2021 – 05/2024",
        status: "CGPA: 7.3",
        yearNode: "2021 - 2024",
        active: false,
        focusAreas: ["Programming", "Data Structures", "Database Management", "Web Development"],
        learnings: [
            "Mastered foundational computer science, SQL databases, and programming concepts",
            "Built web platforms and data dashboards"
        ],
        highlights: {
            projects: "Blinklytics, Foody Go",
            tools: "SQL, Python, React, PostgreSQL"
        }
    }
];

export const certifications = [
    {
        name: "Application of AI for Anomaly Detection",
        issuer: "NVIDIA"
    },
    {
        name: "AWS Fundamentals",
        issuer: "Amazon"
    },
    {
        name: "Hackathon Winner / Participant",
        issuer: "Oneearth International"
    }
];
