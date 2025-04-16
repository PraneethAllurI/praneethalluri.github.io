// src/pages/github.jsx

import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { Container, Row, Col, Form, Button, Card, Spinner, Alert } from "react-bootstrap";

const GitHubDashboard = () => {
    const [profile, setProfile] = useState(null);
    const [repositories, setRepositories] = useState([]);    
  const [repoName, setRepoName] = useState("");
  const [repoDetails, setRepoDetails] = useState(null);
  const [issueForm, setIssueForm] = useState({ title: "", body: "" });
  const [issueResponse, setIssueResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch user GitHub profile on load
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("/github");
        setProfile(res.data.profile);
setRepositories(res.data.repositories);

      } catch (err) {
        setError("Failed to load GitHub profile");
      }
    };

    fetchProfile();
  }, []);

  // Fetch a specific repo
  const fetchRepoDetails = async () => {
    if (!repoName) return;
    setLoading(true);
    setError("");
    try {
      const res = await axios.get(`/github/${repoName}`);
      setRepoDetails(res.data);
    } catch (err) {
      setError("Could not fetch repo details");
    } finally {
      setLoading(false);
    }
  };

  // Create a new issue
  const createIssue = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.post(`/github/${repoName}/issues`, issueForm);
      setIssueResponse(res.data);
      setIssueForm({ title: "", body: "" });
    } catch (err) {
      setError(err.response?.data?.details || "Failed to create issue");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">GitHub Dashboard</h2>

      {/* Error Display */}
      {error && <Alert variant="danger">{error}</Alert>}

      {/* Profile Info */}
      {profile && (
        <Card className="mb-4">
          <Card.Body>
            <Row>
              <Col md={2}>
                <img src={profile.avatar_url} alt="avatar" className="img-fluid rounded-circle" />
              </Col>
              <Col md={10}>
                <h4>{profile.name}</h4>
                <p>{profile.bio}</p>
                <a href={profile.html_url} target="_blank" rel="noreferrer">
                  View GitHub Profile
                </a>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      )}
      {/* Repository List */}
{repositories.length > 0 && (
  <>
    <h4 className="mt-5 mb-3">Public Repositories</h4>
    <Row>
      {repositories.map((repo, idx) => (
        <Col md={6} lg={4} className="mb-4" key={idx}>
          <Card>
            <Card.Body>
              <Card.Title>{repo.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {repo.language || "No primary language"}
              </Card.Subtitle>
              <Card.Text>
                {repo.description || "No description provided."}
              </Card.Text>
              <div className="d-flex justify-content-between">
                <span>⭐ {repo.stars}</span>
                <span>🍴 {repo.forks}</span>
              </div>
              <a
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-primary btn-sm mt-3 w-100"
              >
                View Repo
              </a>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </>
)}

      {/* Repo Search */}
      <Card className="mb-4">
        <Card.Body>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              fetchRepoDetails();
            }}
          >
            <Row className="align-items-end">
              <Col md={8}>
                <Form.Group controlId="repoName">
                  <Form.Label>Repository Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="e.g. portfolio"
                    value={repoName}
                    onChange={(e) => setRepoName(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Button variant="primary" type="submit" className="w-100">
                  {loading ? <Spinner size="sm" animation="border" /> : "Get Repo Info"}
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>

      {/* Repo Details */}
      {repoDetails && (
        <Card className="mb-4">
          <Card.Body>
            <h5>{repoDetails.name}</h5>
            <p>{repoDetails.description}</p>
            <p>
              ⭐ Stars: {repoDetails.stargazers_count} | 🍴 Forks: {repoDetails.forks_count}
            </p>
            <a href={repoDetails.html_url} target="_blank" rel="noreferrer">
              View Repository on GitHub
            </a>
          </Card.Body>
        </Card>
      )}

      {/* Issue Creation */}
      {repoDetails && (
        <Card>
          <Card.Body>
            <h5>Create a New Issue</h5>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                createIssue();
              }}
            >
              <Form.Group controlId="issueTitle" className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Issue Title"
                  value={issueForm.title}
                  onChange={(e) => setIssueForm({ ...issueForm, title: e.target.value })}
                />
              </Form.Group>

              <Form.Group controlId="issueBody" className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Issue description..."
                  value={issueForm.body}
                  onChange={(e) => setIssueForm({ ...issueForm, body: e.target.value })}
                />
              </Form.Group>

              <Button type="submit" variant="success">
                {loading ? <Spinner size="sm" animation="border" /> : "Create Issue"}
              </Button>
            </Form>

            {issueResponse && (
              <Alert variant="success" className="mt-3">
                Issue created!{" "}
                <a href={issueResponse.issue_url} target="_blank" rel="noreferrer">
                  View it on GitHub
                </a>
              </Alert>
            )}
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default GitHubDashboard;
