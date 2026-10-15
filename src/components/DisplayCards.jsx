import React from "react";
import { Card, Col, Button, Badge } from "react-bootstrap";

const DisplayCard = ({ title, description, techStack, repo, live }) => {
  return (
    <Col md={4} xs={12} className="px-1"> {/* Adds small padding on small devices */}
      <Card className="custom-card">
          <div className="d-flex justify-content-center gap-2 mt-3">
            {repo && <Button href={repo} target="_blank" variant="outline-secondary">GitHub</Button>}
            {live && <Button href={live} target="_blank" variant="outline-primary">Live Demo</Button>}
          </div>
        <Card.Body className="custom-card-body">
          {/* Project Title */}
          <Card.Title className="text-center custom-title">{title}</Card.Title>

          {/* Description */}
          {description && <Card.Text className="card-text">{description}</Card.Text>}

          {/* Tech Stack - Display as Badges */}
          {techStack && techStack.length > 0 && (
            <div className="tech-stack">
              {techStack.map((tech, index) => (
                <Badge key={index} bg="primary" className="tech-badge">{tech}</Badge>
              ))}
            </div>
          )}

          {/* Buttons (Render Only If Links Are Available) */}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DisplayCard;
