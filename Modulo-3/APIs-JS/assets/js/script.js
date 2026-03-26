const divProducts = document.getElementById("productsContainer");

// DOS PALABRAS CLAVES = REQUEST Y RESPONSE. REQUEST ES LA PETICION O CONSULTA QUE HACEMOS A UN SERVIDOR, Y RESPONSE ES LA RESPUESTA QUE RECIBIMOS DEL SERVIDOR. CUANDO REALIZAMOS UNA PETICION A UN SERVIDOR, ESTAMOS SOLICITANDO INFORMACION O REALIZANDO UNA ACCION. EL SERVIDOR PROCESA NUESTRA PETICION Y NOS DEVUELVE UNA RESPUESTA, QUE PUEDE CONTENER LOS DATOS SOLICITADOS O UNA CONFIRMACION DE LA ACCION REALIZADA.

//FUNCIONES ASINCRONAS: SON FUNCIONES QUE SE EJECUTAN EN SEGUNDO PLANO, MIENTRAS EL RESTO DEL CODIGO SIGUE EJECUTANDOSE. CUANDO LA FUNCION ASINCRONA TERMINA SU TAREA, PUEDE DEVOLVER UN RESULTADO O REALIZAR UNA ACCION.

// FETCH NOS SIRVE PARA REALIZAR PETICIONES HTTP A UN SERVIDOR. ES UNA FUNCION ASINCRONA QUE DEVUELVE UNA PROMESA. LA PROMESA SE RESUELVE CUANDO SE RECIBE LA RESPUESTA DEL SERVIDOR.

// .json() ES UN METODO QUE SE UTILIZA PARA CONVERTIR LA RESPUESTA DEL SERVIDOR EN UN OBJETO DE JAVASCRIPT. TAMBIEN DEVUELVE UNA PROMESA, PORQUE LA CONVERSION PUEDE TARDAR UN POCO DE TIEMPO.

// AWAIT SE UTILIZA SIEMPRE EN FETCH Y EN .json() PARA ESPERAR A QUE LA PROMESA SE RESUELVA ANTES DE CONTINUAR CON EL RESTO DEL CODIGO. SI NO USAMOS AWAIT, EL CODIGO SE EJECUTARIA ANTES DE RECIBIR LA RESPUESTA DEL SERVIDOR, LO QUE PUEDE CAUSAR ERRORES O RESULTADOS INESPERADOS.

const getProducts = async () => {
  try {
    let response = await fetch("https://fakestoreapi.com/productsa");
    let data = await response.json();
    console.log("Test");
    return data;
  } catch (error) {
    console.log("Error al obtener los productos: ", error);
  }
};

const renderProducts = async () => {
  try {
    let products = await getProducts();
    let template = "";
    for (let product of products) {
      template += `
            <div class="col-4"> 
                <div class="card mb-3">
                    <img src=${product.image} class="card-img-top" alt="Product Image">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">$${product.price}</p>
                        <p> ${product.description}  </p>
                        <p> Este producto tiene   ${product.rating.rate}/5 estrellas </p>
                        <button class="btn btn-primary">Agregar al carrito</button>
                    </div>
                    </div>  
            </div>
        `;
    }
    divProducts.innerHTML = template;
  } catch (error) {
    console.log("Error al renderizar los productos: ", error);
    divProducts.innerHTML = "<p class='text-danger'>Error al cargar los productos. Por favor, intenta nuevamente más tarde.</p>";
  }
};
renderProducts();


