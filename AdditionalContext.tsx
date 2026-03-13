import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const AdditionalContext = () => {
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) {
      setError("Please enter a URL or text context.");
      return;
    }
    setError("");
    setSubmitted(false);
    try {
      const response = await fetch("http://10.135.32.182:8080/addContext", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ context: input })
      });
      if (!response.ok) {
        throw new Error("Failed to submit context.");
      }
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "An error occurred.");
    }
  };

  return (
    <div>
      <h5 className="mb-3">Feed More Information to the LLM</h5>
      {submitted && <Alert variant="success">Context submitted successfully!</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Enter URL or Text Context</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Paste a URL (e.g. Jira, Wiki, public site) or enter additional context here..."
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AdditionalContext;
