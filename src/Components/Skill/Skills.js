import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useScrollReveal } from "../../Utils/useScrollReveal";
import {
  ReactIcon,
  NextjsIcon,
  JavascriptIcon,
  TypescriptIcon,
  ReduxIcon,
  Html5Icon,
  Css3Icon,
  SassIcon,
  BootstrapIcon,
  GitIcon,
  FigmaIcon,
  VSCodeIcon,
} from "./SkillIcons";
import "./Skills.scss";

const ALL_SKILLS = [
  {
    name: "React.js",
    category: "Core & Frameworks",
    tag: "UI Library",
    brandColor: "#61DAFB",
    brandGlow: "rgba(97, 218, 251, 0.4)",
    renderIcon: (isDark) => <ReactIcon isDark={isDark} />,
  },
  {
    name: "Next.js",
    category: "Core & Frameworks",
    tag: "React Framework",
    brandColor: "#000000",
    brandGlow: "rgba(110, 7, 243, 0.35)",
    renderIcon: (isDark) => <NextjsIcon isDark={isDark} />,
  },
  {
    name: "JavaScript",
    category: "Core & Frameworks",
    tag: "ES6+ Core",
    brandColor: "#F7DF1E",
    brandGlow: "rgba(247, 223, 30, 0.4)",
    renderIcon: () => <JavascriptIcon />,
  },
  {
    name: "TypeScript",
    category: "Core & Frameworks",
    tag: "Typed JS",
    brandColor: "#3178C6",
    brandGlow: "rgba(49, 120, 198, 0.4)",
    renderIcon: () => <TypescriptIcon />,
  },
  {
    name: "Redux Toolkit",
    category: "Core & Frameworks",
    tag: "State Management",
    brandColor: "#764ABC",
    brandGlow: "rgba(118, 74, 188, 0.4)",
    renderIcon: () => <ReduxIcon />,
  },
  {
    name: "HTML5",
    category: "Core & Frameworks",
    tag: "Semantic Structure",
    brandColor: "#E34F26",
    brandGlow: "rgba(227, 79, 38, 0.4)",
    renderIcon: () => <Html5Icon />,
  },
  {
    name: "CSS3",
    category: "Styling & UI",
    tag: "Modern Styling",
    brandColor: "#1572B6",
    brandGlow: "rgba(21, 114, 182, 0.4)",
    renderIcon: () => <Css3Icon />,
  },
  {
    name: "SASS / SCSS",
    category: "Styling & UI",
    tag: "Modular Styles",
    brandColor: "#CF649A",
    brandGlow: "rgba(207, 100, 154, 0.4)",
    renderIcon: () => <SassIcon />,
  },
  {
    name: "Bootstrap",
    category: "Styling & UI",
    tag: "Component Grid",
    brandColor: "#7952B3",
    brandGlow: "rgba(121, 82, 179, 0.4)",
    renderIcon: () => <BootstrapIcon />,
  },
  {
    name: "Figma",
    category: "Styling & UI",
    tag: "UI/UX & Prototyping",
    brandColor: "#A259FF",
    brandGlow: "rgba(162, 89, 255, 0.4)",
    renderIcon: () => <FigmaIcon />,
  },
  {
    name: "Git & GitHub",
    category: "Tools & Workflow",
    tag: "Version Control",
    brandColor: "#F05032",
    brandGlow: "rgba(240, 80, 50, 0.4)",
    renderIcon: () => <GitIcon />,
  },
  {
    name: "VS Code",
    category: "Tools & Workflow",
    tag: "IDE & Tooling",
    brandColor: "#007ACC",
    brandGlow: "rgba(0, 122, 204, 0.4)",
    renderIcon: () => <VSCodeIcon />,
  },
];

const CATEGORIES = [
  "All",
  "Core & Frameworks",
  "Styling & UI",
  "Tools & Workflow",
];

const Skills = () => {
  const isSelectedTheme = useSelector(
    (state) => state.selectedTheme.isThemeSelected
  );

  const [activeTab, setActiveTab] = useState("All");
  const containerRef = useScrollReveal();

  const filteredSkills =
    activeTab === "All"
      ? ALL_SKILLS
      : ALL_SKILLS.filter((s) => s.category === activeTab);

  return (
    <section
      ref={containerRef}
      className={`skills-section ${
        isSelectedTheme ? "skills-light" : "skills-dark"
      }`}
      id="skills"
    >
      <div className="skills-container">
        <div className="skills-header scroll-reveal">
          <div className="skills-badge">
            <span>Technical Proficiency</span>
          </div>
          <h2 className="skills-title">Skills &amp; Technologies</h2>
          <p className="skills-subtitle">
            Core technologies, modern libraries, and development tools I use to
            engineer scalable, pixel-perfect web applications.
          </p>

          <div className="skills-filter-tabs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`tab-btn ${activeTab === cat ? "active" : ""}`}
                onClick={() => setActiveTab(cat)}
              >
                <span>{cat}</span>
                <span className="tab-count">
                  {cat === "All"
                    ? ALL_SKILLS.length
                    : ALL_SKILLS.filter((s) => s.category === cat).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="skills-cards-grid scroll-reveal scroll-delay-2">
          {filteredSkills.map((skill) => (
            <div
              className="skill-tile"
              key={skill.name}
              style={{
                "--skill-brand": skill.brandColor,
                "--skill-glow": skill.brandGlow,
              }}
            >
              <div className="tile-icon-box">
                <div className="tile-icon-inner">
                  {skill.renderIcon(!isSelectedTheme)}
                </div>
              </div>
              <h3 className="tile-title">{skill.name}</h3>
              <span className="tile-tag">{skill.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
