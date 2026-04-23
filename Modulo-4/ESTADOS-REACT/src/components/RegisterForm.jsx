import React, { useState } from "react";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordC, setPasswordC] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      alert("La contraseña debe tener más de 6 caracteres");
      return;
    } else if (password !== passwordC) {
      alert("Las contraseñas deben coincidir.");
      return;
    } else {
      console.log("Estoy enviando el registro");
      alert("Sesión iniciada!");
      setEmail("");
      setPassword("");
      setPasswordC("");
    }
  };

  return (
    <form
      className="loginForm"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <h2>Crear una cuenta</h2>

      <label htmlFor="email">Email</label>
      <br />
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <br />
      <label htmlFor="passwordConfirm">Confirma la password:</label>
      <br />
      <input
        type="password"
        value={passwordC}
        onChange={(e) => {
          setPasswordC(e.target.value);
        }}
      />

      <br />
      <button type="submit">Registarme</button>
    </form>
  );
}
