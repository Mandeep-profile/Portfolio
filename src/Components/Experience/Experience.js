import React, { useState } from "react";
import { useSelector } from "react-redux";
import { LocationImg } from "../../Assets/Images";
import { ProfessionalExperience } from "../../Utils/Experience/index";
import { useScrollReveal } from "../../Utils/useScrollReveal";
import "./Experience.scss";

const Experience = () => {
  const isSelectedTheme = useSelector(
    (state) => state.selectedTheme.isThemeSelected
  );

  const containerRef = useScrollReveal();

  // Recent roles expanded, older roles collapsed by default to keep height compact
  const [expandedRoles, setExpandedRoles] = useState({
    c_speqto: true,
    c_codescoop: true,
    c_Nexgen: false,
    c_mmr: false,
    c_tradeindia: false,
  });

  const [isAllExpanded, setIsAllExpanded] = useState(false);

  const toggleRole = (id) => {
    setExpandedRoles((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleToggleAll = () => {
    const nextState = !isAllExpanded;
    setIsAllExpanded(nextState);
    const updated = {};
    ProfessionalExperience.forEach((item) => {
      updated[item.id] = nextState;
    });
    setExpandedRoles(updated);
  };

  return (
    <section
      ref={containerRef}
      className={`experience-timeline-section section-div ${
        isSelectedTheme ? "exp-theme-light" : "exp-theme-dark"
      }`}
      id="experience"
    >
      <div className="experience-ambient-glow"></div>

      <div className="section-title-wrapper scroll-reveal">
        <div className="section-pill-tag">
          <span className="pill-dot"></span>
          <span>CAREER TIMELINE</span>
        </div>
        <h2 className="section-heading">Professional Experience</h2>
        <p className="experience-subtitle">
          A clear chronological journey of my engineering progression, shipped features, and technical impact.
        </p>

        {/* View Density Toggle Button */}
        <div className="timeline-view-controls">
          <button
            type="button"
            className="view-toggle-btn"
            onClick={handleToggleAll}
          >
            <span>{isAllExpanded ? "Collapse Older Roles" : "Expand All Details"}</span>
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`toggle-caret-icon ${isAllExpanded ? "caret-up" : ""}`}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>
      </div>

      <div className="timeline-container">
        {/* Continuous Connected Glowing Spine */}
        <div className="timeline-continuous-spine"></div>

        <div className="timeline-milestones-list">
          {ProfessionalExperience.map((item, index) => {
            const isCurrent = index === 0;
            const isExpanded = !!expandedRoles[item.id];

            return (
              <div
                key={item.id}
                className={`timeline-milestone-row scroll-reveal ${
                  isCurrent ? "is-current-milestone" : ""
                } ${isExpanded ? "is-expanded" : "is-compact"}`}
              >
                {/* Visual Timeline Node with Company Logo on the Spine */}
                <div className="milestone-node-anchor">
                  <div className={`milestone-node ${isCurrent ? "node-pulse" : ""}`}>
                    <img
                      src={item.details.imageURL}
                      alt={item.name}
                      className="node-logo"
                    />
                  </div>
                  {isCurrent && <span className="current-ring-halo"></span>}
                </div>

                {/* Milestone Card */}
                <div className="milestone-card">
                  {/* Clickable Card Header */}
                  <div
                    className="milestone-card-header"
                    onClick={() => toggleRole(item.id)}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isExpanded}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggleRole(item.id);
                      }
                    }}
                  >
                    <div className="header-primary-group">
                      <div className="role-and-badge">
                        <h3 className="role-title">{item.details.role}</h3>
                        {isCurrent && (
                          <span className="present-badge">
                            <span className="pulse-dot"></span>
                            Present
                          </span>
                        )}
                      </div>
                      <h4 className="company-title">{item.name}</h4>
                    </div>

                    <div className="header-meta-group">
                      <div className="meta-badges-cluster">
                        <span className="timeline-date-badge">
                          <svg
                            viewBox="0 0 24 24"
                            width="13"
                            height="13"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                          {item.date}
                        </span>

                        <span className="timeline-location-badge">
                          <span className="loc-icon">
                            <LocationImg />
                          </span>
                          {item.details.location}
                        </span>
                      </div>

                      <div
                        className={`card-chevron-toggle ${
                          isExpanded ? "chevron-open" : ""
                        }`}
                        aria-hidden="true"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          width="16"
                          height="16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Summary Description */}
                  <p className="milestone-description">
                    {item.details.description}
                  </p>

                  {/* Expandable Key Highlights */}
                  {isExpanded && item.details.highlights && (
                    <div className="milestone-details-expanded">
                      <div className="highlights-wrapper">
                        <span className="highlights-caption">Key Contributions:</span>
                        <ul className="highlights-bullets">
                          {item.details.highlights.map((bullet, bIdx) => (
                            <li key={bIdx} className="bullet-row">
                              <span className="bullet-arrow">▹</span>
                              <span className="bullet-text">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Tech Stack Chips */}
                  {item.details.techStack && (
                    <div className="milestone-tech-chips">
                      {item.details.techStack.map((tech) => (
                        <span key={tech} className="tech-badge-chip">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
