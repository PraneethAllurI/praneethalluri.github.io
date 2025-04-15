import React, { useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/home.css";
import profilePic from "../assets/profilepic.jpg";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const access_token = queryParams.get("access_token");
    const refresh_token = queryParams.get("refresh_token");
    const expires_in = queryParams.get("expires_in");

    console.log(access_token, refresh_token, expires_in);
    if (access_token && refresh_token && expires_in) {
      const expiryTime = new Date(Date.now() + parseInt(expires_in) * 1000);

      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);
      localStorage.setItem("token_expiry", expiryTime.toISOString());

      // ✅ Clean up URL so tokens don't stay visible
      window.history.replaceState({}, document.title, window.location.pathname);

      console.log("🔐 Spotify tokens stored in localStorage");

      // Optional: auto-redirect to /spotify if needed
      // navigate("/spotify");
    }
  }, []);

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

          <h1 className="fw-bold">
            Hi, I'm <span className="highlight">Praneeth</span>
          </h1>
          <p className="lead fade-in">
            Building scalable, user-friendly applications with modern web
            technologies.
          </p>

          {/* Resume Download Button */}
          <div className="resume-container fade-in">
            <a href="/Resume_MERN.pdf" download="Praneeth_Resume.pdf">
              <Button variant="success" size="lg" className="mt-3">
                📄 Download Resume
              </Button>
            </a>
          </div>

          {/* Summary Section */}
          <Card className="summary-card fade-in mt-4">
            <Card.Body>
              <Card.Title className="summary-title">
                Professional Summary
              </Card.Title>
              <Card.Text className="summary-text">
                • Over <strong>2.5+ years</strong> of professional IT
                experience.
                <br />• <strong>1+ years</strong> of experience with{" "}
                <strong>Nagios</strong> for network monitoring, incident
                detection, and ticket management.
                <br />• <strong>1 year</strong> of experience in managing{" "}
                <strong>high-priority incidents (P1, P2)</strong>.<br />•
                Currently transitioning into{" "}
                <strong>Full Stack Development</strong>, with hands-on
                experience in{" "}
                <strong>MERN (MongoDB, Express.js, React, Node.js)</strong>.
                <br />
                • Strong problem-solving abilities, attention to detail, and
                excellent collaboration skills.
                <br />• Passionate about building scalable, user-friendly web
                applications and eager to apply growing development skills as a{" "}
                <strong>Full Stack Developer</strong>.
              </Card.Text>

              <div className="highlighted-links fade-in">
                <Link to="/workexperience" className="highlighted-link">
                  Work Experience
                </Link>
                <span className="mx-2">|</span>
                <Link to="/projects" className="highlighted-link">
                  Projects
                </Link>
                <span className="mx-2">|</span>
                <Link to="/about" className="highlighted-link">
                  Skills
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
