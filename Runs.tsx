import React from "react";
import { FaListAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Table, Badge, Spinner } from "react-bootstrap";
import { listRuns } from "../lib/api";
import { TestRun } from "../lib/types";
import { Link } from "react-router-dom";

const Details = () => {
  const [runs, setRuns] = useState<TestRun[]>([]);
  const [loading, setLoading] = useState(true);

  
useEffect(() => {
  listRuns().then((data) => {
    setRuns(data);
    setLoading(false);
  });
}, []);
  if (loading) return <Spinner animation="border" />;

  return (
    <>
  <h2 className="mb-4"><FaListAlt size={28} className="me-2" /> All Test Runs</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Model</th>
            <th>Task</th>
            <th>Owner</th>
            <th>Created</th>
            <th>Response Preview</th>
          </tr>
        </thead>
        <tbody>
          {runs.map((run) => (
            <tr key={run.id}>
              <td><Link to={`/runs/${run.id}`}>{run.id}</Link></td>
              <td>{run.model}</td>
              <td>{run.task}</td>
              <td>{run.owner}</td>
              <td>{new Date(run.createdAt).toLocaleString()}</td>
              <td style={{ maxWidth: 200, whiteSpace: 'pre-wrap', fontSize: '0.95em' }}>
                {run.output
                  ? (typeof run.output === 'string'
                      ? run.output.slice(0, 120)
                      : JSON.stringify(run.output).slice(0, 120))
                  : ''}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Details;
