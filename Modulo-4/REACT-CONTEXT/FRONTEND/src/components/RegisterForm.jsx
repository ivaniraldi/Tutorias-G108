import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, pass, pass2);

    if (!email || !pass || !pass2 || pass != pass2 || pass.length < 6) {
      alert(
        "Verifica que todos los campos esten completos y correctos, la contraseña debe tener por lo menos 6 caracteres.",
      );
      return;
    } else {
      let user = { email, password: pass };
      let datos = JSON.stringify(user);
      console.log(datos);

      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: datos,
      });

      let data = await res.json()
      console.log(data)

      if(data.error){
        alert(data.error)
        return
      }else{
        alert("Registrado correctamente. Inicia sesión para continuar.")
        navigate("/login")
      }
    }
  };

  return (
    <div className="container mt-2 d-flex justify-content-center">
      <Form
        style={{ width: "50%" }}
        className="border rounded p-4"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h1 className="text-decoration-underline">Registrarse</h1>

        <Form.Group className="my-3" controlId="formBasicEmail">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
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
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Repite tu contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Repite tu contraseña"
            value={pass2}
            onChange={(e) => setPass2(e.target.value)}
            required
          />
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
