import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Main from "./components/Main"

function App() {

  const nombre = "Ivan";
  const edad = 27;

  console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`);


  return (
    <>
      <NavBar/>
      <Main/>
    </>
  );
}

export default App;
