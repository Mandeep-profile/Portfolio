import React, { useEffect } from "react";
import Resume from "../../Assets/Latest Resume.pdf";

const PDF = ({ onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="pdf-modal-overlay" role="dialog" aria-modal="true" aria-label="Resume Preview">
      <div className="pdf-toolbar">
        <span className="pdf-title">Mandeep Singh — Resume</span>
        <div className="pdf-actions">
          <a
            href={Resume}
            download="Mandeep_Singh_Resume.pdf"
            className="pdf-btn download-btn"
          >
            Download PDF
          </a>
          <a
            href={Resume}
            target="_blank"
            rel="noreferrer"
            className="pdf-btn tab-btn"
          >
            Open in New Tab
          </a>
          <button onClick={onClose} className="pdf-btn close-btn" aria-label="Close Resume">
            ✕ Close
          </button>
        </div>
      </div>
      <div className="pdf-content">
        <iframe
          src={Resume}
          title="Mandeep Singh Resume"
          style={{ width: "100%", height: "100%", border: "none" }}
        />
      </div>
    </div>
  );
};

export default PDF;
