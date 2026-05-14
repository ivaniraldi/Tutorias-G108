import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function RegisterForm() {
  return (
    <div className="container mt-2 d-flex justify-content-center">
      <Form style={{ width: "50%" }} className="border rounded p-4">
        <h1 className="text-decoration-underline">Registrarse</h1>

        <Form.Group className="my-3" controlId="formBasicEmail">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control type="email" placeholder="Email" />
          <Form.Text className="text-muted">
            Nunca compartiremos tu email con nadie.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Repite tu contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button variant="primary" type="submit">
            Registrarme
          </Button>
        </div>
        <p className="text-center mt-3">
          No tienes una cuenta?{" "}
          <span className="text-primary text-decoration-underline">
            Registrate.
          </span>
        </p>
      </Form>
    </div>
  );
}
