import React from 'react';
import './Contact.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <a href="mailto:hemawathi2002@gmail.com" className="contact-link">
              hemawathi2002@gmail.com
            </a>
          </div>

          <div className="contact-item">
            <MdLocationOn className="contact-icon" />
            <p className="contact-text">Chennai, India</p>
          </div>

          {/* Move social links here */}
          <a
            href="https://www.linkedin.com/in/hemawathi-karthikeyan-6aab27236"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/hemawathi-k"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
