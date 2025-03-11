import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import WorkExperienceCard from "../components/WorkExperienceCard";
import { workExperience } from "../data/db"; // Import work experience data

const WorkExperience = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Work Experience</h2>
      <Row className="justify-content-center">
        {workExperience.map((experience, index) => (
          <Col md={10} key={index}>
            <WorkExperienceCard {...experience} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WorkExperience;
