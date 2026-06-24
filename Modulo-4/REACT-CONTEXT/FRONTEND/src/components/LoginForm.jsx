import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { GlobalContext } from "../contexts/GlobalContext";
import { Link, useNavigate } from "react-router-dom";

export default function LoginForm() {
  const { user, setUser, } = useContext(GlobalContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(email, password);

    if (!email || !password || password.length < 6) {
      alert(
        "Debes completar los campos y tu contraseña debe tener más de 6 caracteres",
      );
      return;
    } else {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      let data = await res.json();

      console.log(data);

      if (data.error) {
        alert(data.error);
        return;
      } else {
        alert("Sesión iniciada correctamente, bienvenido de nuevo!");
        let userLogged = { email: data.email, token: data.token };
        setUser(userLogged);
        localStorage.setItem("user", userLogged)
      }
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
          <Link to={"/register"}>
            <span className="text-primary text-decoration-underline">
              Registrate.
            </span>
          </Link>
        </p>
      </Form>
    </div>
  );
}
