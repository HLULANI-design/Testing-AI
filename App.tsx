import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import DemoLogin from "./components/DemoLogin";
import DemoToaster from "./components/DemoToaster";
import NotificationDropdown, { NotificationItem } from "./components/NotificationDropdown";
import Home from "./pages/Home";
import NewPrompt from "./pages/NewPrompt";
import Details from "./pages/Runs";
import RunDetails from "./pages/RunDetails";
import { Container } from "react-bootstrap";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState<string | null>(null);
  const [toasts, setToasts] = useState<{ id: number, message: string, variant?: string }[]>([]);
  const [notifications, setNotifications] = useState<NotificationItem[]>([{
    id: 1,
    message: "Welcome to Testing AI!",
    type: "info",
    timestamp: new Date().toISOString(),
    read: false,
  }]);

  const addToast = (message: string, variant?: string) => {
    setToasts(ts => [...ts, { id: Date.now() + Math.random(), message, variant }]);
  };
  const removeToast = (id: number) => {
    setToasts(ts => ts.filter(t => t.id !== id));
  };

  const addNotification = (message: string, type?: "success" | "error" | "info") => {
    setNotifications(ns => [
      { id: Date.now() + Math.random(), message, type, timestamp: new Date().toISOString(), read: false },
      ...ns,
    ]);
  };
  const markNotificationRead = (id: number) => {
    setNotifications(ns => ns.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const handleLogin = (name: string) => {
    setUser(name);
    addToast(`Welcome, ${name}!`, "success");
    addNotification(`User ${name} logged in.`, "success");
  };
  const handleLogout = () => {
    setUser(null);
    addToast("Logged out.", "info");
    addNotification("User logged out.", "info");
  };

  return (
    <div className={darkMode ? "bg-dark text-light min-vh-100" : ""}>
      <Router basename="/Testing-AI">
        <AppNavbar darkMode={darkMode} setDarkMode={setDarkMode} user={user} onLogout={handleLogout}>
          <NotificationDropdown notifications={notifications} onMarkRead={markNotificationRead} />
        </AppNavbar>
        <Container>
          <div className="d-flex justify-content-end align-items-center mt-2">
            <DemoLogin onLogin={handleLogin} user={user} />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/runs" element={<Details />} />
            <Route path="/runs/:id" element={<RunDetails />} />
          </Routes>
        </Container>
        <DemoToaster toasts={toasts} removeToast={removeToast} />
      </Router>
    </div>
  );
}

export default App;
