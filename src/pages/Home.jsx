import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/home.css";
import profilePic from '../assets/profilepic.jpg';

const Home = () => {
  return (
    <Container className="home-container">
      <Row className="hero-section d-flex align-items-center justify-content-center text-center">
        <Col md={10}>
          <img
            src={profilePic}
            alt="Praneeth"
            className="rounded-circle mb-3 fade-in"
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />

          <h1 className="fw-bold">Hi, I'm <span className="highlight">Praneeth</span></h1>
          <p className="lead fade-in">
            Building scalable, user-friendly applications with modern web technologies.
          </p>

          <div className="highlighted-links fade-in">
            <Link to="/workexperience" className="highlighted-link">Work Experience</Link>
            <span className="mx-2">|</span>
            <Link to="/projects" className="highlighted-link">Projects</Link>
            <span className="mx-2">|</span>
            <Link to="/about" className="highlighted-link">Skills</Link>
          </div>

          {/* Resume Download Button */}
          <div className="resume-container fade-in">
            <a href="/Resume_MERN.pdf" download="Praneeth_Resume.pdf">
              <Button variant="success" size="lg" className="mt-3">
                📄 Download Resume
              </Button>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
