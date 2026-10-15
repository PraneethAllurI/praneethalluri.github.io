import React from "react";
import { Container, Row } from "react-bootstrap";
import DisplayCard from "../components/DisplayCards";
import {projects} from "../data/db"; // Import the array of projects

const Projects = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">My Projects</h2>
      <Row className="card-container">
        {projects.map((project, index) => (
          <DisplayCard key={index} {...project} />
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
