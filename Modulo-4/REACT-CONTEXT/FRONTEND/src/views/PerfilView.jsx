import React, { useContext } from "react";
import NavBar from "../components/NavBar";
import { GlobalContext } from "../contexts/GlobalContext";

export default function PerfilView() {
  const { user, setUser } = useContext(GlobalContext);

  return (
    <>
      <NavBar />
      <div className="container mt-2">
        {user ? (
          <>
            <h2>Mi perfil</h2>
            <h3>Información del usuario con el ID: {user.id}</h3>
            <p>Nombre: {user.nombre}</p>
            <p>Email: {user.email}</p>
            <p>Rol: {user.token? "Cliente": "Visitante"}</p>
          </>
        ) : (
          <p>Cargando usuario...</p>
        )}
      </div>
    </>
  );
}
