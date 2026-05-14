import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Gallery() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("http://localhost:5000/api/pizzas");
      const data = await response.json();
      console.log(
        "ESTOY LLAMANDO A LA API - ESTO SE DEBE MOSTRAR SOLO UNA VEZ - SI SE MUESTRA MAS DE UNA VEZ HAY UN PROBLEMA",
      );
      setProductList(data);
    };
    getProducts();
  }, []);

  return (
    <div className="container my-5">
    <div className="row g-4">
      {productList.length > 0 ? (
        productList.map((product) => (
          <div className="col-12 col-md-6 col-lg-4 col-xl-3" key={product.id}>
            <div className="card h-100 border-0 shadow-lg overflow-hidden">
              <div className="position-relative">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                />
                <div className="position-absolute top-0 end-0 p-2">
                  <span className="badge bg-primary rounded-pill shadow-sm">
                    ${product.price}
                  </span>
                </div>
              </div>
              <div className="card-body d-flex flex-column">
                <h6
                  className="card-title fw-bold text-white mb-2 text-truncate"
                  title={product.title}
                >
                  {product.title}
                </h6>
                <p
                  className="card-text text-secondary small flex-grow-1"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: "3",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {product.description}
                </p>
                <div className="mt-3">
                  <Link to={"/detalle/" + product.id}>
                  <button className="btn btn-outline-primary btn-sm w-100 rounded-pill">
                    Ver Detalle
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="col-12">
          <p className="text-center text-muted">
            ERROR 404: No se encontraron productos
          </p>
        </div>
      )}
    </div>
  </div>
  );
}
