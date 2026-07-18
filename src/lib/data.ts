export const profile = {
name: "Daniel B. Islas",
title: "Software Engineer | Full-Stack Developer | Machine Learning",

location: "Chapel Hill, North Carolina",

email: "danielb7799@gmail.com",

phone: "336.488.3767",

github: "https://github.com/DanielBautista7799",

linkedin: "https://www.linkedin.com/in/danielb7799/",

linkedinLabel: "daniel-b-islas",

resume: "/resume",
};

export const about = `
I am a Computer Science student at the University of North Carolina at Chapel
Hill with a minor in Business Administration. I build full-stack applications,
machine learning systems, and software that combines technical depth with
practical product value. My experience includes production web applications,
database systems, AI-assisted tools, and teaching advanced C++ concepts.
`;

export const education = {
school: "University of North Carolina at Chapel Hill",

degree:
    "Bachelor of Science in Computer Science, Minor in Business Administration",

graduation: "May 2026",

computerScienceCoursework: [
    "Artificial Intelligence",
    "Intro to Machine Learning",
    "Data Structures and Algorithms",
    "Files and Databases",
    "System Programming",
    "Models of Languages and Computation",
],

businessCoursework: [
    "Corporate Finance",
    "Business Strategy",
    "Operations Management",
    "Data-Driven Business Insights: Databases",
],

awards: [
    "Colonel John H. Robinson Scholarship",
    "Edward M. Armfield Sr. Foundation Scholarship",
    "Dean's List",
],
};

export const skills = {
languages: [
    "Python",
    "Java",
    "C++",
    "C",
    "JavaScript",
    "TypeScript",
    "SQL",
    "HTML",
    "CSS",
],

frontend: [
    "React",
    "Next.js",
    "Angular",
    "Tailwind CSS",
],

backend: [
    "Node.js",
    "FastAPI",
    "REST APIs",
    "PostgreSQL",
    "Supabase",
],

machineLearning: [
    "PyTorch",
    "TensorFlow",
    "Keras",
    "scikit-learn",
    "Pandas",
    "NumPy",
    "Feature Engineering",
    "Model Evaluation",
    "Vector Embeddings",
],

tools: [
    "Git",
    "GitHub",
    "Docker",
    "Linux",
    "Jupyter",
    "pytest",
    "Playwright",
    "Streamlit",
    "Vercel",
],
};

export const spokenLanguages = [
{
    language: "Spanish",
    proficiency: "Fluent",
},
{
    language: "Portuguese",
    proficiency: "Advanced",
},
];

export const experience = [
{
    company: "University of North Carolina at Chapel Hill",

    role: "Undergraduate Teaching Assistant",

    dates: "August 2025 – January 2026",

    location: "Chapel Hill, NC",

    description:
    "Supported more than 100 students in COMP 421, an advanced C++ database systems course, while helping develop projects, assessments, and course materials.",

    highlights: [
    "Supported 100+ students through in-class instruction and one-on-one office hours for COMP 421, covering buffer management, indexing, query execution, transactions, recovery, and concurrency.",
    "Co-developed and maintained four C++ database projects implementing HyperLogLog, buffer pool management, concurrent B+ trees, and SQL query execution.",
    "Created automated tests and grading rubrics to evaluate correctness and edge cases.",
    "Collaborated with course staff to develop exams, practice problems, and solution keys; led review sessions and supported students with debugging, performance optimization, and complex DBMS concepts.",
    ],
},

{
    company: "FB Carports & Canopies",

    role: "Marketing Assistant",

    dates: "June 2019 – July 2023",

    location: "Elkin, NC",

    description:
    "Managed digital marketing initiatives, customer communications, and delivery coordination for a growing regional business.",

    highlights: [
    "Managed SEO strategy and Google Ads campaigns, increasing monthly website traffic by 40% and sales conversions by 15%.",
    "Prepared customer quotes, coordinated delivery timelines, and supported client communications.",
    "Contributed to a 25% increase in customer retention and referrals.",
    ],
},
];

export const projects = [
{
    title: "FIFA World Cup Match Predictor",

    dates: "June 2026 – Present",

    description:
    "End-to-end machine learning system that predicts international football match outcomes and simulates tournament results.",

    technologies: [
    "Python",
    "scikit-learn",
    "Pandas",
    "Streamlit",
    ],

    highlights: [
    "Built an end-to-end machine learning pipeline using historical international matches to predict home win, draw, and away win probabilities and simulate tournament outcomes.",
    "Engineered Elo, recent-form, scoring, rest, tournament, and head-to-head features.",
    "Implemented logistic regression and gradient descent from scratch.",
    "Evaluated multiclass models using chronological splits, log loss, F1 score, and confusion matrices.",
    ],

    github: "",

    live: "https://fifa-world-cup-ml.streamlit.app/",
},

{
    title: "Jacket Checker",

    dates: "January 2026 – June 2026",

    description:
    "Production full-stack application that analyzes live forecasts, user profiles, and private wardrobe data to recommend appropriate jackets.",

    technologies: [
    "React",
    "Supabase",
    "PostgreSQL",
    "Gemini API",
    "Vitest",
    "Playwright",
    ],

    highlights: [
    "Built and deployed a production full-stack application that analyzes live forecasts and user profiles through a deterministic ranking algorithm.",
    "Recommended up to three jackets from a user's private wardrobe.",
    "Implemented AI image analysis, vector embeddings, authentication, PostgreSQL Row Level Security, private Storage, and Supabase Edge Functions.",
    "Validated production workflows with Vitest, Playwright, security tests, and regression testing.",
    ],

    github: "",

    live: "https://jacketchecker.netlify.app/",
},

{
    title: "AI-Powered Office Hours Ticketing System",

    dates: "January 2025 – May 2025",

    description:
    "Full-stack AI-assisted course support feature that uses previously resolved tickets to generate contextual suggestions for students requesting technical help.",

    technologies: [
    "FastAPI",
    "Angular",
    "OpenAI API",
    "SQLAlchemy",
    "Pydantic",
    ],

    highlights: [
    "Developed a full-stack AI-assisted feature that uses solutions from previously resolved tickets to generate contextual suggestions for students requesting technical support.",
    "Implemented RESTful FastAPI endpoints with SQLAlchemy and Pydantic.",
    "Built Angular components using Signals and dialog modals.",
    "Created workflows to save TA solutions, collect feedback, and support ticket resolution.",
    ],

    github: "",

    live: "",
},

{
    title: "Blind 75 Interview Practice",

    dates: "2026 – Present",

    description:
    "Structured data structures and algorithms repository containing documented approaches, tested Python solutions, and interview preparation notes.",

    technologies: [
    "Python",
    "pytest",
    "Data Structures",
    "Algorithms",
    ],

    highlights: [
    "Documented brute-force and optimized approaches for common interview problems.",
    "Recorded time and space complexity, mistakes, edge cases, and lessons learned.",
    "Created focused tests for completed solutions.",
    ],

    github: "",

    live: "",
},
];

export const certifications = [
{
    name: "IBM Deep Learning with PyTorch, Keras and TensorFlow Professional Certificate",
    issuer: "IBM / Coursera",
    date: "July 2026",
    credentialUrl: "",
},
{
    name: "Google AI Professional Certificate",
    issuer: "Google / Coursera",
    date: "July 2026",
    credentialUrl: "",
},
];