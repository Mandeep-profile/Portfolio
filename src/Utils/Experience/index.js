import SpeqtoLogo from "../../Assets/SpeqtoLogo.svg";
import CodeScoopLogo from "../../Assets/CodeScoopLogo.svg";
import NexgenLogo from "../../Assets/NexgenLogo.svg";
import MMR from "../../Assets/MMR.jpeg";
import Tradeindia from "../../Assets/Tradeindia.svg";

export const ProfessionalExperience = [
  {
    id: "c_speqto",
    name: "Speqto Technologies Pvt. Ltd.",
    date: "Dec 2025 – Present",
    details: {
      location: "Noida, Uttar Pradesh",
      role: "Frontend Developer",
      description:
        "Speqto Technologies is an AI-first software and engineering company building high-impact digital platforms. Leading frontend feature engineering for Credalio, an end-to-end e-learning and course marketplace platform.",
      highlights: [
        "Engineered core marketplace and learning experience features — search, filters, cart, wishlist, video lessons, curriculum navigation, progress tracking, and certificates — for a full-scale e-learning platform.",
        "Led development of tutor onboarding and profile management, building multi-step forms with validation, API integrations, and real-time progress tracking.",
        "Built course creation and validator workflows spanning curriculum management, pricing, review, and reporting, streamlining the content publishing pipeline.",
        "Optimized state management and resolved critical UI issues, delivering fast, fully responsive interfaces across devices.",
      ],
      techStack: [
        "React.js",
        "Vite",
        "Tailwind CSS",
        "REST APIs",
        "Redux Toolkit",
        "JavaScript (ES6+)",
        "Context API",
      ],
      imageURL: SpeqtoLogo,
    },
  },
  {
    id: "c_codescoop",
    name: "CodeScoop",
    date: "Apr 2024 – Nov 2025",
    details: {
      location: "Delhi, India",
      role: "Freelance React Developer",
      description:
        "Engineered scalable, performant frontend architectures for diverse client applications, emphasizing component reusability, modern SEO practices, and fluid user onboarding journeys.",
      highlights: [
        "Built reusable UI components (filters, listings) powering dashboard and discovery platforms across multiple client projects.",
        "Built SEO-optimized pages with Next.js, TypeScript, and CSS Modules, plus multi-step onboarding flows with validation and conditional rendering.",
        "Improved performance and accessibility through lazy loading, code splitting, and semantic HTML; integrated REST APIs with Redux Toolkit.",
      ],
      techStack: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Redux Toolkit",
        "CSS Modules",
        "REST APIs",
        "SEO & Web Performance",
      ],
      imageURL: CodeScoopLogo,
    },
  },
  {
    id: "c_Nexgen",
    name: "Nexgen Tech Solutions",
    date: "May 2022 – Aug 2023",
    details: {
      location: "Gurugram, Haryana",
      role: "React Developer",
      description:
        "NexGen Tech Solutions is an enterprise digital solutions firm. Delivered core web experiences and CMS tooling for prominent organizations including The Yoga Institute (TYI).",
      highlights: [
        "Developed the Yoga Institute website and CMS with React.js, JavaScript, and TypeScript, including a reusable component library for consistent UI.",
        "Implemented lazy loading and code splitting to boost load performance; built secure authentication flows with Redux and Context API, and integrated REST APIs for real-time data.",
        "Collaborated across design and engineering teams to ensure pixel-perfect fidelity and smooth user navigation.",
      ],
      techStack: [
        "React.js",
        "JavaScript",
        "TypeScript",
        "Redux Toolkit",
        "Context API",
        "REST APIs",
        "HTML5 / SCSS",
      ],
      imageURL: NexgenLogo,
    },
  },
  {
    id: "c_mmr",
    name: "MMR Boutique",
    date: "Jan 2022 – Apr 2022",
    details: {
      location: "Remote",
      role: "Frontend Developer",
      description:
        "Contributed to frontend feature development for digital consumer applications, focusing on media-rich components and real-time data synchronization.",
      highlights: [
        "Built reusable, responsive UI components with React.js and CSS media queries, integrating RESTful APIs with efficient state management for real-time data.",
        "Focused on mobile-first responsiveness and touch-friendly interface interactions across consumer devices.",
      ],
      techStack: [
        "React.js",
        "JavaScript",
        "CSS Media Queries",
        "Bootstrap",
        "REST APIs",
        "Git",
      ],
      imageURL: MMR,
    },
  },
  {
    id: "c_tradeindia",
    name: "Infocom Network Pvt Ltd (TradeIndia)",
    date: "April 2017 – December 2021",
    details: {
      location: "Okhla, New Delhi",
      role: "Site Moderator & Operations",
      description:
        "Infocom Network (TradeIndia.com) is one of India's largest B2B e-commerce platforms connecting buyers and global suppliers. Maintained platform catalog integrity and streamlined merchant operations.",
      highlights: [
        "Monitored and maintained platform content integrity, supplier onboarding compliance, and catalog quality across high-volume marketplace categories.",
        "Resolved operational escalations and client technical inquiries, ensuring data precision and customer satisfaction across buyer-seller channels.",
        "Cultivated rigorous analytical skills and comprehensive domain knowledge of large-scale e-commerce architectures, establishing the foundation for frontend engineering.",
      ],
      techStack: [
        "Platform Moderation",
        "Quality Assurance",
        "Catalog Operations",
        "B2B E-commerce",
        "Client Relations",
      ],
      imageURL: Tradeindia,
    },
  },
];
