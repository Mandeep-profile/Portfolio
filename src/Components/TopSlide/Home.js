import React, { useState, useEffect } from "react";
import avatar from "../../Assets/avatar.svg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Home.scss";

const ROLES = [
  "React & Redux Systems",
  "High-Performance Web Apps",
  "Pixel-Perfect UI Design",
  "Clean Frontend Code",
];

const Home = () => {
  const isSelectedTheme = useSelector(
    (state) => state.selectedTheme.isThemeSelected
  );
  const navigate = useNavigate();

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeout;

    if (!isDeleting && displayedText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    } else {
      const delta = isDeleting ? 30 : 65;
      timeout = setTimeout(() => {
        setDisplayedText((prev) =>
          isDeleting
            ? currentRole.substring(0, prev.length - 1)
            : currentRole.substring(0, prev.length + 1)
        );
      }, delta);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={`hero-section ${isSelectedTheme ? "hero-light" : "hero-dark"}`} id="home">
      <div className="hero-ambient-glow glow-top"></div>
      <div className="hero-ambient-glow glow-right"></div>

      <div className="hero-container">
        <div className="hero-status-pill">
          <span className="status-indicator-dot"></span>
          <span className="status-text">Available for Full-time &amp; Contract Roles</span>
        </div>

        <div className="hero-header-content">
          <h1 className="hero-main-title">
            Frontend Developer &amp; Software Engineer
          </h1>

          <div className="hero-dynamic-tagline">
            <span className="tagline-prefix">Crafting</span>
            <div className="tagline-pill">
              <span className="typewriter-text">{displayedText}</span>
              <span className="typewriter-caret">|</span>
            </div>
          </div>

          <p className="hero-subtext">
            I create elegantly simple designs, write clean code, and engineer
            high-performance digital experiences with passion.
          </p>
        </div>

        <div className="hero-cta-group">
          <button
            className="hero-action-btn primary-cta"
            onClick={() => scrollToSection("projects")}
          >
            <span>Explore Projects</span>
            <svg
              className="cta-icon"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>

          <button
            className="hero-action-btn secondary-cta"
            onClick={() => navigate("/contact")}
          >
            <span>Let's Talk</span>
            <svg
              className="cta-icon"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </button>
        </div>

        <div className="hero-interactive-stage">
          <div className="floating-skill-pill pill-top-left">
            <span className="pill-emoji">⚛️</span>
            <div className="pill-text-wrap">
              <span className="pill-label">React &amp; Redux</span>
              <span className="pill-sub">State Architecture</span>
            </div>
          </div>

          <div className="hero-avatar-halo">
            <img src={avatar} className="hero-avatar-image" alt="Mandeep Singh Avatar" />
          </div>

          <div className="floating-skill-pill pill-top-right">
            <span className="pill-emoji">⚡</span>
            <div className="pill-text-wrap">
              <span className="pill-label">Fast Performance</span>
              <span className="pill-sub">Optimized Core Web Vitals</span>
            </div>
          </div>

          <div className="floating-skill-pill pill-bottom-center">
            <span className="pill-emoji">🎨</span>
            <div className="pill-text-wrap">
              <span className="pill-label">Pixel-Perfect UI</span>
              <span className="pill-sub">Responsive on Every Screen</span>
            </div>
          </div>
        </div>

        <button
          className="hero-scroll-btn"
          onClick={() => scrollToSection("about")}
          aria-label="Scroll down to About section"
        >
          <span className="scroll-chevron"></span>
        </button>
      </div>
    </section>
  );
};

export default Home;