import React, { useEffect, useState } from "react";

export default function Gallery() {
  const [productList, setProductList] = useState([]);
  const [count, setCount] = useState(0);

  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(
      "ESTOY LLAMANDO A LA API Y TE VOY A COBRAR 10USD POR ESTA LLAMADA",
    );
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(()=>{
    console.log("La cuenta es: " , count)
  }, [count])

  return (
    <div className="row g-4">
      <div>
        <button onClick={() => setCount(count + 1)}>{count}</button>


        <div>{count > 5 ? 
        (<p>esto se muestra si count ES MAYOR a 5</p>) 
        : 
        (<p>esto se muestra si count NO ES MAYOR a 5</p>) 
        }</div>
      </div>
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
                  <button className="btn btn-outline-primary btn-sm w-100 rounded-pill">
                    Ver Detalle
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="col-12">
          <p className="text-center text-muted">
            No hay productos para mostrar.
          </p>
        </div>
      )}
    </div>

    
  );
}
