import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { CreateRunPayload } from "../lib/types";

interface TestRunFormProps {
  onSubmit: (payload: CreateRunPayload) => void;
}

const TestRunForm = ({ onSubmit }: TestRunFormProps) => {
  const [model, setModel] = useState("meta-llama/Llama-3.1-8B-Instruct");
  const [task, setTask] = useState("text-generation");
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ model, task, inputText });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Model</Form.Label>
        <Form.Control
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Enter model ID"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Task</Form.Label>
        <Form.Select value={task} onChange={(e) => setTask(e.target.value)}>
          <option value="text-generation">Text Generation</option>
          <option value="text-classification">Text Classification</option>
          <option value="summarization">Summarization</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Input</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter input text"
        />
      </Form.Group>

      <Button type="submit" variant="primary">
        Start Run
      </Button>
    </Form>
  );
};

export default TestRunForm;
