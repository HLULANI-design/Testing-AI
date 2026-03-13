import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Card, Badge, Spinner, Tabs, Tab } from "react-bootstrap";
import { getRun } from "../lib/api";
import { TestRun } from "../lib/types";

const RunDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const [run, setRun] = useState<TestRun | null>(null);
  const [loading, setLoading] = useState(true);

  // Get the response passed from navigation state (if any), or fallback to run.output
  const [response, setResponse] = useState<any>(() => location.state?.response);

  useEffect(() => {
    if (!id) return;
    getRun(id).then((data) => {
      setRun(data || null);
      setLoading(false);
      // If no response was passed, fallback to run.output
      if (!location.state?.response && data?.output) {
        setResponse(data.output);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // Update response if navigation state changes (e.g., client-side navigation)
  useEffect(() => {
    if (location.state?.response) {
      setResponse(location.state.response);
    }
  }, [location.state]);

  if (loading) return <Spinner animation="border" />;
  if (!run) console.error("No run found");

  return (
    <>
      <h2 className="mb-4">
        <BiSearchAlt size={28} className="me-2" /> Run Details
      </h2>

      {/* Show the response if it was passed from NewPrompt */}
      {response && (
        <Card className="mb-3 border-info">
          <Card.Body>
            <strong>Prompt Response:</strong>
            <pre className="mb-0">
              {typeof response === "string"
                ? response
                : JSON.stringify(response, null, 2)}
            </pre>
          </Card.Body>
        </Card>
      )}

      {/* <Card className="mb-4">
        <Card.Body>
          <h5>
            {run.model} — {run.task}{" "}
            <Badge
              bg={
                run.status === "PASSED"
                  ? "success"
                  : run.status === "FAILED"
                  ? "danger"
                  : run.status === "RUNNING"
                  ? "warning"
                  : "secondary"
              }
            >
              {run.status}
            </Badge>
          </h5>
          <p>Created: {new Date(run.createdAt).toLocaleString()}</p>
          {run.finishedAt && (
            <p>Finished: {new Date(run.finishedAt).toLocaleString()}</p>
          )}
        </Card.Body>
      </Card>

      <Tabs defaultActiveKey="output" className="mb-3">
        <Tab eventKey="output" title="Output">
          <pre>{JSON.stringify(run.output, null, 2)}</pre>
        </Tab>
        <Tab eventKey="code" title="Code">
          <pre>
            {run.output && run.output.code
              ? run.output.code
              : "// No code output available"}
          </pre>
        </Tab>
        <Tab eventKey="json" title="Full JSON">
          <pre>{JSON.stringify(run, null, 2)}</pre>
        </Tab>
        <Tab eventKey="logs" title="Logs">
          <pre>{run.logs?.join("\n")}</pre>
        </Tab>
        <Tab eventKey="metrics" title="Metrics">
          <pre>{JSON.stringify(run.metrics, null, 2)}</pre>
        </Tab>
      </Tabs> */}
    </>
  );
};

export default RunDetails;