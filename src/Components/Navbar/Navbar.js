import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AppLogo from "../../Assets/AppLogo.svg";
import { useSelector, useDispatch } from "react-redux";
import { ThemeActions } from "../../store/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faBars, faTimes } from "@fortawesome/fontawesome-free-solid";
import "./Navbar.scss";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const isSelectedTheme = useSelector(
    (state) => state.selectedTheme.isThemeSelected
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const isContactPage = location.pathname === "/contact";
  const btnText = isContactPage ? "Close" : "Contact";

  const handleDarkMode = () => {
    if (isSelectedTheme) {
      dispatch(ThemeActions.isDarkTheme());
    }
  };

  const handleLightMode = () => {
    if (!isSelectedTheme) {
      dispatch(ThemeActions.isLightTheme());
    }
  };

  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
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
    setMobileMenuOpen(false);
  };

  const handleContactClick = () => {
    setMobileMenuOpen(false);
    if (isContactPage) {
      navigate("/");
    } else {
      navigate("/contact");
    }
  };

  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      const targetId = location.state.scrollTo;
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 120);
      }
    }
  }, [location]);

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sections = ["projects", "experience", "skills", "about", "home"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <header className={`navbar-header ${isSelectedTheme ? "navbar-light" : "navbar-dark"}`}>
      <div className="navbar-container">
        <div className="navbar-brand" onClick={handleLogoClick} aria-label="Home" title="Home">
          <img src={AppLogo} className="logo" alt="logo" />
        </div>

        <nav className="navbar-desktop-nav">
          {!isContactPage && (
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    className={`nav-link-btn ${
                      activeSection === item.id ? "active" : ""
                    } ${isSelectedTheme ? "link-light" : "link-dark"}`}
                    onClick={() => handleNavClick(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          )}

          <div className="navbar-actions">
            <div
              className={`theme-toggle-pill ${
                !isSelectedTheme ? "theme-toggle-pill-dark" : ""
              }`}
            >
              <button
                type="button"
                className={`theme-btn ${
                  !isSelectedTheme ? "active-moon" : ""
                }`}
                onClick={handleDarkMode}
                aria-label="Switch to dark mode"
                title="Dark theme"
              >
                <FontAwesomeIcon icon={faMoon} />
              </button>
              <button
                type="button"
                className={`theme-btn ${
                  isSelectedTheme ? "active-sun" : ""
                }`}
                onClick={handleLightMode}
                aria-label="Switch to light mode"
                title="Light theme"
              >
                <FontAwesomeIcon icon={faSun} />
              </button>
            </div>

            <button
              className={`contact-button ${
                !isSelectedTheme ? "contact-button-dark" : ""
              }`}
              onClick={handleContactClick}
            >
              {btnText}
            </button>
          </div>
        </nav>

        <div className="navbar-mobile-toggle">
          <div
            className={`theme-toggle-pill mobile-pill ${
              !isSelectedTheme ? "theme-toggle-pill-dark" : ""
            }`}
          >
            <button
              type="button"
              className={`theme-btn ${
                !isSelectedTheme ? "active-moon" : ""
              }`}
              onClick={handleDarkMode}
              aria-label="Switch to dark mode"
              title="Dark theme"
            >
              <FontAwesomeIcon icon={faMoon} />
            </button>
            <button
              type="button"
              className={`theme-btn ${
                isSelectedTheme ? "active-sun" : ""
              }`}
              onClick={handleLightMode}
              aria-label="Switch to light mode"
              title="Light theme"
            >
              <FontAwesomeIcon icon={faSun} />
            </button>
          </div>

          <button
            type="button"
            className={`mobile-menu-btn ${
              isSelectedTheme ? "btn-light" : "btn-dark"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className={`navbar-mobile-dropdown ${
            isSelectedTheme ? "dropdown-light" : "dropdown-dark"
          }`}
        >
          {!isContactPage && (
            <ul className="mobile-nav-links">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    className={`mobile-nav-link-btn ${
                      activeSection === item.id ? "active" : ""
                    } ${isSelectedTheme ? "link-light" : "link-dark"}`}
                    onClick={() => handleNavClick(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          )}

          <div className="mobile-actions">
            <button
              className={`contact-button ${
                !isSelectedTheme ? "contact-button-dark" : ""
              }`}
              onClick={handleContactClick}
            >
              {btnText}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
