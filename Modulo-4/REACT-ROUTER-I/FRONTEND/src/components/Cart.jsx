import React from "react";

export default function Cart() {
  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-md-6">
          <ul style={{ listStyle: "none" }}>
            <li className="d-flex justify-content-between p-4 border rounded mb-2 align-items-center">
              <div>
                <span>Producto Nombre</span> - <span>$100</span>
              </div>

              <div>
                <button className="btn btn-sm mx-2 btn-outline-secondary px-2 text-center">
                  +
                </button>
                0
                <button className="btn btn-sm mx-2 btn-outline-secondary px-2 text-center">
                  -
                </button>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-md-6 border rounded p-4">
          <h4 className="mb-3 border-bottom">Resumen de la compra</h4>
          <div>
            <ul className="p-2 mb-4" style={{listStyle:"none"}}>
              <li className="d-flex justify-content-between"><span>x1  <span>Producto Nombre</span> </span><span>$100</span></li>
            </ul>
          </div>
          <h5>
            Total: $<span>100</span>
          </h5>
          <div className="d-flex justify-content-center my-4">

          <button className="btn btn-success px-5 py-2">Pagar</button>
          </div>
          <div className="text-center">
            <h6>Metodos de pago disponibles</h6>
            <div className="d-flex justify-content-center gap-2">
              <p>PayPal</p>
              <p>Visa</p>
              <p>Mastercard</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
