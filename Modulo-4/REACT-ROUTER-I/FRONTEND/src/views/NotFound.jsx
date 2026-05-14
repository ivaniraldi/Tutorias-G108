import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function NotFound() {
  return (
    <>
      <NavBar />
      <div
        className="container"
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="alert alert-warning text-center p-4">
          <h1>ERROR 404</h1>
          <p>La página que intentas visitar no existe.</p>
          <Link to={"/"}>
            <button className="btn btn-warning">Volver al inicio</button>
          </Link>
        </div>
      </div>
    </>
  );
}
