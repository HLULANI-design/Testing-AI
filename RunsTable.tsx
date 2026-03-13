import { Table, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TestRun } from "../lib/types";

interface RunsTableProps {
  runs: TestRun[];
}

const RunsTable = ({ runs }: RunsTableProps) => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>ID</th>
          <th>Model</th>
          <th>Task</th>
          <th>Status</th>
          <th>Owner</th>
          <th>Created</th>
        </tr>
      </thead>
      <tbody>
        {runs.map((run) => (
          <tr key={run.id}>
            <td>
              <Link to={`/runs/${run.id}`}>{run.id}</Link>
            </td>
            <td>{run.model}</td>
            <td>{run.task}</td>
            <td>
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
            </td>
            <td>{run.owner}</td>
            <td>{new Date(run.createdAt).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default RunsTable;
