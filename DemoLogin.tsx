import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useFormik } from "formik";

const DemoLogin = ({ onLogin, user }: { onLogin: (name: string) => void; user: string | null }) => {
  const [show, setShow] = React.useState(false);

  const formik = useFormik({
    initialValues: { name: "" },
    validate: values => {
      const errors: { name?: string } = {};
      if (!values.name.trim()) {
        errors.name = "Username is required";
      }
      return errors;
    },
    onSubmit: (values) => {
      onLogin(values.name.trim());
      setShow(false);
      formik.resetForm();
    },
  });

  return (
    <>
      {user ? (
        <span className="me-3">Welcome, <b>{user}</b></span>
      ) : (
        <Button variant="outline-primary" className="me-2" onClick={() => setShow(true)}>
          Login
        </Button>
      )}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login (Demo)</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your name"
                isInvalid={!!formik.touched.name && !!formik.errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <div className="d-flex justify-content-end mt-3">
              <Button variant="secondary" onClick={() => setShow(false)} className="me-2">
                Cancel
              </Button>
              <Button variant="primary" type="submit" disabled={formik.isSubmitting}>
                Login
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DemoLogin;
