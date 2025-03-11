import React from "react";
import { Container, Row } from "react-bootstrap";
import SkillsCard from "../components/SkillsCard";
import {skills} from "../data/db"; // Import skills data

const About = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">About Me</h2>

      <Row className="justify-content-center">
        <p className="text-center">
          I'm a passionate Full-Stack Developer with experience in building scalable applications.
          I specialize in the MERN stack, authentication, and integrating AI-powered features.
        </p>
      </Row>

      {/* Skills Section */}
      <h3 className="text-center mt-4">Skills & Expertise</h3>
      <Row className="justify-content-center">
        {skills.map((skillData, index) => (
          <SkillsCard key={index} {...skillData} />
        ))}
      </Row>
    </Container>
  );
};

export default About;
