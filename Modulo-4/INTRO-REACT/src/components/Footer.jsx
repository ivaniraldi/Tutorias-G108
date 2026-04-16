import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Footer () {
    return(
        <>
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Hecho por Ivan </Navbar.Brand>
        </Container>
      </Navbar>
        </>
    )
}

export default Footer;