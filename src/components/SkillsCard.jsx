import React from "react";
import { Card, Col } from "react-bootstrap";

const SkillsCard = ({ experience, duration, skills }) => {
  return (
    <Col md={10}>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>{experience}</Card.Title>
          <Card.Subtitle className="text-muted">{duration}</Card.Subtitle>
          <hr />
          <div className="scrollable-content">
            <ul className="skills-list">
              {skills.map((skill, index) => (
                <li key={index} className="highlight-skill">{skill}</li>
              ))}
            </ul>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SkillsCard;
