import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div className="container py-5">      
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-black mb-3">
          Descubre Nuestra Colección
        </h1>
        <p
          className="lead text-secondary mx-auto"
          style={{ maxWidth: "600px" }}
        >
          Explora los mejores productos con la tecnología de FakeStore ADL.
          Calidad premium garantizada en cada compra.
        </p>
        <div className="d-flex justify-content-center gap-3 mt-4">
          <button className="btn btn-primary rounded-pill px-4">
            Ver Productos
          </button>
          <button className="btn btn-outline-success rounded-pill px-4">
            Nuestras Tiendas
          </button>
        </div>
      </div>
    </div>
  )
}
