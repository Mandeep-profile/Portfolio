import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useScrollReveal } from "../../Utils/useScrollReveal";
import "./BuildProject.scss";

const BuildProject = () => {
  const navigate = useNavigate();
  const isSelectedTheme = useSelector(
    (state) => state.selectedTheme.isThemeSelected
  );
  const containerRef = useScrollReveal();

  return (
    <section ref={containerRef} className="build-project-section" id="build-project">
      <div
        className={`build-project-card scroll-reveal ${
          isSelectedTheme ? "card-light-mode" : "card-dark-mode"
        }`}
      >
        <div className="card-badge">
          <span className="badge-dot"></span>
          <span>Open for Opportunities &amp; Projects</span>
        </div>

        <h2 className="card-title">Let’s Build a Project Together</h2>

        <p className="card-description">
          Have an exciting project in mind, need a modern frontend engineered
          from scratch, or want to level up your user experience? Let's connect
          and bring your ideas to life.
        </p>

        <div className="card-features">
          <div className="feature-item">
            <span className="feature-icon">⚡</span>
            <span>Fast &amp; Scalable Web Apps</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🎨</span>
            <span>Pixel-Perfect &amp; Responsive UI</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🚀</span>
            <span>Clean Code &amp; Best Practices</span>
          </div>
        </div>

        <div className="card-actions">
          <button
            className="action-btn primary-btn"
            onClick={() => navigate("/contact")}
          >
            <span>Start a Project</span>
            <svg
              className="arrow-icon"
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
        </div>
      </div>
    </section>
  );
};

export default BuildProject;
