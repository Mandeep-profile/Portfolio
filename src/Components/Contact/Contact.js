import React, { useState } from "react";
import avatar from "../../Assets/avatar.svg";
import Navbar from "../Navbar/Navbar";
import { useSelector } from "react-redux";
import "./Contact.scss";

const Contact = () => {
  const isSelectedTheme = useSelector(
    (state) => state.selectedTheme.isThemeSelected
  );

  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleContactChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
  };

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email);
  const isFormValid =
    contactForm.firstName.trim() !== "" &&
    isEmailValid &&
    contactForm.message.trim() !== "";

  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    const subject = encodeURIComponent(
      contactForm.subject.trim() || `Portfolio Inquiry from ${contactForm.firstName}`
    );
    const body = encodeURIComponent(
      `Hi Mandeep,\n\n${contactForm.message}\n\n---\nFrom: ${contactForm.firstName} ${contactForm.lastName}\nEmail: ${contactForm.email}${
        contactForm.phoneNumber ? `\nPhone: ${contactForm.phoneNumber}` : ""
      }`
    );

    window.location.href = `mailto:mandeep.developer@example.com?subject=${subject}&body=${body}`;

    setIsSubmitted(true);
    setContactForm({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className={`contact-page ${isSelectedTheme ? "page-light" : "page-dark"}`}>
      <Navbar />

      <div className="contact-content-wrapper">
        <div className="avatar-wrapper">
          <img src={avatar} className="avatar-img" alt="avatar" />
        </div>

        <h1
          className={`contact-heading ${
            isSelectedTheme ? "site-light-theme" : "site-dark-theme"
          }`}
        >
          GET IN TOUCH
        </h1>

        {isSubmitted && (
          <div className="contact-success-banner">
            <span>✓ Thank you! Your email client has been opened. Looking forward to connecting!</span>
          </div>
        )}

        <form className="contact-form" onSubmit={handleContactFormSubmit}>
          <div className="input-row two-cols">
            <div className="input-col">
              <input
                type="text"
                name="firstName"
                value={contactForm.firstName}
                placeholder="First Name *"
                className="form-input"
                onChange={handleContactChange}
                required
              />
            </div>
            <div className="input-col">
              <input
                type="text"
                name="lastName"
                value={contactForm.lastName}
                placeholder="Last Name"
                className="form-input"
                onChange={handleContactChange}
              />
            </div>
          </div>

          <div className="input-row two-cols">
            <div className="input-col">
              <input
                type="email"
                name="email"
                value={contactForm.email}
                placeholder="Email Address *"
                className="form-input"
                onChange={handleContactChange}
                required
              />
            </div>
            <div className="input-col">
              <input
                type="tel"
                name="phoneNumber"
                value={contactForm.phoneNumber}
                placeholder="Phone (optional)"
                className="form-input"
                onChange={handleContactChange}
              />
            </div>
          </div>

          <div className="input-row full-width">
            <div className="input-col">
              <input
                type="text"
                name="subject"
                value={contactForm.subject}
                placeholder="Subject"
                className="form-input"
                onChange={handleContactChange}
              />
            </div>
          </div>

          <div className="input-row full-width">
            <div className="input-col">
              <textarea
                name="message"
                value={contactForm.message}
                placeholder="Message *"
                className="form-input form-textarea"
                onChange={handleContactChange}
                rows="6"
                required
              />
            </div>
          </div>

          <div className="submit-btn-row">
            <button
              type="submit"
              className={`submit-btn ${
                isFormValid ? "submit-btn-active" : "submit-btn-disabled"
              }`}
              disabled={!isFormValid}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;