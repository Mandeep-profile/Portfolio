import cardOne from "../../Assets/cardOne.jpeg";
import cardTwo from "../../Assets/cardTwo.jpeg";
import cardCredalio from "../../Assets/cardCredalio.svg";
import projectLogo from "../../Assets/tyi.png";
import LollyLogo from "../../Assets/LollyLogo.svg";
import CredalioLogo from "../../Assets/CredalioLogo.svg";

export const ProjectsData = [
  {
    id: "credalio",
    title: "Credalio",
    tagline: "E-Learning & Course Marketplace Platform",
    image: cardCredalio,
    logo: CredalioLogo,
    description:
      "Spearheaded frontend feature engineering for Credalio, an end-to-end e-learning and course marketplace platform. Engineered tutor onboarding pipelines, multi-step course authoring workflows, curriculum and pricing validators, interactive video lesson players, and real-time progress tracking across devices.",
    techStack: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Redux Toolkit",
      "REST APIs",
      "JavaScript (ES6+)",
    ],
    liveUrl: "https://dev.mycredalio.com",
    githubUrl: "https://github.com/Mandeep-profile",
  },
  {
    id: "tyi",
    title: "The Yoga Institute",
    tagline: "Global Health & Wellness Platform",
    image: cardOne,
    logo: projectLogo,
    description:
      "Spearheaded the frontend development for the digital portal of the world's oldest organized yoga center. Engineered modular, accessible React components, integrated high-performance course registration funnels, and connected dynamic RESTful endpoints for thousands of active users.",
    techStack: [
      "React.js",
      "Redux Toolkit",
      "Next.js",
      "JavaScript (ES6+)",
      "SASS / SCSS",
      "REST APIs",
    ],
    liveUrl: "https://theyogainstitute.org/",
    githubUrl: "https://github.com/Mandeep-profile",
  },
  {
    id: "lolly-app",
    title: "Lolly App",
    tagline: "Video Streaming & Creator Hub",
    image: cardTwo,
    logo: LollyLogo,
    description:
      "Architected and developed responsive interfaces for an interactive video streaming platform. Implemented dynamic video feeds, fluid media player controls, stateful creator dashboards, and clean cross-device styling inspired by YouTube using React and Material-UI.",
    techStack: [
      "React.js",
      "Material-UI",
      "Redux",
      "JavaScript (ES6+)",
      "CSS3 / Bootstrap",
      "Responsive UI",
    ],
    liveUrl: "https://theyogainstitute.org/",
    githubUrl: "https://github.com/Mandeep-profile",
  },
];
