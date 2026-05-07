import { useEffect, useState } from "react";
import Detail from "./components/Detail";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  const [busqueda, setBusqueda] = useState("")
  const [nombre, setNombre] = useState("")

  const getData = async () =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const data = await response.json()
    console.log(data)
  }  


  
  useEffect(()=>{
    getData()
  }, [])
  // 3 Etapas de vida del componente: MONTAJE, ACTUALIZACIÓN y DESMONTAJE.
  // useEffect(<funcion a ejecutar>, <arreglo de dependencias opcional>) 
  // si el useEffect NO tiene el arreglo de dependencias, se ejecuta CADA VEZ que actualizamos algo en el componente
  // si el useEffect tiene un arreglo de dependencias VACÍO, se ejecuta SOLO UNA VEZ en la etapa de MONTAJE
  // el arreglo de dependencias puede escuchar cambios en estados o variables, basta solo con agregarlas al array, ej: [nombre, busqueda] en este caso, se EJECUTA solo cuando se actualizan esas variables o estados
  




  return (
    <>
      <NavBar></NavBar>
      {/*<div className="container d-flex justify-content-center my-4 gap-2">
        <input type="text" placeholder="Buscar..." className="form-control" value={busqueda} onChange={(e) => setBusqueda(e.target.value)} /> <button className="btn btn-primary">Buscar</button>
      
      </div>
      <div className="container">

      <p>Busqueda actual: {busqueda}</p>
      </div>

            <div className="container d-flex justify-content-center my-4 gap-2">
        <input type="text" placeholder="Ingrese su nombre..." className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} /> <button className="btn btn-primary">Cambiar nombre</button>
      
      </div>
      <div className="container">

      <p>Nombre actual: {nombre}</p>
      </div>*/}
      {/*<Home></Home>*/}
      <div className="container">
        <hr className="border-secondary opacity-25 my-5" />
      </div>
      <Detail></Detail> 
    </>
  );
}

export default App;
