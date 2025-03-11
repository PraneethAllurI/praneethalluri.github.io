import React from "react";
import { Card } from "react-bootstrap";

const WorkExperienceCard = ({ company, duration, roles }) => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{company}</Card.Title>
        <Card.Subtitle className="text-muted">{duration}</Card.Subtitle>
        {roles.map((role, index) => (
          <div key={index} className="mt-3">
            <h5>{role.title}</h5>
            <p className="text-muted">{role.period}</p>
            <ul>
              {role.responsibilities.map((task, taskIndex) => (
                <li key={taskIndex}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </Card.Body>
    </Card>
  );
};

export default WorkExperienceCard;
