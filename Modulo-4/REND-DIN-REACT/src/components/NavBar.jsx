import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavBar() {
  const token = true;
  const cartTotal = 2500;
  return (
    <Navbar expand="lg" className="bg-body-tertiary font-montserrat">
      <Container>
        <Navbar.Brand href="#home" className="font-archivo-black">
          iShopWeb
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Productos</Nav.Link>
            <NavDropdown title="Información" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Contacto</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Preguntas Frecuentes
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Política de Privacidad
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Soporte Técnico
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#login">{token ? "Cerrar Sesión" : "Iniciar Sesión"}</Nav.Link>
            <Nav.Link href="#register">{token ? "Mi Cuenta" : "Registrarse"}</Nav.Link>
            <Nav.Link href="#cart"> 
             <span>🛒</span>  ${cartTotal.toLocaleString()} </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
