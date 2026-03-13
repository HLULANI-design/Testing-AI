import React from "react";
import { Container } from "react-bootstrap";
import "./Dashboard.css";
import testingImg from "../testing.png.jpg";

const Welcome = () => {
  return (
    <div className="dashboard-hero-bg" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Container className="text-center py-5">
        <img src={testingImg} alt="Testing AI" className="img-fluid mb-4 hero-image" style={{ maxWidth: 400, borderRadius: 16, boxShadow: "0 4px 32px rgba(0,0,0,0.08)" }} />
        <h1 className="display-4 fw-bold mb-3">Welcome to Testing AI</h1>
        <p className="lead mb-4">Your modern playground for AI-driven data testing and prompt engineering.</p>
      </Container>
    </div>
  );
};

export default Welcome;
