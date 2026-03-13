import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { FaFlask } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import { ReactNode } from "react";
interface AppNavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  user?: string | null;
  onLogout?: () => void;
  children?: ReactNode;
}

const AppNavbar = ({ darkMode, setDarkMode, user, onLogout, children }: AppNavbarProps) => {
  const navigate = useNavigate();
  return (
    <Navbar bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"} expand="lg" className="mb-4 shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <FaFlask size={24} className="me-2" />
          Testing AI
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/", { state: { tab: "dashboard" } })}>Dashboard</Nav.Link>
            <Nav.Link onClick={() => navigate("/", { state: { tab: "newprompt" } })}>New Prompt</Nav.Link>
            <Nav.Link as={Link} to="/runs">Details</Nav.Link>
          </Nav>
          {children}
          {user && (
            <>
              <span className="me-2">👤 {user}</span>
              <Button variant="outline-danger" size="sm" onClick={onLogout} className="me-2">Logout</Button>
            </>
          )}
          <Button
            variant={darkMode ? "light" : "dark"}
            onClick={() => setDarkMode(!darkMode)}
            className="ms-2"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
