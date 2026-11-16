import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AppLogo from "../../Assets/AppLogo.svg";
import { LinkedinLogo, GitMediaLogo } from "../../Assets/Images";
import { useScrollReveal } from "../../Utils/useScrollReveal";
import "./Footer.scss";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const navigate = useNavigate();
  const location = useLocation();
  const containerRef = useScrollReveal();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <footer ref={containerRef} className="footer-section">
      <div className="footer-ambient-glow"></div>
      <div className="footer-container scroll-reveal">
        {/* Simple & Good Brand Logo */}
        <div
          className="footer-logo-wrap"
          onClick={handleScrollToTop}
          role="button"
          tabIndex={0}
          aria-label="Back to top"
          title="Back to top"
        >
          <img src={AppLogo} className="footer-logo" alt="Portfolio Logo" />
        </div>

        {/* Tagline */}
        <p className="footer-tagline">
          Living, learning, and engineering modern web applications.
        </p>

        {/* Quick Nav Links */}
        <nav className="footer-nav" aria-label="Footer Navigation">
          <ul className="footer-nav-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  className="footer-nav-btn"
                  onClick={() => handleNavClick(link.id)}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <button
                type="button"
                className="footer-nav-btn"
                onClick={() => navigate("/contact")}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>

        {/* Social & Connect Links */}
        <div className="footer-social-links">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="social-btn linkedin-btn"
            aria-label="LinkedIn Profile"
            title="LinkedIn"
          >
            <LinkedinLogo />
          </a>
          <a
            href="https://github.com/Mandeep-profile"
            target="_blank"
            rel="noreferrer"
            className="social-btn github-btn"
            aria-label="GitHub Profile"
            title="GitHub"
          >
            <GitMediaLogo />
          </a>
          <a
            href="mailto:singh.mandeep.github@gmail.com"
            className="social-btn email-btn"
            aria-label="Send Email"
            title="Email Me"
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </div>

        {/* Status Pill */}
        <div className="footer-status-pill">
          <span className="status-pulse-dot"></span>
          <span>Open for Opportunities &amp; Full-time Roles</span>
        </div>

        {/* Bottom Metadata Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            Handcrafted by <strong>Mandeep Singh</strong> © {currentYear}
          </p>
          <button
            type="button"
            className="back-to-top-btn"
            onClick={handleScrollToTop}
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
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
              <path d="m18 15-6-6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
