import React from "react";
import { useSelector } from "react-redux";
import { useScrollReveal } from "../../Utils/useScrollReveal";
import "./About.scss";

const About = ({ showResume, setShowResume }) => {
  const isSelectedTheme = useSelector(
    (state) => state.selectedTheme.isThemeSelected
  );

  const containerRef = useScrollReveal();

  const handleResume = () => {
    setShowResume(!showResume);
  };

  const stats = [
    { number: "2.5", label: "Years Experience" },
    { number: "5-6", label: "Projects Delivered" },
    { number: "React", label: "Core Specialization" },
    { number: "100%", label: "Responsive UI Fidelity" },
  ];

  const pillars = [
    {
      icon: "⚛️",
      title: "React & State Management",
      description:
        "Building structured, maintainable frontend architectures with React.js, Redux Toolkit, and reusable component libraries that scale cleanly.",
    },
    {
      icon: "⚡",
      title: "API Integration & Performance",
      description:
        "Connecting complex REST APIs, implementing robust form validations, and optimizing page load speeds and responsiveness across all devices.",
    },
    {
      icon: "🚀",
      title: "Real-World Project Delivery",
      description:
        "Shipping production features for platforms like Credalio (E-Learning Marketplace at Speqto Technologies) and enterprise websites like The Yoga Institute.",
    },
  ];

  return (
    <section
      ref={containerRef}
      className={`about-section ${isSelectedTheme ? "about-light" : "about-dark"}`}
      id="about"
    >
      <div className="about-container">
        <div className="about-header scroll-reveal">
          <div className="about-pill">
            <span>About Me</span>
          </div>
          <h2 className="about-title">
            Passionate Frontend Developer Building Modern Web Applications
          </h2>
          <p className="about-bio">
            I’m a Frontend Developer with around <strong>2.5 years of practical experience</strong> building
            responsive, high-performance web applications using <strong>React.js</strong>, <strong>JavaScript</strong>,
            and modern UI libraries. Currently contributing to frontend engineering at <strong>Speqto Technologies</strong> in Noida,
            with previous hands-on experience at <strong>NexGen Tech Solutions</strong> and freelance client work.
            Having delivered <strong>5 to 6 projects</strong>, I focus on writing clean, modular code and delivering
            seamless user experiences.
          </p>
        </div>

        <div className="about-stats-grid">
          {stats.map((item, index) => (
            <div
              key={index}
              className="stat-card scroll-reveal"
              style={{ transitionDelay: `${0.06 + index * 0.08}s` }}
            >
              <span className="stat-number">{item.number}</span>
              <span className="stat-label">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="about-pillars-grid">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="pillar-card scroll-reveal"
              style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="pillar-icon-box">
                <span className="pillar-icon">{pillar.icon}</span>
              </div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-description">{pillar.description}</p>
            </div>
          ))}
        </div>

        <div className="about-cta-row scroll-reveal">
          <button className="about-resume-btn" onClick={handleResume}>
            <span>View Resume</span>
            <svg
              className="btn-icon"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;