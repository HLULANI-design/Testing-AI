import React, { useState } from "react";
import { Card, Button, Form, Alert, ListGroup } from "react-bootstrap";

const AskAQuestion: React.FC = () => {
  const [question, setQuestion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [response, setResponse] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://10.135.32.182:8080/askQuestion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });
      const data = await res.json();
      console.log(data); // See what you get here
      setResponse(data?.res || JSON.stringify(data) || "No response received.");
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting question:", error);
      setResponse("An error occurred while submitting your question.");
      setSubmitted(true);
    }
  };

  // response is a string from the backend (data.res)

  return (
    <Card className="shadow-sm border-0 my-4">
      <Card.Body>
        <h3 className="mb-3"> </h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Your Question</Form.Label>
            <Form.Control
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Type your question here..."
              required
            />
          </Form.Group>
          <Button type="submit" variant="primary" disabled={!question}>
            Submit
          </Button>
        </Form>
        {submitted && response && (
          <Card className="mt-4 border-info">
            <Card.Body>
              <div className="mb-2">
                <strong>Question:</strong> {question}
              </div>
              <div>
                <strong>Response:</strong>
                <pre style={{ whiteSpace: "pre-wrap" }}>{response}</pre>
              </div>
            </Card.Body>
          </Card>
        )}
        <div className="mt-4">
          <h5>Enquire Knowledge Base</h5>
          <ListGroup>
            <ListGroup.Item>
              Explain the business rules for logging in
            </ListGroup.Item>
            <ListGroup.Item>
              What are the limitations for logging in?
            </ListGroup.Item>
            <ListGroup.Item>How do I reset my password?</ListGroup.Item>
            <ListGroup.Item>Is there a way to export results?</ListGroup.Item>
          </ListGroup>
        </div>
      </Card.Body>
    </Card>
  );
};

export default AskAQuestion;
