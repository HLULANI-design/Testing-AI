import { Card, Col, Row } from "react-bootstrap";

interface MetricsCardsProps {
  metrics?: {
    accuracy?: number;
    latencyMs?: number;
  };
}

const MetricsCards = ({ metrics }: MetricsCardsProps) => {
  if (!metrics) return <p>No metrics available</p>;

  return (
    <Row className="mb-4">
      <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>Accuracy</Card.Title>
            <Card.Text>{metrics.accuracy ? `${(metrics.accuracy * 100).toFixed(1)}%` : "N/A"}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>Latency</Card.Title>
            <Card.Text>{metrics.latencyMs ? `${metrics.latencyMs} ms` : "N/A"}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default MetricsCards;
