import React from "react";
import { Dropdown, Badge } from "react-bootstrap";
import { FaBell } from "react-icons/fa";

export interface NotificationItem {
  id: number;
  message: string;
  type?: "success" | "error" | "info";
  timestamp: string;
  link?: string;
  read?: boolean;
}

const NotificationDropdown = ({ notifications, onMarkRead }: {
  notifications: NotificationItem[];
  onMarkRead: (id: number) => void;
}) => {
  const unreadCount = notifications.filter(n => !n.read).length;
  return (
    <Dropdown align="end">
      <Dropdown.Toggle variant="outline-secondary" id="dropdown-notifications" className="position-relative">
        <FaBell />
        {unreadCount > 0 && (
          <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
            {unreadCount}
          </Badge>
        )}
      </Dropdown.Toggle>
      <Dropdown.Menu style={{ minWidth: 320, maxHeight: 400, overflowY: 'auto' }}>
        <Dropdown.Header>Notifications</Dropdown.Header>
        {notifications.length === 0 && (
          <Dropdown.ItemText className="text-muted">No notifications</Dropdown.ItemText>
        )}
        {notifications.map(n => (
          <Dropdown.Item key={n.id} onClick={() => onMarkRead(n.id)} active={!n.read}>
            <div className="d-flex justify-content-between align-items-center">
              <span>{n.message}</span>
              <small className="text-muted ms-2">{new Date(n.timestamp).toLocaleTimeString()}</small>
            </div>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NotificationDropdown;
