import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Logo from '../assets/images/icons/lista.png';

function NavbarRect() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>

          <Navbar.Brand href="#home">
          <img src={Logo} alt="" width="40" height="40" className="d-inline-block align-text-center m-2 "></img>
          Gestión
          </Navbar.Brand>
          <Nav className="me-1">
            <Nav.Link href="/inicio">Inicio</Nav.Link>
            <Nav.Link href="http://inversiones.com">Inversiones</Nav.Link>
            <Nav.Link href="/empresas">Empresas</Nav.Link>
            <Nav.Link href="/nosotros">Nosotros</Nav.Link>
            <Nav.Link href="/ayuda">Ayuda</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default NavbarRect;