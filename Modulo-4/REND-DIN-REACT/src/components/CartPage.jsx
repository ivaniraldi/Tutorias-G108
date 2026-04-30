import React, { useState } from "react";
import NavBar from "./NavBar";

export default function CartPage() {
  const [productos, setProductos] = useState([
    {
      id: 1,
      title: "Cargador Fast Apple Original",
      description:
        "iPhone/iPad Usb-c 20w Color Blanco - Distribuidor Autorizado",
      image:
        "https://i5.walmartimages.cl/asr/216e860a-88c4-497c-82e2-3fcd105030df.eaa82a3fc1b6d55836a67ef67c8accc8.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      price: 200,
      cantidad: 1,
    },
    {
      id: 2,
      title: "Apple AirPods 4",
      description: "Cancelación Activa de Ruido - Distribuidor Autorizado",
      image: "https://m.media-amazon.com/images/I/416ZUxb5TiL.jpg",
      price: 750,
      cantidad: 2,
    },
    {
      id: 3,
      title: "Cargador portátil Apple Magsafe",
      description: "Capacidad de 5000 Mah para cargar tus dispositivos.",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_2X_656939-MLA107082488789_022026-F.webp",
      price: 280,
      cantidad: 1,
    },
  ]);

  const modificarCantidad = (operacion, id)=>{
    console.log("Vamos a hacer una operación de ", operacion, " al producto con id ", id)

    let productoAModificar = productos.find(p => p.id === id)
    console.log("Producto a modificar: ", productoAModificar)

    if(operacion === "suma"){
      productoAModificar.cantidad = productoAModificar.cantidad + 1
    }
    if(operacion === "resta" && productoAModificar.cantidad > 1){
      productoAModificar.cantidad = productoAModificar.cantidad - 1
    }

    let productosActualizados = productos.map(p => p)

    setProductos(productosActualizados)

  }



  return (
    <>
      <NavBar />
      <div className="container">
        <h1>Carrito de Compras</h1>
        <div className="row">
          <div className="col-md-6">
            <ul className="">
              {productos.map((p, i) => (
                <li
                  key={i}
                  className="border rounded mt-2 p-3"
                  style={{ listStyle: "none" }}
                >
                  <div className="d-flex justify-content-between">
                    <div>
                      <img style={{ width: "50px" }} src={p.image} alt="" />{" "}
                      {p.title}
                    </div>
                    <div>
                      <button className="btn btn-sm btn-secondary"
                      onClick={()=> modificarCantidad("suma", p.id)}
                      >+</button>{" "}
                      {p.cantidad}
                      <button className="btn btn-sm btn-secondary ms-1"
                      onClick={()=> modificarCantidad("resta", p.id)}
                      >
                        -
                      </button>
                      <p>Total: ${(p.price * p.cantidad).toLocaleString()}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-6 border rounded p-3" >
            <h3>Resumen de Compra</h3>
            <p>Total a Pagar: ${productos.reduce((total, producto) => total + (producto.price * producto.cantidad), 0).toLocaleString()}</p>
              <button className="btn btn-primary">Finalizar Compra</button>
          </div>
        </div>
      </div>
    </>
  );
}
