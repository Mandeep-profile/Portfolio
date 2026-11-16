import React from "react";
import { useSelector } from "react-redux";
import { ProjectsData } from "../../Utils/Projects/index";
import { useScrollReveal } from "../../Utils/useScrollReveal";
import "./Projects.scss";

const Projects = () => {
  const isSelectedTheme = useSelector(
    (state) => state.selectedTheme.isThemeSelected
  );

  const containerRef = useScrollReveal();

  return (
    <div ref={containerRef} className="Projects-div-main" id="projects">
      <h3 className={`scroll-reveal ${isSelectedTheme ? "site-light-theme" : "site-dark-theme"}`}>
        My Recent Work
      </h3>
      <p className="projects-subtitle scroll-reveal">
        Here are featured projects I've built and contributed to during my professional tenure
      </p>
      <div className="projects-grid">
        {ProjectsData.map((project, idx) => (
          <div
            className={`project-card scroll-reveal ${
              isSelectedTheme ? "card-light-theme" : "card-dark-theme"
            }`}
            style={{ transitionDelay: `${0.1 + idx * 0.12}s` }}
            key={project.id}
          >
            <div className="card-media">
              <img
                src={project.image}
                alt={project.title}
                className="card-preview-img"
              />
              <div className="card-logo-badge">
                <img src={project.logo} alt={`${project.title} logo`} />
              </div>
            </div>
            <div className="card-body">
              <div className="card-header">
                <h4 className="project-title">{project.title}</h4>
                <span className="project-tagline">{project.tagline}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech-stack">
                {project.techStack.map((tech) => (
                  <span className="tech-badge" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-actions">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="action-btn github-btn"
                  >
                    <svg
                      className="btn-icon"
                      viewBox="0 0 16 16"
                      width="16"
                      height="16"
                      fill="currentColor"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    <span>GitHub</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="action-btn live-btn"
                  >
                    <svg
                      className="btn-icon"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
