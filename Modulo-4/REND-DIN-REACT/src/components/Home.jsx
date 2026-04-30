import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import ProductCard from "./ProductCard";
import { Row } from "react-bootstrap";

export default function Home() {
  const productos = [
    {
      title: "Cargador Fast Apple Original",
      description: "iPhone/iPad Usb-c 20w Color Blanco - Distribuidor Autorizado",
      image: "https://i5.walmartimages.cl/asr/216e860a-88c4-497c-82e2-3fcd105030df.eaa82a3fc1b6d55836a67ef67c8accc8.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    },
    {
      title: "Apple AirPods 4",
      description: "Cancelación Activa de Ruido - Distribuidor Autorizado",
      image: "https://m.media-amazon.com/images/I/416ZUxb5TiL.jpg",
    },
    {
      title: "Cargador portátil Apple Magsafe",
      description: "Capacidad de 5000 Mah para cargar tus dispositivos.",
      image: "https://http2.mlstatic.com/D_NQ_NP_2X_656939-MLA107082488789_022026-F.webp",
    },
    {
      title: "Producto 4",
      description: "Capacidad de 5000 Mah para cargar tus dispositivos.",
      image: "https://http2.mlstatic.com/D_NQ_NP_2X_656939-MLA107082488789_022026-F.webp",
    }
  ]


  return (
    <>
      <NavBar />
      <div className="container mt-5 mb-5 font-montserrat">
        <Header></Header>
        <div className="container mt-5">


          <div className="row">

            {productos.map((producto, indice) =>
            <div className="col-md-4" key={indice}>
              <ProductCard 
                title={producto.title}
                description={producto.description}
                image={producto.image}
              />
            </div>) }


          </div>


        </div>
      </div>
    </>
  );
}
