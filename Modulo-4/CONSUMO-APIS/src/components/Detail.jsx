import React, { useEffect, useState } from "react";
import { products } from "./../data/products";


export default function Detail() {
    const productoSeleccionado = 4

    const [product, setProduct] = useState(products[productoSeleccionado]);
    let apiUrl = "https://fakestoreapi.com/products/" + productoSeleccionado


    const getProduct = async()=>{
        const res = await fetch(apiUrl)
        const data = await res.json()
        setProduct(data)
    }


    useEffect(()=>{
        getProduct()
    }, [])


  return (
    <div className="container my-5 py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="card border-0 shadow-lg overflow-hidden">
            <div className="row g-0">
              <div className="col-md-5 bg-white p-4 d-flex align-items-center justify-content-center">
                <img
                  src={product.image}
                  className="img-fluid rounded-start"
                  alt={product.title}
                  style={{ maxHeight: "400px" }}
                />
              </div>
              <div className="col-md-7">
                <div className="card-body p-4 p-lg-5">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb small mb-3">
                      <li className="breadcrumb-item">
                        <a href="#" className="text-decoration-none">
                          Tienda
                        </a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Detalle
                      </li>
                    </ol>
                  </nav>
                  <h2 className="card-title fw-bold text-white mb-3">
                    {product.title}
                  </h2>
                  <div className="mb-4">
                    <span className="fs-3 fw-bold text-primary">
                      ${product.price}
                    </span>
                    <span className="ms-2 badge bg-success text-uppercase">
                      En Stock
                    </span>
                  </div>
                  <h6 className="text-secondary text-uppercase fw-bold mb-2 small">
                    Descripción
                  </h6>
                  <p
                    className="card-text text-light-emphasis mb-4"
                    style={{ lineHeight: "1.6" }}
                  >
                    {product.description}
                  </p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <button className="btn btn-primary btn-lg px-5 rounded-pill shadow">
                      Comprar Ahora
                    </button>
                    <button className="btn btn-outline-light btn-lg px-4 rounded-pill">
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
