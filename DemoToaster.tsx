import React, { useState, useEffect } from "react";
import { Toast, ToastContainer } from "react-bootstrap";

const DemoToaster = ({ toasts, removeToast }: { toasts: { id: number, message: string, variant?: string }[], removeToast: (id: number) => void }) => {
  return (
    <ToastContainer position="top-end" className="p-3" style={{ zIndex: 9999 }}>
      {toasts.map(t => (
        <Toast key={t.id} bg={t.variant || "info"} onClose={() => removeToast(t.id)} delay={2500} autohide>
          <Toast.Body className="text-white">{t.message}</Toast.Body>
        </Toast>
      ))}
    </ToastContainer>
  );
};

export default DemoToaster;
