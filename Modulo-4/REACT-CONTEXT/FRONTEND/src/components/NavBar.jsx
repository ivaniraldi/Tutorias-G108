import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import BotonNavBar from "./BotonNavBar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

export default function NavBar() {
  const { user, setUser, tema, setTema, logout  } = useContext(GlobalContext);
 
  

  return (
    <Navbar
      expand="lg"
      variant="dark"
      className="border-bottom border-secondary shadow-sm py-3 mb-5"
    >


      <Container>
        <Navbar.Brand as={Link} to={"/"} className="fw-bold fs-4 text-primary">
          <span className="text-white">FakeStore</span>ADL
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="px-3">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/productos" className="px-3">
              Productos
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/carrito" className="px-3">
              🛒 $ 0.00
            </Nav.Link>
            {user && (
              <Nav.Link as={Link} to="/perfil" className="px-3">
                Perfil
              </Nav.Link>
            )}
            {!user && (
              <Nav.Link as={Link} to="/login" className="px-3">
                Iniciar sesión
              </Nav.Link>
            )}
            {user && (
              <Nav.Link onClick={()=> logout()} as={Link} to="/login" className="px-3">
                Cerrar sesión
              </Nav.Link>
            )}
                  <button onClick={()=> setTema(tema == "light" ? "dark" : "light")} className={tema == "light" ? "btn btn-primary" : "btn btn-secondary"}>
        cambiar tema: {tema}
      </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
