import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { GlobalContext } from "../contexts/GlobalContext";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const { user, setUser } = useContext(GlobalContext);

  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(
      "Ejecutando la logica del login con las credenciales: ",
      email,
      password,
    );
    let loggedUser = {
      id: 1,
      nombre: "Ivan",
      email,
      password,
      token: "#####",
    };

    if (!email || !password) {
      alert("Debes ingresar tus datos");
      return;
    } else {
      setUser(loggedUser);
      navigate("/")
    }
  };



  return (
    <div className="container mt-2 d-flex justify-content-center">
      <Form
        style={{ width: "50%" }}
        className="border rounded p-4"
        onSubmit={handleLogin}
      >
        <h1 className="text-decoration-underline">Iniciar sesión</h1>

        <Form.Group className="my-3" controlId="formBasicEmail">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            Nunca compartiremos tu email con nadie.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button variant="primary" type="submit">
            Iniciar Sesión
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
