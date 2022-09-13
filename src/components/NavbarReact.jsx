import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Logo from '../assets/images/icons/lista.png';

export default class NavbarReact extends React.Component {


  render(){
    return (
      <>
      <Navbar bg="dark" variant="dark">
        <Container>

          <Navbar.Brand href="#home">
          <img src={Logo} alt="" width="40" height="40" className="d-inline-block align-text-center m-2 "></img>
          MicroElectrónica
          </Navbar.Brand>
          <Nav className="me-1">
            <Nav.Link href="/listado">Inicio</Nav.Link>
            <Nav.Link href="/listado">Listado</Nav.Link>
            <Nav.Link href="/agregar">Agregar </Nav.Link>
            <Nav.Link href="/#">Nosotros</Nav.Link>
            <Nav.Link href="/#">Ayuda</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

}
