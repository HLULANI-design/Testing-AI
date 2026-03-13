import React, { useState } from "react";
import { FaFlask, FaLink, FaCode, FaListAlt, FaPaperPlane } from "react-icons/fa";
import { Card, Form, Button, Alert, Row, Col, Badge, InputGroup } from "react-bootstrap";
import { createRun } from "../lib/api";
import { useNavigate } from "react-router-dom";

const NewPrompt = () => {
  const [task] = useState("test-case-generation");
  const [inputText, setInputText] = useState("");
  const [contextUrl, setContextUrl] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    if (!task || !inputText) {
        setError("Task option and prompt are required.");
        return;
    }
    setError("");
    try {
        // Dummy POST request to a placeholder URL
        const response = await fetch("http://10.135.32.182:8080/prompt", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                task,
                inputText,
                contextUrl,
            }),
        });
        if (!response.ok) {
            throw new Error("Failed to submit prompt.");
        }
        const data = await response.json();
        setSuccess(true);
        setInputText("");
        setContextUrl("");
        setTimeout(() => navigate(`/runs/${data.id}`, { state: { run: data } }), 1200);
    } catch (err: any) {
        setError(err.message || "An error occurred.");
    }
};

  return (
    <>
      <h2 className="mb-4 d-flex align-items-center">
        <FaFlask size={28} className="me-2 text-primary" /> New Prompt
      </h2>
      <Card className="shadow-lg border-0">
        <Card.Body>
          {success && <Alert variant="success">Prompt submitted successfully!</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label><FaListAlt className="me-2 text-secondary" />Task Option <Badge bg="info">Required</Badge></Form.Label>
                  <Form.Control type="text" value="Test Case Generation" readOnly plaintext />
                  <Form.Text className="text-muted">Only test case generation is available.</Form.Text>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label><FaLink className="me-2 text-secondary" />Context URL (optional)</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="url"
                      value={contextUrl}
                      onChange={e => setContextUrl(e.target.value)}
                      placeholder="Paste a Jira, Wiki, or public URL..."
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label><FaCode className="me-2 text-secondary" />Prompt / Requirement <Badge bg="info">Required</Badge></Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                placeholder="Describe what you want to generate or test..."
                required
              />
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button type="submit" variant="primary" size="lg" className="px-4 rounded-pill shadow d-flex align-items-center gap-2">
                <FaPaperPlane className="mb-1" /> Submit Prompt
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default NewPrompt;
