import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Tabs, Tab, Card, Container } from "react-bootstrap";
import NewPrompt from "./NewPrompt";
import AdditionalContext from "./AdditionalContext";
import Welcome from "./Welcome";
import AskAQuestion from "./AskAQuestion";

const Home = () => {
  const location = useLocation();
  const initialTab = location.state && location.state.tab ? location.state.tab : "dashboard";
  const [key, setKey] = useState(initialTab);
  return (
    <Container className="mt-4">
      <Card className="shadow-sm border-0">
        <Card.Body>
          <Tabs
            id="main-tabs"
            activeKey={key}
            onSelect={(k) => setKey(k || "dashboard")}
            className="mb-3"
            justify
          >
            <Tab eventKey="dashboard" title="Welcome">
              <Welcome />
            </Tab>
            <Tab eventKey="newprompt" title="New Prompt">
              <NewPrompt />
            </Tab>
            <Tab eventKey="context" title="Additional Context">
              <AdditionalContext />
            </Tab>
            <Tab eventKey="ask" title="Ask a Question">
              <AskAQuestion />
            </Tab>
          </Tabs>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Home;
