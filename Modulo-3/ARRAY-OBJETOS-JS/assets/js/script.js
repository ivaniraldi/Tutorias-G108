const usuarios = [
  {
    id: 0,
    nombre: "Ivan",
    edad: 27,
    foto: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 1,
    nombre: "Jose",
    edad: 25,
    foto: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  { id: 2, nombre: "Raul", edad: 21, foto: "./assets/imgs/foto3.avif" },
  {
    id: 3,
    nombre: "Roberto",
    edad: 28,
    foto: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    nombre: "Ricardo",
    edad: 38,
    foto: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    nombre: "Manuel",
    edad: 58,
    foto: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const divUsuarios = document.querySelector("#listaUsuarios");

const renderUsuarios = () => {
  let template = "";
  for (u of usuarios) {
    template += `
        <div class="rounded p-3" style="display: flex; flex-direction: column; width: 200px; height: 300px; border: 1px solid black;">
            <img width="158" style="height: 75px; object-fit: cover ;" src=${u.foto} alt="">
            <h3 class="titulo">${u.nombre}</h3>
            <h4>${u.edad}</h4>
            <button class="btn btn-primary"> Ver mas </button>
        </div>
        `;
  }
  divUsuarios.innerHTML = template;
};

renderUsuarios();

const ciudades = [
  "Santiago",
  "Lima",
  "Florianopolis",
  "Mendoza",
  "Buenos Aires",
];

const divCiudades = document.querySelector("#listaCiudades");

let renderCiudades = () => {
  let plantilla = "";
  for (el of ciudades) {
    plantilla += `
        <p class="btn btn-secondary"> ${el} </p> 
        `;
  }
  divCiudades.innerHTML = plantilla;
};
renderCiudades();

const productos = [
  { id: 0, titulo: "Zapatos", precio: 5000, stock: 10 },
  { id: 1, titulo: "Camisa", precio: 15000, stock: 2 },
  { id: 2, titulo: "Pantalones", precio: 25000, stock: 0 },
];

const divProductos = document.querySelector("#listaProductos")

const renderProductos = ()=>{
    let template = ""
    for(p of productos){
        template += `
        <div class="card-producto"> <p>${p.titulo}</p> <p>${p.precio}</p> 
        <p> ${p.precio > 6000 ? "<button onclick='alert()'> Ver precio</button>": "<button onclick='alert()'> Ver precio</button>"} </p>
        
        <p>${p.stock <= 0 ? "<button class='btn btn-danger'> SIN STOCK </button>" :"Stock " + p.stock}</p>
        </div> 
        `
    }
    divProductos.innerHTML= template
}


renderProductos()