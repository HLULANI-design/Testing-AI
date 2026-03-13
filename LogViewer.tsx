import { Card } from "react-bootstrap";

interface LogViewerProps {
  logs?: string[];
}

const LogViewer = ({ logs }: LogViewerProps) => {
  if (!logs || logs.length === 0) {
    return <p>No logs available</p>;
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>Execution Logs</Card.Title>
        <pre className="bg-light p-2 rounded" style={{ maxHeight: "300px", overflowY: "auto" }}>
          {logs.join("\n")}
        </pre>
      </Card.Body>
    </Card>
  );
};

export default LogViewer;
