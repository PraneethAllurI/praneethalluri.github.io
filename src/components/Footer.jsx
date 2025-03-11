import React from "react";
import { Container } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "../styles/Footer.css"; // Ensure you link this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="text-center">
        <p>Connect with me:</p>
        <div className="social-links">
          <a href="https://github.com/PraneethAllurI" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/praneeth-kumar-alluri-7b777821a/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://www.instagram.com/praneeth_allurii/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Praneeth. All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
