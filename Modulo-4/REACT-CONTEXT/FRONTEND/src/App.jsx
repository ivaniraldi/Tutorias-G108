import { Navigate, Route, Routes } from "react-router-dom";

import Home from "./views/Home";
import Productos from "./views/Productos";
import DetailView from "./views/DetailView";
import NavBar from "./components/NavBar";
import PerfilView from "./views/PerfilView";
import LoginView from "./views/LoginView";
import CartView from "./views/CartView";
import NotFound from "./views/NotFound";
import { useContext } from "react";
import { GlobalContext } from "./contexts/GlobalContext";
import RegisterView from "./views/RegisterView";

function App() {
  // 3 Etapas de vida del componente: MONTAJE, ACTUALIZACIÓN y DESMONTAJE.
  // useEffect(<funcion a ejecutar>, <arreglo de dependencias opcional>)
  // si el useEffect NO tiene el arreglo de dependencias, se ejecuta CADA VEZ que actualizamos algo en el componente
  // si el useEffect tiene un arreglo de dependencias VACÍO, se ejecuta SOLO UNA VEZ en la etapa de MONTAJE
  // el arreglo de dependencias puede escuchar cambios en estados o variables, basta solo con agregarlas al array, ej: [nombre, busqueda] en este caso, se EJECUTA solo cuando se actualizan esas variables o estados
  
  const { user } = useContext(GlobalContext)
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
         <Route path="/productos" element={<Productos/>} />
         <Route path="/detalle/:id" element={<DetailView/>} />
         {/*          /detalle/4     id= 4         */}
         <Route path="/perfil" element={user? <PerfilView/> : <Navigate to={"/login"}/> } />
         <Route path="/login" element={user? <Navigate to={"/"}/>: <LoginView/>} />
         <Route path="/register" element={user? <Navigate to="/"/> : <RegisterView/>} />
         <Route path="/carrito" element={<CartView/>} />
         <Route path="/404" element={<NotFound/>}/>
         <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
